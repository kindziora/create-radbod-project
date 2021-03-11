

    export let bottommenu = {
        views : {
                   'bottommenu-e-1' : function (args) { let {change, bottommenu,topmenu, _t} = args; return `<div class="logo"> </div> <div class="PRODUCT"> <h3>${_t('Products')}</h3> </div> <div class="BLOG"> <h3>${_t('Blog')}</h3> </div> <div class="followus"> <h3>${_t('Follow us')}</h3> </div>`},
                   'bottommenu-e-3' : function (args) { let {change, bottommenu,topmenu, _t} = args; return `<h3>${_t('Products')}</h3>`},
                   'bottommenu-e-4' : function (args) { let {change, bottommenu,topmenu, _t} = args; return `${_t('Products')}`},
                   'bottommenu-e-5' : function (args) { let {change, bottommenu,topmenu, _t} = args; return `<h3>${_t('Blog')}</h3>`},
                   'bottommenu-e-6' : function (args) { let {change, bottommenu,topmenu, _t} = args; return `${_t('Blog')}`},
                   'bottommenu-e-7' : function (args) { let {change, bottommenu,topmenu, _t} = args; return `<h3>${_t('Follow us')}</h3>`},
                   'bottommenu-e-8' : function (args) { let {change, bottommenu,topmenu, _t} = args; return `${_t('Follow us')}`},
                   'bottommenu' : function (args) { let {change, bottommenu,topmenu, _t} = args; return `<footer data-id="bottommenu-e-1" data-view="bottommenu-e-1"> <div class="logo" data-id="bottommenu-e-2" data-view="bottommenu-e-2"> </div> <div class="PRODUCT" data-id="bottommenu-e-3" data-view="bottommenu-e-3"> <h3 data-id="bottommenu-e-4" data-view="bottommenu-e-4">${_t('Products')}</h3> </div> <div class="BLOG" data-id="bottommenu-e-5" data-view="bottommenu-e-5"> <h3 data-id="bottommenu-e-6" data-view="bottommenu-e-6">${_t('Blog')}</h3> </div> <div class="followus" data-id="bottommenu-e-7" data-view="bottommenu-e-7"> <h3 data-id="bottommenu-e-8" data-view="bottommenu-e-8">${_t('Follow us')}</h3> </div> </footer>`} },
            "style":"footer { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px 0px; grid-template-areas: \"logo PRODUCT BLOG followus\"; } .logo { grid-area: logo; } .PRODUCT { grid-area: PRODUCT; } .BLOG { grid-area: BLOG; } .followus { grid-area: followus; }","path":"/component/bottommenu.js",
        
        loaded(data) { //pipeline after data has been loaded

            console.log("LOADED bottommenu", data);
            data._data.isActive = (path) => this.environment.path().split("/")[1] === path ? "active" : "";
        },
        data(data, runtime) {
            return this.createStore("bottommenu", {
                link: "runtime.path"
            })
        },
        interactions: () => ({
            "hamburger": {
                "click"(sender, dataStore) {
                    sender.field.$el.classList.toggle("checked");
                }
            },
            "/$bottommenu/link": {
                "click"(sender, dataStore) {
                    sender.ev.preventDefault();

                    buildApp.loadPage(sender.field.$el.firstChild.getAttribute("href"), () => {
                        dataStore.link = sender.field.$el.firstChild.getAttribute("href");
                    });

                }
            }
        })
    }
