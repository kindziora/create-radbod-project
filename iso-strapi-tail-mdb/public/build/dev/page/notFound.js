
     import  { topmenu }  from "../component/topmenu.js";

    export let notFound = {
        views : {
                   'notFound-e-1' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `<title>${_t('404 oops Seite nicht gefunden')}</title>`},
                   'notFound-e-2' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `${_t('404 oops Seite nicht gefunden')}`},
                   'notFound-e-3' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `<topmenu-component type="component" data-name="/$topmenu"></topmenu-component> <h1>${_t('Hallo')} ${notFound.name}</h1> <section class="todoapp"> <todo-component data-name="/$items"></todo-component> </section> <footer class="info"> <p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p> </footer>`},
                   'notFound-e-5' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `${_t('Hallo')} ${notFound.name}`},
                   'notFound-e-6' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `<todo-component data-name="/$items"></todo-component>`},
                   'notFound-e-8' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `<p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p>`},
                   'notFound-e-9' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `Double-click to edit a todo`},
                   'notFound-e-10' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a>`},
                   'notFound-e-11' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `${_t('Luke Edwards')}`},
                   'notFound-e-12' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a>`},
                   'notFound-e-13' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
                   'notFound-e-14' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a>`},
                   'notFound-e-15' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `${_t('TodoMVC')}`},
                   'notFound' : function (args) { let {change, form,home,notFound,todo,topmenu,user, _t} = args; return `<extend-head data-id="notFound-e-1" data-view="notFound-e-1"> <title data-id="notFound-e-2" data-view="notFound-e-2">${_t('404 oops Seite nicht gefunden')}</title> </extend-head> <page data-id="notFound-e-3" data-view="notFound-e-3"> <topmenu-component type="component" data-name="topmenu" data-id="topmenu" data-view="topmenu"><navgation data-id="/$topmenu-e-1" data-view="/$topmenu-e-1"> <div class="logo" data-id="/$topmenu-e-2" data-view="/$topmenu-e-2">${_t('logo')}</div> <div class="hamburger" data-events="hamburger:click" data-id="/$topmenu-e-3" data-view="/$topmenu-e-3"> <div class="hamburg" data-id="/$topmenu-e-4" data-view="/$topmenu-e-4"> <span class="line" data-id="/$topmenu-e-5" data-view="/$topmenu-e-5"></span> <span class="line" data-id="/$topmenu-e-6" data-view="/$topmenu-e-6"></span> <span class="line" data-id="/$topmenu-e-7" data-view="/$topmenu-e-7"></span> </div> </div> <ul id="menu" data-type="list" data-id="/$topmenu-e-8" data-view="/$topmenu-e-8"> <li data-name="/$topmenu/link" data-id="/$topmenu-e-9" data-view="/$topmenu-e-9"><a href="/home" class="${topmenu.isActive('home')}" data-id="/$topmenu-e-10" data-view="/$topmenu-e-10">${_t('home')}</a></li> <li data-name="/$topmenu/link" data-id="/$topmenu-e-11" data-view="/$topmenu-e-11"><a href="/form" class="${topmenu.isActive('form')}" data-id="/$topmenu-e-12" data-view="/$topmenu-e-12">${_t('form')}</a></li> <li data-name="/$topmenu/link" data-id="/$topmenu-e-13" data-view="/$topmenu-e-13"><a href="/extra" class="${topmenu.isActive('extra')}" data-id="/$topmenu-e-14" data-view="/$topmenu-e-14">${_t('extra')}</a></li> </ul> </navgation><style data-id="topmenu-e-37" data-view="topmenu-e-37">body navgation { background: #EEE; display: flex; justify-content: space-between; } body .logo { font-size: 2em; line-height: 3em; padding: 0 0.5em; } body .hamburger { padding: 0 0.5em; font-size: 1.5em; line-height: 3em; display: flex; z-index: 2; } body .hamburg { display: block; background: #555; width: 3.14em; height: 2.1em; position: relative; margin: auto; border-radius: 4px; transition: border-radius .5s; } body .line { position: absolute; left: 10px; height: 4px; width: 55px; background: #fff; border-radius: 2px; display: block; transition: 0.5s; transform-origin: center; } body .line:nth-child(1) { top: 12px; } body .line:nth-child(2) { top: 24px; } body .line:nth-child(3) { top: 36px; } body .hamburger.checked .line:nth-child(1) { transform: translateY(12px) rotate(-45deg); } body .hamburger.checked .line:nth-child(2) { opacity: 0; } body .hamburger.checked .line:nth-child(3) { transform: translateY(-12px) rotate(45deg); } body #menu { position: absolute; width: 100%; background: #eee; display: none; list-style-type: none; } body #menu:hover { display: block; } body #menu li { display: block; line-height: 50px; text-align: center; } body #menu a.active { font-weight: bold; } body .hamburger:hover ~ #menu { display: block; } body .hamburger.checked ~ #menu { display: block; } @media only screen and (min-width: 768px) { body .hamburger { display: none; } body #menu { position: static; display: flex; background: none; clear: none; flex: 1; justify-content: flex-end; } body #menu:hover { display: flex; } body #menu li { padding: 0 1em; } }</style></topmenu-component> <h1 data-id="notFound-e-5" data-view="notFound-e-5" data-name="/$notFound/name">${_t('Hallo')} ${notFound.name}</h1> <section class="todoapp" data-id="notFound-e-6" data-view="notFound-e-6"> <todo-component data-name="/$items" data-id="notFound-e-7" data-view="notFound-e-7"></todo-component> </section> <footer class="info" data-id="notFound-e-8" data-view="notFound-e-8"> <p data-id="notFound-e-9" data-view="notFound-e-9">Double-click to edit a todo</p> <p data-id="notFound-e-10" data-view="notFound-e-10">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="notFound-e-11" data-view="notFound-e-11">${_t('Luke Edwards')}</a></p> <p data-id="notFound-e-12" data-view="notFound-e-12">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="notFound-e-13" data-view="notFound-e-13">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="notFound-e-14" data-view="notFound-e-14">${_t('Part of')} <a href="http://todomvc.com" data-id="notFound-e-15" data-view="notFound-e-15">${_t('TodoMVC')}</a></p> </footer> </page>`} },
            "style":"","path":"/page/notFound.js",
        
        components: { "topmenu-component": topmenu },
        data() {
            return this.createStore("notFound", { name: "AK not Found" });
        },
        interactions() {
            return {}
        }
    }
