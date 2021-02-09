
    import  {todo}  from "../component/todo.js";
     
    export let notFound = {
        views : {
       'notFound' : function(args){ let {change, notFound,todo, _t} = args; return `<extend-head data-id="notFound-e-2" data-view="notFound-e-2"> <title data-id="notFound-e-3" data-view="notFound-e-3">${_t('404 oops Seite nicht gefunden')}</title> </extend-head> <page data-id="notFound-e-4" data-view="notFound-e-4"> <h1 data-id="notFound-e-5" data-view="notFound-e-5">${_t('Hallo not FOUND')}</h1> <section class="todoapp" data-id="notFound-e-6" data-view="notFound-e-6"> <todo-component data-name="todo" data-id="todo"><header class="header" data-id="/$items-e-9" data-view="/$items-e-9"> <h1 data-id="/$items-e-10" data-view="/$items-e-10" data-name="/$todo/name">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="todo-myinput" placeholder="What needs to be done?" autofocus data-view="todo-myinput"> </header> <span data-id="/$items-e-11" data-view="/$items-e-11" data-name="/$todo/name"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="/$items-e-12" data-view="/$items-e-12"></div> <section class="main" data-id="/$items-e-13" data-view="/$items-e-13"> <label for="toggle-all" data-id="/$items-e-14" data-view="/$items-e-14"> <input id="toggle-all" data-events="toggle:click" class="toggle-all" type="checkbox" data-name="/$todo/items" data-id="/$items-e-15" data-view="/$items-e-15"> ${_t('Mark all as complete')}</label> <div id="all" class="tab selected" data-id="/$items-e-16" data-view="/$items-e-16"> <h3 data-id="/$items-e-17" data-view="/$items-e-17">${_t('All')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="/$items-e-18"></ul> </div> <div id="active" class="tab" data-id="/$items-e-19" data-view="/$items-e-19"> <h3 data-id="/$items-e-20" data-view="/$items-e-20">${_t('active')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-active" data-type="list" data-id="/$items-e-21"></ul> </div> <div id="completed" class="tab" data-id="/$items-e-22" data-view="/$items-e-22"> <h3 data-id="/$items-e-23" data-view="/$items-e-23">${_t('completed')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-completed" data-type="list" data-id="/$items-e-24"></ul> </div> <footer class="footer" data-id="/$items-e-25" data-view="/$items-e-25"> <span class="todo-count" data-name="/$todo/items" data-view="count" data-id="/$items-e-26"></span> <ul class="filters" data-type="list" data-id="/$items-e-28" data-view="/$items-e-28"> <li data-id="/$items-e-29" data-view="/$items-e-29"> <a href="#/all" data-events="tab:click" class="selected" data-id="/$items-e-30" data-view="/$items-e-30">${_t('All')}</a> </li> <li data-id="/$items-e-31" data-view="/$items-e-31"> <a href="#/active" data-events="tab:click" data-id="/$items-e-32" data-view="/$items-e-32">${_t('Active')}</a> </li> <li data-id="/$items-e-33" data-view="/$items-e-33"> <a href="#/completed" data-events="tab:click" data-id="/$items-e-34" data-view="/$items-e-34">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$items-e-35" data-view="/$items-e-35">${_t('Clear completed')}</button> </footer> </section></todo-component> </section> <footer class="info" data-id="notFound-e-8" data-view="notFound-e-8"> <p data-id="notFound-e-9" data-view="notFound-e-9">Double-click to edit a todo</p> <p data-id="notFound-e-10" data-view="notFound-e-10">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="notFound-e-11" data-view="notFound-e-11">${_t('Luke Edwards')}</a></p> <p data-id="notFound-e-12" data-view="notFound-e-12">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="notFound-e-13" data-view="notFound-e-13">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="notFound-e-14" data-view="notFound-e-14">${_t('Part of')} <a href="http://todomvc.com" data-id="notFound-e-15" data-view="notFound-e-15">${_t('TodoMVC')}</a></p> </footer> </page>`},
       'notFound-e-2' : function (args) { let {change, notFound, _t} = args; return `<title>${_t('404 oops Seite nicht gefunden')}</title>`},
       'notFound-e-3' : function (args) { let {change, notFound, _t} = args; return `${_t('404 oops Seite nicht gefunden')}`},
       'notFound-e-4' : function (args) { let {change, notFound, _t} = args; return `<h1>${_t('Hallo not FOUND')}</h1> <section class="todoapp"> <todo-component data-name="/$items"></todo-component> </section> <footer class="info"> <p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p> </footer>`},
       'notFound-e-5' : function (args) { let {change, notFound, _t} = args; return `${_t('Hallo not FOUND')}`},
       'notFound-e-6' : function (args) { let {change, notFound, _t} = args; return `<todo-component data-name="/$items"></todo-component>`},
       'notFound-e-8' : function (args) { let {change, notFound,todo, _t} = args; return `<p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p>`},
       'notFound-e-9' : function (args) { let {change, notFound,todo, _t} = args; return `Double-click to edit a todo`},
       'notFound-e-10' : function (args) { let {change, notFound,todo, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a>`},
       'notFound-e-11' : function (args) { let {change, notFound,todo, _t} = args; return `${_t('Luke Edwards')}`},
       'notFound-e-12' : function (args) { let {change, notFound,todo, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a>`},
       'notFound-e-13' : function (args) { let {change, notFound,todo, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
       'notFound-e-14' : function (args) { let {change, notFound,todo, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a>`},
       'notFound-e-15' : function (args) { let {change, notFound,todo, _t} = args; return `${_t('TodoMVC')}`} },
            "style":"","path":"/page/notFound.js",
        
        components: {"todo-component" : todo},
        data(){
            return this.createStore("home", {name : "AK home"});
        },
        interactions(){
            return { }
        }
    }
