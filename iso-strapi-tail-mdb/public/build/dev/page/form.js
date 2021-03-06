

  import  { magic_form }  from "../middleware/magic_form.js";
  import  { mail_validator }  from "../middleware/validator/email.js";
  import  { required_validator }  from "../middleware/validator/required.js";

 
  export let form = {
        "html":"<extend-head> <title>${_t(\"Hier kannst du dich einloggen\")}</title> </extend-head> <page> <topmenu-component data-name=\"/$topmenu\"></topmenu-component> <h1>${_t('Hallo from from')}</h1> <section> <form> <div class=\"container\"> <div class=\"item\"> <label for=\"age\">${_t('Alter')}</label> <input id=\"age\" type=\"number\" data-name=\"/$user/age\" /> <label for=\"birthday\">${_t('Geburtsdatum')}</label> <input id=\"birthday\" data-name=\"/$user/birthday\" type=\"date\" /> <label for=\"bname\">${_t('Benutzername')}</label> <input id=\"bname\" data-name=\"/$user/bname\" required data-validations=\"required_validator\" /> <label for=\"email\">E-Mail</label> <input id=\"email\" type=\"email\" data-name=\"/$user/email\" required data-validations=\"mail_validator,required_validator\" /> <span data-name=\"/_state/$user/email\" class=\"msg ${ change.value.msg ? 'error':''}\">${ change.value.msg ? change.value.msg.map(function(e){return e}) : \"\" }</span> <label for=\"passwd\">${_t('Passwort')}</label> <input type=\"password\" data-name=\"/$user/password\" id=\"passwd\" required pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$\" /> <button type=\"submit\" data-name=\"/$user/submit\">${_t('Anmelden')}</button> </div> <div class=\"item biefroest\"> </div> </div> </form> </section> <footer class=\"info\"> </footer> </page>","style":"body .error { box-shadow: #f31010 0px 0px 4px 0px; border: 1px solid red; display: block; } body span.msg { position: absolute; background-color: lightgoldenrodyellow; border: 1px solid lightgray; border-radius: 0 10px 10px 10px; } body .biefroest { background-image: url(\"https://mountainmoments.de/wp-content/uploads/2019/04/web_mountainmoments-5-aurora-borealis-fotografieren-J.-Groll-1030x686.jpg\"); background-size: cover; background-position-x: center; /* background-image: url(\"img/form/biefroest.jpg\");*/ }","path":"/page/form.js",
        
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
