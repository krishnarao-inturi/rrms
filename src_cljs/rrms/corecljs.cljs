(ns rrms.corecljs
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [secretary.core :as secretary]
            [goog.net.XhrIo :as xhr]
            [reagent.core :as r]
            [cognitect.transit :as t]
            [goog.structs :as structs]
            [cljs-time.format :as f]
            [cljs-time.core :as tt]
            [cljs-time.coerce :as c]
            [cljs-time.predicates :as p]
            [cljsjs.react-bootstrap]
            [clojure.string :as st]
            [goog.dom :as dom]
            [goog.history.EventType :as EventType]
            [bouncer.core :as b]
            [bouncer.validators :as v])
  (:import goog.History
           goog.json.Serializer
           goog.date.Date
           goog.array))

(defonce storage (r/atom {:mutations {}
                          :current-page 1
                          :total-pages 1
                          :page-location nil
                          :villages {}
                          :is-searched-results false
                          :user nil}))


(defn set-key-value [k v]
  (reset! storage (assoc @storage k v)))

(defn http-get [url callback]
  (xhr/send url callback))

(defn get-value! [k]
  (k @storage))

(defn page []
  (get-value! :page-location))

(defn getinputvalue[id]
  (.-value (.getElementById js/document id)))

(defn getdata [res]
  (.getResponseJson (.-target res)))

(defn get-status [res]
  (.getStatus (.-target res)))

(defn http-post [url callback data]
  (xhr/send url callback "POST" data  (structs/Map. (clj->js {:Content-Type "application/json"}))))

(defn http-put [url callback data]
  (xhr/send url callback "PUT" data  (structs/Map. (clj->js {:Content-Type "application/json"}))))

(defn http-delete [url callback]
  (xhr/send url callback "DELETE"  (structs/Map. (clj->js {:Content-Type "application/json"}))))


;; =====================================================================================================
;; login-form with validations
;; =====================================================================================================

(defn login-validator [data-set]
  (first (b/validate data-set
                     :email [[v/required :message "Filed is required"]
                             [v/email :message "Enter valid email-id"]]
                     :password [[v/required :message "Filed is required"]
                                [v/string  :message "Enter valid password"]])))

(defn input-element [id ttype data-set placeholder in-focus]
  ;;(js/console.log @data-set)
  [:input.form-control {:id id
                        :type ttype
                        :value (@data-set id)
                        :placeholder placeholder
                        :on-change #(swap! data-set assoc id (-> % .-target .-value))
                        :on-blur  #(reset! in-focus "on")
                        }])


(defn login-input-element [id label span-class ttype data-set placeholder focus]
  (let [input-focus (r/atom nil)]
    (fn []
      [:div.form-group
       [:div.col-md-12
        [:label label]
        [:div.input-group.col-sm-10
         [:span {:class span-class}]
         [input-element id ttype data-set placeholder input-focus]]
        (if (or @input-focus @focus)
          (if (= nil (login-validator @data-set))
            [:div]
            [:div {:style  {:color "red"}} [:b (str (first ((login-validator @data-set) id)))]])
          [:div])]])))


(defn submit-login [data-set focus]
  (if (= nil (login-validator @data-set))
    (let [onresp (fn [json]
                   (if (= (get-status json) 200)
                     ((set-key-value :user (getdata json))
                      (secretary/dispatch! "/documents"))))]
      (http-post "http://localhost:8193/user/authenticate"
                 onresp (.serialize (Serializer.) (clj->js @data-set ))))
    (reset! focus "on")))

