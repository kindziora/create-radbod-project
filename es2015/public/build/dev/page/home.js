
    import  {todo}  from "../component/todo.js";
    import  {translations}  from "./i18n/home.js";


    export let home = {
        views : {
'component-1-element-2' : (args)=> { let {change, home, _t} = args; return `${_t('d')} ${home.name}`},
'component-1-element-5' : (args)=> { let {change, home, _t} = args; return `<p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p>`},
'component-1-element-6' : (args)=> { let {change, home, _t} = args; return `Double-click to edit a todo`},
'component-1-element-7' : (args)=> { let {change, home, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a>`},
'component-1-element-8' : (args)=> { let {change, home, _t} = args; return `${_t('Luke Edwards')}`},
'component-1-element-9' : (args)=> { let {change, home, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a>`},
'component-1-element-10' : (args)=> { let {change, home, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
'component-1-element-11' : (args)=> { let {change, home, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a>`},
'component-1-element-12' : (args)=> { let {change, home, _t} = args; return `${_t('TodoMVC')}`},
'home' : (args)=> { let {change, home, _t} = args; return `<h1 data-id="component-1-element-2" data-view="component-1-element-2"> ${_t('d')} ${home.name}</h1> <input data-name="/$home/name" data-id="component-1-element-3" data-view="component-1-element-3"> <div data-name="/$home/name" data-id="component-1-element-4" data-view="component-1-element-4"> </div> <footer class="info" data-id="component-1-element-5" data-view="component-1-element-5"> <p data-id="component-1-element-6" data-view="component-1-element-6">Double-click to edit a todo</p> <p data-id="component-1-element-7" data-view="component-1-element-7">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="component-1-element-8" data-view="component-1-element-8">${_t('Luke Edwards')}</a></p> <p data-id="component-1-element-9" data-view="component-1-element-9">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="component-1-element-10" data-view="component-1-element-10">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="component-1-element-11" data-view="component-1-element-11">${_t('Part of')} <a href="http://todomvc.com" data-id="component-1-element-12" data-view="component-1-element-12">${_t('TodoMVC')}</a></p> </footer> ${_t("asas")}`} },
        "style":"h1{ font-size:1em; }","path":"/page/home.js",
         
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
