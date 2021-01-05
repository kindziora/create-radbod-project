
    import  {todo}  from "../component/todo.js";
     
    export let notFound = {
        views : {
'COMPONENT-e-2' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<h1 data-id="COMPONENT-e-3" data-view="COMPONENT-e-3">${_t('Hallo not FOUND')} ${todo.name}</h1> <section class="todoapp" data-id="COMPONENT-e-4" data-view="COMPONENT-e-4"> <todo-component data-name="todo" data-id="todo"><header class="header" data-id="/$items-e-2" data-view="/$items-e-2"> <h1 data-id="/$items-e-3" data-view="/$items-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="/$items-e-4" data-view="/$items-e-4"> </header> <span data-id="/$items-e-5" data-view="/$items-e-5"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="/$items-e-6" data-view="/$items-e-6"></div> <section class="main" data-id="/$items-e-7" data-view="/$items-e-7"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items" data-view="toggle-all"> <label for="toggle-all" data-id="/$items-e-9" data-view="/$items-e-9">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$items" data-type="list" data-id="/$items-e-10" data-view="/$items-e-10"> <li data-name="/$items/${change.index}" data-id="/$items-e-11" data-view="/$items-e-11"> <div class="view" data-id="/$items-e-12" data-view="/$items-e-12"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox" data-id="/$items-e-13" data-view="/$items-e-13">')} <label data-name="/$items/${change.index}" data-id="/$items-e-14" data-view="/$items-e-14">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div> </li> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$items-e-2" data-view="/$items-e-2">externe daten</h2> <div data-id="/$items-e-3" data-view="/$items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="/$items-e-17" data-view="/$items-e-17"> <span class="todo-count" data-id="/$items-e-18" data-view="/$items-e-18"></span> <ul class="filters" data-type="list" data-id="/$items-e-19" data-view="/$items-e-19"> <li data-id="/$items-e-20" data-view="/$items-e-20"> <a href="#/" class="selected" data-id="/$items-e-21" data-view="/$items-e-21">${_t('All')}</a> </li> <li data-id="/$items-e-22" data-view="/$items-e-22"> <a href="#/active" data-id="/$items-e-23" data-view="/$items-e-23">${_t('Active')}</a> </li> <li data-id="/$items-e-24" data-view="/$items-e-24"> <a href="#/completed" data-id="/$items-e-25" data-view="/$items-e-25">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$items-e-26" data-view="/$items-e-26">${_t('Clear completed')}</button> </footer> </section></todo-component> </section> <footer class="info" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6"> <p data-id="COMPONENT-e-7" data-view="COMPONENT-e-7">${_t('Double-click to edit a todo')}</p> <p data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-10" data-view="COMPONENT-e-10">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${_t('TodoMVC')}</a></p> </footer>`},
'COMPONENT-e-3' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Hallo not FOUND')} ${todo.name}`},
'COMPONENT-e-4' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<todo-component data-name="todo" data-id="todo"><header class="header" data-id="/$items-e-2" data-view="/$items-e-2"> <h1 data-id="/$items-e-3" data-view="/$items-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="/$items-e-4" data-view="/$items-e-4"> </header> <span data-id="/$items-e-5" data-view="/$items-e-5"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="/$items-e-6" data-view="/$items-e-6"></div> <section class="main" data-id="/$items-e-7" data-view="/$items-e-7"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items" data-view="toggle-all"> <label for="toggle-all" data-id="/$items-e-9" data-view="/$items-e-9">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$items" data-type="list" data-id="/$items-e-10" data-view="/$items-e-10"> <li data-name="/$items/${change.index}" data-id="/$items-e-11" data-view="/$items-e-11"> <div class="view" data-id="/$items-e-12" data-view="/$items-e-12"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox" data-id="/$items-e-13" data-view="/$items-e-13">')} <label data-name="/$items/${change.index}" data-id="/$items-e-14" data-view="/$items-e-14">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div> </li> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$items-e-2" data-view="/$items-e-2">externe daten</h2> <div data-id="/$items-e-3" data-view="/$items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="/$items-e-17" data-view="/$items-e-17"> <span class="todo-count" data-id="/$items-e-18" data-view="/$items-e-18"></span> <ul class="filters" data-type="list" data-id="/$items-e-19" data-view="/$items-e-19"> <li data-id="/$items-e-20" data-view="/$items-e-20"> <a href="#/" class="selected" data-id="/$items-e-21" data-view="/$items-e-21">${_t('All')}</a> </li> <li data-id="/$items-e-22" data-view="/$items-e-22"> <a href="#/active" data-id="/$items-e-23" data-view="/$items-e-23">${_t('Active')}</a> </li> <li data-id="/$items-e-24" data-view="/$items-e-24"> <a href="#/completed" data-id="/$items-e-25" data-view="/$items-e-25">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$items-e-26" data-view="/$items-e-26">${_t('Clear completed')}</button> </footer> </section></todo-component>`},
'/$items-e-2' : (args)=> { let {change, home,todo,xternal, _t} = args; return `externe daten`},
'/$items-e-3' : (args)=> { let {change, home,todo,xternal, _t} = args; return `xtern ${ xternal.name }`},
'/$items-e-5' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('hier ist nochmal der name')} ${todo.name}`},
'/$items-e-7' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items" data-view="toggle-all"> <label for="toggle-all" data-id="/$items-e-9" data-view="/$items-e-9">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$items" data-type="list" data-id="/$items-e-10" data-view="/$items-e-10"> <li data-name="/$items/${change.index}" data-id="/$items-e-11" data-view="/$items-e-11"> <div class="view" data-id="/$items-e-12" data-view="/$items-e-12"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox" data-id="/$items-e-13" data-view="/$items-e-13">')} <label data-name="/$items/${change.index}" data-id="/$items-e-14" data-view="/$items-e-14">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div> </li> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$items-e-2" data-view="/$items-e-2">externe daten</h2> <div data-id="/$items-e-3" data-view="/$items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="/$items-e-17" data-view="/$items-e-17"> <span class="todo-count" data-id="/$items-e-18" data-view="/$items-e-18"></span> <ul class="filters" data-type="list" data-id="/$items-e-19" data-view="/$items-e-19"> <li data-id="/$items-e-20" data-view="/$items-e-20"> <a href="#/" class="selected" data-id="/$items-e-21" data-view="/$items-e-21">${_t('All')}</a> </li> <li data-id="/$items-e-22" data-view="/$items-e-22"> <a href="#/active" data-id="/$items-e-23" data-view="/$items-e-23">${_t('Active')}</a> </li> <li data-id="/$items-e-24" data-view="/$items-e-24"> <a href="#/completed" data-id="/$items-e-25" data-view="/$items-e-25">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$items-e-26" data-view="/$items-e-26">${_t('Clear completed')}</button> </footer>`},
'/$items-e-9' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Mark all as complete')}`},
'/$items-e-10' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<li data-name="/$items/${change.index}" data-id="/$items-e-11" data-view="/$items-e-11"> <div class="view" data-id="/$items-e-12" data-view="/$items-e-12"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox" data-id="/$items-e-13" data-view="/$items-e-13">')} <label data-name="/$items/${change.index}" data-id="/$items-e-14" data-view="/$items-e-14">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div> </li>`},
'/$items-e-11' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<div class="view" data-id="/$items-e-12" data-view="/$items-e-12"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox" data-id="/$items-e-13" data-view="/$items-e-13">')} <label data-name="/$items/${change.index}" data-id="/$items-e-14" data-view="/$items-e-14">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div>`},
'/$items-e-12' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox" data-id="/$items-e-13" data-view="/$items-e-13">')} <label data-name="/$items/${change.index}" data-id="/$items-e-14" data-view="/$items-e-14">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button>`},
'/$items-e-14' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${change.value.label}`},
'xtern' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<h2 data-id="/$items-e-2" data-view="/$items-e-2">externe daten</h2> <div data-id="/$items-e-3" data-view="/$items-e-3"> xtern ${ xternal.name } </div>`},
'/$items-e-17' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<span class="todo-count" data-id="/$items-e-18" data-view="/$items-e-18"></span> <ul class="filters" data-type="list" data-id="/$items-e-19" data-view="/$items-e-19"> <li data-id="/$items-e-20" data-view="/$items-e-20"> <a href="#/" class="selected" data-id="/$items-e-21" data-view="/$items-e-21">${_t('All')}</a> </li> <li data-id="/$items-e-22" data-view="/$items-e-22"> <a href="#/active" data-id="/$items-e-23" data-view="/$items-e-23">${_t('Active')}</a> </li> <li data-id="/$items-e-24" data-view="/$items-e-24"> <a href="#/completed" data-id="/$items-e-25" data-view="/$items-e-25">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$items-e-26" data-view="/$items-e-26">${_t('Clear completed')}</button>`},
'/$items-e-19' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<li data-id="/$items-e-20" data-view="/$items-e-20"> <a href="#/" class="selected" data-id="/$items-e-21" data-view="/$items-e-21">${_t('All')}</a> </li> <li data-id="/$items-e-22" data-view="/$items-e-22"> <a href="#/active" data-id="/$items-e-23" data-view="/$items-e-23">${_t('Active')}</a> </li> <li data-id="/$items-e-24" data-view="/$items-e-24"> <a href="#/completed" data-id="/$items-e-25" data-view="/$items-e-25">${_t('Completed')}</a> </li>`},
'/$items-e-20' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<a href="#/" class="selected" data-id="/$items-e-21" data-view="/$items-e-21">${_t('All')}</a>`},
'/$items-e-21' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('All')}`},
'/$items-e-22' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<a href="#/active" data-id="/$items-e-23" data-view="/$items-e-23">${_t('Active')}</a>`},
'/$items-e-23' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Active')}`},
'/$items-e-24' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<a href="#/completed" data-id="/$items-e-25" data-view="/$items-e-25">${_t('Completed')}</a>`},
'/$items-e-25' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Completed')}`},
'/$items-e-26' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Clear completed')}`},
'COMPONENT-e-6' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<p data-id="COMPONENT-e-7" data-view="COMPONENT-e-7">${_t('Double-click to edit a todo')}</p> <p data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-10" data-view="COMPONENT-e-10">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${_t('TodoMVC')}</a></p>`},
'COMPONENT-e-7' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Double-click to edit a todo')}`},
'COMPONENT-e-8' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Luke Edwards')}</a>`},
'COMPONENT-e-9' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Luke Edwards')}`},
'COMPONENT-e-10' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11">${_t('Aaron Muir Hamilton')}</a>`},
'COMPONENT-e-11' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
'COMPONENT-e-12' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${_t('TodoMVC')}</a>`},
'COMPONENT-e-13' : (args)=> { let {change, home,todo,xternal, _t} = args; return `${_t('TodoMVC')}`},
'notFound' : (args)=> { let {change, home,todo,xternal, _t} = args; return `<page data-id="COMPONENT-e-2" data-view="COMPONENT-e-2"> <h1 data-id="COMPONENT-e-3" data-view="COMPONENT-e-3">${_t('Hallo not FOUND')} ${todo.name}</h1> <section class="todoapp" data-id="COMPONENT-e-4" data-view="COMPONENT-e-4"> <todo-component data-name="todo" data-id="todo"><header class="header" data-id="todo-e-2" data-view="todo-e-2"> <h1 data-id="todo-e-3" data-view="todo-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="todo-e-4" data-view="todo-e-4"> </header> <span data-id="todo-e-5" data-view="todo-e-5"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="todo-e-6" data-view="todo-e-6"></div> <section class="main" data-id="todo-e-7" data-view="todo-e-7"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items" data-view="toggle-all"> <label for="toggle-all" data-id="todo-e-9" data-view="todo-e-9">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$items" data-type="list" data-id="todo-e-10" data-view="todo-e-10"> <li data-name="/$items/${change.index}" data-id="todo-e-11" data-view="todo-e-11"> <div class="view" data-id="todo-e-12" data-view="todo-e-12"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox" data-id="todo-e-13" data-view="todo-e-13">')} <label data-name="/$items/${change.index}" data-id="todo-e-14" data-view="todo-e-14">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div> </li> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$items-e-2" data-view="/$items-e-2">externe daten</h2> <div data-id="/$items-e-3" data-view="/$items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="todo-e-17" data-view="todo-e-17"> <span class="todo-count" data-id="todo-e-18" data-view="todo-e-18"></span> <ul class="filters" data-type="list" data-id="todo-e-19" data-view="todo-e-19"> <li data-id="todo-e-20" data-view="todo-e-20"> <a href="#/" class="selected" data-id="todo-e-21" data-view="todo-e-21">${_t('All')}</a> </li> <li data-id="todo-e-22" data-view="todo-e-22"> <a href="#/active" data-id="todo-e-23" data-view="todo-e-23">${_t('Active')}</a> </li> <li data-id="todo-e-24" data-view="todo-e-24"> <a href="#/completed" data-id="todo-e-25" data-view="todo-e-25">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="todo-e-26" data-view="todo-e-26">${_t('Clear completed')}</button> </footer> </section></todo-component> </section> <footer class="info" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6"> <p data-id="COMPONENT-e-7" data-view="COMPONENT-e-7">${_t('Double-click to edit a todo')}</p> <p data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-10" data-view="COMPONENT-e-10">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${_t('TodoMVC')}</a></p> </footer> </page>`} },
        "style":"","path":"/page/notFound.js",
        
        components: {"todo-component" : todo},
        data(){
            return this.createStore("home", {name : "AK home"});
        },
        interactions(){
            return { }
        }
    }
