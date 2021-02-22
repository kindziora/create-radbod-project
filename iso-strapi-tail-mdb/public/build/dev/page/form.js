

  import  { topmenu }  from "../component/topmenu.js";
  import  { magic_form }  from "../middleware/magic_form.js";
  import  { mail_validator }  from "../middleware/validator/email.js";
  import  { required_validator }  from "../middleware/validator/required.js";

  export let form = {
        views : {
       'form' : function(args){ let {change, form,topmenu, _t} = args; return `<extend-head data-id="form-e-2" data-view="form-e-2"> <title data-id="form-e-3" data-view="form-e-3">${_t("Hier kannst du dich einloggen")}</title> </extend-head> <page data-id="form-e-4" data-view="form-e-4"> <topmenu-component data-name="topmenu" data-id="topmenu" data-view="/$topmenu"><ul data-type="list" data-id="/$topmenu-e-7" data-view="/$topmenu-e-7"> <li data-id="/$topmenu-e-8" data-view="/$topmenu-e-8"> <a href="/home" class="${topmenu.hallo}" data-name="link" data-id="/$topmenu-e-9" data-view="/$topmenu-e-9">${_t('home')}</a></li> <li data-id="/$topmenu-e-10" data-view="/$topmenu-e-10"> <a href="/form" class data-name="link" data-id="/$topmenu-e-11" data-view="/$topmenu-e-11">${_t('form')}</a></li> </ul></topmenu-component> <h1 data-id="form-e-6" data-view="form-e-6">${_t('Hallo from from')}</h1> <section data-id="form-e-7" data-view="form-e-7"> <form data-id="form-e-8" data-view="form-e-8"> <div class="container" data-id="form-e-9" data-view="form-e-9"> <div class="item" data-id="form-e-10" data-view="form-e-10"> <label for="age" data-id="form-e-11" data-view="form-e-11">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age" data-id="form-e-12" data-view="form-e-12"> <label for="birthday" data-id="form-e-13" data-view="form-e-13">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date" data-id="form-e-14" data-view="form-e-14"> <label for="bname" data-id="form-e-15" data-view="form-e-15">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator" data-id="form-e-16" data-view="form-e-16"> <label for="email" data-id="form-e-17" data-view="form-e-17">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator" data-id="form-e-18" data-view="form-e-18"> <span data-name="/_state/$user/email" data-id="form-e-19" data-view="form-e-19">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd" data-id="form-e-20" data-view="form-e-20">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$" data-id="form-e-21" data-view="form-e-21"> <button type="submit" data-name="/$user/submit" data-id="form-e-22" data-view="form-e-22">${_t('Anmelden')}</button> </div> <div class="item biefroest" data-id="form-e-23" data-view="form-e-23"> </div> </div> </form> </section> <footer class="info" data-id="form-e-24" data-view="form-e-24"> <p data-id="form-e-25" data-view="form-e-25">Double-click to edit a todo</p> <p data-id="form-e-26" data-view="form-e-26">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="form-e-27" data-view="form-e-27">${_t('Luke Edwards')}</a></p> <p data-id="form-e-28" data-view="form-e-28">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="form-e-29" data-view="form-e-29">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="form-e-30" data-view="form-e-30">${_t('Part of')} <a href="http://todomvc.com" data-id="form-e-31" data-view="form-e-31">${_t('TodoMVC')}</a></p> </footer> </page>`},
       'form-e-2' : function (args) { let {change, form, _t} = args; return `<title>${_t("Hier kannst du dich einloggen")}</title>`},
       'form-e-3' : function (args) { let {change, form, _t} = args; return `${_t("Hier kannst du dich einloggen")}`},
       'form-e-4' : function (args) { let {change, form, _t} = args; return `<topmenu-component data-name="/$topmenu"></topmenu-component> <h1>${_t('Hallo from from')}</h1> <section> <form> <div class="container"> <div class="item"> <label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$"> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button> </div> <div class="item biefroest"> </div> </div> </form> </section> <footer class="info"> <p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p> </footer>`},
       'form-e-6' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Hallo from from')}`},
       'form-e-7' : function (args) { let {change, form,topmenu, _t} = args; return `<form> <div class="container"> <div class="item"> <label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$"> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button> </div> <div class="item biefroest"> </div> </div> </form>`},
       'form-e-8' : function (args) { let {change, form,topmenu, _t} = args; return `<div class="container"> <div class="item"> <label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$"> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button> </div> <div class="item biefroest"> </div> </div>`},
       'form-e-9' : function (args) { let {change, form,topmenu, _t} = args; return `<div class="item"> <label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$"> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button> </div> <div class="item biefroest"> </div>`},
       'form-e-10' : function (args) { let {change, form,topmenu, _t} = args; return `<label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$"> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button>`},
       'form-e-11' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Alter')}`},
       'form-e-13' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Geburtsdatum')}`},
       'form-e-15' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Benutzername')}`},
       'form-e-17' : function (args) { let {change, form,topmenu, _t} = args; return `E-Mail`},
       'form-e-19' : function (args) { let {change, form,topmenu, _t} = args; return `${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }`},
       'form-e-20' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Passwort')}`},
       'form-e-22' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Anmelden')}`},
       'form-e-24' : function (args) { let {change, form,topmenu, _t} = args; return `<p>Double-click to edit a todo</p> <p>${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a></p> <p>${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a></p> <p>${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a></p>`},
       'form-e-25' : function (args) { let {change, form,topmenu, _t} = args; return `Double-click to edit a todo`},
       'form-e-26' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Written by')} <a href="http://twitter.com/lukeed05">${_t('Luke Edwards')}</a>`},
       'form-e-27' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Luke Edwards')}`},
       'form-e-28' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Refactored by')} <a href="https://github.com/xorgy">${_t('Aaron Muir Hamilton')}</a>`},
       'form-e-29' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Aaron Muir Hamilton')}`},
       'form-e-30' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('Part of')} <a href="http://todomvc.com">${_t('TodoMVC')}</a>`},
       'form-e-31' : function (args) { let {change, form,topmenu, _t} = args; return `${_t('TodoMVC')}`} },
            "style":"body .error { box-shadow: #f31010 0px 0px 4px 0px; border: 1px solid red; } body .biefroest { background-image: url(https://mountainmoments.de/wp-content/uploads/2019/04/web_mountainmoments-5-aurora-borealis-fotografieren-J.-Groll-1030x686.jpg); background-size: cover; background-position-x: center; /* background-image: url(\"img/form/biefroest.jpg\");*/ } body .container { display: flex; } @media only screen and (max-width: 640px) { body .container { flex-direction: column; } } body .item { min-height: 100px; flex-grow: 1; width: 50%; } @media only screen and (max-width: 640px) { body .item { width: 100%; } }","path":"/page/form.js",
        
    components: { "topmenu-component": topmenu },
    data() {
      return this
        .createStore("user", { name: "user login" })
        .addValidations({ mail_validator, required_validator });
    },
    interactions() {
      return magic_form.call(this, {
        "/$user/submit": {
          click(change, state) {
            change.ev.preventDefault();
            alert("SUBMIT");
          }
        },
        "/_state/$user/email/msg": {
          change(change, state) {
            if (!state.isValid) {
              document.querySelector("#email").classList.add("error");
            } else {
              document.querySelector("#email").classList.remove("error");
            }
            console.log(change, state);
          }
        }

      }, "/$user", function (data) {

        console.log("CHANGE PLEASE BACKEND SYNC", data)

      });
    },
    translations(language) {
      return {};
    }
  }
