

    import  {topmenu}  from "../component/topmenu.js";

    ;export let login = { "style" : "","path" : "/page/login.js","components" : { "topmenu-component" : { "html" : "<ul> <li> <a href="/home" class="${topmenu.path}" data-name="link">${_t('home')}</a></li> <li> <a href="/login" class="" data-name="link">${_t('login')}</a></li> </ul>","style" : "","path" : "/component/topmenu.js","components" : {  },"data" :  function anonymous(data, runtime
) {

            console.log(data, runtime);
            return this.createStore("topmenu", { 
                path : "runtime.path"
            })
        
},"interactions" :  function anonymous(
) {

            return {}
        
} } },"data" :  function anonymous(
) {

            return this.createStore("login", { name: "AK login" });
        
},"interactions" :  function anonymous(
) {

            return {
               
            }
        
},"translations" :  function anonymous(language
) {

            return {};
        
},"views" : { "COMPONENT-e-2" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t("Hier kannst du dich einloggen")}`
},"COMPONENT-e-3" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `<topmenu-component data-name="topmenu" data-id="topmenu"><ul data-type="list" data-id="/$topmenu-e-2" data-view="/$topmenu-e-2"> <li data-id="/$topmenu-e-3" data-view="/$topmenu-e-3"> <a href="/home" class="${topmenu.path}" data-name="link" data-id="/$topmenu-e-4" data-view="/$topmenu-e-4">${_t('home')}</a></li> <li data-id="/$topmenu-e-5" data-view="/$topmenu-e-5"> <a href="/login" class data-name="link" data-id="/$topmenu-e-6" data-view="/$topmenu-e-6">${_t('login')}</a></li> </ul></topmenu-component> <h1 data-id="COMPONENT-e-5" data-view="COMPONENT-e-5">${_t('Hallo from login')}</h1> <section data-id="COMPONENT-e-6" data-view="COMPONENT-e-6"> <form data-id="COMPONENT-e-7" data-view="COMPONENT-e-7"> <label for="age" data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Alter')}</label> <input id="age" type="number" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9"> <label for="birthday" data-id="COMPONENT-e-10" data-view="COMPONENT-e-10">${_t('Geburtsdatum')}</label> <input id="birthday" type="date" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11"> <label for="bname" data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Benutzername')}</label> <input id="bname" required data-id="COMPONENT-e-13" data-view="COMPONENT-e-13"> <label for="passwd" data-id="COMPONENT-e-14" data-view="COMPONENT-e-14">${_t('Passwort')}</label> <input type="password" id="passwd" required data-id="COMPONENT-e-15" data-view="COMPONENT-e-15"> <button type="submit" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('Anmelden')}</button> </form> </section> <footer class="info" data-id="COMPONENT-e-17" data-view="COMPONENT-e-17"> <p data-id="COMPONENT-e-18" data-view="COMPONENT-e-18">${_t('Double-click to edit a todo')}</p> <p data-id="COMPONENT-e-19" data-view="COMPONENT-e-19">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-21" data-view="COMPONENT-e-21">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-22" data-view="COMPONENT-e-22">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-23" data-view="COMPONENT-e-23">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-24" data-view="COMPONENT-e-24">${_t('TodoMVC')}</a></p> </footer>`
},"/$topmenu-e-2" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `<li data-id="/$topmenu-e-3" data-view="/$topmenu-e-3"> <a href="/home" class="${topmenu.path}" data-name="link" data-id="/$topmenu-e-4" data-view="/$topmenu-e-4">${_t('home')}</a></li> <li data-id="/$topmenu-e-5" data-view="/$topmenu-e-5"> <a href="/login" class data-name="link" data-id="/$topmenu-e-6" data-view="/$topmenu-e-6">${_t('login')}</a></li>`
},"/$topmenu-e-3" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `<a href="/home" class="${topmenu.path}" data-name="link" data-id="/$topmenu-e-4" data-view="/$topmenu-e-4">${_t('home')}</a>`
},"/$topmenu-e-4" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('home')}`
},"/$topmenu-e-5" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `<a href="/login" class data-name="link" data-id="/$topmenu-e-6" data-view="/$topmenu-e-6">${_t('login')}</a>`
},"/$topmenu-e-6" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('login')}`
},"COMPONENT-e-5" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Hallo from login')}`
},"COMPONENT-e-6" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `<form data-id="COMPONENT-e-7" data-view="COMPONENT-e-7"> <label for="age" data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Alter')}</label> <input id="age" type="number" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9"> <label for="birthday" data-id="COMPONENT-e-10" data-view="COMPONENT-e-10">${_t('Geburtsdatum')}</label> <input id="birthday" type="date" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11"> <label for="bname" data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Benutzername')}</label> <input id="bname" required data-id="COMPONENT-e-13" data-view="COMPONENT-e-13"> <label for="passwd" data-id="COMPONENT-e-14" data-view="COMPONENT-e-14">${_t('Passwort')}</label> <input type="password" id="passwd" required data-id="COMPONENT-e-15" data-view="COMPONENT-e-15"> <button type="submit" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('Anmelden')}</button> </form>`
},"COMPONENT-e-7" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `<label for="age" data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Alter')}</label> <input id="age" type="number" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9"> <label for="birthday" data-id="COMPONENT-e-10" data-view="COMPONENT-e-10">${_t('Geburtsdatum')}</label> <input id="birthday" type="date" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11"> <label for="bname" data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Benutzername')}</label> <input id="bname" required data-id="COMPONENT-e-13" data-view="COMPONENT-e-13"> <label for="passwd" data-id="COMPONENT-e-14" data-view="COMPONENT-e-14">${_t('Passwort')}</label> <input type="password" id="passwd" required data-id="COMPONENT-e-15" data-view="COMPONENT-e-15"> <button type="submit" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('Anmelden')}</button>`
},"COMPONENT-e-8" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Alter')}`
},"COMPONENT-e-10" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Geburtsdatum')}`
},"COMPONENT-e-12" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Benutzername')}`
},"COMPONENT-e-14" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Passwort')}`
},"COMPONENT-e-16" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Anmelden')}`
},"COMPONENT-e-17" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `<p data-id="COMPONENT-e-18" data-view="COMPONENT-e-18">${_t('Double-click to edit a todo')}</p> <p data-id="COMPONENT-e-19" data-view="COMPONENT-e-19">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-21" data-view="COMPONENT-e-21">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-22" data-view="COMPONENT-e-22">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-23" data-view="COMPONENT-e-23">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-24" data-view="COMPONENT-e-24">${_t('TodoMVC')}</a></p>`
},"COMPONENT-e-18" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Double-click to edit a todo')}`
},"COMPONENT-e-19" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('Luke Edwards')}</a>`
},"COMPONENT-e-20" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Luke Edwards')}`
},"COMPONENT-e-21" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-22" data-view="COMPONENT-e-22">${_t('Aaron Muir Hamilton')}</a>`
},"COMPONENT-e-22" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Aaron Muir Hamilton')}`
},"COMPONENT-e-23" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-24" data-view="COMPONENT-e-24">${_t('TodoMVC')}</a>`
},"COMPONENT-e-24" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `${_t('TodoMVC')}`
},"login" :  function anonymous(args
) {
 let {change, login,topmenu, _t} = args; return `<title data-id="COMPONENT-e-2" data-view="COMPONENT-e-2">${_t("Hier kannst du dich einloggen")}</title> <page data-id="COMPONENT-e-3" data-view="COMPONENT-e-3"> <topmenu-component data-name="topmenu" data-id="topmenu"><ul data-type="list" data-id="topmenu-e-2" data-view="topmenu-e-2"> <li data-id="topmenu-e-3" data-view="topmenu-e-3"> <a href="/home" class="${topmenu.path}" data-name="link" data-id="topmenu-e-4" data-view="topmenu-e-4">${_t('home')}</a></li> <li data-id="topmenu-e-5" data-view="topmenu-e-5"> <a href="/login" class data-name="link" data-id="topmenu-e-6" data-view="topmenu-e-6">${_t('login')}</a></li> </ul></topmenu-component> <h1 data-id="COMPONENT-e-5" data-view="COMPONENT-e-5">${_t('Hallo from login')}</h1> <section data-id="COMPONENT-e-6" data-view="COMPONENT-e-6"> <form data-id="COMPONENT-e-7" data-view="COMPONENT-e-7"> <label for="age" data-id="COMPONENT-e-8" data-view="COMPONENT-e-8">${_t('Alter')}</label> <input id="age" type="number" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9"> <label for="birthday" data-id="COMPONENT-e-10" data-view="COMPONENT-e-10">${_t('Geburtsdatum')}</label> <input id="birthday" type="date" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11"> <label for="bname" data-id="COMPONENT-e-12" data-view="COMPONENT-e-12">${_t('Benutzername')}</label> <input id="bname" required data-id="COMPONENT-e-13" data-view="COMPONENT-e-13"> <label for="passwd" data-id="COMPONENT-e-14" data-view="COMPONENT-e-14">${_t('Passwort')}</label> <input type="password" id="passwd" required data-id="COMPONENT-e-15" data-view="COMPONENT-e-15"> <button type="submit" data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('Anmelden')}</button> </form> </section> <footer class="info" data-id="COMPONENT-e-17" data-view="COMPONENT-e-17"> <p data-id="COMPONENT-e-18" data-view="COMPONENT-e-18">${_t('Double-click to edit a todo')}</p> <p data-id="COMPONENT-e-19" data-view="COMPONENT-e-19">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-21" data-view="COMPONENT-e-21">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-22" data-view="COMPONENT-e-22">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-23" data-view="COMPONENT-e-23">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-24" data-view="COMPONENT-e-24">${_t('TodoMVC')}</a></p> </footer> </page>`
} } };
