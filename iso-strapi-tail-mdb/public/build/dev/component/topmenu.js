

    export let topmenu = {
        views : {
                   'topmenu-e-1' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `<div class="logo"><img src="/img/topmenu/logo_serialtexter.png" alt="no image"></div> <ul id="menu"> <li data-name="/$topmenu/link"><a href="${env.view.url('start')}" class="${env.view.isActive('/start')}">${_t('start')}</a></li> <li data-name="/$topmenu/link"><a href="${env.view.url('login')}" class="${env.view.isActive('/login')}">${_t('login')}</a></li> <li data-name="/$topmenu/link"><a href="${env.view.url('register')}" class="${ env.view.isActive('/register') }">${_t('registrieren')}</a></li> <li data-name="/$topmenu/link"><a href="${env.view.url('blog')}" class="${env.view.isActive('/blog')}">${_t('blog')}</a></li> </ul>`},
                   'topmenu-e-2' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `<img src="/img/topmenu/logo_serialtexter.png" alt="no image">`},
                   'topmenu-e-4' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `<li data-name="/$topmenu/link"><a href="${env.view.url('start')}" class="${env.view.isActive('/start')}">${_t('start')}</a></li> <li data-name="/$topmenu/link"><a href="${env.view.url('login')}" class="${env.view.isActive('/login')}">${_t('login')}</a></li> <li data-name="/$topmenu/link"><a href="${env.view.url('register')}" class="${ env.view.isActive('/register') }">${_t('registrieren')}</a></li> <li data-name="/$topmenu/link"><a href="${env.view.url('blog')}" class="${env.view.isActive('/blog')}">${_t('blog')}</a></li>`},
                   'topmenu-e-5' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `<a href="${env.view.url('start')}" class="${env.view.isActive('/start')}">${_t('start')}</a>`},
                   'topmenu-e-6' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `${_t('start')}`},
                   'topmenu-e-7' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `<a href="${env.view.url('login')}" class="${env.view.isActive('/login')}">${_t('login')}</a>`},
                   'topmenu-e-8' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `${_t('login')}`},
                   'topmenu-e-9' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `<a href="${env.view.url('register')}" class="${ env.view.isActive('/register') }">${_t('registrieren')}</a>`},
                   'topmenu-e-10' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `${_t('registrieren')}`},
                   'topmenu-e-11' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `<a href="${env.view.url('blog')}" class="${env.view.isActive('/blog')}">${_t('blog')}</a>`},
                   'topmenu-e-12' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `${_t('blog')}`},
                   'topmenu' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,login,modal,profile,signin,tasklist,textlist,todo,topmenu,units,write, _t, env} = args; return `<navgation data-id="topmenu-e-1" data-view="topmenu-e-1"> <div class="logo" data-id="topmenu-e-2" data-view="topmenu-e-2"><img src="/img/topmenu/logo_serialtexter.png" alt="no image" data-id="topmenu-e-3" data-view="topmenu-e-3"></div> <ul id="menu" data-type="list" data-id="topmenu-e-4" data-view="topmenu-e-4"> <li data-name="/$topmenu/link" data-id="topmenu-e-5" data-view="topmenu-e-5"><a href="${env.view.url('start')}" class="${env.view.isActive('/start')}" data-id="topmenu-e-6" data-view="topmenu-e-6">${_t('start')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-7" data-view="topmenu-e-7"><a href="${env.view.url('login')}" class="${env.view.isActive('/login')}" data-id="topmenu-e-8" data-view="topmenu-e-8">${_t('login')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-9" data-view="topmenu-e-9"><a href="${env.view.url('register')}" class="${ env.view.isActive('/register') }" data-id="topmenu-e-10" data-view="topmenu-e-10">${_t('registrieren')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-11" data-view="topmenu-e-11"><a href="${env.view.url('blog')}" class="${env.view.isActive('/blog')}" data-id="topmenu-e-12" data-view="topmenu-e-12">${_t('blog')}</a></li> </ul> </navgation>`} },
            "style":"navgation { display: flex; justify-content: space-between; } navgation .logo { width: 15em; } navgation #menu { z-index: 2; position: absolute; width: 100%; display: none; background: white; list-style-type: none; top: 0; margin: 0; padding: 0; } navgation #menu li { display: block; line-height: 50px; text-align: center; } navgation #menu a { color: #999; } navgation #menu a:hover { text-decoration: none; color: #0076d1; } navgation #menu a.active { color: #0076d1; font-weight: 500; } @media only screen and (max-width: 768px) { navgation .logo { display: none; } navgation #menu { display: flex; padding: 0; margin: 0; font-size: 1.5em; left: 0; right: 0; justify-content: center; position: fixed; box-shadow: 0 1px 8px black; } navgation #menu li { display: flex; line-height: 50px; flex-grow: 1; flex-flow: column; text-align: center; } } @media only screen and (min-width: 768px) { navgation #menu { display: flex; position: static; background: none; clear: none; flex: 1; justify-content: flex-end; } navgation #menu li { padding: 0 1em; } }","path":"/component/topmenu.js",
        
        loaded(data) { //pipeline after data has been loaded

        },
        data(data, runtime) {
            return this.createStore("topmenu", {
                link: "runtime.path"
            })
        },
        interactions: () => ({ 
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
