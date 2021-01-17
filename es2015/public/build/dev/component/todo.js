
    import  {xtern}  from "./xtern.js";

    export let todo = {
        views : {
       'todo' : function(args){ let {change, todo,xternal, _t} = args; return `<header class="header" data-id="todo-e-2" data-view="todo-e-2"> <h1 data-id="todo-e-3" data-view="todo-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="todo-myinput" placeholder="What needs to be done?" autofocus data-view="todo-myinput"> </header> <span data-id="todo-e-5" data-view="todo-e-5"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="todo-e-6" data-view="todo-e-6"></div> <section class="main" data-id="todo-e-7" data-view="todo-e-7"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$todo/items"> <label for="toggle-all" data-id="todo-e-8" data-view="todo-e-8">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="todo-e-9"> ...loading... </ul> <xtern-component type="component" data-name="xtern" data-id="xtern"><h2 data-id="/$todo/items-e-2" data-view="/$todo/items-e-2">externe daten</h2> <div data-id="/$todo/items-e-3" data-view="/$todo/items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="todo-e-11" data-view="todo-e-11"> <span class="todo-count" data-id="todo-e-12" data-view="todo-e-12"></span> <ul class="filters" data-type="list" data-id="todo-e-13" data-view="todo-e-13"> <li data-id="todo-e-14" data-view="todo-e-14"> <a href="#/" class="selected" data-id="todo-e-15" data-view="todo-e-15">${_t('All')}</a> </li> <li data-id="todo-e-16" data-view="todo-e-16"> <a href="#/active" data-id="todo-e-17" data-view="todo-e-17">${_t('Active')}</a> </li> <li data-id="todo-e-18" data-view="todo-e-18"> <a href="#/completed" data-id="todo-e-19" data-view="todo-e-19">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="todo-e-20" data-view="todo-e-20">${_t('Clear completed')}</button> </footer> </section>`},
       'todo-e-2' : function (args) { let {change, todo, _t} = args; return `<h1>${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="todo-myinput" placeholder="What needs to be done?" autofocus>`},
       'todo-e-3' : function (args) { let {change, todo, _t} = args; return `${_t('todos')} ${todo.name}`},
       'todo-e-5' : function (args) { let {change, todo, _t} = args; return `${_t('hier ist nochmal der name')} ${todo.name}`},
       'todo-e-7' : function (args) { let {change, todo, _t} = args; return `<input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$todo/items"> <label for="toggle-all">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list"> ...loading... </ul> <xtern-component type="component" data-name="/$todo/items"></xtern-component> <footer class="footer"> <span class="todo-count"></span> <ul class="filters"> <li> <a href="#/" class="selected">${_t('All')}</a> </li> <li> <a href="#/active">${_t('Active')}</a> </li> <li> <a href="#/completed">${_t('Completed')}</a> </li> </ul> <button class="clear-completed">${_t('Clear completed')}</button> </footer>`},
       'todo-e-8' : function (args) { let {change, todo, _t} = args; return `${_t('Mark all as complete')}`},
       'todo-e-9' : function (args) { let {change, todo, _t} = args; return `...loading...`},
       'todo-e-11' : function (args) { let {change, todo,xternal, _t} = args; return `<span class="todo-count"></span> <ul class="filters"> <li> <a href="#/" class="selected">${_t('All')}</a> </li> <li> <a href="#/active">${_t('Active')}</a> </li> <li> <a href="#/completed">${_t('Completed')}</a> </li> </ul> <button class="clear-completed">${_t('Clear completed')}</button>`},
       'todo-e-13' : function (args) { let {change, todo,xternal, _t} = args; return `<li> <a href="#/" class="selected">${_t('All')}</a> </li> <li> <a href="#/active">${_t('Active')}</a> </li> <li> <a href="#/completed">${_t('Completed')}</a> </li>`},
       'todo-e-14' : function (args) { let {change, todo,xternal, _t} = args; return `<a href="#/" class="selected">${_t('All')}</a>`},
       'todo-e-15' : function (args) { let {change, todo,xternal, _t} = args; return `${_t('All')}`},
       'todo-e-16' : function (args) { let {change, todo,xternal, _t} = args; return `<a href="#/active">${_t('Active')}</a>`},
       'todo-e-17' : function (args) { let {change, todo,xternal, _t} = args; return `${_t('Active')}`},
       'todo-e-18' : function (args) { let {change, todo,xternal, _t} = args; return `<a href="#/completed">${_t('Completed')}</a>`},
       'todo-e-19' : function (args) { let {change, todo,xternal, _t} = args; return `${_t('Completed')}`},
       'todo-e-20' : function (args) { let {change, todo,xternal, _t} = args; return `${_t('Clear completed')}`},
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
                    "keyup#todo-myinput"(sender, dataStore) { //address specific element in dom
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

