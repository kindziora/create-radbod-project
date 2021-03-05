
     import  { topmenu }  from "../component/topmenu.js";

    export let notFound = {
        views : {
                   'notFound' : function(args){ let {change, form,home,notFound,todo,topmenu, _t} = args; return `<extend-head data-id="notFound-e-1" data-view="notFound-e-1"> <title data-id="notFound-e-2" data-view="notFound-e-2">${_t('404 oops Seite nicht gefunden')}</title> </extend-head> <page data-id="notFound-e-3" data-view="notFound-e-3"> <topmenu-component type="component" data-name="/$topmenu" data-id="notFound-e-4" data-view="notFound-e-4"></topmenu-component> <h1 data-id="notFound-e-5" data-view="notFound-e-5" data-name="/$notFound/name">${_t('Hallo')} ${notFound.name}</h1> <section class="todoapp" data-id="notFound-e-6" data-view="notFound-e-6"> <todo-component data-name="/$items" data-id="notFound-e-7" data-view="notFound-e-7"></todo-component> </section> <footer class="info" data-id="notFound-e-8" data-view="notFound-e-8"> <p data-id="notFound-e-9" data-view="notFound-e-9">Double-click to edit a todo</p> <p data-id="notFound-e-10" data-view="notFound-e-10">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="notFound-e-11" data-view="notFound-e-11">${_t('Luke Edwards')}</a></p> <p data-id="notFound-e-12" data-view="notFound-e-12">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="notFound-e-13" data-view="notFound-e-13">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="notFound-e-14" data-view="notFound-e-14">${_t('Part of')} <a href="http://todomvc.com" data-id="notFound-e-15" data-view="notFound-e-15">${_t('TodoMVC')}</a></p> </footer> </page>`},
                   'notFound-e-1' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `<title>${_t('404 oops Seite nicht gefunden')}</title>`},
                   'notFound-e-2' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `${_t('404 oops Seite nicht gefunden')}`},
                   'notFound-e-3' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `<topmenu-component type="component" data-name="/$topmenu"></topmenu-component> <h1>${_t('Hallo')} ${notFound.name}</h1> <section class="todoapp"> <todo-component data-name="/$items"></todo-component> </section> <footer class="info"> <p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p> </footer>`},
                   'notFound-e-5' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `${_t('Hallo')} ${notFound.name}`},
                   'notFound-e-6' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `<todo-component data-name="/$items"></todo-component>`},
                   'notFound-e-8' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `<p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p>`},
                   'notFound-e-9' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `Double-click to edit a todo`},
                   'notFound-e-10' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a>`},
                   'notFound-e-11' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `${_t('Luke Edwards')}`},
                   'notFound-e-12' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a>`},
                   'notFound-e-13' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
                   'notFound-e-14' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a>`},
                   'notFound-e-15' : function (args) { let {change, form,home,notFound,todo,topmenu, _t} = args; return `${_t('TodoMVC')}`} },
            "style":"","path":"/page/notFound.js",
        
        components: function () {
            return { "topmenu-component": topmenu };
        },
        data() {
            return this.createStore("notFound", { name: "AK not Found" });
        },
        interactions() {
            return {}
        }
    }
