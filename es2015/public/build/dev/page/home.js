
    import  {todo}  from "../component/todo.js";
    import  {translations}  from "./i18n/home.js";


    export let home = {
        views : {
'component-1-element-2' : (args)=> { let {change, home, _t} = args; return `${_t('d')} ${home.name}`},
'component-1-element-6' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<p> Double-click to edit a todo </p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p>`},
'component-1-element-7' : (args)=> { let {change, home,todo,xternal, _t} = args; return `Double-click to edit a todo`},
'component-1-element-8' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a>`},
'component-1-element-9' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Luke Edwards')}`},
'component-1-element-10' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a>`},
'component-1-element-11' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
'component-1-element-12' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a>`},
'component-1-element-13' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('TodoMVC')}`},
'home' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<h1 data-id="component-1-element-2" data-view="component-1-element-2"> ${_t('d')} ${home.name}</h1> <input data-name="/$home/name" data-id="component-1-element-3" data-view="component-1-element-3"> <div data-name="/$home/name" data-id="component-1-element-4" data-view="component-1-element-4"></div> <todo-component data-name="todo" data-id="component-1"><header class="header" data-id="component-1-element-2" data-view="component-1-element-2"> <h1 data-id="component-1-element-3" data-view="component-1-element-3">todos ${todo.name} ${todo.name} </h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="component-1-element-4" data-view="component-1-element-4"> </header> <div data-name="/$todo/name" data-id="component-1-element-5" data-view="component-1-element-5"></div> <section class="main" data-id="component-1-element-6" data-view="component-1-element-6"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items" data-view="toggle-all"> <label for="toggle-all" data-id="component-1-element-8" data-view="component-1-element-8">Mark all as complete</label> <ul class="todo-list" data-name="/$items" data-type="list" data-id="component-1-element-9" data-view="component-1-element-9"> <li data-name="/$items/${change.index}" data-id="component-1-element-10" data-view="component-1-element-10"> <div class="view" data-id="component-1-element-11" data-view="component-1-element-11"> <input class="toggle" ${change.value.checked?`checked`:``} type="checkbox" data-id="component-1-element-12" data-view="component-1-element-12"> <label data-name="/$items/${change.index}" data-id="component-1-element-13" data-view="component-1-element-13">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div> </li> </ul> <xtern-component data-name="xtern" data-id="component-1"><h2 data-id="component-1-element-2" data-view="component-1-element-2">externe daten</h2> <div data-id="component-1-element-3" data-view="component-1-element-3"> xtern ${ todo.name } </div></xtern-component> <footer class="footer" data-id="component-1-element-16" data-view="component-1-element-16"> <span class="todo-count" data-id="component-1-element-17" data-view="component-1-element-17"></span> <ul class="filters" data-type="list" data-id="component-1-element-18" data-view="component-1-element-18"> <li data-id="component-1-element-19" data-view="component-1-element-19"> <a href="#/" class="selected" data-id="component-1-element-20" data-view="component-1-element-20">All</a> </li> <li data-id="component-1-element-21" data-view="component-1-element-21"> <a href="#/active" data-id="component-1-element-22" data-view="component-1-element-22">Active</a> </li> <li data-id="component-1-element-23" data-view="component-1-element-23"> <a href="#/completed" data-id="component-1-element-24" data-view="component-1-element-24">Completed</a> </li> </ul> <button class="clear-completed" data-id="component-1-element-25" data-view="component-1-element-25">Clear completed</button> </footer> </section></todo-component> <footer class="info" data-id="component-1-element-6" data-view="component-1-element-6"> <p data-id="component-1-element-7" data-view="component-1-element-7"> Double-click to edit a todo </p> <p data-id="component-1-element-8" data-view="component-1-element-8">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="component-1-element-9" data-view="component-1-element-9">${_t('Luke Edwards')}</a></p> <p data-id="component-1-element-10" data-view="component-1-element-10">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="component-1-element-11" data-view="component-1-element-11">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="component-1-element-12" data-view="component-1-element-12">${_t('Part of')} <a href="http://todomvc.com" data-id="component-1-element-13" data-view="component-1-element-13">${_t('TodoMVC')}</a></p> </footer> ${_t("asas")}`} },
        "style":"h1{ font-size:2em; }","path":"/page/home.js",
         
        components: {"todo-component" : todo},
        data(){
            return this.createStore("home", {name : "AK home"});
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
