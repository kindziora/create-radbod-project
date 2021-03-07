
    import  { todo }  from "../component/todo.js";
    import  { translations }  from "./i18n/home.js";
    
    export let home = {
        views : {
                   'home-e-1' : function (args) { let {change, form,home,todo,topmenu,user, _t} = args; return `<title>${_t('Willkommen home')}</title>`},
                   'home-e-2' : function (args) { let {change, form,home,todo,topmenu,user, _t} = args; return `${_t('Willkommen home')}`},
                   'home-e-3' : function (args) { let {change, form,home,todo,topmenu,user, _t} = args; return `<topmenu-component type="component" data-name="/$topmenu"></topmenu-component> <h1> ${_t('dtest')} ${home.name}</h1> <input data-name="/$home/name"> <div data-name="/$home/name"></div> <todo-component type="component" data-name="/$todo"></todo-component> <footer class="info"> </footer> ${_t("asas")}`},
                   'home-e-5' : function (args) { let {change, form,home,todo,topmenu,user, _t} = args; return `${_t('dtest')} ${home.name}`},
                   'home' : function (args) { let {change, form,home,todo,topmenu,user, _t} = args; return `<extend-head data-id="home-e-1" data-view="home-e-1"> <title data-id="home-e-2" data-view="home-e-2">${_t('Willkommen home')}</title> </extend-head> <page data-id="home-e-3" data-view="home-e-3"> <topmenu-component type="component" data-name="/$topmenu"><component data-name="topmenu" data-id="topmenu" data-view="topmenu"><navgation data-id="topmenu-e-1" data-view="topmenu-e-1"> <div class="logo" data-id="topmenu-e-2" data-view="topmenu-e-2">logo</div> <div class="hamburger" data-events="hamburger:click" data-id="topmenu-e-3" data-view="topmenu-e-3"> <div class="hamburg" data-id="topmenu-e-4" data-view="topmenu-e-4"> <span class="line" data-id="topmenu-e-5" data-view="topmenu-e-5"></span> <span class="line" data-id="topmenu-e-6" data-view="topmenu-e-6"></span> <span class="line" data-id="topmenu-e-7" data-view="topmenu-e-7"></span> </div> </div> <ul id="menu" data-type="list" data-id="topmenu-e-8" data-view="topmenu-e-8"> <li data-name="/$topmenu/link" data-id="topmenu-e-9" data-view="topmenu-e-9"><a href="/home" class data-id="topmenu-e-27" data-view="topmenu-e-27">home</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-11" data-view="topmenu-e-11"><a href="/form" class data-id="topmenu-e-29" data-view="topmenu-e-29">form</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-13" data-view="topmenu-e-13"><a href="/extra" class data-id="topmenu-e-31" data-view="topmenu-e-31">extra</a></li> </ul> </navgation><style data-id="form-e-31" data-view="form-e-31">body navgation { background: #EEE; display: flex; justify-content: space-between; } body .logo { font-size: 2em; line-height: 3em; padding: 0 0.5em; } body .hamburger { padding: 0 0.5em; font-size: 1.5em; line-height: 3em; display: flex; z-index: 2; } body .hamburg { display: block; background: #555; width: 3.14em; height: 2.1em; position: relative; margin: auto; border-radius: 4px; transition: border-radius .5s; } body .line { position: absolute; left: 10px; height: 4px; width: 55px; background: #fff; border-radius: 2px; display: block; transition: 0.5s; transform-origin: center; } body .line:nth-child(1) { top: 12px; } body .line:nth-child(2) { top: 24px; } body .line:nth-child(3) { top: 36px; } body .hamburger.checked .line:nth-child(1) { transform: translateY(12px) rotate(-45deg); } body .hamburger.checked .line:nth-child(2) { opacity: 0; } body .hamburger.checked .line:nth-child(3) { transform: translateY(-12px) rotate(45deg); } body #menu { position: absolute; width: 100%; background: #eee; display: none; list-style-type: none; } body #menu:hover { display: block; } body #menu li { display: block; line-height: 50px; text-align: center; } body #menu a.active { font-weight: bold; } body .hamburger:hover ~ #menu { display: block; } body .hamburger.checked ~ #menu { display: block; } @media only screen and (min-width: 768px) { body .hamburger { display: none; } body #menu { position: static; display: flex; background: none; clear: none; flex: 1; justify-content: flex-end; } body #menu:hover { display: flex; } body #menu li { padding: 0 1em; } }</style></component></topmenu-component> <h1 data-id="home-e-5" data-view="home-e-5" data-name="/$home/name"> ${_t('dtest')} ${home.name}</h1> <input data-name="/$home/name" data-id="home-e-6" data-view="home-e-6"> <div data-name="/$home/name" data-id="home-e-7" data-view="home-e-7"></div> <todo-component type="component" data-name="todo" data-id="todo" data-view="todo"><header class="header" data-id="/$todo-e-1" data-view="/$todo-e-1"> <h1 data-id="/$todo-e-2" data-view="/$todo-e-2" data-name="/$todo/name">${_t('todos')} ${todo.name}</h1> <input class="new-todo" data-name="/$todo/name" data-id="todo-myinput" placeholder="What needs to be done?" autofocus data-view="todo-myinput"> </header> <span data-id="/$todo-e-4" data-view="/$todo-e-4" data-name="/$todo/name"> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name="/$todo/name" data-id="/$todo-e-5" data-view="/$todo-e-5"></div> <section class="main" data-id="/$todo-e-6" data-view="/$todo-e-6"> <label for="toggle-all" data-id="/$todo-e-7" data-view="/$todo-e-7"> <input id="toggle-all" data-events="toggle:click" class="toggle-all" type="checkbox" data-name="/$todo/items" data-id="/$todo-e-8" data-view="/$todo-e-8"> ${_t('Mark all as complete')}</label> <div id="all" class="tab selected" data-id="/$todo-e-9" data-view="/$todo-e-9"> <h3 data-id="/$todo-e-10" data-view="/$todo-e-10">${_t('All')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list" data-type="list" data-id="/$todo-e-11"><li data-name="/$todo/items/0" data-type="list-item" class="todo-item" data-id="todo-e-51" data-view="todo-e-51">
                    <input class="toggle" checked type="checkbox" data-name="/$todo/clickItem" data-index="0" data-id="todo-e-52" data-view="todo-e-52">
                    <label contenteditable="true" data-events="name:input" data-index="0" data-name="/$todo/items/0" data-id="todo-e-53" data-view="todo-e-53">Testdaten1</label>
                    <button class="destroy" data-name="/$todo/deleteItem" data-index="0" data-id="todo-e-54" data-view="todo-e-54">✗</button>
                </li>
<li data-name="/$todo/items/1" data-type="list-item" class="todo-item" data-id="todo-e-55" data-view="todo-e-55">
                    <input class="toggle" type="checkbox" data-name="/$todo/clickItem" data-index="1" data-id="todo-e-56" data-view="todo-e-56">
                    <label contenteditable="true" data-events="name:input" data-index="1" data-name="/$todo/items/1" data-id="todo-e-57" data-view="todo-e-57">Testdaten2</label>
                    <button class="destroy" data-name="/$todo/deleteItem" data-index="1" data-id="todo-e-58" data-view="todo-e-58">✗</button>
                </li>
<li data-name="/$todo/items/2" data-type="list-item" class="todo-item" data-id="todo-e-59" data-view="todo-e-59">
                    <input class="toggle" type="checkbox" data-name="/$todo/clickItem" data-index="2" data-id="todo-e-60" data-view="todo-e-60">
                    <label contenteditable="true" data-events="name:input" data-index="2" data-name="/$todo/items/2" data-id="todo-e-61" data-view="todo-e-61">Testdaten3</label>
                    <button class="destroy" data-name="/$todo/deleteItem" data-index="2" data-id="todo-e-62" data-view="todo-e-62">✗</button>
                </li></ul> </div> <div id="active" class="tab" data-id="/$todo-e-12" data-view="/$todo-e-12"> <h3 data-id="/$todo-e-13" data-view="/$todo-e-13">${_t('active')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-active" data-type="list" data-id="/$todo-e-14"><li data-name="/$todo/items/1" data-type="list-item" class="todo-item" data-id="todo-e-66" data-view="todo-e-66">
                    <input class="toggle" type="checkbox" data-name="/$todo/clickItem" data-index="1" data-id="todo-e-67" data-view="todo-e-67">
                    <label contenteditable="true" data-events="name:input" data-index="1" data-name="/$todo/items/1" data-id="todo-e-68" data-view="todo-e-68">Testdaten2</label>
                    <button class="destroy" data-name="/$todo/deleteItem" data-index="1" data-id="todo-e-69" data-view="todo-e-69">✗</button>
                </li>
<li data-name="/$todo/items/2" data-type="list-item" class="todo-item" data-id="todo-e-70" data-view="todo-e-70">
                    <input class="toggle" type="checkbox" data-name="/$todo/clickItem" data-index="2" data-id="todo-e-71" data-view="todo-e-71">
                    <label contenteditable="true" data-events="name:input" data-index="2" data-name="/$todo/items/2" data-id="todo-e-72" data-view="todo-e-72">Testdaten3</label>
                    <button class="destroy" data-name="/$todo/deleteItem" data-index="2" data-id="todo-e-73" data-view="todo-e-73">✗</button>
                </li></ul> </div> <div id="completed" class="tab" data-id="/$todo-e-15" data-view="/$todo-e-15"> <h3 data-id="/$todo-e-16" data-view="/$todo-e-16">${_t('completed')}</h3> <ul class="todo-list" data-name="/$todo/items" data-view="todo-list-completed" data-type="list" data-id="/$todo-e-17"><li data-name="/$todo/items/0" data-type="list-item" class="todo-item" data-id="todo-e-77" data-view="todo-e-77">
                    <input class="toggle" checked type="checkbox" data-name="/$todo/clickItem" data-index="0" data-id="todo-e-78" data-view="todo-e-78">
                    <label contenteditable="true" data-events="name:input" data-index="0" data-name="/$todo/items/0" data-id="todo-e-79" data-view="todo-e-79">Testdaten1</label>
                    <button class="destroy" data-name="/$todo/deleteItem" data-index="0" data-id="todo-e-80" data-view="todo-e-80">✗</button>
                </li></ul> </div> <footer class="footer" data-id="/$todo-e-18" data-view="/$todo-e-18"> <span class="todo-count" data-name="/$todo/tab" data-id="/$todo-e-19" data-view="/$todo-e-19"><strong data-name="/$todo/items" data-view="count" data-id="/$todo-e-20">undefined</strong></span> <ul class="filters" data-type="list" data-id="/$todo-e-21" data-view="/$todo-e-21"> <li data-id="/$todo-e-22" data-view="/$todo-e-22"> <a href="#/all" data-events="tab:click" class="selected" data-id="/$todo-e-23" data-view="/$todo-e-23">${_t('All')}</a> </li> <li data-id="/$todo-e-24" data-view="/$todo-e-24"> <a href="#/active" data-events="tab:click" data-id="/$todo-e-25" data-view="/$todo-e-25">${_t('Active')}</a> </li> <li data-id="/$todo-e-26" data-view="/$todo-e-26"> <a href="#/completed" data-events="tab:click" data-id="/$todo-e-27" data-view="/$todo-e-27">${_t('Completed')}</a> </li> </ul> <button class="clear-completed" data-id="/$todo-e-28" data-view="/$todo-e-28">${_t('Clear completed')}</button> </footer> </section></todo-component> <footer class="info" data-id="home-e-9" data-view="home-e-9"> </footer> ${_t("asas")} </page>`} },
            "style":"","path":"/page/home.js",
        
        mounted() {
            console.log("mounted", this);
        },
        components: 
             { "todo-component": todo, "topmenu-component": "topmenu#mainmenu"}
        ,
        data() {
            return this.createStore("home", { name: "AK home" });
        },
        interactions() {
            return {
                "/$home/name": {
                    "keyup"(sender, data) { //address specific element in dom
                        data.name = sender.field.getValue();
                    }
                }
            }
        },
        translations(language) {
            return translations[language];
        }
    }
