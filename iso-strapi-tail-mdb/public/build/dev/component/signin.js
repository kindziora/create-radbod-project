

    import  { mail_validator }  from "../middleware/validator/email.js";
    import  { required_validator }  from "../middleware/validator/required.js";
    import  { magic_form }  from "../middleware/magicForm.js";
    import  cookie  from "../deps/cookie.js";

    export let signin = {
        "html":"<modal-component data-name=\"/$modal\"></modal-component> <div class=\"bg\"></div> <form> <div class=\"container\"> <h2>${_t('Willkommen zurück')}</h2> <div class=\"form-field\"> <label class=\"user\" for=\"login-email\"><span class=\"hidden\">${_t('E-Mail')}</span></label> <input id=\"login-email\" type=\"text\" placeholder=\"email@xyz.de\" required data-name=\"/$login/email\" data-validations=\"mail_validator,required_validator\" /> <span data-name=\"/_state/$login/email/msg\" class=\"msg ${ change.value ? 'error':''}\">${ change.value ? change.value.map(function(e){return e}) : \"\" }</span> </div> <div class=\"form-field\"> <label class=\"lock\" for=\"login-password\"><span class=\"hidden\">${_t('Password')}</span></label> <input id=\"login-password\" type=\"password\" placeholder=\"Password\" data-name=\"/$login/password\" required pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$\"> </div> <div class=\"button-container\"> <button type=\"submit\" data-events=\"submit:click\">${_t('Anmelden')}</button> </div> </div> </form>","style":"signin-component { display: grid; justify-content: center; align-content: center; height: 85vh; } signin-component span.msg { position: relative; background-color: #fbfbd7; display: block; } signin-component button { margin-top: 1em; width: 100%; padding: 1em; } signin-component .bg { opacity: 0.5; background-image: url(\"img/login/biefrost-opac.png\"); background-size: cover; height: 85vh; position: absolute; left: 0; right: 0; z-index: -1; } signin-component .container { padding: 1em; box-shadow: 0 0 60px black; background-color: white; border: 1px solid #ababab; } signin-component input, signin-component button { margin-right: 0; }","path":"/component/signin.js",
        
        views: {
            "failed": function (args) {
                let { change, user, modal } = args;
                return `<p>Bitte überprüfe nochmal: <ul>${modal.error.map(e => `<li>${e}</li>`).join("")}</ul></p>`;
            }
        } ,
        components: { 
            "modal-component": "modal#partial"
        },
        data(data, runtime) {
            return this.createStore("login", { "email": "", "password": "" })
                .addValidations({ mail_validator, required_validator });
        },
        interactions: function () {
            return magic_form.call(this, {
                "submit": {
                    "click"(sender, dataStore) {

                        sender.ev.preventDefault();

                        let errorFnc = (errorMsg) => {
                            this.store.dataH.pxy.$modal.error = errorMsg;
                            this.store.dataH.pxy.$modal.body = this.dom.views.failed.call(this, { user: dataStore, modal: this.store.dataH.pxy.$modal });
                            this.store.dataH.pxy.$modal.show = true;
                        };
                        let mailValidation = this.dom.elementByName["/$login/email"][0].validate();
                        let passwordValidation =  this.dom.elementByName["/$login/password"][0].validate();
                        
                        let fieldStates = [mailValidation, passwordValidation];
                        let filtered = [];
                        for (let e in fieldStates) {
                            if (!fieldStates[e].isValid) {
                                filtered.push(...fieldStates[e].msg);
                            }
                        }

                        let isValid = filtered.length === 0;

                        if (isValid) {
                            let errorWrapper = async (error) => {
                                let tmpE = await error.json();
                                errorFnc(tmpE.message.map(e => e.messages.map(a => a.message)));
                            };

                            fetch('http://localhost:1337/auth/local',
                                {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        identifier: dataStore.email,
                                        password: dataStore.password,
                                    })
                                }).then( async response => {

                                    if (response.status !== 200) {
                                       await errorWrapper.call(this, response);
                                       return;
                                    }
                                    
                                    let res = await response.json();
                                    // Handle success.
                                    cookie.set('tk', res.jwt, { expires: 7 });
                                    cookie.set('user', JSON.stringify(res.user), { expires: 7 });

                                })
                                .catch(errorWrapper);
                        } else {
                            errorFnc(filtered);
                        }


                    }
                }
            });
        }
    }
