

  import  { magic_form }  from "../middleware/magic_form.js";
  import  { mail_validator }  from "../middleware/validator/email.js";
  import  { required_validator }  from "../middleware/validator/required.js";

 
  export let form = {
        views : {
                   'form-e-1' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `<title>${_t("Hier kannst du dich einloggen")}</title>`},
                   'form-e-2' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `${_t("Hier kannst du dich einloggen")}`},
                   'form-e-3' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `<topmenu-component data-name="/$topmenu"></topmenu-component> <h1>${_t('Hallo from from')}</h1> <section> <form> <div class="container"> <div class="item"> <label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email" class="msg ${ change.value.msg ? 'error':''}">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$"> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button> </div> <div class="item biefroest"> </div> </div> </form> </section> <footer class="info"> </footer>`},
                   'form-e-5' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `${_t('Hallo from from')}`},
                   'form-e-6' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `<form> <div class="container"> <div class="item"> <label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email" class="msg ${ change.value.msg ? 'error':''}">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$"> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button> </div> <div class="item biefroest"> </div> </div> </form>`},
                   'form-e-7' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `<div class="container"> <div class="item"> <label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email" class="msg ${ change.value.msg ? 'error':''}">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$"> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button> </div> <div class="item biefroest"> </div> </div>`},
                   'form-e-8' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `<div class="item"> <label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email" class="msg ${ change.value.msg ? 'error':''}">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$"> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button> </div> <div class="item biefroest"> </div>`},
                   'form-e-9' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `<label for="age">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age"> <label for="birthday">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date"> <label for="bname">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator"> <label for="email">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator"> <span data-name="/_state/$user/email" class="msg ${ change.value.msg ? 'error':''}">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$"> <button type="submit" data-name="/$user/submit">${_t('Anmelden')}</button>`},
                   'form-e-10' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `${_t('Alter')}`},
                   'form-e-12' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `${_t('Geburtsdatum')}`},
                   'form-e-14' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `${_t('Benutzername')}`},
                   'form-e-16' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `E-Mail`},
                   'form-e-18' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }`},
                   'form-e-19' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `${_t('Passwort')}`},
                   'form-e-21' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `${_t('Anmelden')}`},
                   'form' : function (args) { let {change, form,todo,topmenu,user, _t} = args; return `<extend-head data-id="form-e-1" data-view="form-e-1"> <title data-id="form-e-2" data-view="form-e-2">${_t("Hier kannst du dich einloggen")}</title> </extend-head> <page data-id="form-e-3" data-view="form-e-3"> <topmenu-component data-name="/$topmenu"><component data-name="topmenu" data-id="topmenu" data-view="topmenu"><navgation data-id="topmenu-e-1" data-view="topmenu-e-1"> <div class="logo" data-id="topmenu-e-2" data-view="topmenu-e-2">${_t('logo')}</div> <div class="hamburger" data-events="hamburger:click" data-id="topmenu-e-3" data-view="topmenu-e-3"> <div class="hamburg" data-id="topmenu-e-4" data-view="topmenu-e-4"> <span class="line" data-id="topmenu-e-5" data-view="topmenu-e-5"></span> <span class="line" data-id="topmenu-e-6" data-view="topmenu-e-6"></span> <span class="line" data-id="topmenu-e-7" data-view="topmenu-e-7"></span> </div> </div> <ul id="menu" data-type="list" data-id="topmenu-e-8" data-view="topmenu-e-8"> <li data-name="/$topmenu/link" data-id="topmenu-e-9" data-view="topmenu-e-9"><a href="/home" class="${topmenu.isActive('home')}" data-id="topmenu-e-10" data-view="topmenu-e-10">${_t('home')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-11" data-view="topmenu-e-11"><a href="/form" class="${topmenu.isActive('form')}" data-id="topmenu-e-12" data-view="topmenu-e-12">${_t('form')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-13" data-view="topmenu-e-13"><a href="/extra" class="${topmenu.isActive('extra')}" data-id="topmenu-e-14" data-view="topmenu-e-14">${_t('extra')}</a></li> </ul> </navgation></component></topmenu-component> <h1 data-id="form-e-5" data-view="form-e-5">${_t('Hallo from from')}</h1> <section data-id="form-e-6" data-view="form-e-6"> <form data-id="form-e-7" data-view="form-e-7"> <div class="container" data-id="form-e-8" data-view="form-e-8"> <div class="item" data-id="form-e-9" data-view="form-e-9"> <label for="age" data-id="form-e-10" data-view="form-e-10">${_t('Alter')}</label> <input id="age" type="number" data-name="/$user/age" data-id="form-e-11" data-view="form-e-11"> <label for="birthday" data-id="form-e-12" data-view="form-e-12">${_t('Geburtsdatum')}</label> <input id="birthday" data-name="/$user/birthday" type="date" data-id="form-e-13" data-view="form-e-13"> <label for="bname" data-id="form-e-14" data-view="form-e-14">${_t('Benutzername')}</label> <input id="bname" data-name="/$user/bname" required data-validations="required_validator" data-id="form-e-15" data-view="form-e-15"> <label for="email" data-id="form-e-16" data-view="form-e-16">E-Mail</label> <input id="email" type="email" data-name="/$user/email" required data-validations="mail_validator,required_validator" data-id="form-e-17" data-view="form-e-17"> <span data-name="/_state/$user/email" class="msg ${ change.value.msg ? 'error':''}" data-id="form-e-18" data-view="form-e-18">${ change.value.msg ? change.value.msg.map(function(e){return e}) : "" }</span> <label for="passwd" data-id="form-e-19" data-view="form-e-19">${_t('Passwort')}</label> <input type="password" data-name="/$user/password" id="passwd" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*_=+-]).{8,12}$" data-id="form-e-20" data-view="form-e-20"> <button type="submit" data-name="/$user/submit" data-id="form-e-21" data-view="form-e-21">${_t('Anmelden')}</button> </div> <div class="item biefroest" data-id="form-e-22" data-view="form-e-22"> </div> </div> </form> </section> <footer class="info" data-id="form-e-23" data-view="form-e-23"> </footer> </page>`} },
            "style":"body .error { box-shadow: #f31010 0px 0px 4px 0px; border: 1px solid red; display: block; } body span.msg { position: absolute; background-color: lightgoldenrodyellow; border: 1px solid lightgray; border-radius: 0 10px 10px 10px; } body .biefroest { background-image: url(\"https://mountainmoments.de/wp-content/uploads/2019/04/web_mountainmoments-5-aurora-borealis-fotografieren-J.-Groll-1030x686.jpg\"); background-size: cover; background-position-x: center; /* background-image: url(\"img/form/biefroest.jpg\");*/ }","path":"/page/form.js",
        
    mounted() {
      console.log("mounted", this);
    },
    components: { "topmenu-component": "topmenu#mainmenu" },
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
