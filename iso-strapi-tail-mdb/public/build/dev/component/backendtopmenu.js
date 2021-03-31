

    export let backendtopmenu = {
        views : {
                   'backendtopmenu-e-1' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `<div class="logo"><img src="/img/topmenu/logo_serialtexter.png" alt="no image"></div> <div class="hamburger" data-events="hamburger:click"> <div class="hamburg"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div> </div> <ul id="menu"> <li data-name="/$backendtopmenu/link"><a href="${env.view.url('backend/tasklist')}" class="${env.view.isActive('/backend/tasklist')}">${_t('Aufträge')}</a></li> <li data-name="/$backendtopmenu/link"><a href="${env.view.url('backend/profile')}" class="${env.view.isActive('/backend/profile')}">${_t('Profil')}</a></li> <li data-name="/$backendtopmenu/link"><a href="${env.view.url('backend/logout')}" class="${ env.view.isActive('/backend/logout') }">${_t('Abmelden')}</a></li> <li data-name="/$backendtopmenu/link"><a href="${env.view.url('blog')}" class="${env.view.isActive('blog')}">${_t('blog')}</a></li> </ul>`},
                   'backendtopmenu-e-2' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `<img src="/img/topmenu/logo_serialtexter.png" alt="no image">`},
                   'backendtopmenu-e-4' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `<div class="hamburg"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`},
                   'backendtopmenu-e-5' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `<span class="line"></span> <span class="line"></span> <span class="line"></span>`},
                   'backendtopmenu-e-9' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `<li data-name="/$backendtopmenu/link"><a href="${env.view.url('backend/tasklist')}" class="${env.view.isActive('/backend/tasklist')}">${_t('Aufträge')}</a></li> <li data-name="/$backendtopmenu/link"><a href="${env.view.url('backend/profile')}" class="${env.view.isActive('/backend/profile')}">${_t('Profil')}</a></li> <li data-name="/$backendtopmenu/link"><a href="${env.view.url('backend/logout')}" class="${ env.view.isActive('/backend/logout') }">${_t('Abmelden')}</a></li> <li data-name="/$backendtopmenu/link"><a href="${env.view.url('blog')}" class="${env.view.isActive('blog')}">${_t('blog')}</a></li>`},
                   'backendtopmenu-e-10' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `<a href="${env.view.url('backend/tasklist')}" class="${env.view.isActive('/backend/tasklist')}">${_t('Aufträge')}</a>`},
                   'backendtopmenu-e-11' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `${_t('Aufträge')}`},
                   'backendtopmenu-e-12' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `<a href="${env.view.url('backend/profile')}" class="${env.view.isActive('/backend/profile')}">${_t('Profil')}</a>`},
                   'backendtopmenu-e-13' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `${_t('Profil')}`},
                   'backendtopmenu-e-14' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `<a href="${env.view.url('backend/logout')}" class="${ env.view.isActive('/backend/logout') }">${_t('Abmelden')}</a>`},
                   'backendtopmenu-e-15' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `${_t('Abmelden')}`},
                   'backendtopmenu-e-16' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `<a href="${env.view.url('blog')}" class="${env.view.isActive('blog')}">${_t('blog')}</a>`},
                   'backendtopmenu-e-17' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `${_t('blog')}`},
                   'backendtopmenu' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,topmenu, _t, env} = args; return `<navgation data-id="backendtopmenu-e-1" data-view="backendtopmenu-e-1"> <div class="logo" data-id="backendtopmenu-e-2" data-view="backendtopmenu-e-2"><img src="/img/topmenu/logo_serialtexter.png" alt="no image" data-id="backendtopmenu-e-3" data-view="backendtopmenu-e-3"></div> <div class="hamburger" data-events="hamburger:click" data-id="backendtopmenu-e-4" data-view="backendtopmenu-e-4"> <div class="hamburg" data-id="backendtopmenu-e-5" data-view="backendtopmenu-e-5"> <span class="line" data-id="backendtopmenu-e-6" data-view="backendtopmenu-e-6"></span> <span class="line" data-id="backendtopmenu-e-7" data-view="backendtopmenu-e-7"></span> <span class="line" data-id="backendtopmenu-e-8" data-view="backendtopmenu-e-8"></span> </div> </div> <ul id="menu" data-type="list" data-id="backendtopmenu-e-9" data-view="backendtopmenu-e-9"> <li data-name="/$backendtopmenu/link" data-id="backendtopmenu-e-10" data-view="backendtopmenu-e-10"><a href="${env.view.url('backend/tasklist')}" class="${env.view.isActive('/backend/tasklist')}" data-id="backendtopmenu-e-11" data-view="backendtopmenu-e-11">${_t('Aufträge')}</a></li> <li data-name="/$backendtopmenu/link" data-id="backendtopmenu-e-12" data-view="backendtopmenu-e-12"><a href="${env.view.url('backend/profile')}" class="${env.view.isActive('/backend/profile')}" data-id="backendtopmenu-e-13" data-view="backendtopmenu-e-13">${_t('Profil')}</a></li> <li data-name="/$backendtopmenu/link" data-id="backendtopmenu-e-14" data-view="backendtopmenu-e-14"><a href="${env.view.url('backend/logout')}" class="${ env.view.isActive('/backend/logout') }" data-id="backendtopmenu-e-15" data-view="backendtopmenu-e-15">${_t('Abmelden')}</a></li> <li data-name="/$backendtopmenu/link" data-id="backendtopmenu-e-16" data-view="backendtopmenu-e-16"><a href="${env.view.url('blog')}" class="${env.view.isActive('blog')}" data-id="backendtopmenu-e-17" data-view="backendtopmenu-e-17">${_t('blog')}</a></li> </ul> </navgation>`} },
            "style":"navgation { display: flex; justify-content: space-between; } navgation .logo { width: 15em; } navgation .hamburger { top: 0; font-size: 1em; display: block; z-index: 2; } navgation .hamburg { display: block; width: 2.14em; height: 2em; position: relative; margin: auto; border-radius: 4px; transition: border-radius .5s; } navgation .line { position: absolute; height: 5px; width: inherit; background: #403d3d; border-radius: 32px; display: block; transition: 0.5s; transform-origin: center; } navgation .line:nth-child(1) { top: 12px; } navgation .line:nth-child(2) { top: 24px; } navgation .line:nth-child(3) { top: 36px; } navgation .hamburger.checked .line:nth-child(1) { transform: translateY(12px) rotate(-45deg); } navgation .hamburger.checked .line:nth-child(2) { opacity: 0; } navgation .hamburger.checked .line:nth-child(3) { transform: translateY(-12px) rotate(45deg); } navgation #menu { position: absolute; width: 100%; display: none; background: white; list-style-type: none; top: 0; margin: 0; padding: 0; } navgation #menu:hover { display: block; } navgation #menu li { display: block; line-height: 50px; text-align: center; } navgation #menu a { color: #999; } navgation #menu a:hover { text-decoration: none; color: #0076d1; } navgation #menu a.active { color: #0076d1; font-weight: 500; } navgation .hamburger:hover ~ #menu, navgation .hamburger.checked ~ #menu { display: block; padding: 0; margin: 0; left: 0; right: 0; } @media only screen and (min-width: 768px) { navgation .hamburger { display: none; } navgation #menu { display: flex; position: static; background: none; clear: none; flex: 1; justify-content: flex-end; } navgation #menu:hover { display: flex; } navgation #menu li { padding: 0 1em; } }","path":"/component/backendtopmenu.js",
        
        loaded(data) { //pipeline after data has been loaded

        },
        data(data, runtime) {
            return this.createStore("backendtopmenu", {
                link: "runtime.path"
            })
        },
        interactions: () => ({
            "hamburger": {
                "click"(sender, dataStore) {
                    sender.field.$el.classList.toggle("checked");
                }
            },
            "/$backendtopmenu/link": {
                "click"(sender, dataStore) {
                    sender.ev.preventDefault();

                    buildApp.loadPage(sender.field.$el.firstChild.getAttribute("href"), () => {
                        dataStore.link = sender.field.$el.firstChild.getAttribute("href");
                    });

                }
            }
        })
    }
