
    /**
     * @TODO
     * 
     **/
    export let todo = {
        views : {
                   'todo-e-1' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<h1>${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="todo-myinput" placeholder="What needs to be done?" autofocus>`},
                   'todo-e-2' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `${_t('todos')} ${todo.name}`},
                   'todo-e-4' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `${_t('hier ist nochmal der name')} ${todo.name}`},
                   'todo-e-6' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<label for="toggle-all"> <input id="toggle-all" data-events="toggle:click" class="toggle-all" type="checkbox" data-name="/$todo/items"> ${_t('Mark all as complete')}</label> <div id="all" class="tab selected"> <h3>${_t('All')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list"> ${_t('...loading...')} </ul> </div> <div id="active" class="tab"> <h3>${_t('active')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-active"> </ul> </div> <div id="completed" class="tab"> <h3>${_t('completed')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-completed"> </ul> </div> <footer class="footer"> <span class="todo-count" data-name="/$todo/tab"><strong data-name="/$todo/items" data-view="count"></strong></span> <ul class="filters"> <li> <a href="#/all" data-events="tab:click" class="selected">${_t('All')}</a> </li> <li> <a href="#/active" data-events="tab:click">${_t('Active')}</a> </li> <li> <a href="#/completed" data-events="tab:click">${_t('Completed')}</a> </li> </ul> <button class="clear-completed">${_t('Clear completed')}</button> </footer>`},
                   'todo-e-7' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<input id="toggle-all" data-events="toggle:click" class="toggle-all" type="checkbox" data-name="/$todo/items"> ${_t('Mark all as complete')}`},
                   'todo-e-9' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<h3>${_t('All')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list"> ${_t('...loading...')} </ul>`},
                   'todo-e-10' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `${_t('All')}`},
                   'todo-e-11' : function (args) {
                let { change, todo, _t } = args;
                return `<li data-name="/$todo/items/${change.value.id}" data-type="list-item" class="todo-item">
                    <input class="toggle" ${change.value.checked ? `checked` : ``} type="checkbox" data-name="/$todo/clickItem" data-index="${change.value.id}" />
                    <label contenteditable="true" data-events="name:input" data-index="${change.value.id}" data-name="/$todo/items/${change.value.id}">${change.value.label}</label>
                    <button class="destroy" data-name="/$todo/deleteItem" data-index="${change.value.id}">&#10007;</button>
                </li>`;
            },
                   'todo-e-12' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<h3>${_t('active')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-active"> </ul>`},
                   'todo-e-13' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `${_t('active')}`},
                   'todo-e-14' : function (args) {
                let { change, todo, _t } = args;
                return !change.value.checked ? this.dom.views["todo-list"].call(this, args) : "";
            },
                   'todo-e-15' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<h3>${_t('completed')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-completed"> </ul>`},
                   'todo-e-16' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `${_t('completed')}`},
                   'todo-e-17' : function (args) {
                let { change, todo, _t } = args;
                return change.value.checked ? this.dom.views["todo-list"].call(this, args) : "";
            },
                   'todo-e-18' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<span class="todo-count" data-name="/$todo/tab"><strong data-name="/$todo/items" data-view="count"></strong></span> <ul class="filters"> <li> <a href="#/all" data-events="tab:click" class="selected">${_t('All')}</a> </li> <li> <a href="#/active" data-events="tab:click">${_t('Active')}</a> </li> <li> <a href="#/completed" data-events="tab:click">${_t('Completed')}</a> </li> </ul> <button class="clear-completed">${_t('Clear completed')}</button>`},
                   'todo-e-19' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<strong data-name="/$todo/items" data-view="count"></strong>`},
                   'todo-e-20' : function (args) {
                switch (args.todo.tab) {
                    case "all": return args.todo.items.filter((i) => i).length;
                    case "active": return args.todo.items.filter((i) => !i.checked).length;
                    case "completed": return args.todo.items.filter((i) => i.checked).length;
                }
            },
                   'todo-e-21' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<li> <a href="#/all" data-events="tab:click" class="selected">${_t('All')}</a> </li> <li> <a href="#/active" data-events="tab:click">${_t('Active')}</a> </li> <li> <a href="#/completed" data-events="tab:click">${_t('Completed')}</a> </li>`},
                   'todo-e-22' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<a href="#/all" data-events="tab:click" class="selected">${_t('All')}</a>`},
                   'todo-e-23' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `${_t('All')}`},
                   'todo-e-24' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<a href="#/active" data-events="tab:click">${_t('Active')}</a>`},
                   'todo-e-25' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `${_t('Active')}`},
                   'todo-e-26' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<a href="#/completed" data-events="tab:click">${_t('Completed')}</a>`},
                   'todo-e-27' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `${_t('Completed')}`},
                   'todo-e-28' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `${_t('Clear completed')}`},
                   'todo' : function (args) { let {change, backendtopmenu,bottommenu,home,login,modal,signin,tasklist,textlist,todo,topmenu, _t, env} = args; return `<header class="header" data-id="todo-e-1" data-view="todo-e-1"> <h1 data-id="todo-e-2" data-view="todo-e-2" data-name="/$todo/name">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="todo-myinput" placeholder="What needs to be done?" autofocus data-view="todo-myinput"> </header> <span data-id="todo-e-4" data-view="todo-e-4" data-name="/$todo/name"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="todo-e-5" data-view="todo-e-5"></div> <section id="todos" data-id="todo-e-6" data-view="todo-e-6"> <label for="toggle-all" data-id="todo-e-7" data-view="todo-e-7"> <input id="toggle-all" data-events="toggle:click" class="toggle-all" type="checkbox" data-name="/$todo/items" data-id="todo-e-8" data-view="todo-e-8"> ${_t('Mark all as complete')}</label> <div id="all" class="tab selected" data-id="todo-e-9" data-view="todo-e-9"> <h3 data-id="todo-e-10" data-view="todo-e-10">${_t('All')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="todo-e-11"> ${_t('...loading...')} </ul> </div> <div id="active" class="tab" data-id="todo-e-12" data-view="todo-e-12"> <h3 data-id="todo-e-13" data-view="todo-e-13">${_t('active')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-active" data-type="list" data-id="todo-e-14"> </ul> </div> <div id="completed" class="tab" data-id="todo-e-15" data-view="todo-e-15"> <h3 data-id="todo-e-16" data-view="todo-e-16">${_t('completed')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-completed" data-type="list" data-id="todo-e-17"> </ul> </div> <footer class="footer" data-id="todo-e-18" data-view="todo-e-18"> <span class="todo-count" data-name="/$todo/tab" data-id="todo-e-19" data-view="todo-e-19"><strong data-name="/$todo/items" data-view="count" data-id="todo-e-20"></strong></span> <ul class="filters" data-type="list" data-id="todo-e-21" data-view="todo-e-21"> <li data-id="todo-e-22" data-view="todo-e-22"> <a href="#/all" data-events="tab:click" class="selected" data-id="todo-e-23" data-view="todo-e-23">${_t('All')}</a> </li> <li data-id="todo-e-24" data-view="todo-e-24"> <a href="#/active" data-events="tab:click" data-id="todo-e-25" data-view="todo-e-25">${_t('Active')}</a> </li> <li data-id="todo-e-26" data-view="todo-e-26"> <a href="#/completed" data-events="tab:click" data-id="todo-e-27" data-view="todo-e-27">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="todo-e-28" data-view="todo-e-28">${_t('Clear completed')}</button> </footer> </section>`},
                   'count' : function (args) {
                switch (args.todo.tab) {
                    case "all": return args.todo.items.filter((i) => i).length;
                    case "active": return args.todo.items.filter((i) => !i.checked).length;
                    case "completed": return args.todo.items.filter((i) => i.checked).length;
                }
            },
                   'todo-list' : function (args) {
                let { change, todo, _t } = args;
                return `<li data-name="/$todo/items/${change.value.id}" data-type="list-item" class="todo-item">
                    <input class="toggle" ${change.value.checked ? `checked` : ``} type="checkbox" data-name="/$todo/clickItem" data-index="${change.value.id}" />
                    <label contenteditable="true" data-events="name:input" data-index="${change.value.id}" data-name="/$todo/items/${change.value.id}">${change.value.label}</label>
                    <button class="destroy" data-name="/$todo/deleteItem" data-index="${change.value.id}">&#10007;</button>
                </li>`;
            },
                   'todo-list-active' : function (args) {
                let { change, todo, _t } = args;
                return !change.value.checked ? this.dom.views["todo-list"].call(this, args) : "";
            },
                   'todo-list-completed' : function (args) {
                let { change, todo, _t } = args;
                return change.value.checked ? this.dom.views["todo-list"].call(this, args) : "";
            } },
            "style":"#todos input.toggle { vertical-align: middle; } #todos footer { display: grid; grid-template-columns: 1fr 3fr 3fr; } #todos button.destroy { color: crimson; font-weight: 900; padding: 0; background: none; } #todos li.todo-item { list-style: decimal; } #todos .tab { display: none; } #todos .tab.selected { display: block; } #todos .filters li { display: inline; } #todos .filters li a { color: inherit; margin: 3px; padding: 3px 7px; text-decoration: none; border: 1px solid transparent; border-radius: 3px; } #todos .filters li a:hover { border-color: rgba(175, 47, 47, 0.1); } #todos .filters li a.selected { border-color: rgba(175, 47, 47, 0.2); }","path":"/component/todo.js",
        
        lazyLoading: true, /* server side rendering does not wait for store "todo" for rendering */
        mounted() {
          //  console.log("mounted", this);

        },
        data(dataReady) {

            return this.createStore("todo", {});

        },
        interactions() {
            return {
                "tab": {
                    "click"(sender, dataStore) {
                        sender.ev.preventDefault();
                        let tabName = sender.field.$el.getAttribute("href").split("/")[1];
                        let tab = document.querySelector('#' + tabName);
                        document.querySelectorAll(".tab").forEach(e => e.classList.remove("selected"));
                        tab.classList.add("selected");

                        document.querySelectorAll(".filters li a").forEach(e => e.classList.remove("selected"));
                        dataStore.tab = tabName;
                        sender.field.$el.classList.add("selected");
                    }
                },
                "/$todo/clickItem": {
                    "click"(sender, dataStore) { //address specific element in dom
                        let index = parseInt(sender.field.$el.getAttribute("data-index"));
                        dataStore.items.some((v, k) => {
                            if (v.id == index) {
                                dataStore.items[k].checked = !dataStore.items[k].checked;
                                return true;
                            }
                        });
                    }
                },
                "name": {
                    "input"(sender, dataStore) {
                        let index = parseInt(sender.field.$el.getAttribute("data-index"));
                        for (let k in dataStore.items) {
                            let v = dataStore.items[k];
                            if (v.id == index) {
                                dataStore.items[k].label = sender.field.$el.innerText;
                            }
                        }
                    }
                },
                "/$todo/deleteItem": {
                    "click"(sender, dataStore) { //address specific element in dom
                        let index = parseInt(sender.field.$el.getAttribute("data-index"));
                        dataStore.items.some((v, k) => {
                            if (v.id == index) {
                                delete dataStore.items[k];
                                return true;
                            }
                        });
                    }
                },
                "toggle": {
                    "click"(sender, dataStore) {
                        dataStore.checked = !dataStore.checked;
                        dataStore.items.forEach((i) => i.checked = dataStore.checked);
                    }
                },
                "/$todo/items": {
                    "change"(sender, dataStore) {
                        console.log(dataStore);
                    }
                },
                "/$todo/name": {
                    "keyup#todo-myinput"(sender, dataStore) { //address specific element in dom
                        dataStore.name = sender.field.getValue();

                        if (sender.ev.keyCode === 13) {
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

