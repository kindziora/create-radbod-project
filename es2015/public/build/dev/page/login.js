

    import  {topmenu}  from "../component/topmenu.js";

    export let login = {
        views : {
       'login' : function(args){ let {change, login,topmenu, _t} = args; return `<title data-id="login-e-2" data-view="login-e-2">${_t("Hier kannst du dich einloggen")}</title> <page data-id="login-e-3" data-view="login-e-3"> <topmenu-component data-name="topmenu" data-id="topmenu"><ul data-type="list" data-id="/$topmenu-e-2" data-view="/$topmenu-e-2"> <li data-id="/$topmenu-e-3" data-view="/$topmenu-e-3"> <a href="/home" class="${topmenu.path}" data-name="link" data-id="/$topmenu-e-4" data-view="/$topmenu-e-4">${_t('home')}</a></li> <li data-id="/$topmenu-e-5" data-view="/$topmenu-e-5"> <a href="/login" class data-name="link" data-id="/$topmenu-e-6" data-view="/$topmenu-e-6">${_t('login')}</a></li> </ul></topmenu-component> <h1 data-id="login-e-5" data-view="login-e-5">${_t('Hallo from login')}</h1> <section data-id="login-e-6" data-view="login-e-6"> <form data-id="login-e-7" data-view="login-e-7"> <label for="age" data-id="login-e-8" data-view="login-e-8">${_t('Alter')}</label> <input id="age" type="number" data-id="login-e-9" data-view="login-e-9"> <label for="birthday" data-id="login-e-10" data-view="login-e-10">${_t('Geburtsdatum')}</label> <input id="birthday" type="date" data-id="login-e-11" data-view="login-e-11"> <label for="bname" data-id="login-e-12" data-view="login-e-12">${_t('Benutzername')}</label> <input id="bname" required data-id="login-e-13" data-view="login-e-13"> <label for="passwd" data-id="login-e-14" data-view="login-e-14">${_t('Passwort')}</label> <input type="password" id="passwd" required data-id="login-e-15" data-view="login-e-15"> <button type="submit" data-id="login-e-16" data-view="login-e-16">${_t('Anmelden')}</button> </form> </section> <footer class="info" data-id="login-e-17" data-view="login-e-17"> <p data-id="login-e-18" data-view="login-e-18">Double-click to edit a todo</p> <p data-id="login-e-19" data-view="login-e-19">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="login-e-20" data-view="login-e-20">${_t('Luke Edwards')}</a></p> <p data-id="login-e-21" data-view="login-e-21">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="login-e-22" data-view="login-e-22">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="login-e-23" data-view="login-e-23">${_t('Part of')} <a href="http://todomvc.com" data-id="login-e-24" data-view="login-e-24">${_t('TodoMVC')}</a></p> </footer> </page>`},
       'login-e-2' : function (args) { let {change, login, _t} = args; return `${_t("Hier kannst du dich einloggen")}`},
       'login-e-3' : function (args) { let {change, login, _t} = args; return `<topmenu-component data-name="/$topmenu"></topmenu-component> <h1>${_t('Hallo from login')}</h1> <section> <form> <label for="age">${_t('Alter')}</label> <input id="age" type="number"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" required> <label for="passwd">${_t('Passwort')}</label> <input type="password" id="passwd" required> <button type="submit">${_t('Anmelden')}</button> </form> </section> <footer class="info"> <p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p> </footer>`},
       'login-e-5' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Hallo from login')}`},
       'login-e-6' : function (args) { let {change, login,topmenu, _t} = args; return `<form> <label for="age">${_t('Alter')}</label> <input id="age" type="number"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" required> <label for="passwd">${_t('Passwort')}</label> <input type="password" id="passwd" required> <button type="submit">${_t('Anmelden')}</button> </form>`},
       'login-e-7' : function (args) { let {change, login,topmenu, _t} = args; return `<label for="age">${_t('Alter')}</label> <input id="age" type="number"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" required> <label for="passwd">${_t('Passwort')}</label> <input type="password" id="passwd" required> <button type="submit">${_t('Anmelden')}</button>`},
       'login-e-8' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Alter')}`},
       'login-e-10' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Geburtsdatum')}`},
       'login-e-12' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Benutzername')}`},
       'login-e-14' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Passwort')}`},
       'login-e-16' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Anmelden')}`},
       'login-e-17' : function (args) { let {change, login,topmenu, _t} = args; return `<p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p>`},
       'login-e-18' : function (args) { let {change, login,topmenu, _t} = args; return `Double-click to edit a todo`},
       'login-e-19' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a>`},
       'login-e-20' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Luke Edwards')}`},
       'login-e-21' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a>`},
       'login-e-22' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
       'login-e-23' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a>`},
       'login-e-24' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('TodoMVC')}`} },
            "style":"","path":"/page/login.js",
        
        components : {"topmenu-component" : topmenu},
        data() {
            return this.createStore("login", { name: "AK login" });
        },
        interactions() {
            return {
               
            }
        },
        translations(language){
            return {};
        }
    }
