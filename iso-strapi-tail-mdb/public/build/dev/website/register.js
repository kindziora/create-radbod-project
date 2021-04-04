

  import  { magic_form }  from "../middleware/magicForm.js";
  import  { mail_validator }  from "../middleware/validator/email.js";
  import  { wordlength_validator }  from "../middleware/validator/wordlength.js";
  import  { required_validator }  from "../middleware/validator/required.js";
  import  { getParent }  from "../middleware/domHelper.js";
  import  { countWords }  from "../middleware/textHelper.js";
  import  { modal }  from "../component/modal.js";
  import  cookie  from "../deps/cookie.js";

  export let register = {
        "html":"<extend-head> <title>${_t(\"Hier kannst du dich registrieren\")}</title> </extend-head> <page> <topmenu-component data-name=\"/$topmenu\"></topmenu-component> <section> <form id=\"register\"> <modal-component data-name=\"/$modal\"></modal-component> <div class=\"step1 stepTab show\"> <h2>${_t('Persönliche Daten')}</h2> <div class=\"container\"> <div class=\"item biefroest\"> <div class=\"triangle-right\"></div> </div> <div class=\"item\"> <label for=\"vname\">${_t('Vorname')}</label> <input id=\"vname\" data-name=\"/$user/forename\" name=\"forename\" value=\"${user.forename}\" tabindex=\"0\" required data-validations=\"required_validator\" /> <label for=\"street\">${_t('Straße')}</label> <div class=\"address\"> <input id=\"street\" name=\"street\" placeholder=\"${_t('Straßenname')}\" value=\"${user.street}\" data-name=\"/$user/street\" required data-validations=\"required_validator\" /> <input id=\"nr\" name=\"number\" placeholder=\"${_t('Nr.')}\" type=\"number\" value=\"${user.nr}\" data-name=\"/$user/nr\" required data-validations=\"required_validator\" /> </div> <label for=\"country\">${_t('Land')}</label> <select id=\"country\" name=\"country\" data-name=\"/$user/country\" required data-validations=\"required_validator\"></select> <label for=\"bname\">${_t('Benutzername')}</label> <input id=\"bname\" name=\"username\" data-name=\"/$user/username\" required value=\"${user.username}\" data-validations=\"required_validator\" /> <label for=\"passwd\">${_t('Passwort')}</label> <input type=\"password\" data-validations=\"required_validator\" data-name=\"/$user/password\" id=\"passwd\" required pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$\" /> </div> <div class=\"item\"> <label for=\"nname\">${_t('Nachname')}</label> <input id=\"nname\" name=\"surname\" data-name=\"/$user/surname\" required value=\"${user.surname}\" data-validations=\"required_validator\" /> <label for=\"street\">${_t('Wo?')}</label> <div class=\"location\"> <input id=\"pcode\" name=\"postalcode\" placeholder=\"${_t('PLZ')}\" data-name=\"/$user/pcode\" type=\"number\" value=\"${user.pcode}\" required data-validations=\"required_validator\" /> <input id=\"city\" name=\"city\" placeholder=\"${_t('Stadt')}\" data-name=\"/$user/city\" required value=\"${user.city}\" data-validations=\"required_validator\" /> </div> <label for=\"birthday\">${_t('Geburtsdatum')}</label> <input id=\"birthday\" name=\"birthday\" data-name=\"/$user/birthday\" type=\"date\" value=\"${user.date}\" /> <label for=\"email\">${_t('E-Mail')}</label> <input id=\"email\" name=\"email\" type=\"email\" data-name=\"/$user/email\" required value=\"${user.email}\" data-validations=\"mail_validator,required_validator\" /> <span data-name=\"/_state/$user/email\" class=\"msg ${ change.value.msg ? 'error':''}\">${ change.value.msg ? change.value.msg.map(function(e){return e}) : \"\" }</span> <label for=\"passwdr\">${_t('Passwort wiederholen')}</label> <input type=\"password\" data-validations=\"required_validator\" data-name=\"/$user/passwordr\" id=\"passwdr\" required pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$\" /> </div> </div> </div> <div class=\"step2 stepTab\"> <h2>${_t('Fähigkeiten')}</h2> <div class=\"container\"> <div class=\"item biefroest\"> <div class=\"triangle-right\"></div> </div> <div class=\"item\"> <label for=\"skills\">${_t('Lieblings-Themen')}</label> <select multiple id=\"skills\" name=\"skills\" data-name=\"/$user/skills\" required data-validations=\"required_validator\"></select> <label for=\"skills\">${_t('SEO Erfahrung')} <span class=\"seometer\" data-name=\"/$user/seoLevel\" data-view=\"seometer\">${_t('keine')}</span></label> <div class=\"slidecontainer\"> <input type=\"range\" min=\"1\" max=\"100\" value=\"${user.seoLevel}\" data-name=\"/$user/seoLevel\" class=\"slider\" id=\"myRange\"> </div> </div> <div class=\"item\"> <label for=\"langs\">${_t('Sprachen')}</label> <select multiple id=\"langs\" name=\"langs\" data-name=\"/$user/langs\"></select> <label for=\"refs\">${_t('Erfahrung mit Texten')}</label> <select multiple id=\"refs\" name=\"refs\" data-name=\"/$user/refs\"></select> <div data-name=\"/$user/refs\" data-view=\"refsList\" data-type=\"list\"></div> </div> </div> </div> <div class=\"step3 stepTab\"> <h2>${_t('Kurzer Text')}</h2> <p><i>${_t('Bitte schreibe uns doch ein paar Worte damit wir deine Fähigkeiten besser')} <strong>${_t('einschätzen')}</strong> ${_t('können.')}</i></p> <hr /> <div class=\"topic-container\"> <select data-events=\"variante:change\"> <option value=\"0\">${_t('Reiseort deiner Wahl')}</option> <option value=\"1\">${_t('online-shop deiner Wahl')}</option> <option value=\"2\">${_t('Firma deiner Wahl')}</option> </select> <div data-name=\"/$user/topicInfo\" class=\"infos\"> <div><label>Typ:</label><i>${change.value.type}</i></div> <div><label>Thema:</label><i>${change.value.name}</i></div> <div><label>Länge:</label><i>${change.value.wordrange}</i></div> <div><label>Keyword:</label><i>${change.value.keyword}</i></div> <div><label>Schreibstil:</label><i>${change.value.style}</i></div> <div><label>Zielgruppe:</label><i>${change.value.aim}</i></div> </div> </div> <hr /> <textarea class=\"sample-text\" data-name=\"/$user/sampletext\" data-validations=\"wordlength_validator\" placeholder=\"Keine Angst, es ist noch kein Meister vom Himmel gefallen!\"></textarea> <span data-name=\"/$user/sampletext\" data-view=\"wordcount\"></span> <span data-name=\"/_state/$user/sampletext\">${change.value.msg}</span> </div> <div> <div class=\"step-container s\"> <span class=\"step active\" data-index=\"1\" data-events=\"step:click\">${_t('1')}</span> <span class=\"step\" data-index=\"2\" data-events=\"step:click\">${_t('2')}</span> <span class=\"step\" data-index=\"3\" data-events=\"step:click\">${_t('3')}</span> </div> </div> <div class=\"button-container\"> <button type=\"submit\" data-name=\"/$user/submit\">${_t('Absenden')}</button> </div> </form> </section> <bottommenu-component data-name=\"/$bottommenu\"></bottommenu-component> </page>","style":"@import url(/css/slimselect.css); #register { display: grid; justify-content: center; align-content: center; /* Make circles that indicate the steps of the form: */ /* Mark the active step: */ /* Mark the steps that are finished and valid: */ } @media only screen and (max-width: 640px) { #register { justify-content: stretch; } } #register .topic-container { display: flex; flex-direction: column; } #register .stepTab { position: absolute; visibility: hidden; transition: opacity 0.4s ease-out; opacity: 0; min-height: 50vh; } #register .stepTab .slidecontainer { display: none; } #register .step2 .item { display: block; } #register .stepTab.show { position: relative; visibility: visible; opacity: 1; } #register .stepTab.show .slidecontainer { display: flex; } #register .infos > div { display: flex; } #register .infos label { font-weight: 600; min-width: 6em; margin-right: 5px; text-align: end; } #register .infos i { color: #5c5b5b; } #register .sample-text { min-height: 380px; box-shadow: inset 0 1px 4px #9e9e9e; } #register .slidecontainer { display: flex; margin-right: 6px; } #register .slidecontainer .slider { background: linear-gradient(to right, #ffffff, #fae5bd, #4bf367, #004700); flex-grow: 1; margin: 0; } #register .slidecontainer .slider:active { transform: translateY(0); } #register .slidecontainer .slider:focus { box-shadow: none; } #register .slidecontainer .slider::-webkit-slider-thumb { margin-top: -10px; -webkit-appearance: none; /* Override default look */ appearance: none; width: 29px; /* Set a specific slider handle width */ height: 29px; /* Slider handle height */ background: #718072; cursor: pointer; /* Cursor on hover */ } #register .slidecontainer .slider::-moz-range-thumb { margin-top: -10px; width: 29px; /* Set a specific slider handle width */ height: 29px; /* Slider handle height */ background: #718072; cursor: pointer; /* Cursor on hover */ } #register .seometer { font-weight: 600; } #register .step-container { text-align: center; margin: 40px; } #register #country option { display: none; } #register .ss-main .ss-single-selected { height: 38px; background-color: #e6e6e6; margin-bottom: 6px; margin-right: 6px; width: 100%; } #register .ss-main .ss-multi-selected { margin-bottom: 6px; margin-right: 6px; width: min-content; min-width: 100%; } #register .ss-main .ss-multi-selected .ss-values .ss-value { font-size: inherit; } #register .ss-main .ss-single-selected .placeholder .ss-disabled { color: #a08888; } #register .ss-main .ss-multi-selected .ss-add { margin: auto 10px auto 0; } #register .ss-main { display: flex; min-width: 267px; } #register .address { display: flex; } #register .address input:nth-child(1) { width: 14.8em; } #register .address input:nth-child(2) { width: 2em; } #register .location { display: flex; } #register .location input:nth-child(1) { width: 5em; } #register .location input:nth-child(2) { width: 12em; } #register .triangle-right { transition: all ease 500ms; transition-property: margin-left, margin-top, border-color; z-index: 1; position: absolute; margin-top: 21px; margin-left: -6px; width: 0; height: 0; border-radius: 24px; border-top: 25px solid transparent; border-left: 50px solid #66c166; border-bottom: 25px solid transparent; opacity: 0.78; } #register .triangle-right.triangle-error { border-left: 50px solid red; } #register .step { cursor: pointer; height: 2em; width: 2em; margin: 0 0.5em; background-color: #bbbbbb; border: none; border-radius: 50%; display: inline-block; opacity: 0.5; line-height: 2em; font-weight: 400; box-shadow: 0px 3px 7px #737171; } #register .step:hover { color: #0076d1; } #register .step.active { opacity: 1; font-weight: 800; } #register .step.finish { background-color: #4CAF50; } #register .container { position: relative; display: grid; grid-template-columns: 20px 0fr 0fr; grid-template-rows: 1fr 0fr; gap: 0px 1.5em; grid-template-areas: \". . .\"; } @media only screen and (max-width: 640px) { #register .container { flex-direction: column; display: flex; } } #register .s { grid-area: s; } #register .item { min-height: auto; display: grid; } @media only screen and (max-width: 640px) { #register .item { width: 100%; } } #register .error { box-shadow: #f31010 0px 0px 4px 0px; border: 1px solid red; display: block; } #register span.msg { position: relative; background-color: #fbfbd7; display: block; } #register .biefroest { background-image: url(\"img/register/biefrost_thin.jpg\"); background-size: cover; background-position-x: center; }","path":"/website/register.js",
        
    views: {
      seometer: function (args) {
        let { user } = args;
        let seoLevel = ["keine", "wenig", "beginner", "mittel", "fortgeschritten", "Experte"];
        return seoLevel[parseInt(user.seoLevel / (100 / (seoLevel.length - 1)))];
      },
      wordcount: function (args) {
        let { change } = args;
        return "Wörter:" + countWords(change.value);
      },
      "refsList": function (args) {
        let { change, user, _t } = args;
        return `<div data-name="/$user/refs/${change.index}" data-type="list-item" >
          <strong>${change.value}</strong> <input data-name="/$user/refsdetail/${change.index}" data-index="${change.index}" data-events="refsdetail:keyup" value="${user.refsdetail[change.index] ? user.refsdetail[change.index] : ''}" placeholder="${change.value} angeben" />
        </div>`;
      },
      "success": function (args) {
        let { change, user } = args;
        return `<p>Schön das du da bist <strong>${user.forename}</strong>!</p>
        <p>bitte prüfe noch deine E-Mails.</p>
        <p>Sobald du den Bestätigungslink aufgerufen hast wird dein Account aktiviert.</p>`;
      },
      "failed": function (args) {
        let { change, user, modal } = args;
        return `<p>Hallo ${user.forename}, bitte prüfe nochmal deine Angaben.</p>
        <p>Unser System sagt nämlich: <strong>${modal.error}</strong></p>`;
      },
    },
    mounted() {

      console.log("mounted", this);
      window.countWords = countWords;
      window.onresize = function () {
        document.querySelector(".triangle-right").style.display = "none";
      };
    },
    components: {
      "topmenu-component": "topmenu#mainmenu",
      "bottommenu-component": "bottommenu#footermenu",
      "modal-component": "modal#partial"
    },
    data() {
      return this
        .createStore("user", {
          name: "user login", "refs": [],
          "refsdetail": [],
          "topicInfo": {},
          "step": 1,
          "latest": 1,
          "variante": 0,
          "forename": "",
          "surname": "",
          "street": "",
          "country": [],
          "pcode": "",
          "city": "",
          "email": "",
          "nr": "",
          "birthday": "",
          "username": "",
          "password": "",
          "passwordr": "",
          "seoLevel": "",
          "skills": [],
          "langs": [],
          "sampletext": ""
        })
        .addValidations({ mail_validator, required_validator, wordlength_validator });
    },
    interactions() {
      return magic_form.call(this, {
        "register": {
            postRender(component) {
              import('../deps/slimselect.js')
                .then((slimSelect) => {

                  import('./i18n/de_DE/countries.js')
                    .then((module) => {
                      if (typeof window.countryS === "undefined")
                        window.countryS = new slimSelect.default({
                          select: '#country',
                          data: module.countries
                        });
                    });

                  import('./i18n/de_DE/topics.js')
                    .then((module) => {
                      new slimSelect.default({
                        select: '#skills',
                        data: module.topics
                      });
                    });

                  import('./i18n/de_DE/langs.js')
                    .then((module) => {
                      new slimSelect.default({
                        select: '#langs',
                        data: module.langs
                      });
                    });

                  import('./i18n/de_DE/refs.js')
                    .then((module) => {
                      new slimSelect.default({
                        select: '#refs',
                        data: module.refs
                      });
                    });

                });

              import('./i18n/de_DE/textTopics.js')
                .then((module) => {

                  component.store._data.topicInfo = module.textTopics[0];
                  // component.store._data.sampletext = module.textTopics[0].starter;
                  component.store._data.variante = 0;
                  window.textVarianten = module.textTopics;

                });

            }
          },
          "step": {
            click(change, state) {
              change.ev.preventDefault();

              let step = change.field.$el.getAttribute("data-index");
              if (change.step >= step) {
                document.querySelectorAll(".stepTab").forEach((e) => e.classList.remove("show"));
                document.querySelector(`.step${step}`).classList.add("show");

                document.querySelectorAll(".step").forEach((e) => e.classList.remove("active"));
                document.querySelector(`.step[data-index="${step}"]`).classList.add("active");
                window.scrollTo(0, 0);
                state.step = parseInt(step);
                if (state.latest <= state.step) state.latest = state.step;
              }

            }
          },
          "/$user/submit": {
            click(change, state) {
              change.ev.preventDefault();

              let inputs = document.querySelector("form").elements;
              let paths = { "step1": { fields: [] }, "step2": { fields: [] }, "step3": { fields: [] } };

              for (let i = 0; i < inputs.length; i++) {
                for (let s in paths) {
                  if (!paths.hasOwnProperty(s)) continue;
                  if (inputs[i].hasAttribute("data-name")) {
                    if (document.querySelector(`form .${s}`).contains(inputs[i])) {

                      let n = inputs[i].getAttribute("data-name");
                      let tr = this.store.validateField(n, this.store.accessByPath(n));
                      if (!tr.isValid) {
                        paths[s].fields.push(tr);
                        inputs[i].classList.add("error");
                      } else {
                        inputs[i].classList.remove("error");
                      }

                    }
                  }
                }
              }

              let latestCorrect = false;
              for (let s in paths) {
                if (!paths.hasOwnProperty(s)) continue;
                if (paths[s].fields.length > 0) {
                  break;
                } else {
                  latestCorrect = parseInt(s.replace(/^.*?(\d+).*/, '$1'));
                }
              }

              if (latestCorrect) {

                if (latestCorrect < 3) {
                  state.step = latestCorrect + 1;
                  document.querySelector(`.step[data-index="${state.step}"]`).click();
                } else if (latestCorrect === 3) {
                  //submit all
                  let uData = JSON.parse(JSON.stringify(state));
                  uData.seoLevel = parseInt(uData.seoLevel);
                  uData.country = uData.country[0];

                  let errorFnc = async (error) => {
                    let tmpE = await error.json();
                    this.store.dataH.pxy.$modal.error = tmpE.message.map(e => e.messages.map(a => a.message)).join(" ");
                    this.store.dataH.pxy.$modal.body = this.dom.views.failed.call(this, { change, user: state, modal: this.store.dataH.pxy.$modal });
                    this.store.dataH.pxy.$modal.show = true;
                  };

                  fetch('http://localhost:1337/auth/local/register', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(uData),
                  })
                    .then(async response => {
                      if (response.status !== 200) return await errorFnc.call(this, response);

                      this.store.dataH.pxy.$modal.header = "Danke für deinen Einsatz";
                      this.store.dataH.pxy.$modal.body = this.dom.views.success.call(this, { change, user: state });

                      this.store.dataH.pxy.$modal.show = true;

                      cookie.set('tk', response.jwt, { expires: 7 });
                      cookie.set('user', JSON.stringify(response.user), { expires: 7 });

                    })
                    .catch(errorFnc);


                }

              }

            }
          },
          "variante": {
            change(sender, state) {

              let val = sender.field.getValue();
              state.topicInfo = textVarianten[val];
            }
          },
          "refsdetail": {
            keyup(sender, dataStore) {
              let id = parseInt(sender.field.$el.getAttribute("data-index"));
              dataStore.refsdetail[id] = sender.field.getValue();
            }
          },
          "/_state/$user/email/msg": {
            change(change, state) {
              if (!state.isValid) {
                this.$el.querySelector("#email").classList.add("error");
              } else {
                this.$el.querySelector("#email").classList.remove("error");
              }
              console.log(change, state);
            }
          },
          "/_state": {
            change(change, state) {
              if (document.activeElement) {
                let $elTriangle = getParent(document.activeElement, '.container');
                if (document.querySelector("#register") && $elTriangle
                  && document.querySelector("#register").contains(document.activeElement)
                  && document.activeElement.tagName !== "BUTTON") {

                  $elTriangle = $elTriangle.querySelector(':scope .triangle-right');

                  $elTriangle.style.display = "block";
                  if (state.isValid) {
                    $elTriangle.style.marginTop = (document.activeElement.offsetTop - 5) + "px";
                    $elTriangle.style.marginLeft = (document.activeElement.offsetLeft - 45) + "px";
                    $elTriangle.classList.remove("triangle-error");
                    document.activeElement.classList.remove("error");
                  } else {
                    $elTriangle.style.marginTop = (document.activeElement.offsetTop - 5) + "px";
                    $elTriangle.style.marginLeft = (document.activeElement.offsetLeft - 45) + "px";
                    $elTriangle.classList.add("triangle-error");
                    document.activeElement.classList.add("error");

                  }
                }
              }


            }
          }

        }, "/$user", function(data) {

          console.log("CHANGE PLEASE BACKEND SYNC", data)

        });
    },
    translations() {
      return {};
    }
  }
