
    import  {xtern}  from "./xtern.js";

    export let todo = {
        views : {
'COMPONENT-e-2' : (args)=> { let {change, todo,xternal, _t} = args; return `<h1 data-id="COMPONENT-e-3" data-view="COMPONENT-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="myinput" placeholder="What needs to be done?" autofocus data-view="myinput">`},
'COMPONENT-e-3' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('todos')} ${todo.name}`},
'COMPONENT-e-5' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('hier ist nochmal der name')} ${todo.name}`},
'COMPONENT-e-7' : (args)=> { let {change, todo,xternal, _t} = args; return `<input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$todo/items" data-view="toggle-all"> <label for="toggle-all" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="COMPONENT-e-10"> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$todo/items-e-2" data-view="/$todo/items-e-2">externe daten</h2> <div data-id="/$todo/items-e-3" data-view="/$todo/items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="COMPONENT-e-12" data-view="COMPONENT-e-12"> <span class="todo-count" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13"></span> <ul class="filters" data-type="list" data-id="COMPONENT-e-14" data-view="COMPONENT-e-14"> <li data-id="COMPONENT-e-15" data-view="COMPONENT-e-15"> <a href="#/" class="selected" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('All')}</a> </li> <li data-id="COMPONENT-e-17" data-view="COMPONENT-e-17"> <a href="#/active" data-id="COMPONENT-e-18" data-view="COMPONENT-e-18">${_t('Active')}</a> </li> <li data-id="COMPONENT-e-19" data-view="COMPONENT-e-19"> <a href="#/completed" data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="COMPONENT-e-21" data-view="COMPONENT-e-21">${_t('Clear completed')}</button> </footer>`},
'COMPONENT-e-9' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('Mark all as complete')}`},
'/$todo/items-e-2' : (args)=> { let {change, todo,xternal, _t} = args; return `externe daten`},
'/$todo/items-e-3' : (args)=> { let {change, todo,xternal, _t} = args; return `xtern ${ xternal.name }`},
'COMPONENT-e-12' : (args)=> { let {change, todo,xternal, _t} = args; return `<span class="todo-count" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13"></span> <ul class="filters" data-type="list" data-id="COMPONENT-e-14" data-view="COMPONENT-e-14"> <li data-id="COMPONENT-e-15" data-view="COMPONENT-e-15"> <a href="#/" class="selected" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('All')}</a> </li> <li data-id="COMPONENT-e-17" data-view="COMPONENT-e-17"> <a href="#/active" data-id="COMPONENT-e-18" data-view="COMPONENT-e-18">${_t('Active')}</a> </li> <li data-id="COMPONENT-e-19" data-view="COMPONENT-e-19"> <a href="#/completed" data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="COMPONENT-e-21" data-view="COMPONENT-e-21">${_t('Clear completed')}</button>`},
'COMPONENT-e-14' : (args)=> { let {change, todo,xternal, _t} = args; return `<li data-id="COMPONENT-e-15" data-view="COMPONENT-e-15"> <a href="#/" class="selected" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('All')}</a> </li> <li data-id="COMPONENT-e-17" data-view="COMPONENT-e-17"> <a href="#/active" data-id="COMPONENT-e-18" data-view="COMPONENT-e-18">${_t('Active')}</a> </li> <li data-id="COMPONENT-e-19" data-view="COMPONENT-e-19"> <a href="#/completed" data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('Completed')}</a> </li>`},
'COMPONENT-e-15' : (args)=> { let {change, todo,xternal, _t} = args; return `<a href="#/" class="selected" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('All')}</a>`},
'COMPONENT-e-16' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('All')}`},
'COMPONENT-e-17' : (args)=> { let {change, todo,xternal, _t} = args; return `<a href="#/active" data-id="COMPONENT-e-18" data-view="COMPONENT-e-18">${_t('Active')}</a>`},
'COMPONENT-e-18' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('Active')}`},
'COMPONENT-e-19' : (args)=> { let {change, todo,xternal, _t} = args; return `<a href="#/completed" data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('Completed')}</a>`},
'COMPONENT-e-20' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('Completed')}`},
'COMPONENT-e-21' : (args)=> { let {change, todo,xternal, _t} = args; return `${_t('Clear completed')}`},
'todo' : (args)=> { let {change, todo,xternal, _t} = args; return `<header class="header" data-id="COMPONENT-e-2" data-view="COMPONENT-e-2"> <h1 data-id="COMPONENT-e-3" data-view="COMPONENT-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="myinput" placeholder="What needs to be done?" autofocus data-view="myinput"> </header> <span data-id="COMPONENT-e-5" data-view="COMPONENT-e-5"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6"></div> <section class="main" data-id="COMPONENT-e-7" data-view="COMPONENT-e-7"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$todo/items" data-view="toggle-all"> <label for="toggle-all" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="COMPONENT-e-10"> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="xtern-e-2" data-view="xtern-e-2">externe daten</h2> <div data-id="xtern-e-3" data-view="xtern-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="COMPONENT-e-12" data-view="COMPONENT-e-12"> <span class="todo-count" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13"></span> <ul class="filters" data-type="list" data-id="COMPONENT-e-14" data-view="COMPONENT-e-14"> <li data-id="COMPONENT-e-15" data-view="COMPONENT-e-15"> <a href="#/" class="selected" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('All')}</a> </li> <li data-id="COMPONENT-e-17" data-view="COMPONENT-e-17"> <a href="#/active" data-id="COMPONENT-e-18" data-view="COMPONENT-e-18">${_t('Active')}</a> </li> <li data-id="COMPONENT-e-19" data-view="COMPONENT-e-19"> <a href="#/completed" data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="COMPONENT-e-21" data-view="COMPONENT-e-21">${_t('Clear completed')}</button> </footer> </section>`},
'todo-list' : function (args){
                let {change, todo, xternal, _t} = args;
                return `
                <li data-name="/$todo/items/${change.index}" data-type="list-item">
                    <input class="toggle" ${change.value.checked?`checked`:``} type="checkbox" />
                    <label data-name="/$todo/items/${change.index}">${change.value.label}</label>
                    <button class="destroy" data-name="/$todo/deleteItem" data-index="${change.index}"></button>
                </li>`;
            } },
            "style":"","path":"/component/todo.js",
        components: {"xtern-component" : xtern},
        data(dataReady){ 
            
            return this.createStore("todo", { }).find({id: 1}, function(data){
                
                console.log("LOAD DATA todo", data);
                if(typeof dataReady ==="function")
                     dataReady(data);
                 
            });
          
         },
        interactions(){
            return {
                "/$todo/deleteItem" :{
                    "click"(sender, dataStore) { //address specific element in dom
                        let index = parseInt(sender.field.$el.getAttribute("data-index"));
                        dataStore.items.some((v,k)=> {
                            if(v.id == index) {
                                delete dataStore.items[k];
                                return true;
                            }
                        });
                    }
                },
                "/$todo/name" : {
                    "keyup#myinput"(sender, dataStore) { //address specific element in dom
                        dataStore.name = sender.field.getValue();

                        if(sender.ev.keyCode === 13){
                            dataStore.items.push({
                                id: dataStore.items.length,
                                label: dataStore.name,
                                checked: false
                            });
                        }
                    }
                }
            }
        }

    }
