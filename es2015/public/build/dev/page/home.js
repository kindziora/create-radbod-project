
    import  {todo}  from "../component/todo.js";
    import  {translations}  from "./i18n/home.js";
    import  {topmenu}  from "../component/topmenu.js";

    export let home = {
        views : {
       'home' : function(args){ let {change, home,todo,topmenu,xternal, _t} = args; return `<title data-id="home-e-2" data-view="home-e-2">${_t('Willkommen home')}</title> <page data-id="home-e-3" data-view="home-e-3"> <topmenu-component type="component" data-name="topmenu" data-id="topmenu"><ul data-type="list" data-id="/$topmenu-e-2" data-view="/$topmenu-e-2"> <li data-id="/$topmenu-e-3" data-view="/$topmenu-e-3"> <a href="/home" class="${topmenu.path}" data-name="link" data-id="/$topmenu-e-4" data-view="/$topmenu-e-4">${_t('home')}</a></li> <li data-id="/$topmenu-e-5" data-view="/$topmenu-e-5"> <a href="/login" class data-name="link" data-id="/$topmenu-e-6" data-view="/$topmenu-e-6">${_t('login')}</a></li> </ul></topmenu-component> <input data-name="/$home/name" data-id="home-e-5" data-view="home-e-5"> <h1 data-id="home-e-6" data-view="home-e-6"> ${_t('dtest')} ${home.name}</h1> <div data-name="/$home/name" data-id="home-e-7" data-view="home-e-7"></div> <todo-component type="component" data-name="todo" data-id="todo"><header class="header" data-id="/$todo-e-2" data-view="/$todo-e-2"> <h1 data-id="/$todo-e-3" data-view="/$todo-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="todo-myinput" placeholder="What needs to be done?" autofocus> </header> <span data-id="/$todo-e-4" data-view="/$todo-e-4"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="/$todo-e-5" data-view="/$todo-e-5"></div> <section class="main" data-id="/$todo-e-6" data-view="/$todo-e-6"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$todo/items"> <label for="toggle-all" data-id="/$todo-e-7" data-view="/$todo-e-7">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="/$todo-e-8"></ul> <xtern-component type="component" data-name="xtern" data-id="xtern" data-view="xtern"><h2 data-id="/$todo/items-e-2" data-view="/$todo/items-e-2">externe daten</h2> <div data-id="/$todo/items-e-3" data-view="/$todo/items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="/$todo-e-10" data-view="/$todo-e-10"> <span class="todo-count" data-id="/$todo-e-11" data-view="/$todo-e-11"></span> <ul class="filters" data-type="list" data-id="/$todo-e-12" data-view="/$todo-e-12"> <li data-id="/$todo-e-13" data-view="/$todo-e-13"> <a href="#/" class="selected" data-id="/$todo-e-14" data-view="/$todo-e-14">${_t('All')}</a> </li> <li data-id="/$todo-e-15" data-view="/$todo-e-15"> <a href="#/active" data-id="/$todo-e-16" data-view="/$todo-e-16">${_t('Active')}</a> </li> <li data-id="/$todo-e-17" data-view="/$todo-e-17"> <a href="#/completed" data-id="/$todo-e-18" data-view="/$todo-e-18">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$todo-e-19" data-view="/$todo-e-19">${_t('Clear completed')}</button> </footer> </section></todo-component> <footer class="info" data-id="home-e-9" data-view="home-e-9"> <p data-id="home-e-10" data-view="home-e-10"> Double-click to edit a todo </p> <p data-id="home-e-11" data-view="home-e-11">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="home-e-12" data-view="home-e-12">${_t('Luke Edwards')}</a></p> <p data-id="home-e-13" data-view="home-e-13">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="home-e-14" data-view="home-e-14">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="home-e-15" data-view="home-e-15">${_t('Part of')} <a href="http://todomvc.com" data-id="home-e-16" data-view="home-e-16">${_t('TodoMVC')}</a></p> </footer> ${_t("asas")} </page>`},
       'home-e-2' : function (args) { let {change, home, _t} = args; return `${_t('Willkommen home')}`},
       'home-e-3' : function (args) { let {change, home, _t} = args; return `<topmenu-component type="component" data-name="/$topmenu"></topmenu-component> <input data-name="/$home/name"> <h1> ${_t('dtest')} ${home.name}</h1> <div data-name="/$home/name"></div> <todo-component type="component" data-name="/$todo"></todo-component> <footer class="info"> <p> Double-click to edit a todo </p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p> </footer> ${_t("asas")}`},
       'home-e-6' : function (args) { let {change, home,topmenu, _t} = args; return `${_t('dtest')} ${home.name}`},
       'home-e-9' : function (args) { let {change, home,todo,topmenu,xternal, _t} = args; return `<p> Double-click to edit a todo </p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p>`},
       'home-e-10' : function (args) { let {change, home,todo,topmenu,xternal, _t} = args; return `Double-click to edit a todo`},
       'home-e-11' : function (args) { let {change, home,todo,topmenu,xternal, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a>`},
       'home-e-12' : function (args) { let {change, home,todo,topmenu,xternal, _t} = args; return `${_t('Luke Edwards')}`},
       'home-e-13' : function (args) { let {change, home,todo,topmenu,xternal, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a>`},
       'home-e-14' : function (args) { let {change, home,todo,topmenu,xternal, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
       'home-e-15' : function (args) { let {change, home,todo,topmenu,xternal, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a>`},
       'home-e-16' : function (args) { let {change, home,todo,topmenu,xternal, _t} = args; return `${_t('TodoMVC')}`},
       'xtern' : function (args) { let {change, home,todo,topmenu,xternal, _t} = args; return `<h2 data-id="/$todo/items-e-2" data-view="/$todo/items-e-2">externe daten</h2> <div data-id="/$todo/items-e-3" data-view="/$todo/items-e-3"> xtern ${ xternal.name } </div>`} },
            "style":"h1{ font-size:2em; }","path":"/page/home.js",
         
        components: {"todo-component" : todo, "topmenu-component" : topmenu},
        data(){
            return this.createStore("home", { name : "AK home" });
        },
        interactions(){ 
            return {
                "/$home/name" : {
                    "keyup"(sender, data) { //address specific element in dom
                         data.name = sender.field.getValue();
                    }
                }
            }
        },
        translations(language){
            return translations[language];
        }
    }
