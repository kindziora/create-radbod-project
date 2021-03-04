
    import  { todo }  from "../component/todo.js";
    import  { translations }  from "./i18n/home.js";
    
    export let home = {
        views : {
                   'home' : function(args){ let {change, form,home,todo,topmenu, _t} = args; return `<extend-head data-id="home-e-1" data-view="home-e-1"> <title data-id="home-e-2" data-view="home-e-2">${_t('Willkommen home')}</title> </extend-head> <page data-id="home-e-3" data-view="home-e-3"> <topmenu-component type="component" data-name="/$topmenu"></topmenu-component> <h1 data-id="home-e-5" data-view="home-e-5" data-name="/$home/name"> ${_t('dtest')} ${home.name}</h1> <input data-name="/$home/name" data-id="home-e-6" data-view="home-e-6"> <div data-name="/$home/name" data-id="home-e-7" data-view="home-e-7"></div> <todo-component type="component" data-name="todo" data-id="todo" data-view="/$todo"><header class="header" data-id="/$todo-e-1" data-view="/$todo-e-1"> <h1 data-id="/$todo-e-2" data-view="/$todo-e-2" data-name="/$todo/name">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="todo-myinput" placeholder="What needs to be done?" autofocus data-view="todo-myinput"> </header> <span data-id="/$todo-e-4" data-view="/$todo-e-4" data-name="/$todo/name"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="/$todo-e-5" data-view="/$todo-e-5"></div> <section class="main" data-id="/$todo-e-6" data-view="/$todo-e-6"> <label for="toggle-all" data-id="/$todo-e-7" data-view="/$todo-e-7"> <input id="toggle-all" data-events="toggle:click" class="toggle-all" type="checkbox" data-name="/$todo/items" data-id="/$todo-e-8" data-view="/$todo-e-8"> ${_t('Mark all as complete')}</label> <div id="all" class="tab selected" data-id="/$todo-e-9" data-view="/$todo-e-9"> <h3 data-id="/$todo-e-10" data-view="/$todo-e-10">${_t('All')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="/$todo-e-11"> ...loading... </ul> </div> <div id="active" class="tab" data-id="/$todo-e-12" data-view="/$todo-e-12"> <h3 data-id="/$todo-e-13" data-view="/$todo-e-13">${_t('active')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-active" data-type="list" data-id="/$todo-e-14"> </ul> </div> <div id="completed" class="tab" data-id="/$todo-e-15" data-view="/$todo-e-15"> <h3 data-id="/$todo-e-16" data-view="/$todo-e-16">${_t('completed')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-completed" data-type="list" data-id="/$todo-e-17"> </ul> </div> <footer class="footer" data-id="/$todo-e-18" data-view="/$todo-e-18"> <span class="todo-count" data-name="/$todo/tab" data-id="/$todo-e-19" data-view="/$todo-e-19"><strong data-name="/$todo/items" data-view="count" data-id="/$todo-e-20"></strong></span> <ul class="filters" data-type="list" data-id="/$todo-e-21" data-view="/$todo-e-21"> <li data-id="/$todo-e-22" data-view="/$todo-e-22"> <a href="#/all" data-events="tab:click" class="selected" data-id="/$todo-e-23" data-view="/$todo-e-23">${_t('All')}</a> </li> <li data-id="/$todo-e-24" data-view="/$todo-e-24"> <a href="#/active" data-events="tab:click" data-id="/$todo-e-25" data-view="/$todo-e-25">${_t('Active')}</a> </li> <li data-id="/$todo-e-26" data-view="/$todo-e-26"> <a href="#/completed" data-events="tab:click" data-id="/$todo-e-27" data-view="/$todo-e-27">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$todo-e-28" data-view="/$todo-e-28">${_t('Clear completed')}</button> </footer> </section><style data-id="/$todo-e-66" data-view="/$todo-e-66">body input.toggle { vertical-align: middle; } body button.destroy { color: crimson; font-weight: 900; padding: 0; } body li.todo-item { list-style: decimal; } body .tab { display: none; } body .tab.selected { display: block; } body .filters li { display: inline; } body .filters li a { color: inherit; margin: 3px; padding: 3px 7px; text-decoration: none; border: 1px solid transparent; border-radius: 3px; } body .filters li a:hover { border-color: rgba(175, 47, 47, 0.1); } body .filters li a.selected { border-color: rgba(175, 47, 47, 0.2); }</style></todo-component> <footer class="info" data-id="home-e-9" data-view="home-e-9"> </footer> ${_t("asas")} </page>`},
                   'home-e-1' : function (args) { let {change, form,home,todo,topmenu, _t} = args; return `<title>${_t('Willkommen home')}</title>`},
                   'home-e-2' : function (args) { let {change, form,home,todo,topmenu, _t} = args; return `${_t('Willkommen home')}`},
                   'home-e-3' : function (args) { let {change, form,home,todo,topmenu, _t} = args; return `<topmenu-component type="component" data-name="/$topmenu"></topmenu-component> <h1> ${_t('dtest')} ${home.name}</h1> <input data-name="/$home/name"> <div data-name="/$home/name"></div> <todo-component type="component" data-name="/$todo"></todo-component> <footer class="info"> </footer> ${_t("asas")}`},
                   'home-e-5' : function (args) { let {change, form,home,todo,topmenu, _t} = args; return `${_t('dtest')} ${home.name}`} },
            "style":"","path":"/page/home.js",
        
        mounted() {
            console.log("mounted", this);
        },
        components: 
             { "todo-component": todo, "topmenu-component": "topmenu#mainmenu"}
        ,
        data() {
            return this.createStore("home", { name: "AK home" });
        },
        interactions() {
            return {
                "/$home/name": {
                    "keyup"(sender, data) { //address specific element in dom
                        data.name = sender.field.getValue();
                    }
                }
            }
        },
        translations(language) {
            return translations[language];
        }
    }