(defn submit-button [data-set focus]
  [:div.form-group
   [:div.col-md-6
    [:button.btn.btn-primary {:on-click #(submit-login data-set focus)} "Submit" ]]])

(defn login []
  (let [my-data (r/atom  {})
        focus (r/atom nil)]
    (fn []
      [:div.container
       [:div.panel.panel-primary.modal-dialog
        [:div.panel-heading
         [:h2 "Log-in"]]
        [:div.panel-body
         [login-input-element :email "Email"  "input-group-addon glyphicon glyphicon-user" "email" my-data "Email" focus]
         [login-input-element :password "Password"  "input-group-addon glyphicon glyphicon-lock" "password" my-data "password" focus]
         [submit-button my-data focus ]]]])))

;; ====================================================================================================
;; end of login-form
;; ====================================================================================================

(defn is-authenticated? []
  (not (nil? (get-value! :user))))

(defn set-page! [currnt-page]
  (set-key-value :page-location
                 currnt-page))

(defn get-total-rec-no [nos]
  (let [totrec (quot nos 10)]
    (if (zero? (mod nos 10))
      totrec
      (+ 1 totrec))))

(defn get-range-data [data date1 date2]
  (filter #(tt/within? (tt/interval date1 (tt/plus date2 (tt/days 1)))
                       (c/from-string (.-date %))) data))

(defn included? [s subs]
  (>= (.indexOf s subs) 0))


(defn filter-by-str [data lstr]
  (filter #(or (included? (st/lower-case (.-title %)) lstr)
               (included? (st/lower-case (.-documentname %)) lstr))
          data))

(defn filter-by-str-dates
  ([data lstr date1] (filter #(and (or (included? (st/lower-case (.-title %)) lstr)
                                       (included? (st/lower-case (.-documentname %)) lstr))
                                   (tt/= (c/from-string (.-date %)) date1)) data))
  ([data lstr date1 date2](filter #(and (or (included? (st/lower-case (.-title %)) lstr)
                                            (included? (st/lower-case (.-documentname %)) lstr))
                                        (tt/within? (tt/interval date1 (tt/plus date2 (tt/days 1)))
                                                    (c/from-string (.-date %)))) data)))


(defn get-search-url [mn dt]
  (let [mnv (st/blank? mn)
        dtv (st/blank? dt)
        purl (str "http://localhost:9000/mutations/search?")]
    (cond (and (not mnv) dtv ) (str purl "mutationNumber=" mn)
          (and mnv (not dtv))  (str purl  "value=" dt)
          :else (str purl "mutationNumber="mn"&value="dt))))

(defn get-index-url [is-searched-results sel-page mn dt]
  (cond (= true is-searched-results)(str (get-search-url mn dt)"&pageIndex="sel-page"&pageSize=10")
        :else (str "http://localhost:9000/mutations?pageIndex="sel-page "&pageSize=10")))

