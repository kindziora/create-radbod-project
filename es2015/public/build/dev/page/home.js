
    import  {todo}  from "../component/todo.js";
    import  {translations}  from "./i18n/home.js";
    import  {topmenu}  from "../component/topmenu.js";

    export let home = {
        views : {
       'home' : function(args){ let {change, home,todo,topmenu, _t} = args; return `<extend-head data-id="home-e-2" data-view="home-e-2"> <title data-id="home-e-3" data-view="home-e-3">${_t('Willkommen home')}</title> </extend-head> <page data-id="home-e-4" data-view="home-e-4"> <topmenu-component type="component" data-name="topmenu" data-id="topmenu" data-view="/$topmenu"><ul data-type="list" data-id="/$topmenu-e-7" data-view="/$topmenu-e-7"> <li data-id="/$topmenu-e-8" data-view="/$topmenu-e-8"> <a href="/home" class="${topmenu.hallo}" data-name="link" data-id="/$topmenu-e-9" data-view="/$topmenu-e-9">${_t('home')}</a></li> <li data-id="/$topmenu-e-10" data-view="/$topmenu-e-10"> <a href="/login" class data-name="link" data-id="/$topmenu-e-11" data-view="/$topmenu-e-11">${_t('login')}</a></li> </ul></topmenu-component> <input data-name="/$home/name" data-id="home-e-6" data-view="home-e-6"> <h1 data-id="home-e-7" data-view="home-e-7" data-name="/$home/name"> ${_t('dtest')} ${home.name}</h1> <div data-name="/$home/name" data-id="home-e-8" data-view="home-e-8"></div> <todo-component type="component" data-name="todo" data-id="todo" data-view="/$todo"><header class="header" data-id="/$todo-e-11" data-view="/$todo-e-11"> <h1 data-id="/$todo-e-12" data-view="/$todo-e-12" data-name="/$todo/name">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="todo-myinput" placeholder="What needs to be done?" autofocus data-view="todo-myinput"> </header> <span data-id="/$todo-e-13" data-view="/$todo-e-13" data-name="/$todo/name"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="/$todo-e-14" data-view="/$todo-e-14"></div> <section class="main" data-id="/$todo-e-15" data-view="/$todo-e-15"> <label for="toggle-all" data-id="/$todo-e-16" data-view="/$todo-e-16"> <input id="toggle-all" data-events="toggle:click" class="toggle-all" type="checkbox" data-name="/$todo/items" data-id="/$todo-e-17" data-view="/$todo-e-17"> ${_t('Mark all as complete')}</label> <div id="all" class="tab selected" data-id="/$todo-e-18" data-view="/$todo-e-18"> <h3 data-id="/$todo-e-19" data-view="/$todo-e-19">${_t('All')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="/$todo-e-20"> ...loading... </ul> </div> <div id="active" class="tab" data-id="/$todo-e-21" data-view="/$todo-e-21"> <h3 data-id="/$todo-e-22" data-view="/$todo-e-22">${_t('active')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-active" data-type="list" data-id="/$todo-e-23"> </ul> </div> <div id="completed" class="tab" data-id="/$todo-e-24" data-view="/$todo-e-24"> <h3 data-id="/$todo-e-25" data-view="/$todo-e-25">${_t('completed')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-completed" data-type="list" data-id="/$todo-e-26"> </ul> </div> <footer class="footer" data-id="/$todo-e-27" data-view="/$todo-e-27"> <span class="todo-count" data-name="/$todo/tab" data-events="change" data-view="count" data-id="/$todo-e-28"></span> <ul class="filters" data-type="list" data-id="/$todo-e-29" data-view="/$todo-e-29"> <li data-id="/$todo-e-30" data-view="/$todo-e-30"> <a href="#/all" data-events="tab:click" class="selected" data-id="/$todo-e-31" data-view="/$todo-e-31">${_t('All')}</a> </li> <li data-id="/$todo-e-32" data-view="/$todo-e-32"> <a href="#/active" data-events="tab:click" data-id="/$todo-e-33" data-view="/$todo-e-33">${_t('Active')}</a> </li> <li data-id="/$todo-e-34" data-view="/$todo-e-34"> <a href="#/completed" data-events="tab:click" data-id="/$todo-e-35" data-view="/$todo-e-35">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$todo-e-36" data-view="/$todo-e-36">${_t('Clear completed')}</button> </footer> </section><style data-id="/$todo-e-38" data-view="/$todo-e-38">body input.toggle { vertical-align: middle; } body button.destroy { color: crimson; font-weight: 900; padding: 0; } body li.todo-item { list-style: decimal; } body .tab { display: none; } body .tab.selected { display: block; } body .filters li { display: inline; } body .filters li a { color: inherit; margin: 3px; padding: 3px 7px; text-decoration: none; border: 1px solid transparent; border-radius: 3px; } body .filters li a:hover { border-color: rgba(175, 47, 47, 0.1); } body .filters li a.selected { border-color: rgba(175, 47, 47, 0.2); }</style></todo-component> <footer class="info" data-id="home-e-10" data-view="home-e-10"> <p data-id="home-e-11" data-view="home-e-11">Double-click to edit a todo</p> <p data-id="home-e-12" data-view="home-e-12">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="home-e-13" data-view="home-e-13">${_t('Luke Edwards')}</a></p> <p data-id="home-e-14" data-view="home-e-14">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="home-e-15" data-view="home-e-15">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="home-e-16" data-view="home-e-16">${_t('Part of')} <a href="http://todomvc.com" data-id="home-e-17" data-view="home-e-17">${_t('TodoMVC')}</a></p> </footer> ${_t("asas")} </page>`},
       'home-e-2' : function (args) { let {change, home, _t} = args; return `<title>${_t('Willkommen home')}</title>`},
       'home-e-3' : function (args) { let {change, home, _t} = args; return `${_t('Willkommen home')}`},
       'home-e-4' : function (args) { let {change, home, _t} = args; return `<topmenu-component type="component" data-name="/$topmenu"></topmenu-component> <input data-name="/$home/name"> <h1> ${_t('dtest')} ${home.name}</h1> <div data-name="/$home/name"></div> <todo-component type="component" data-name="/$todo"></todo-component> <footer class="info"> <p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p> </footer> ${_t("asas")}`},
       'home-e-7' : function (args) { let {change, home,topmenu, _t} = args; return `${_t('dtest')} ${home.name}`},
       'home-e-10' : function (args) { let {change, home,todo,topmenu, _t} = args; return `<p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p>`},
       'home-e-11' : function (args) { let {change, home,todo,topmenu, _t} = args; return `Double-click to edit a todo`},
       'home-e-12' : function (args) { let {change, home,todo,topmenu, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a>`},
       'home-e-13' : function (args) { let {change, home,todo,topmenu, _t} = args; return `${_t('Luke Edwards')}`},
       'home-e-14' : function (args) { let {change, home,todo,topmenu, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a>`},
       'home-e-15' : function (args) { let {change, home,todo,topmenu, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
       'home-e-16' : function (args) { let {change, home,todo,topmenu, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a>`},
       'home-e-17' : function (args) { let {change, home,todo,topmenu, _t} = args; return `${_t('TodoMVC')}`} },
            "style":"","path":"/page/home.js",
         
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
