
    import  {xtern}  from "./xtern.js";

    export let todo = {
        views : {
'component-1-element-2' : (args)=> { let {change, todo, _t} = args; return `<h1>${_t('todos')} ${todo.name} ${todo.name} </h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus>`},
'component-1-element-3' : (args)=> { let {change, todo, _t} = args; return `${_t('todos')} ${todo.name} ${todo.name}`},
'component-1-element-6' : (args)=> { let {change, todo, _t} = args; return `<input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items"> <label for="toggle-all">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$items"> <li data-name="/$items/${change.index}"> <div class="view"> <input class="toggle" ${change.value.checked?`checked`:``} type="checkbox"> <label data-name="/$items/${change.index}">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy"></button> </div> </li> </ul> <xtern-component data-name="/$items"></xtern-component> <footer class="footer"> <span class="todo-count"></span> <ul class="filters"> <li> <a href="#/" class="selected">${_t('All')}</a> </li> <li> <a href="#/active">${_t('Active')}</a> </li> <li> <a href="#/completed">${_t('Completed')}</a> </li> </ul> <button class="clear-completed">${_t('Clear completed')}</button> </footer>`},
'component-1-element-8' : (args)=> { let {change, todo, _t} = args; return `${_t('Mark all as complete')}`},
'component-1-element-9' : (args)=> { let {change, todo, _t} = args; return `<li data-name="/$items/${change.index}"> <div class="view"> <input class="toggle" ${change.value.checked?`checked`:``} type="checkbox"> <label data-name="/$items/${change.index}">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy"></button> </div> </li>`},
'component-1-element-10' : (args)=> { let {change, todo, _t} = args; return `<div class="view"> <input class="toggle" ${change.value.checked?`checked`:``} type="checkbox"> <label data-name="/$items/${change.index}">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy"></button> </div>`},
'component-1-element-11' : (args)=> { let {change, todo, _t} = args; return `<input class="toggle" ${change.value.checked?`checked`:``} type="checkbox"> <label data-name="/$items/${change.index}">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy"></button>`},
'component-1-element-13' : (args)=> { let {change, todo, _t} = args; return `${change.value.label}`},
'component-1-element-16' : (args)=> { let {change, todo,xternal, _t} = args; return `<span class="todo-count"></span> <ul class="filters"> <li> <a href="#/" class="selected">${_t('All')}</a> </li> <li> <a href="#/active">${_t('Active')}</a> </li> <li> <a href="#/completed">${_t('Completed')}</a> </li> </ul> <button class="clear-completed">${_t('Clear completed')}</button>`},
'component-1-element-18' : (args)=> { let {change, todo,xternal, _t} = args; return `<li> <a href="#/" class="selected">${_t('All')}</a> </li> <li> <a href="#/active">${_t('Active')}</a> </li> <li> <a href="#/completed">${_t('Completed')}</a> </li>`},
'component-1-element-19' : (args)=> { let {change, todo,xternal, _t} = args; return `<a href="#/" class="selected">${_t('All')}</a>`},
'component-1-element-20' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('All')}`},
'component-1-element-21' : (args)=> { let {change, todo,xternal, _t} = args; return `<a href="#/active">${_t('Active')}</a>`},
'component-1-element-22' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('Active')}`},
'component-1-element-23' : (args)=> { let {change, todo,xternal, _t} = args; return `<a href="#/completed">${_t('Completed')}</a>`},
'component-1-element-24' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('Completed')}`},
'component-1-element-25' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('Clear completed')}`},
'todo' : (args)=> { let {change, todo,xternal, _t} = args; return `<header class="header" data-id="component-1-element-2" data-view="component-1-element-2"> <h1 data-id="component-1-element-3" data-view="component-1-element-3">${_t('todos')} ${todo.name} ${todo.name} </h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="component-1-element-4" data-view="component-1-element-4"> </header> <div data-name="/$todo/name" data-id="component-1-element-5" data-view="component-1-element-5"></div> <section class="main" data-id="component-1-element-6" data-view="component-1-element-6"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$items" data-view="toggle-all"> <label for="toggle-all" data-id="component-1-element-8" data-view="component-1-element-8">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$items" data-type="list" data-id="component-1-element-9" data-view="component-1-element-9"> <li data-name="/$items/${change.index}" data-id="component-1-element-10" data-view="component-1-element-10"> <div class="view" data-id="component-1-element-11" data-view="component-1-element-11"> <input class="toggle" ${change.value.checked?`checked`:``} type="checkbox" data-id="component-1-element-12" data-view="component-1-element-12"> <label data-name="/$items/${change.index}" data-id="component-1-element-13" data-view="component-1-element-13">${change.value.label}</label> <button class="destroy" data-name="/$items/${change.index}" data-id="destroy" data-view="destroy"></button> </div> </li> </ul> <xtern-component data-name="xtern" data-id="component-1"><h2 data-id="component-1-element-2" data-view="component-1-element-2">externe daten</h2> <div data-id="component-1-element-3" data-view="component-1-element-3"> xtern ${ todo.name } </div></xtern-component> <footer class="footer" data-id="component-1-element-16" data-view="component-1-element-16"> <span class="todo-count" data-id="component-1-element-17" data-view="component-1-element-17"></span> <ul class="filters" data-type="list" data-id="component-1-element-18" data-view="component-1-element-18"> <li data-id="component-1-element-19" data-view="component-1-element-19"> <a href="#/" class="selected" data-id="component-1-element-20" data-view="component-1-element-20">${_t('All')}</a> </li> <li data-id="component-1-element-21" data-view="component-1-element-21"> <a href="#/active" data-id="component-1-element-22" data-view="component-1-element-22">${_t('Active')}</a> </li> <li data-id="component-1-element-23" data-view="component-1-element-23"> <a href="#/completed" data-id="component-1-element-24" data-view="component-1-element-24">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="component-1-element-25" data-view="component-1-element-25">${_t('Clear completed')}</button> </footer> </section>`} },
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
                "/$items" : {
                    "click#toggle-all"(sender, dataStore) { //address specific element in dom
                        console.log('toggle-all', sender.field.getValue());
                    }
                },
                "/$items/${change.index}": {
                    "click#destroy"(sender, dataStore) { //address specific element in dom
                        console.log('destroy', sender);
                    }
                }
            } 
        }

    }
