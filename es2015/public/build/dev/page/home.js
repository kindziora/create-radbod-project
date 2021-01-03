
    import  {todo}  from "../component/todo.js";
    import  {translations}  from "./i18n/home.js";
    import  {topmenu}  from "../component/topmenu.js";

    export let home = {
        views : {
'xtern' : (args)=> { let {change, home,todo,topmenu,xternal, _t} = args; return `<h2 data-id="/$items-e-2" data-view="/$items-e-2">externe daten</h2> <div data-id="/$items-e-3" data-view="/$items-e-3"> xtern ${ xternal.name } </div>`},
'home' : (args)=> { let {change, home,todo,topmenu,xternal, _t} = args; return `<title data-id="COMPONENT-e-2" data-view="COMPONENT-e-2">${_t('Willkommen home')}</title> <page data-id="COMPONENT-e-3" data-view="COMPONENT-e-3"> <topmenu-component data-name="topmenu" data-id="topmenu"><ul data-type="list" data-id="topmenu-e-2" data-view="topmenu-e-2"> <li data-id="topmenu-e-3" data-view="topmenu-e-3"> <a href="/home" class data-name="link" data-id="topmenu-e-4" data-view="topmenu-e-4">${_t('home')}</a></li> <li data-id="topmenu-e-5" data-view="topmenu-e-5"> <a href="/login" class data-name="link" data-id="topmenu-e-6" data-view="topmenu-e-6">${_t('login')}</a></li> </ul></topmenu-component> <h1 data-id="COMPONENT-e-5" data-view="COMPONENT-e-5"> ${_t('dtest')} ${home.name}</h1> <input data-name="/$home/name" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6"> <div data-name="/$home/name" data-id="COMPONENT-e-7" data-view="COMPONENT-e-7"></div> <todo-component data-name="todo" data-id="todo"><header class="header" data-id="todo-e-2" data-view="todo-e-2"> <h1 data-id="todo-e-3" data-view="todo-e-3">${_t('todos')} ${todo.name} ${todo.name} </h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="todo-e-4" data-view="todo-e-4"> </header> <div data-name="/$todo/name" data-id="todo-e-5" data-view="todo-e-5"></div> <section class="main" data-id="todo-e-6" data-view="todo-e-6"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items" data-view="toggle-all"> <label for="toggle-all" data-id="todo-e-8" data-view="todo-e-8">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$items" data-type="list" data-id="todo-e-9" data-view="todo-e-9"> <li data-name="/$items/${change.index}" data-id="todo-e-10" data-view="todo-e-10"> <div class="view" data-id="todo-e-11" data-view="todo-e-11"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox" data-id="todo-e-12" data-view="todo-e-12">')} <label data-name="/$items/${change.index}" data-id="todo-e-13" data-view="todo-e-13">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div> </li> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$items-e-2" data-view="/$items-e-2">externe daten</h2> <div data-id="/$items-e-3" data-view="/$items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="todo-e-16" data-view="todo-e-16"> <span class="todo-count" data-id="todo-e-17" data-view="todo-e-17"></span> <ul class="filters" data-type="list" data-id="todo-e-18" data-view="todo-e-18"> <li data-id="todo-e-19" data-view="todo-e-19"> <a href="#/" class="selected" data-id="todo-e-20" data-view="todo-e-20">${_t('All')}</a> </li> <li data-id="todo-e-21" data-view="todo-e-21"> <a href="#/active" data-id="todo-e-22" data-view="todo-e-22">${_t('Active')}</a> </li> <li data-id="todo-e-23" data-view="todo-e-23"> <a href="#/completed" data-id="todo-e-24" data-view="todo-e-24">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="todo-e-25" data-view="todo-e-25">${_t('Clear completed')}</button> </footer> </section></todo-component> <footer class="info" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9"> <p data-id="COMPONENT-e-10" data-view="COMPONENT-e-10"> ${_t('Double-click to edit a todo')} </p> <p data-id="COMPONENT-e-11" data-view="COMPONENT-e-11">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-14" data-view="COMPONENT-e-14">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-15" data-view="COMPONENT-e-15">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('TodoMVC')}</a></p> </footer> ${_t("asas")} </page>`} },
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
