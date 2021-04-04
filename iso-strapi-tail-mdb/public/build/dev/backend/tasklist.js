
    /**
     * @tasklist
     * 
     **/

    import  { textlist }  from "../component/textlist.js";

    export let tasklist = {
        "html":"<extend-head> <title>${_t('Willkommen zurück')}</title> </extend-head> <page class=\"light-mode\"> <backendtopmenu-component type=\"component\" data-name=\"/$backendtopmenu\"></backendtopmenu-component> <section class=\"page-content\"> <section class=\"search-and-user\"> <form> <input type=\"search\" placeholder=\"Aufträge suchen...\"> <button type=\"submit\" aria-label=\"submit form\"> <svg aria-hidden=\"true\"> <use xlink:href=\"#search\"></use> </svg> </button> </form> <div class=\"admin-profile\"> <span class=\"greeting\">${_t('Hi Alex')}</span> <div class=\"notifications\"> <span class=\"badge\">${_t('1')}</span> <svg> <use xlink:href=\"#users\"></use> </svg> </div> </div> </section> <section class=\"grid\"> <article> <textlist-component type=\"component\" data-name=\"/$textlist\"></textlist-component> </article> </section> </section> <bottommenu-component data-name=\"/$bottommenu\"></bottommenu-component> </page>","style":"@import url(/css/backend.css);","path":"/backend/tasklist.js",
        
        lazyLoading: false, /* server side rendering does not wait for store "tasklist" for rendering */
        mounted() {
            //  console.log("mounted", this);

        },
        components:
        {
            "backendtopmenu-component": "backendtopmenu#mainmenu",
            "textlist-component" : textlist,
            "bottommenu-component": "bottommenu#footermenu"
        },
        data( ) {

            return this.createStore("tasklist", {});

        },
        interactions() {
            return {
                "tab": {
                    "click"(sender, dataStore) {
                        sender.ev.preventDefault();
                        let tabName = sender.field.$el.getAttribute("data-ref").split("/")[1];
                        let tab = document.querySelector('#' + tabName);
                        document.querySelectorAll(".tab").forEach(e => e.classList.remove("selected"));
                        tab.classList.add("selected");

                        document.querySelectorAll(".filters li").forEach(e => e.classList.remove("selected"));
                        dataStore.tab = tabName;
                        sender.field.$el.classList.add("selected");
                    }
                },
                "/$tasklist/clickItem": {
                    "click"(sender, dataStore) { //address specific element in dom
                        let index = parseInt(sender.field.$el.getAttribute("data-index"));
                        dataStore.items.some((v, k) => {
                            if (v.id == index) {
                                dataStore.items[k].status = !dataStore.items[k].status;
                                return true;
                            }
                        });
                    }
                },
                "name": {
                    "input"(sender, dataStore) {
                        let index = parseInt(sender.field.$el.getAttribute("data-index"));
                        for (let k in dataStore.items) {
                            let v = dataStore.items[k];
                            if (v.id == index) {
                                dataStore.items[k].label = sender.field.$el.innerText;
                            }
                        }
                    }
                },
                "/$tasklist/deleteItem": {
                    "click"(sender, dataStore) { //address specific element in dom
                        let index = parseInt(sender.field.$el.getAttribute("data-index"));
                        dataStore.items.some((v, k) => {
                            if (v.id == index) {
                                delete dataStore.items[k];
                                return true;
                            }
                        });
                    }
                },
                "/$tasklist/items": {
                    "change"(sender, dataStore) {
                        console.log(dataStore);
                    }
                },
                "/$tasklist/name": {
                    "keyup#tasklist-myinput"(sender, dataStore) { //address specific element in dom
                        dataStore.name = sender.field.getValue();

                        if (sender.ev.keyCode === 13) {
                            dataStore.items.push({
                                id: dataStore.items.length,
                                label: dataStore.name,
                                status: false
                            });
                        }
                    }
                }
            }
        }

    }

