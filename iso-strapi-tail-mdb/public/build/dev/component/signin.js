

    import  { mail_validator }  from "../middleware/validator/email.js";
    import  { required_validator }  from "../middleware/validator/required.js";
    import  { magic_form }  from "../middleware/magicForm.js";
    import  cookie  from "../deps/cookie.js";

    export let signin = {
        views : {
                   'signin-e-3' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<div class="container"> <h2>${_t('Willkommen zurück')}</h2> <div class="form-field"> <label class="user" for="login-email"><span class="hidden">${_t('E-Mail')}</span></label> <input id="login-email" type="text" placeholder="email@xyz.de" required data-name="/$login/email" data-validations="mail_validator,required_validator"> <span data-name="/_state/$login/email/msg" class="msg ${ change.value ? 'error':''}">${ change.value ? change.value.map(function(e){return e}) : "" }</span> </div> <div class="form-field"> <label class="lock" for="login-password"><span class="hidden">${_t('Password')}</span></label> <input id="login-password" type="password" placeholder="Password" data-name="/$login/password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$"> </div> <div class="button-container"> <button type="submit" data-events="submit:click">${_t('Anmelden')}</button> </div> </div>`},
                   'signin-e-4' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<h2>${_t('Willkommen zurück')}</h2> <div class="form-field"> <label class="user" for="login-email"><span class="hidden">${_t('E-Mail')}</span></label> <input id="login-email" type="text" placeholder="email@xyz.de" required data-name="/$login/email" data-validations="mail_validator,required_validator"> <span data-name="/_state/$login/email/msg" class="msg ${ change.value ? 'error':''}">${ change.value ? change.value.map(function(e){return e}) : "" }</span> </div> <div class="form-field"> <label class="lock" for="login-password"><span class="hidden">${_t('Password')}</span></label> <input id="login-password" type="password" placeholder="Password" data-name="/$login/password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$"> </div> <div class="button-container"> <button type="submit" data-events="submit:click">${_t('Anmelden')}</button> </div>`},
                   'signin-e-5' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('Willkommen zurück')}`},
                   'signin-e-6' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<label class="user" for="login-email"><span class="hidden">${_t('E-Mail')}</span></label> <input id="login-email" type="text" placeholder="email@xyz.de" required data-name="/$login/email" data-validations="mail_validator,required_validator"> <span data-name="/_state/$login/email/msg" class="msg ${ change.value ? 'error':''}">${ change.value ? change.value.map(function(e){return e}) : "" }</span>`},
                   'signin-e-7' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<span class="hidden">${_t('E-Mail')}</span>`},
                   'signin-e-8' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('E-Mail')}`},
                   'signin-e-10' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${ change.value ? change.value.map(function(e){return e}) : "" }`},
                   'signin-e-11' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<label class="lock" for="login-password"><span class="hidden">${_t('Password')}</span></label> <input id="login-password" type="password" placeholder="Password" data-name="/$login/password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$">`},
                   'signin-e-12' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<span class="hidden">${_t('Password')}</span>`},
                   'signin-e-13' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('Password')}`},
                   'signin-e-15' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<button type="submit" data-events="submit:click">${_t('Anmelden')}</button>`},
                   'signin-e-16' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('Anmelden')}`},
                   'signin-e-21' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `/* The Modal (background) */ .modal { display: none; /* Hidden by default */ position: fixed; /* Stay in place */ z-index: 2; /* Sit on top */ left: 0; top: 0; width: 100%; /* Full width */ height: 100%; /* Full height */ overflow: auto; /* Enable scroll if needed */ background-color: black; /* Fallback color */ background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */ /* Modal Header */ /* Modal Body */ /* Modal Footer */ /* Modal Content */ /* Add Animation */ } .modal .modal-header h2 { margin: 0; } .modal .modal-body { padding: 1em; overflow: auto; max-height: 70vh; } .modal .modal-footer { color: gray; } .modal .modal-content { max-height: 100vh; position: relative; background-color: #fefefe; margin: auto; padding: 1em; border: 1px solid #888; width: 80%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); animation-name: animatetop; animation-duration: 0.4s; } @keyframes animatetop { from { top: -50vh; opacity: 0; } to { top: 0; opacity: 1; } } /* Modal Content/Box */ .modal-content { background-color: #fefefe; margin: 15% auto; /* 15% from the top and centered */ padding: 20px; border: 1px solid #888; width: 80%; /* Could be more or less, depending on screen size */ } /* The Close Button */ .close { color: #aaa; float: right; font-size: 28px; font-weight: bold; } .close:hover, .close:focus { color: black; text-decoration: none; cursor: pointer; }`},
                   'signin' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<modal-component data-name="/$modal"><component data-name="modal" data-id="modal" data-view="modal"><div id="undefined" class="modal" data-events="close:click" data-name="/$modal/show" data-id="modal-e-1" data-view="modal-e-1"> <!-- Modal content --> <div class="modal-content" data-id="modal-e-2" data-view="modal-e-2"> <div class="modal-header" data-id="modal-e-3" data-view="modal-e-3"> <h2 data-id="modal-e-4" data-view="modal-e-4" data-name="/$modal/header">undefined</h2> </div> <div class="modal-body" data-id="modal-e-5" data-view="modal-e-5" data-name="/$modal/body"> undefined </div> <div class="modal-footer" data-id="modal-e-6" data-view="modal-e-6" data-name="/$modal/footer"> undefined </div> </div> <style data-id="modal-e-7" data-view="modal-e-7"> #undefined{ display:none; } </style> </div><style data-id="signin-e-21" data-view="signin-e-21">/* The Modal (background) */ .modal { display: none; /* Hidden by default */ position: fixed; /* Stay in place */ z-index: 2; /* Sit on top */ left: 0; top: 0; width: 100%; /* Full width */ height: 100%; /* Full height */ overflow: auto; /* Enable scroll if needed */ background-color: black; /* Fallback color */ background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */ /* Modal Header */ /* Modal Body */ /* Modal Footer */ /* Modal Content */ /* Add Animation */ } .modal .modal-header h2 { margin: 0; } .modal .modal-body { padding: 1em; overflow: auto; max-height: 70vh; } .modal .modal-footer { color: gray; } .modal .modal-content { max-height: 100vh; position: relative; background-color: #fefefe; margin: auto; padding: 1em; border: 1px solid #888; width: 80%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); animation-name: animatetop; animation-duration: 0.4s; } @keyframes animatetop { from { top: -50vh; opacity: 0; } to { top: 0; opacity: 1; } } /* Modal Content/Box */ .modal-content { background-color: #fefefe; margin: 15% auto; /* 15% from the top and centered */ padding: 20px; border: 1px solid #888; width: 80%; /* Could be more or less, depending on screen size */ } /* The Close Button */ .close { color: #aaa; float: right; font-size: 28px; font-weight: bold; } .close:hover, .close:focus { color: black; text-decoration: none; cursor: pointer; }</style></component></modal-component> <div class="bg" data-id="signin-e-2" data-view="signin-e-2"></div> <form data-id="signin-e-3" data-view="signin-e-3"> <div class="container" data-id="signin-e-4" data-view="signin-e-4"> <h2 data-id="signin-e-5" data-view="signin-e-5">${_t('Willkommen zurück')}</h2> <div class="form-field" data-id="signin-e-6" data-view="signin-e-6"> <label class="user" for="login-email" data-id="signin-e-7" data-view="signin-e-7"><span class="hidden" data-id="signin-e-8" data-view="signin-e-8">${_t('E-Mail')}</span></label> <input id="login-email" type="text" placeholder="email@xyz.de" required data-name="/$login/email" data-validations="mail_validator,required_validator" data-id="signin-e-9" data-view="signin-e-9"> <span data-name="/_state/$login/email/msg" class="msg ${ change.value ? 'error':''}" data-id="signin-e-10" data-view="signin-e-10">${ change.value ? change.value.map(function(e){return e}) : "" }</span> </div> <div class="form-field" data-id="signin-e-11" data-view="signin-e-11"> <label class="lock" for="login-password" data-id="signin-e-12" data-view="signin-e-12"><span class="hidden" data-id="signin-e-13" data-view="signin-e-13">${_t('Password')}</span></label> <input id="login-password" type="password" placeholder="Password" data-name="/$login/password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$" data-id="signin-e-14" data-view="signin-e-14"> </div> <div class="button-container" data-id="signin-e-15" data-view="signin-e-15"> <button type="submit" data-events="submit:click" data-id="signin-e-16" data-view="signin-e-16">${_t('Anmelden')}</button> </div> </div> </form>`},
                   'failed' : function (args) {
                let { change, user, modal } = args;
                return `<p>Bitte überprüfe nochmal: <ul>${modal.error.map(e => `<li>${e}</li>`).join("")}</ul></p>`;
            } },
            "style":"signin-component { display: grid; justify-content: center; align-content: center; height: 85vh; } signin-component span.msg { position: relative; background-color: #fbfbd7; display: block; } signin-component button { margin-top: 1em; width: 100%; padding: 1em; } signin-component .bg { opacity: 0.5; background-image: url(\"img/login/biefrost-opac.png\"); background-size: cover; height: 85vh; position: absolute; left: 0; right: 0; z-index: -1; } signin-component .container { padding: 1em; box-shadow: 0 0 60px black; background-color: white; border: 1px solid #ababab; } signin-component input, signin-component button { margin-right: 0; }","path":"/component/signin.js",
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

                                    buildApp.loadPage("backend/tasklist", (e) => {
                                        console.log(e);
                                    });

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