(defn get-new-page-data [data current-page total-pages]
  (js/console.log total-pages)
  (let [pag-start (* 10 (dec current-page))
        pag-end (+ pag-start 9)]
    (cond (<= total-pages 1) (do (set-key-value :current-page 1)
                                 (set-key-value :total-pages 1)
                                 (clj->js (keep-indexed #(if (< %1 10) %2) data)))
          :else (do (set-key-value :total-pages total-pages)
                    (clj->js (keep-indexed
                              #(if (and (>= %1 pag-start) (<= %1 pag-end)) %2) data))))))


(defn url-format [url title]
  [:a {:href url :class "btn btn-primary  glyphicon glyphicon-plus"} title])

(def w (t/writer :json-verbose))

(defn filter-data [data date1 date2 search-str]
  (let [srcstrv (st/blank? search-str)
        lstr (st/lower-case search-str)]

    (cond (and (not (nil? date1)) (nil? date2) srcstrv) (filter #(tt/= date1 (c/from-string (.-date %))) data)
          (and (not (nil? date1)) (not (nil? date2)) srcstrv) (get-range-data data date1 date2)
          (and (nil? date1) (nil? date2) (not srcstrv)) (filter-by-str data lstr)
          (and (not (nil? date1)) (nil? date2) (not srcstrv)) (filter-by-str-dates data lstr date1)
          :else (filter-by-str-dates data lstr date1 date2))))

(def pager-elem (r/adapt-react-class (aget js/ReactBootstrap "Pagination")))

(defn set-pager-data [sel-page-no]
  (let [mt (.-value (.getElementById js/document "mutationnumber"))
        v (.-value (.getElementById js/document "dt"))
        onres (fn[json]
                (let [dt (getdata json)]
                  (set-key-value :mutations (.-data dt))
                  (set-key-value :total-pages (get-total-rec-no (.-pagesCount dt)))
                  (set-key-value :page-location
                                 [render-mutations (get-value! :mutations)])))]
    (http-get (get-index-url (get-value! :is-searched-results)
                             (dec (get-value! :current-page))
                             mt v)
              onres)))

(defn pager [value total-rec]
  [pager-elem {:bsSize "large"
               :prev true
               :next true
               :first true
               :last true
               :ellipsis true
               :items (:total-pages @storage)
               :activePage (:current-page @storage)
               :maxButtons 5
               :onSelect (fn [s1 s2]
                           (do
                             (set-key-value :current-page (.-eventKey s2))
                             (set-pager-data (get-value! :current-page))))}])


(defn shared-state [totalRec]
  (let [val (r/atom 1)
        trec (r/atom totalRec)]
    [:div.row
     [pager val trec]]))


(declare render-mutations)

(defn cancel [event]
  (secretary/dispatch! "/"))

;;...... Side Tab Events .........

(defn mut-click [event]
  (secretary/dispatch! "/"))

(defn rev-click [event]
  (secretary/dispatch! "/revenue"))

;;.............. End of Tab Events ......

(defn search [event]
  (let [mn  (.-value (.getElementById js/document "mutationnumber"))
        dt  (.-value (.getElementById js/document "dt"))
        onres (fn [json] (let [data (getdata json)]
                          (set-key-value :mutations (.-data data))
                          (set-key-value :total-pages
                                         (get-total-rec-no (.-pagesCount data)))
                          (js/console.log (get-value! :total-pages))
                          (set-key-value :page-location
                                         [render-mutations (get-value! :mutations)])))]
    (set-key-value :current-page 1)
    (set-key-value :is-searched-results true)
    (http-get (str (get-search-url mn dt) "&pageIndex=0&pageSize=10")
              onres)))

;; ========================================================================================
;; Add-update-form creation validation
;; ========================================================================================

(defn form-validator [data-set]
  (first (b/validate data-set
                     :mutationnumber [[v/required :message "Filed is required"]
                                      [v/string :message "Enter valid Document Name"]]
                     :nameofthefirstparty [[v/required :message "Filed is required"]
                                           [v/string :message "Enter valid Title"]]
                     :nameofthesecondparty [[v/required :message "Filed is required"]
                                            [v/string  :message "Enter valid Employee name"]]
                     :dateofinstitution [[v/required :message "Filed is required"]
                                         [v/datetime  :message "Enter valid Date"]]
                     :nameofpo [[v/required :message "Filed is required"]
                                [v/string  :message "Enter valid Location"]]
                     :dateofdecision [[v/required :message "Filed is required"]
                                      [v/datetime  :message "Enter valid Date"]]
                     :title [[v/required :message "Filed is required"]
                             [v/string  :message "Enter valid Location"]]
                     :khasranumber [[v/required :message "Filed is required"]
                                    [v/string  :message "Enter valid Location"]]
                     :subdivisionname [[v/required :message "Filed is required"]
                                       [v/string  :message "Enter valid Location"]]
                     :villageid [[v/required :message "Filed is required"]
                                 [v/string  :message "Enter valid Location"]]
                     :o2number [[v/required :message "Filed is required"]
                                [v/string  :message "Enter valid Location"]]
                     :o4number [[v/required :message "Filed is required"]
                                [v/string  :message "Enter valid Location"]]
                     :o6number [[v/required :message "Filed is required"]
                                [v/string  :message "Enter valid Location"]]
                     :racknumber [[v/required :message "Filed is required"]
                                  [v/string  :message "Enter valid Location"]]
                     :receiveddate [[v/required :message "Filed is required"]
                                    [v/datetime  :message "Enter valid Date"]]
                     :remarks [[v/required :message "Filed is required"]
                               [v/string  :message "Enter valid Location"]]
                     )))

(defn form-input-element [id label ttype data-set focus]
  (let [input-focus (r/atom nil)]
    (fn []
      [:div.form-group
       [:div.col-md-12
        [:div.row
         [:div.col-md-2 [:label label]]
         [:div.col-md-6 [input-element id ttype data-set label input-focus]]
         [:div.col-md-4 (if (or @input-focus @focus)
                          (if (= nil (form-validator @data-set))
                            [:div]
                            [:div {:style  {:color "red"}}
                             [:b (str (first ((form-validator @data-set) id)))]])
                          [:div])]]]] )))


(defn button [value fun]
  [:button.btn.btn-primary {:on-click fun} value])

(defn add-form-onclick [data-set focus]
  (reset! data-set (assoc @data-set :villageid
                          (int (.-value (.getElementById js/document "districts")))))
  (let [onres (fn[json]
                (secretary/dispatch! "/"))]
    (http-post "http://localhost:9000/mutations"
               onres  (.serialize (Serializer.) (clj->js @data-set))))
  (reset! focus "on"))

(defn update-form-onclick [data-set focus]
  (reset! data-set (assoc @data-set :villageid
                          (int (.-value (.getElementById js/document "districts")))))
  (let [onres (fn[data]
                (secretary/dispatch! "/"))]
    (http-put (str "http://localhost:9000/mutations/" (:id @data-set))
              onres (.serialize (Serializer.) (clj->js @data-set)))))

;; (if (= nil (form-validator @data-set))
;;   (let [onres (fn[data]
;;                 (secretary/dispatch! "/mutations"))]
;;     (http-put (str "http://localhost:9000/mutations/" (:id @data-set))
;;               onres (.serialize (Serializer.) (clj->js @data-set))))
;;   (reset! focus "on"))

(defn form-cancel [event]
  (secretary/dispatch! "/"))

(defn on-change [event]
  (let [ele (.getElementById js/document "id")
        eval (.-value ele)
        onresp (fn [json]
                 ;; (let [dt  (aggre-str (getdata json))]
                 ;;   (set! (.-value ele) (if(empty? dt) eval dt))))]
                 (let [dt (getdata json)]
                   (set-key-value :villages dt)))]

    (set-key-value :villages [])
    (when-not ( >  1 (.-length eval))
      (http-get (str "http://localhost:9000/villages/search?name=" eval)
                onresp))))

(defn input [label type id]
  (row label [:input.form-control {:type type :id id :on-change on-change}]))

(defn get-villages []
  (let [onres (fn[json]((set-key-value :villages (getdata json))))]
    (http-get "http://localhost:9000/villages" onres)))

(defn tags-template [data-set]
  (cond (nil? (:villageid @data-set)) [:select {:id "districts"}
                                       (for [d (get-value! :villages)]
                                         ^{:key (.-id d)} [:option {:value (.-id d)} (.-villagename d)])]
        :else [:select {:id "districts" :defaultValue (:villageid @data-set)}
               (doall (for [d (get-value! :villages)]
                        ^{:key (.-id d)} [:option {:value (.-id d)} (.-villagename d)]))]))

(defn mutation-template [doc-name data-set focus save-function]
  [:div.container
   [:div.panel.panel-primary.model-dialog
    [:div.panel-heading
     [:h2 doc-name]]
    [:div.panel-boby
     [:div.container
      [:div.form-group

       [form-input-element :mutationnumber "Mutation Number" "text" data-set focus]
       [form-input-element :nameofthefirstparty "Name of the First Party" "text" data-set focus ]
       [form-input-element :nameofthesecondparty "Name of the SecondParty" "text" data-set focus]
       [form-input-element :dateofinstitution "Dateof Institution" "date" data-set focus]
       [form-input-element :nameofpo "Name of PO" "text" data-set focus]
       [form-input-element :dateofdecision "Dateof Decision" "date" data-set focus]
       [form-input-element :title "Title" "text" data-set focus]
       [form-input-element :khasranumber "Khasra Number" "text" data-set focus]
       [form-input-element :area "Area" "text" data-set focus]
       [form-input-element :khatakhatuninumber "Khata Khatuni Number" "text" data-set focus]
       [:div  [:div.col-md-2[:label "Village Name"]]
        [:div#tagdiv [tags-template data-set]]]
       [form-input-element :subdivisionname "Subdivision Name" "text" data-set focus]
       [form-input-element :o2number "O2Number" "text" data-set focus]
       [form-input-element :o4number "O4Number" "text" data-set focus]
       [form-input-element :o6number "O6Number" "text" data-set focus]
       [form-input-element :racknumber "Rack Number" "text" data-set focus]
       [form-input-element :receiveddate "Received Date" "date" data-set focus]
       [form-input-element :remarks "Remarks" "text" data-set focus]
                                        ; [form-input-element :isactive "isactive" "text" data-set focus]
       [button "Save" save-function]
       [button "cancel" form-cancel]]]]]])

(defn mutation-add-template []
  (let [add-data (r/atom {:isactive true})
        focus (r/atom nil)]
    (fn [] [mutation-template "Mutation" add-data focus #(add-form-onclick add-data focus)])))


(defn mutation-update-template [id dmt]
  (let [update-data (r/atom {:id (int id)
                             :mutationnumber (.-mutationnumber dmt)
                             :nameofthefirstparty (.-nameofthefirstparty dmt)
                             :nameofthesecondparty (.-nameofthesecondparty dmt)
                             :dateofinstitution (.-dateofinstitution dmt)
                             :nameofpo (.-nameofpo dmt)
                             :dateofdecision (.-dateofdecision dmt)
                             :title (.-title dmt)
                             :khasranumber (.-khasranumber dmt)
                             :khatakhatuninumber (.-khasranumber dmt)
                             :area (.-area dmt)
                             :subdivisionname (.-subdivisionname dmt)
                             :villageid (.-villageid dmt)
                             :o2number (.-o2number dmt)
                             :o4number (.-o4number dmt)
                             :o6number (.-o6number dmt)
                             :racknumber (.-racknumber dmt)
                             :receiveddate (.-receiveddate dmt)
                             ;; :receiveddate (f/unparse (f/formatter "yyyy-mm-dd")(f/parse (.-receiveddate dmt)))
                             :remarks (.-remarks dmt)
                             :villagename (.-villagename dmt)
                             :districtname (.-districtname dmt)})
        focus (r/atom nil)]
    (fn [] [mutation-template "Update Mutations" update-data focus  #(update-form-onclick update-data focus)])))

;; ===============================================================================================
;; end of add-update-form coding
;; ===============================================================================================


(defn click-update[id]
  (secretary/dispatch! (str "/mutations/update/" id)))

(defn delete[id]
  (let [onres (fn [json]
                (secretary/dispatch! "/"))]
    (http-delete (str "http://localhost:9000/mutations/" id)  onres)))

(defn add [event]
  (secretary/dispatch! "/mutations/add"))

(defn get-all-click [event]
  (let [onres (fn [json]
                (let [mt (getdata json)]
                  (set-key-value :mutations (.-data mt))
                  (set-key-value :total-pages (get-total-rec-no
                                               (.-pagesCount mt)))
                  (set-key-value :current-page 1)
                  (set-key-value :page-location
                                 [render-mutations (get-value! :mutations)])))]
    (set-key-value :is-searched-results false)
    (http-get "http://localhost:9000/mutations?pageIndex=0&pageSize=10" onres)))

(defn render-mutations [mutations]
  [:div
   ;; [:div.padding]
   ;; [:div.page-header [:h1 "Record Room Management System"]]
   [:div#add]
   [:div#update]
   [:div {:class "box"}
    [:div {:class "box-header"}
     [:h3 "List of Mutations"]]
    [:div.row
     [:div.col-md-12
      [:div.form-group
       ;; [:div.col-sm-2 [:input.form-control {:id "dt1" :type "date"}]]
       ;; [:div.col-sm-2 [:input.form-control {:id "dt2" :type "date"}]]
       [:div.col-sm-2 [:input.form-control {:id "mutationnumber" :type "text"
                                            :placeholder "Enter search by mutationnumber"}]]

       [:div.col-sm-2 [:input.form-control {:id "dt" :type "text"
                                            :placeholder "Enter search text.."}]]
       [:input {:type "button" :value "Search"
                :class "btn btn-primary" :on-click search}]
       [:input {:type "button" :value "Add"
                :class "btn btn-primary" :on-click add}]
       ;; (url-format "#/documents/add" "Document")
       [:input {:id "getall" :type "button" :value "Refresh"
                :class "btn btn-primary" :on-click get-all-click}]]
      [:div {:class "box-body"}

       [:table {:class "table table-bordered table-striped dataTable"}
        [:thead
         [:tr
          [:th "Mutation Number"]
          [:th "Name of the FirstParty"]
          [:th "Name of The SecondParty"]
          [:th "Date of Institution"]
          [:th "Name of P.O"]
          [:th "Name of Districts"]
          [:th "Name of Village"]
          [:th "SubDivisionName"]
          [:th " "]
          [:th " "]
          ]]
        [:tbody
         (for [mt mutations]
           ^{:key (.-id mt)} [:tr
                              [:td (.-mutationnumber mt)]
                              [:td (.-nameofthefirstparty mt)]
                              [:td (.-nameofthesecondparty mt)]
                              ;;  [:td  (f/unparse (f/formatter "dd-MMM-yyyy")(f/parse (.-dateofinstitution dn)))]
                              [:td (.-dateofinstitution mt)]
                              [:td (.-nameofpo mt)]
                              [:td (.-districtname mt)]
                              [:td (.-villagename mt)]
                              [:td (.-subdivisionname mt)]
                              ;; [:td [:input {:type "button" :on-click #(click-update(.-id dn))
                              ;;               :class "glyphicon glyphicon-edit" :value "Update"}
                              ;;       ]]
                              [:td [:a {:href "javascript:;" :on-click  #(click-update(.-id mt))  :class "btn btn-success btn-sm glyphicon glyphicon-edit"}]]
                              ;; [:td [:input {:type "button" :on-click #(delete(.-id dn))
                              ;;               :class "glyphicon glyphicon-remove"  :value "Delete"}]]
                              [:td  [:a {:href "javascript:;" :on-click #(delete(.-id mt))  :class "btn btn-danger btn-sm glyphicon glyphicon-remove"}] ]

                              ])]]
       [:div{:class "col-xs-6 col-centered col-max"} [shared-state 0]]
       ]
      ]]]
   ;; [:div.padding]
   ;;  [:div.page-footer [:h4 "Copyright All Rights Reserved © 2016 TechnoIdentity Solutions Pvt.Ltd"]]
   ])
(defn table-mount []
  (.ready (js/$ js/document)
          (fn []
            (.DataTable (js/$ "#example1")))))
(defn home [documents]
  (r/create-class {:reagent-render render-mutations
                   :component-did-mount table-mount }))


(defroute home-path "/" []
  (let [onres (fn [json]
                (let [dt (getdata json)]
                  (set-key-value :mutations (.-data dt))
                  (set-key-value :total-pages (get-total-rec-no (.-pagesCount dt)))
                  (set-key-value :page-location  [render-mutations (get-value! :mutations)])))]
    (set-key-value :is-searched-results false)
    (http-get (str "http://localhost:9000/mutations?pageIndex="(dec (get-value! :current-page))"&pageSize=10") onres)))

(defroute mutations-list "/mutations" []
  (let [onres (fn [json]
                (let [dt (getdata json)]
                  (set-key-value :mutations (.-data dt))
                  (set-key-value :total-pages (get-total-rec-no (.-pagesCount dt)))
                  (set-key-value :page-location  [render-mutations (get-value! :mutations)])))]
    (set-key-value :is-searched-results false)
    (http-get (str "http://localhost:9000/mutations?pageIndex="(dec (get-value! :current-page))"&pageSize=10") onres)))


(defroute documents-path "/mutations/add" []
  (let [onres (fn[json](
                        (set-key-value :villages (getdata json))
                        (set-page! [mutation-add-template])))]
    (http-get "http://localhost:9000/villages" onres))  )

(defroute documents-path1 "/mutations/update/:id" [id]
  (let [onres (fn[json](
                       (set-key-value :villages (getdata json))
                       (set-page! [mutation-update-template id
                                   (first (filter (fn[obj]
                                                    (=(.-id obj) (.parseInt js/window id))) (get-value! :mutations)))])))]
    (http-get "http://localhost:9000/villages" onres)))


(defroute revenue-list "/revenue" []
  )


(defroute "*" []
  (js/alert "<h1>Not Found Page</h1>"))


(defn main
  []
  (secretary/set-config! :prefix "#")
  (set-key-value :page-location [render-mutations])
  (r/render [page]
            (.getElementById js/document "app1"))
  (let [history (History.)]
    (events/listen history "navigate"
                   (fn [event]
                     (secretary/dispatch! (.-token event))))
    (.setEnabled history true)))

(defn nav! [token]
  (.setToken (History.) token))

(main)
