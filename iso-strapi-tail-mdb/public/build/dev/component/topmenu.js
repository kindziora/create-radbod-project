

    export let topmenu = {
        views : {
                   'topmenu-e-1' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `<div class="logo"><img src="/img/topmenu/logo64.png" alt="no image"></div> <div class="hamburger" data-events="hamburger:click"> <div class="hamburg"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div> </div> <ul id="menu"> <li data-name="/$topmenu/link"><a href="/home" class="${topmenu.isActive('home')}">${_t('home')}</a></li> <li data-name="/$topmenu/link"><a href="/form" class="${topmenu.isActive('form')}">${_t('form')}</a></li> <li data-name="/$topmenu/link"><a href="/extra" class="${topmenu.isActive('extra')}">${_t('extra')}</a></li> </ul>`},
                   'topmenu-e-2' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `<img src="/img/topmenu/logo64.png" alt="no image">`},
                   'topmenu-e-4' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `<div class="hamburg"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`},
                   'topmenu-e-5' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `<span class="line"></span> <span class="line"></span> <span class="line"></span>`},
                   'topmenu-e-9' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `<li data-name="/$topmenu/link"><a href="/home" class="${topmenu.isActive('home')}">${_t('home')}</a></li> <li data-name="/$topmenu/link"><a href="/form" class="${topmenu.isActive('form')}">${_t('form')}</a></li> <li data-name="/$topmenu/link"><a href="/extra" class="${topmenu.isActive('extra')}">${_t('extra')}</a></li>`},
                   'topmenu-e-10' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `<a href="/home" class="${topmenu.isActive('home')}">${_t('home')}</a>`},
                   'topmenu-e-11' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `${_t('home')}`},
                   'topmenu-e-12' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `<a href="/form" class="${topmenu.isActive('form')}">${_t('form')}</a>`},
                   'topmenu-e-13' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `${_t('form')}`},
                   'topmenu-e-14' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `<a href="/extra" class="${topmenu.isActive('extra')}">${_t('extra')}</a>`},
                   'topmenu-e-15' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `${_t('extra')}`},
                   'topmenu' : function (args) { let {change, bottommenu,todo,topmenu, _t} = args; return `<navgation data-id="topmenu-e-1" data-view="topmenu-e-1"> <div class="logo" data-id="topmenu-e-2" data-view="topmenu-e-2"><img src="/img/topmenu/logo64.png" alt="no image" data-id="topmenu-e-3" data-view="topmenu-e-3"></div> <div class="hamburger" data-events="hamburger:click" data-id="topmenu-e-4" data-view="topmenu-e-4"> <div class="hamburg" data-id="topmenu-e-5" data-view="topmenu-e-5"> <span class="line" data-id="topmenu-e-6" data-view="topmenu-e-6"></span> <span class="line" data-id="topmenu-e-7" data-view="topmenu-e-7"></span> <span class="line" data-id="topmenu-e-8" data-view="topmenu-e-8"></span> </div> </div> <ul id="menu" data-type="list" data-id="topmenu-e-9" data-view="topmenu-e-9"> <li data-name="/$topmenu/link" data-id="topmenu-e-10" data-view="topmenu-e-10"><a href="/home" class="${topmenu.isActive('home')}" data-id="topmenu-e-11" data-view="topmenu-e-11">${_t('home')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-12" data-view="topmenu-e-12"><a href="/form" class="${topmenu.isActive('form')}" data-id="topmenu-e-13" data-view="topmenu-e-13">${_t('form')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-14" data-view="topmenu-e-14"><a href="/extra" class="${topmenu.isActive('extra')}" data-id="topmenu-e-15" data-view="topmenu-e-15">${_t('extra')}</a></li> </ul> </navgation>`} },
            "style":"navgation { display: flex; justify-content: space-between; } .logo { padding: 0.5em; } .hamburger { padding: 0 0.5em; font-size: 1em; display: flex; z-index: 2; } .hamburg { display: block; width: 2.14em; height: 2em; position: relative; margin: auto; border-radius: 4px; transition: border-radius .5s; } .line { position: absolute; height: 5px; width: inherit; background: #403d3d; border-radius: 32px; display: block; transition: 0.5s; transform-origin: center; } .line:nth-child(1) { top: 12px; } .line:nth-child(2) { top: 24px; } .line:nth-child(3) { top: 36px; } .hamburger.checked .line:nth-child(1) { transform: translateY(12px) rotate(-45deg); } .hamburger.checked .line:nth-child(2) { opacity: 0; } .hamburger.checked .line:nth-child(3) { transform: translateY(-12px) rotate(45deg); } #menu { position: absolute; width: 100%; display: none; background: white; list-style-type: none; top: 0; margin: 0; padding: 0; } #menu:hover { display: block; } #menu li { display: block; line-height: 50px; text-align: center; } #menu a { color: #999; } #menu a:hover { text-decoration: none; color: #0076d1; } #menu a.active { color: #0076d1; font-weight: 500; } .hamburger:hover ~ #menu, .hamburger.checked ~ #menu { display: block; padding: 0; margin: 0; left: 0; right: 0; } @media only screen and (min-width: 768px) { .hamburger { display: none; } #menu { display: flex; position: static; background: none; clear: none; flex: 1; justify-content: flex-end; } #menu:hover { display: flex; } #menu li { padding: 0 1em; } }","path":"/component/topmenu.js",
        
         loaded(data) { //pipeline after data has been loaded

            console.log("LOADED TOPMENU", data);
            data._data.isActive = (path) => this.environment.path().split("/")[1] === path ? "active" : "";
        },
        data(data, runtime) {
            return this.createStore("topmenu", {
                link: "runtime.path"
            })
        },
        interactions: () => ({
            "hamburger": {
                "click"(sender, dataStore) {
                    sender.field.$el.classList.toggle("checked");
                }
            },
            "/$topmenu/link": {
                "click"(sender, dataStore) {
                    sender.ev.preventDefault();

                    buildApp.loadPage(sender.field.$el.firstChild.getAttribute("href"), () => {
                        dataStore.link = sender.field.$el.firstChild.getAttribute("href");
                    });

                }
            }
        })
    }
