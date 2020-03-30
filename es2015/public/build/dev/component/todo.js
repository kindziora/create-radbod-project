
    import  {xtern}  from "./xtern.js";

    export let todo = {
        views : {
'COMPONENT-e-2' : (args)=> { let {change, todo, _t} = args; return `<h1>${_t('todos')} ${todo.name} ${todo.name} </h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus>`},
'COMPONENT-e-3' : (args)=> { let {change, todo, _t} = args; return `${_t('todos')} ${todo.name} ${todo.name}`},
'COMPONENT-e-6' : (args)=> { let {change, todo, _t} = args; return `<input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items"> <label for="toggle-all">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$items"> <li data-name="/$items/${change.index}"> <div class="view"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox">')} <label data-name="/$items/${change.index}">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy"></button> </div> </li> </ul> <xtern-component data-name="/$items"></xtern-component> <footer class="footer"> <span class="todo-count"></span> <ul class="filters"> <li> <a href="#/" class="selected">${_t('All')}</a> </li> <li> <a href="#/active">${_t('Active')}</a> </li> <li> <a href="#/completed">${_t('Completed')}</a> </li> </ul> <button class="clear-completed">${_t('Clear completed')}</button> </footer>`},
'COMPONENT-e-8' : (args)=> { let {change, todo, _t} = args; return `${_t('Mark all as complete')}`},
'COMPONENT-e-9' : (args)=> { let {change, todo, _t} = args; return `<li data-name="/$items/${change.index}"> <div class="view"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox">')} <label data-name="/$items/${change.index}">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy"></button> </div> </li>`},
'COMPONENT-e-10' : (args)=> { let {change, todo, _t} = args; return `<div class="view"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox">')} <label data-name="/$items/${change.index}">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy"></button> </div>`},
'COMPONENT-e-11' : (args)=> { let {change, todo, _t} = args; return `<input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox">')} <label data-name="/$items/${change.index}">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy"></button>`},
'COMPONENT-e-13' : (args)=> { let {change, todo, _t} = args; return `${change.value.label}`},
'COMPONENT-e-16' : (args)=> { let {change, todo,xternal, _t} = args; return `<span class="todo-count"></span> <ul class="filters"> <li> <a href="#/" class="selected">${_t('All')}</a> </li> <li> <a href="#/active">${_t('Active')}</a> </li> <li> <a href="#/completed">${_t('Completed')}</a> </li> </ul> <button class="clear-completed">${_t('Clear completed')}</button>`},
'COMPONENT-e-18' : (args)=> { let {change, todo,xternal, _t} = args; return `<li> <a href="#/" class="selected">${_t('All')}</a> </li> <li> <a href="#/active">${_t('Active')}</a> </li> <li> <a href="#/completed">${_t('Completed')}</a> </li>`},
'COMPONENT-e-19' : (args)=> { let {change, todo,xternal, _t} = args; return `<a href="#/" class="selected">${_t('All')}</a>`},
'COMPONENT-e-20' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('All')}`},
'COMPONENT-e-21' : (args)=> { let {change, todo,xternal, _t} = args; return `<a href="#/active">${_t('Active')}</a>`},
'COMPONENT-e-22' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('Active')}`},
'COMPONENT-e-23' : (args)=> { let {change, todo,xternal, _t} = args; return `<a href="#/completed">${_t('Completed')}</a>`},
'COMPONENT-e-24' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('Completed')}`},
'COMPONENT-e-25' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('Clear completed')}`},
'todo' : (args)=> { let {change, todo,xternal, _t} = args; return `<header class="header" data-id="COMPONENT-e-2" data-view="COMPONENT-e-2"> <h1 data-id="COMPONENT-e-3" data-view="COMPONENT-e-3">${_t('todos')} ${todo.name} ${todo.name} </h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="COMPONENT-e-4" data-view="COMPONENT-e-4"> </header> <div data-name="/$todo/name" data-id="COMPONENT-e-5" data-view="COMPONENT-e-5"></div> <section class="main" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items" data-view="toggle-all"> <label for="toggle-all" data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$items" data-type="list" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9"> <li data-name="/$items/${change.index}" data-id="COMPONENT-e-10" data-view="COMPONENT-e-10"> <div class="view" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11"> <input class="toggle" ${change.value.checked?`checked`:``} ${_t('type="checkbox" data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">')} <label data-name="/$items/${change.index}" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div> </li> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$items-e-2" data-view="/$items-e-2">externe daten</h2> <div data-id="/$items-e-3" data-view="/$items-e-3"> xtern ${ todo.name } </div></xtern-component> <footer class="footer" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16"> <span class="todo-count" data-id="COMPONENT-e-17" data-view="COMPONENT-e-17"></span> <ul class="filters" data-type="list" data-id="COMPONENT-e-18" data-view="COMPONENT-e-18"> <li data-id="COMPONENT-e-19" data-view="COMPONENT-e-19"> <a href="#/" class="selected" data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('All')}</a> </li> <li data-id="COMPONENT-e-21" data-view="COMPONENT-e-21"> <a href="#/active" data-id="COMPONENT-e-22" data-view="COMPONENT-e-22">${_t('Active')}</a> </li> <li data-id="COMPONENT-e-23" data-view="COMPONENT-e-23"> <a href="#/completed" data-id="COMPONENT-e-24" data-view="COMPONENT-e-24">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="COMPONENT-e-25" data-view="COMPONENT-e-25">${_t('Clear completed')}</button> </footer> </section>`} },
        "style":"","path":"/component/todo.js",
        
        components: {"xtern-component" : xtern},
        data(dataReady){
            return this.createStore("todo", { 
                name : "AK TODOS",
                items:[{
                        label: "Testdaten",
                        checked: false
                      }]
            }).load({id: 1}, dataReady);
         },
        interactions(){
            return {
                "/$todo/name" : {
                    "keyup"(sender, dataStore) { //address specific element in dom
                        dataStore.name = sender.field.getValue() + "xxx";
                    }
                },
             /*   "/$items" : {
                    "click#toggle-all"(sender, dataStore) { //address specific element in dom
                        console.log('toggle-all', sender.field.getValue());
                    }
                },
                "/$items/${change.index}": {
                    "click#destroy"(sender, dataStore) { //address specific element in dom
                        console.log('destroy', sender);
                    }
                } */
            }
        }

    }
