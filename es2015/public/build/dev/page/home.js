
    import  {todo}  from "../component/todo.js";
    import  {translations}  from "./i18n/home.js";


    export let home = {
        views : {
'home' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<h1>${_t('Hallo')} ${home.name}</h1> <input data-name="$home/name" data-id="element-2" data-view="element-2"> <section class="todoapp"> <todo-component data-name="todo" data-id="component-1"><header class="header"> <h1>todos ${todo.name} ${todo.name} </h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="element-2" data-view="element-2"> </header> <div data-name="/$todo" data-id="element-3" data-view="element-3"></div> <section class="main"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items" data-view="toggle-all"> <label for="toggle-all">Mark all as complete</label> <ul class="todo-list" data-name="/$items" data-type="list" data-id="element-5" data-view="element-5"> <li data-name="/$items/${change.index}" data-id="element-6" data-view="element-6"> <div class="view"> <input class="toggle" ${change.value.checked?`checked`:``} type="checkbox"> <label data-name="/$items/${change.index}" data-id="element-7" data-view="element-7">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div> </li> </ul> <xtern-component data-name="xtern" data-id="component-1"><h2>externe daten</h2> <div> xtern ${ todo.name } </div></xtern-component> <footer class="footer"> <span class="todo-count"></span> <ul class="filters"> <li> <a href="#/" class="selected">All</a> </li> <li> <a href="#/active">Active</a> </li> <li> <a href="#/completed">Completed</a> </li> </ul> <button class="clear-completed">Clear completed</button> </footer> </section></todo-component> </section> <div data-name="$home/name" data-id="element-4" data-view="element-4"> </div> <footer class="info"> <p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p> </footer> ${_t("asas")}`} },
        "style":"body h1 { font-size: 3em; }","path":"/page/home.js",
         
        components: {"todo-component" : todo},
        data(){
            return this.createStore("home", {name : "AK home"});
        },
        interactions(){
            return { }
        },
        translations(language){
            return translations[language];
        }
    }
