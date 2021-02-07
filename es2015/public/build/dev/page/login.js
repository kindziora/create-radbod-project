

    import  { topmenu }  from "../component/topmenu.js";
    import  { magic_form }  from "../middleware/magic_form.js";
    import  { mail_validator }  from "../middleware/validator/email.js";
    import  { required_validator }  from "../middleware/validator/required.js";

    export let login = {
        views : {
       'login' : function(args){ let {change, login,topmenu, _t} = args; return `<extend-head data-id="login-e-2" data-view="login-e-2"> <title data-id="login-e-3" data-view="login-e-3">${_t("Hier kannst du dich einloggen")}</title> </extend-head> <page data-id="login-e-4" data-view="login-e-4"> <topmenu-component data-name="topmenu" data-id="topmenu" data-view="/$topmenu"><ul data-type="list" data-id="/$topmenu-e-7" data-view="/$topmenu-e-7"> <li data-id="/$topmenu-e-8" data-view="/$topmenu-e-8"> <a href="/home" class="${topmenu.hallo}" data-name="link" data-id="/$topmenu-e-9" data-view="/$topmenu-e-9">${_t('home')}</a></li> <li data-id="/$topmenu-e-10" data-view="/$topmenu-e-10"> <a href="/login" class data-name="link" data-id="/$topmenu-e-11" data-view="/$topmenu-e-11">${_t('login')}</a></li> </ul></topmenu-component> <h1 data-id="login-e-6" data-view="login-e-6">${_t('Hallo from login')}</h1> <section data-id="login-e-7" data-view="login-e-7"> <form data-id="login-e-8" data-view="login-e-8"> <label for="age" data-id="login-e-9" data-view="login-e-9">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age" data-id="login-e-10" data-view="login-e-10"> <label for="birthday" data-id="login-e-11" data-view="login-e-11">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date" data-id="login-e-12" data-view="login-e-12"> <label for="bname" data-id="login-e-13" data-view="login-e-13">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator" data-id="login-e-14" data-view="login-e-14"> <label for="email" data-id="login-e-15" data-view="login-e-15">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator" data-id="login-e-16" data-view="login-e-16"> <span data-name="/_state/$user/email" data-id="login-e-17" data-view="login-e-17">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd" data-id="login-e-18" data-view="login-e-18">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required data-id="login-e-19" data-view="login-e-19"> <button type="submit" data-name="/$user/submit" data-id="login-e-20" data-view="login-e-20">${_t('Anmelden')}</button> </form> </section> <footer class="info" data-id="login-e-21" data-view="login-e-21"> <p data-id="login-e-22" data-view="login-e-22">Double-click to edit a todo</p> <p data-id="login-e-23" data-view="login-e-23">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="login-e-24" data-view="login-e-24">${_t('Luke Edwards')}</a></p> <p data-id="login-e-25" data-view="login-e-25">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="login-e-26" data-view="login-e-26">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="login-e-27" data-view="login-e-27">${_t('Part of')} <a href="http://todomvc.com" data-id="login-e-28" data-view="login-e-28">${_t('TodoMVC')}</a></p> </footer> </page>`},
       'login-e-2' : function (args) { let {change, login, _t} = args; return `<title>${_t("Hier kannst du dich einloggen")}</title>`},
       'login-e-3' : function (args) { let {change, login, _t} = args; return `${_t("Hier kannst du dich einloggen")}`},
       'login-e-4' : function (args) { let {change, login, _t} = args; return `<topmenu-component data-name="/$topmenu"></topmenu-component> <h1>${_t('Hallo from login')}</h1> <section> <form> <label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button> </form> </section> <footer class="info"> <p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p> </footer>`},
       'login-e-6' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Hallo from login')}`},
       'login-e-7' : function (args) { let {change, login,topmenu, _t} = args; return `<form> <label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button> </form>`},
       'login-e-8' : function (args) { let {change, login,topmenu, _t} = args; return `<label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button>`},
       'login-e-9' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Alter')}`},
       'login-e-11' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Geburtsdatum')}`},
       'login-e-13' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Benutzername')}`},
       'login-e-15' : function (args) { let {change, login,topmenu, _t} = args; return `E-Mail`},
       'login-e-17' : function (args) { let {change, login,topmenu, _t} = args; return `${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }`},
       'login-e-18' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Passwort')}`},
       'login-e-20' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Anmelden')}`},
       'login-e-21' : function (args) { let {change, login,topmenu, _t} = args; return `<p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p>`},
       'login-e-22' : function (args) { let {change, login,topmenu, _t} = args; return `Double-click to edit a todo`},
       'login-e-23' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a>`},
       'login-e-24' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Luke Edwards')}`},
       'login-e-25' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a>`},
       'login-e-26' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
       'login-e-27' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a>`},
       'login-e-28' : function (args) { let {change, login,topmenu, _t} = args; return `${_t('TodoMVC')}`} },
            "style":"body .error { box-shadow: #f31010 0px 0px 4px 0px; border: 1px solid red; }","path":"/page/login.js",
        
        components: { "topmenu-component": topmenu },
        data() {
            return this
                    .createStore("user", { name: "user login" })
                    .addValidations({mail_validator, required_validator});
        },
        interactions() {
            return magic_form.call(this, {
                "/$user/submit": {
                    click(change, state){
                        alert("SUBMIT");
                    }
                },
                "/_state/$user/email/msg": {
                    change(change, state){
                        if(!state.isValid){
                            document.querySelector("#email").classList.add("error");
                        }else{
                            document.querySelector("#email").classList.remove("error");
                        }
                        console.log(change, state);
                    }
                }

            }, function (data) {
                
                console.log("CHANGE PLEASE BACKEND SYNC", data)

            });
        },
        translations(language) {
            return {};
        }
    }
