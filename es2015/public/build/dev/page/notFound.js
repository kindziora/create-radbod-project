
    import  {todo}  from "../component/todo.js";
     
    ;export let notFound = { "style" : "","path" : "/page/notFound.js","components" : { "todo-component" : { "html" : "<header class="header"> <h1>${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus /> </header> <span> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name"></div> <section class="main"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$todo/items" /> <label for="toggle-all">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list"> </ul> <xtern-component data-name="/$todo/items"></xtern-component> <footer class="footer"> <span class="todo-count"></span> <ul class="filters"> <li> <a href="#/" class="selected">${_t('All')}</a> </li> <li> <a href="#/active">${_t('Active')}</a> </li> <li> <a href="#/completed">${_t('Completed')}</a> </li> </ul> <button class="clear-completed">${_t('Clear completed')}</button> </footer> </section>","style" : "","path" : "/component/todo.js","views" : { "todo-list" :  function anonymous(args
) {

                let {change, todo, xternal, _t} = args;
                return `
                <li data-name="/$todo/items/${change.index}" data-type="list-item">
                    <input class="toggle" ${change.value.checked?`checked`:``} type="checkbox" />
                    <label data-name="/$todo/$items/${change.index}">${change.value.label}</label>
                    <button class="destroy" data-name="/$todo/$items/${change.index}"></button>
                </li>`;
            
} },"components" : { "xtern-component" : { "html" : "<h2>externe daten</h2> <div> xtern ${ xternal.name } </div>","style" : "","path" : "/component/xtern.js","components" : {  },"data" :  function anonymous(
) {

            return this.createStore("xternal", { 
                name : "AK xternal",
                items:[{
                        label: "xternal",
                        checked: false
                      }]
            })
        
},"interactions" :  function anonymous(
) {

            return { }
        
} } },"data" :  function anonymous(dataReady
) {
 
            return this.createStore("todo", { 
                name : "AK TODOS c",
                items:[{
                        label: "Testdaten",
                        checked: false
                      },{
                        label: "Testdaten2",
                        checked: false
                      }]
            });/*.find({id: 1}, function(data){
                console.log("LOAD DATA todo", data);
                if(typeof dataReady ==="function")
                     dataReady(data);
                 
            });*/
         
},"interactions" :  function anonymous(
) {

            return {
                "/$todo/name" : {
                    "keyup"(sender, dataStore) { //address specific element in dom
                        dataStore.name = sender.field.getValue();

                        if(sender.ev.keyCode === 13){

                            dataStore.items.push({
                                label: dataStore.name,
                                checked: false
                            });

                        }
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
        
} } },"data" :  function anonymous(
) {

            return this.createStore("home", {name : "AK home"});
        
},"interactions" :  function anonymous(
) {

            return { }
        
},"views" : { "COMPONENT-e-2" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<h1 data-id="COMPONENT-e-3" data-view="COMPONENT-e-3">${_t('Hallo not FOUND')} ${todo.name}</h1> <section class="todoapp" data-id="COMPONENT-e-4" data-view="COMPONENT-e-4"> <todo-component data-name="todo" data-id="todo"><header class="header" data-id="/$items-e-2" data-view="/$items-e-2"> <h1 data-id="/$items-e-3" data-view="/$items-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="/$items-e-4" data-view="/$items-e-4"> </header> <span data-id="/$items-e-5" data-view="/$items-e-5"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="/$items-e-6" data-view="/$items-e-6"></div> <section class="main" data-id="/$items-e-7" data-view="/$items-e-7"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$todo/items" data-view="toggle-all"> <label for="toggle-all" data-id="/$items-e-9" data-view="/$items-e-9">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="/$items-e-10"> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$todo/items-e-2" data-view="/$todo/items-e-2">externe daten</h2> <div data-id="/$todo/items-e-3" data-view="/$todo/items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="/$items-e-12" data-view="/$items-e-12"> <span class="todo-count" data-id="/$items-e-13" data-view="/$items-e-13"></span> <ul class="filters" data-type="list" data-id="/$items-e-14" data-view="/$items-e-14"> <li data-id="/$items-e-15" data-view="/$items-e-15"> <a href="#/" class="selected" data-id="/$items-e-16" data-view="/$items-e-16">${_t('All')}</a> </li> <li data-id="/$items-e-17" data-view="/$items-e-17"> <a href="#/active" data-id="/$items-e-18" data-view="/$items-e-18">${_t('Active')}</a> </li> <li data-id="/$items-e-19" data-view="/$items-e-19"> <a href="#/completed" data-id="/$items-e-20" data-view="/$items-e-20">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$items-e-21" data-view="/$items-e-21">${_t('Clear completed')}</button> </footer> </section></todo-component> </section> <footer class="info" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6"> <p data-id="COMPONENT-e-7" data-view="COMPONENT-e-7">${_t('Double-click to edit a todo')}</p> <p data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-10" data-view="COMPONENT-e-10">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${_t('TodoMVC')}</a></p> </footer>`
},"COMPONENT-e-3" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Hallo not FOUND')} ${todo.name}`
},"COMPONENT-e-4" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<todo-component data-name="todo" data-id="todo"><header class="header" data-id="/$items-e-2" data-view="/$items-e-2"> <h1 data-id="/$items-e-3" data-view="/$items-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="/$items-e-4" data-view="/$items-e-4"> </header> <span data-id="/$items-e-5" data-view="/$items-e-5"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="/$items-e-6" data-view="/$items-e-6"></div> <section class="main" data-id="/$items-e-7" data-view="/$items-e-7"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$todo/items" data-view="toggle-all"> <label for="toggle-all" data-id="/$items-e-9" data-view="/$items-e-9">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="/$items-e-10"> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$todo/items-e-2" data-view="/$todo/items-e-2">externe daten</h2> <div data-id="/$todo/items-e-3" data-view="/$todo/items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="/$items-e-12" data-view="/$items-e-12"> <span class="todo-count" data-id="/$items-e-13" data-view="/$items-e-13"></span> <ul class="filters" data-type="list" data-id="/$items-e-14" data-view="/$items-e-14"> <li data-id="/$items-e-15" data-view="/$items-e-15"> <a href="#/" class="selected" data-id="/$items-e-16" data-view="/$items-e-16">${_t('All')}</a> </li> <li data-id="/$items-e-17" data-view="/$items-e-17"> <a href="#/active" data-id="/$items-e-18" data-view="/$items-e-18">${_t('Active')}</a> </li> <li data-id="/$items-e-19" data-view="/$items-e-19"> <a href="#/completed" data-id="/$items-e-20" data-view="/$items-e-20">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$items-e-21" data-view="/$items-e-21">${_t('Clear completed')}</button> </footer> </section></todo-component>`
},"/$items-e-2" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<h1 data-id="/$items-e-3" data-view="/$items-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="/$items-e-4" data-view="/$items-e-4">`
},"/$items-e-3" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('todos')} ${todo.name}`
},"/$items-e-5" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('hier ist nochmal der name')} ${todo.name}`
},"/$items-e-7" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$todo/items" data-view="toggle-all"> <label for="toggle-all" data-id="/$items-e-9" data-view="/$items-e-9">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="/$items-e-10"> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$todo/items-e-2" data-view="/$todo/items-e-2">externe daten</h2> <div data-id="/$todo/items-e-3" data-view="/$todo/items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="/$items-e-12" data-view="/$items-e-12"> <span class="todo-count" data-id="/$items-e-13" data-view="/$items-e-13"></span> <ul class="filters" data-type="list" data-id="/$items-e-14" data-view="/$items-e-14"> <li data-id="/$items-e-15" data-view="/$items-e-15"> <a href="#/" class="selected" data-id="/$items-e-16" data-view="/$items-e-16">${_t('All')}</a> </li> <li data-id="/$items-e-17" data-view="/$items-e-17"> <a href="#/active" data-id="/$items-e-18" data-view="/$items-e-18">${_t('Active')}</a> </li> <li data-id="/$items-e-19" data-view="/$items-e-19"> <a href="#/completed" data-id="/$items-e-20" data-view="/$items-e-20">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$items-e-21" data-view="/$items-e-21">${_t('Clear completed')}</button> </footer>`
},"/$items-e-9" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Mark all as complete')}`
},"xtern" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<h2 data-id="/$todo/items-e-2" data-view="/$todo/items-e-2">externe daten</h2> <div data-id="/$todo/items-e-3" data-view="/$todo/items-e-3"> xtern ${ xternal.name } </div>`
},"/$todo/items-e-2" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `externe daten`
},"/$todo/items-e-3" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `xtern ${ xternal.name }`
},"/$items-e-12" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<span class="todo-count" data-id="/$items-e-13" data-view="/$items-e-13"></span> <ul class="filters" data-type="list" data-id="/$items-e-14" data-view="/$items-e-14"> <li data-id="/$items-e-15" data-view="/$items-e-15"> <a href="#/" class="selected" data-id="/$items-e-16" data-view="/$items-e-16">${_t('All')}</a> </li> <li data-id="/$items-e-17" data-view="/$items-e-17"> <a href="#/active" data-id="/$items-e-18" data-view="/$items-e-18">${_t('Active')}</a> </li> <li data-id="/$items-e-19" data-view="/$items-e-19"> <a href="#/completed" data-id="/$items-e-20" data-view="/$items-e-20">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$items-e-21" data-view="/$items-e-21">${_t('Clear completed')}</button>`
},"/$items-e-14" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<li data-id="/$items-e-15" data-view="/$items-e-15"> <a href="#/" class="selected" data-id="/$items-e-16" data-view="/$items-e-16">${_t('All')}</a> </li> <li data-id="/$items-e-17" data-view="/$items-e-17"> <a href="#/active" data-id="/$items-e-18" data-view="/$items-e-18">${_t('Active')}</a> </li> <li data-id="/$items-e-19" data-view="/$items-e-19"> <a href="#/completed" data-id="/$items-e-20" data-view="/$items-e-20">${_t('Completed')}</a> </li>`
},"/$items-e-15" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<a href="#/" class="selected" data-id="/$items-e-16" data-view="/$items-e-16">${_t('All')}</a>`
},"/$items-e-16" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('All')}`
},"/$items-e-17" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<a href="#/active" data-id="/$items-e-18" data-view="/$items-e-18">${_t('Active')}</a>`
},"/$items-e-18" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Active')}`
},"/$items-e-19" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<a href="#/completed" data-id="/$items-e-20" data-view="/$items-e-20">${_t('Completed')}</a>`
},"/$items-e-20" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Completed')}`
},"/$items-e-21" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Clear completed')}`
},"COMPONENT-e-6" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<p data-id="COMPONENT-e-7" data-view="COMPONENT-e-7">${_t('Double-click to edit a todo')}</p> <p data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-10" data-view="COMPONENT-e-10">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${_t('TodoMVC')}</a></p>`
},"COMPONENT-e-7" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Double-click to edit a todo')}`
},"COMPONENT-e-8" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Luke Edwards')}</a>`
},"COMPONENT-e-9" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Luke Edwards')}`
},"COMPONENT-e-10" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11">${_t('Aaron Muir Hamilton')}</a>`
},"COMPONENT-e-11" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Aaron Muir Hamilton')}`
},"COMPONENT-e-12" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${_t('TodoMVC')}</a>`
},"COMPONENT-e-13" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `${_t('TodoMVC')}`
},"notFound" :  function anonymous(args
) {
 let {change, home,todo,xternal, _t} = args; return `<page data-id="COMPONENT-e-2" data-view="COMPONENT-e-2"> <h1 data-id="COMPONENT-e-3" data-view="COMPONENT-e-3">${_t('Hallo not FOUND')} ${todo.name}</h1> <section class="todoapp" data-id="COMPONENT-e-4" data-view="COMPONENT-e-4"> <todo-component data-name="todo" data-id="todo"><header class="header" data-id="todo-e-2" data-view="todo-e-2"> <h1 data-id="todo-e-3" data-view="todo-e-3">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" placeholder="What needs to be done?" autofocus data-id="todo-e-4" data-view="todo-e-4"> </header> <span data-id="todo-e-5" data-view="todo-e-5"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="todo-e-6" data-view="todo-e-6"></div> <section class="main" data-id="todo-e-7" data-view="todo-e-7"> <input id="toggle-all" data-id="toggle-all" class="toggle-all" type="checkbox" data-name="/$todo/items" data-view="toggle-all"> <label for="toggle-all" data-id="todo-e-9" data-view="todo-e-9">${_t('Mark all as complete')}</label> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="todo-e-10"> </ul> <xtern-component data-name="xtern" data-id="xtern"><h2 data-id="/$todo/items-e-2" data-view="/$todo/items-e-2">externe daten</h2> <div data-id="/$todo/items-e-3" data-view="/$todo/items-e-3"> xtern ${ xternal.name } </div></xtern-component> <footer class="footer" data-id="todo-e-12" data-view="todo-e-12"> <span class="todo-count" data-id="todo-e-13" data-view="todo-e-13"></span> <ul class="filters" data-type="list" data-id="todo-e-14" data-view="todo-e-14"> <li data-id="todo-e-15" data-view="todo-e-15"> <a href="#/" class="selected" data-id="todo-e-16" data-view="todo-e-16">${_t('All')}</a> </li> <li data-id="todo-e-17" data-view="todo-e-17"> <a href="#/active" data-id="todo-e-18" data-view="todo-e-18">${_t('Active')}</a> </li> <li data-id="todo-e-19" data-view="todo-e-19"> <a href="#/completed" data-id="todo-e-20" data-view="todo-e-20">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="todo-e-21" data-view="todo-e-21">${_t('Clear completed')}</button> </footer> </section></todo-component> </section> <footer class="info" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6"> <p data-id="COMPONENT-e-7" data-view="COMPONENT-e-7">${_t('Double-click to edit a todo')}</p> <p data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-10" data-view="COMPONENT-e-10">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${_t('TodoMVC')}</a></p> </footer> </page>`
} } };
