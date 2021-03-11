/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../public/build/dev/app.js":
/*!*************************************!*\
  !*** ../../public/build/dev/app.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myApp\": () => (/* binding */ myApp)\n/* harmony export */ });\n/* harmony import */ var _config_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/routes.js */ \"../../public/build/dev/config/routes.js\");\n/* harmony import */ var _component_topmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/topmenu.js */ \"../../public/build/dev/component/topmenu.js\");\n/* harmony import */ var _component_bottommenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/bottommenu.js */ \"../../public/build/dev/component/bottommenu.js\");\n/* harmony import */ var _config_client_dev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/client.dev.js */ \"../../public/build/dev/config/client.dev.js\");\n\n\n/**\n * shared components\n */\n\n\n\nclass myApp extends radbod.app {\n\n    constructor(environment, $appEL) {\n        super(environment);\n        this.$appEL = $appEL;\n        this.sharedComponents = {};\n        \n        this.mountComponent(\"topmenu#mainmenu\", _component_topmenu_js__WEBPACK_IMPORTED_MODULE_1__.topmenu,  (stores, data, component) => {\n            this.sharedComponents[\"topmenu#mainmenu\"] = component;\n        });  \n\n        this.mountComponent(\"bottommenu#footermenu\", _component_bottommenu_js__WEBPACK_IMPORTED_MODULE_2__.bottommenu,  (stores, data, component) => {\n            this.sharedComponents[\"bottommenu#footermenu\"] = component;\n        }); \n        \n     }\n\n    /**\n     * \n     * @param {*} stores \n     * @param {*} data \n     * @param {*} component \n     * @param {*} path \n     */\n    render(stores, data, component, path) {\n        let title = component.dom.$el.querySelector('title') ? component.dom.$el.querySelector('page').innerTEXT : path;\n        history.pushState(path, title, path);\n        document.querySelector('#section').innerHTML = \"\";\n        document.querySelector('#section').append(component.dom.$el);\n        this.loaded(path);\n    } \n\n    /**\n     * \n     * @param {*} uri \n     */\n    loading(uri) {\n        document.querySelector('.progress-bar').classList.remove(\"loaded\"); \n        document.querySelector('.progress-bar').classList.add(\"loading\");\n    }\n    /**\n     * \n     * @param {*} uri \n     */\n    loaded(uri) {\n        console.log(\"loaded\");\n        document.querySelector('.progress-bar').classList.remove(\"loading\"); \n        document.querySelector('.progress-bar').classList.add(\"loaded\"); \n    }\n\n    /**\n     * \n     * @param {*} component \n     */\n    renderSharedComponents(component) {\n\n        for(let i in this.sharedComponents){\n            let tagName = i.split(\"#\")[0] + \"-component\";\n            let shared = component.dom.$el.getElementsByTagName(tagName);\n            if(shared[0]){\n                shared[0].appendChild(this.sharedComponents[i].dom.$el);\n            }\n        }\n\n    }\n\n    /**\n     * \n     * @param {*} path \n     */\n    loadPage(path, callback) {\n        let page = (0,_config_routes_js__WEBPACK_IMPORTED_MODULE_0__.getFile)(path);\n\n        this.loading(page);\n\n        if (this.components[page]) {\n\n            this.renderSharedComponents(this.components[page]);\n\n            this.render(null, null, this.components[page], path);\n            if (typeof callback === \"function\")\n                callback(this.components[page]);\n        } else {\n            __webpack_require__(\"../../public/build/dev/page lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(`./${page}.js`).then((module) => {\n                this.mountComponent(page, module[page], (stores, data, component) => {\n                    this.render(stores, data, component, path);\n                    this.renderSharedComponents(this.components[page]);\n\n                    if (typeof callback === \"function\")\n                        callback(component);\n                });\n            });\n\n        }\n    }\n\n}\n\n\n\nwindow.buildApp = new myApp(_config_client_dev_js__WEBPACK_IMPORTED_MODULE_3__.environment, document.querySelector('#section'));\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/app.js?");

/***/ }),

/***/ "../../public/build/dev/component/bottommenu.js":
/*!******************************************************!*\
  !*** ../../public/build/dev/component/bottommenu.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bottommenu\": () => (/* binding */ bottommenu)\n/* harmony export */ });\n\n\n    let bottommenu = {\n        \"html\":\"<footer> <div class=\\\"logo\\\"> <img src=\\\"/img/topmenu/logo64.png\\\" alt=\\\"no image\\\" /> </div> <div class=\\\"PRODUCT\\\"> <h3>${_t('Products')}</h3> <ul > <li> <a href=\\\"#/all\\\" class=\\\"selected\\\">${_t('a')}</a> </li> <li> <a href=\\\"#/active\\\" >${_t('b')}</a> </li> <li> <a href=\\\"#/completed\\\">${_t('c')}</a> </li> </ul> </div> <div class=\\\"BLOG\\\"> <h3>${_t('Blog')}</h3> </div> <div class=\\\"followus\\\"> <h3>${_t('Follow us')}</h3> </div> </footer>\",\"style\":\"footer { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px 0px; grid-template-areas: \\\"logo PRODUCT BLOG followus\\\"; } .logo { grid-area: logo; } .PRODUCT { grid-area: PRODUCT; } .BLOG { grid-area: BLOG; } .followus { grid-area: followus; }\",\"path\":\"/component/bottommenu.js\",\n        \n        loaded(data) { //pipeline after data has been loaded\n\n            console.log(\"LOADED bottommenu\", data);\n            data._data.isActive = (path) => this.environment.path().split(\"/\")[1] === path ? \"active\" : \"\";\n        },\n        data(data, runtime) {\n            return this.createStore(\"bottommenu\", {\n                link: \"runtime.path\"\n            })\n        },\n        interactions: () => ({\n            \"hamburger\": {\n                \"click\"(sender, dataStore) {\n                    sender.field.$el.classList.toggle(\"checked\");\n                }\n            },\n            \"/$bottommenu/link\": {\n                \"click\"(sender, dataStore) {\n                    sender.ev.preventDefault();\n\n                    buildApp.loadPage(sender.field.$el.firstChild.getAttribute(\"href\"), () => {\n                        dataStore.link = sender.field.$el.firstChild.getAttribute(\"href\");\n                    });\n\n                }\n            }\n        })\n    }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/component/bottommenu.js?");

/***/ }),

/***/ "../../public/build/dev/component/todo.js":
/*!************************************************!*\
  !*** ../../public/build/dev/component/todo.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\n\n    /**\n     * @TODO\n     * \n     **/\n    let todo = {\n        \"html\":\"<header class=\\\"header\\\"> <h1>${_t('todos')} ${todo.name}</h1> <input class=\\\"new-todo\\\" data-name=\\\"/$todo/name\\\" data-id=\\\"todo-myinput\\\" placeholder=\\\"What needs to be done?\\\" autofocus /> </header> <span> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name=\\\"/$todo/name\\\"></div> <section id=\\\"todos\\\"> <label for=\\\"toggle-all\\\"> <input id=\\\"toggle-all\\\" data-events=\\\"toggle:click\\\" class=\\\"toggle-all\\\" type=\\\"checkbox\\\" data-name=\\\"/$todo/items\\\" /> ${_t('Mark all as complete')}</label> <div id=\\\"all\\\" class=\\\"tab selected\\\"> <h3>${_t('All')}</h3> <ul class=\\\"todo-list\\\" data-name=\\\"/$todo/items\\\" data-view=\\\"todo-list\\\"> ...loading... </ul> </div> <div id=\\\"active\\\" class=\\\"tab\\\"> <h3>${_t('active')}</h3> <ul class=\\\"todo-list\\\" data-name=\\\"/$todo/items\\\" data-view=\\\"todo-list-active\\\"> </ul> </div> <div id=\\\"completed\\\" class=\\\"tab\\\"> <h3>${_t('completed')}</h3> <ul class=\\\"todo-list\\\" data-name=\\\"/$todo/items\\\" data-view=\\\"todo-list-completed\\\"> </ul> </div> <footer class=\\\"footer\\\"> <span class=\\\"todo-count\\\" data-name=\\\"/$todo/tab\\\" ><strong data-name=\\\"/$todo/items\\\" data-view=\\\"count\\\"></strong></span> <ul class=\\\"filters\\\"> <li> <a href=\\\"#/all\\\" data-events=\\\"tab:click\\\" class=\\\"selected\\\">${_t('All')}</a> </li> <li> <a href=\\\"#/active\\\" data-events=\\\"tab:click\\\">${_t('Active')}</a> </li> <li> <a href=\\\"#/completed\\\" data-events=\\\"tab:click\\\">${_t('Completed')}</a> </li> </ul> <button class=\\\"clear-completed\\\">${_t('Clear completed')}</button> </footer> </section>\",\"style\":\"#todos input.toggle { vertical-align: middle; } #todos button.destroy { color: crimson; font-weight: 900; padding: 0; background: none; } #todos li.todo-item { list-style: decimal; } #todos .tab { display: none; } #todos .tab.selected { display: block; } #todos .filters li { display: inline; } #todos .filters li a { color: inherit; margin: 3px; padding: 3px 7px; text-decoration: none; border: 1px solid transparent; border-radius: 3px; } #todos .filters li a:hover { border-color: rgba(175, 47, 47, 0.1); } #todos .filters li a.selected { border-color: rgba(175, 47, 47, 0.2); }\",\"path\":\"/component/todo.js\",\n        \n        lazyLoading: true, /* server side rendering does not wait for store \"todo\" for rendering */\n        mounted() {\n           console.log(\"mounted\", this);\n\n        },\n        views: {\n            \"count\": function(args){\n                switch (args.todo.tab) {\n                    case \"all\": return args.todo.items.filter((i) => i).length;\n                    case \"active\": return args.todo.items.filter((i) => !i.checked).length;\n                    case \"completed\": return args.todo.items.filter((i) => i.checked).length;\n                }\n            },\n            \"todo-list\": function (args) {\n                let { change, todo, _t } = args;\n                return `<li data-name=\"/$todo/items/${change.value.id}\" data-type=\"list-item\" class=\"todo-item\">\n                    <input class=\"toggle\" ${change.value.checked ? `checked` : ``} type=\"checkbox\" data-name=\"/$todo/clickItem\" data-index=\"${change.value.id}\" />\n                    <label contenteditable=\"true\" data-events=\"name:input\" data-index=\"${change.value.id}\" data-name=\"/$todo/items/${change.value.id}\">${change.value.label}</label>\n                    <button class=\"destroy\" data-name=\"/$todo/deleteItem\" data-index=\"${change.value.id}\">&#10007;</button>\n                </li>`;\n            },\n            \"todo-list-active\": function (args) {\n                let { change, todo, _t } = args;\n                return !change.value.checked ? this.dom.views[\"todo-list\"].call(this, args) : \"\";\n            },\n            \"todo-list-completed\": function (args) {\n                let { change, todo, _t } = args;\n                return change.value.checked ? this.dom.views[\"todo-list\"].call(this, args) : \"\";\n            }\n\n        },\n        data(dataReady) {\n             \n            return this.createStore(\"todo\", {}).find({ id: 1 }, function (data) {\n\n                \n                if (typeof dataReady === \"function\")\n                    dataReady(data);\n\n            });\n\n        },\n        interactions() {\n            return {\n                \"tab\": {\n                    \"click\"(sender, dataStore) {\n                        sender.ev.preventDefault();\n                        let tabName = sender.field.$el.getAttribute(\"href\").split(\"/\")[1];\n                        let tab = document.querySelector('#' + tabName);\n                        document.querySelectorAll(\".tab\").forEach(e => e.classList.remove(\"selected\"));\n                        tab.classList.add(\"selected\");\n\n                        document.querySelectorAll(\".filters li a\").forEach(e => e.classList.remove(\"selected\"));\n                        dataStore.tab = tabName;\n                        sender.field.$el.classList.add(\"selected\");\n                    }\n                },\n                \"/$todo/clickItem\": {\n                    \"click\"(sender, dataStore) { //address specific element in dom\n                        let index = parseInt(sender.field.$el.getAttribute(\"data-index\"));\n                        dataStore.items.some((v, k) => {\n                            if (v.id == index) {\n                                dataStore.items[k].checked = !dataStore.items[k].checked;\n                                return true;\n                            }\n                        });\n                    }\n                },\n                \"name\": {\n                    \"input\"(sender, dataStore) {\n                        let index = parseInt(sender.field.$el.getAttribute(\"data-index\"));\n                        for (let k in dataStore.items) {\n                            let v = dataStore.items[k];\n                            if (v.id == index) {\n                                dataStore.items[k].label = sender.field.$el.innerText;\n                            }\n                        }\n                    }\n                },\n                \"/$todo/deleteItem\": {\n                    \"click\"(sender, dataStore) { //address specific element in dom\n                        let index = parseInt(sender.field.$el.getAttribute(\"data-index\"));\n                        dataStore.items.some((v, k) => {\n                            if (v.id == index) {\n                                delete dataStore.items[k];\n                                return true;\n                            }\n                        });\n                    }\n                },\n                \"toggle\": {\n                    \"click\"(sender, dataStore) {\n                        dataStore.checked = !dataStore.checked;\n                        dataStore.items.forEach((i) => i.checked = dataStore.checked);\n                    }\n                },\n                \"/$todo/items\": {\n                    \"change\"(sender, dataStore) {\n                         console.log(dataStore);\n                    }\n                },\n                \"/$todo/name\": {\n                    \"keyup#todo-myinput\"(sender, dataStore) { //address specific element in dom\n                        dataStore.name = sender.field.getValue();\n\n                        if (sender.ev.keyCode === 13) {\n                            dataStore.items.push({\n                                id: dataStore.items.length,\n                                label: dataStore.name,\n                                checked: false\n                            });\n                        }\n                    }\n                }\n            }\n        }\n\n    }\n\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/component/todo.js?");

/***/ }),

/***/ "../../public/build/dev/component/topmenu.js":
/*!***************************************************!*\
  !*** ../../public/build/dev/component/topmenu.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"topmenu\": () => (/* binding */ topmenu)\n/* harmony export */ });\n\n\n    let topmenu = {\n        \"html\":\"<navgation> <div class=\\\"logo\\\"><img src=\\\"/img/topmenu/logo64.png\\\" alt=\\\"no image\\\" /></div> <div class=\\\"hamburger\\\" data-events=\\\"hamburger:click\\\"> <div class=\\\"hamburg\\\"> <span class=\\\"line\\\"></span> <span class=\\\"line\\\"></span> <span class=\\\"line\\\"></span> </div> </div> <ul id=\\\"menu\\\"> <li data-name=\\\"/$topmenu/link\\\"><a href=\\\"/home\\\" class=\\\"${topmenu.isActive('home')}\\\">${_t('home')}</a></li> <li data-name=\\\"/$topmenu/link\\\"><a href=\\\"/form\\\" class=\\\"${topmenu.isActive('form')}\\\">${_t('form')}</a></li> <li data-name=\\\"/$topmenu/link\\\"><a href=\\\"/extra\\\" class=\\\"${topmenu.isActive('extra')}\\\">${_t('extra')}</a></li> </ul> </navgation>\",\"style\":\"navgation { display: flex; justify-content: space-between; } .logo { padding: 0.5em; } .hamburger { padding: 0 0.5em; font-size: 1em; display: flex; z-index: 2; } .hamburg { display: block; width: 2.14em; height: 2em; position: relative; margin: auto; border-radius: 4px; transition: border-radius .5s; } .line { position: absolute; height: 5px; width: inherit; background: #403d3d; border-radius: 32px; display: block; transition: 0.5s; transform-origin: center; } .line:nth-child(1) { top: 12px; } .line:nth-child(2) { top: 24px; } .line:nth-child(3) { top: 36px; } .hamburger.checked .line:nth-child(1) { transform: translateY(12px) rotate(-45deg); } .hamburger.checked .line:nth-child(2) { opacity: 0; } .hamburger.checked .line:nth-child(3) { transform: translateY(-12px) rotate(45deg); } #menu { position: absolute; width: 100%; display: none; background: white; list-style-type: none; top: 0; margin: 0; padding: 0; } #menu:hover { display: block; } #menu li { display: block; line-height: 50px; text-align: center; } #menu a { color: #999; } #menu a:hover { text-decoration: none; color: #0076d1; } #menu a.active { color: #0076d1; font-weight: 500; } .hamburger:hover ~ #menu, .hamburger.checked ~ #menu { display: block; padding: 0; margin: 0; left: 0; right: 0; } @media only screen and (min-width: 768px) { .hamburger { display: none; } #menu { display: flex; position: static; background: none; clear: none; flex: 1; justify-content: flex-end; } #menu:hover { display: flex; } #menu li { padding: 0 1em; } }\",\"path\":\"/component/topmenu.js\",\n        \n         loaded(data) { //pipeline after data has been loaded\n\n            console.log(\"LOADED TOPMENU\", data);\n            data._data.isActive = (path) => this.environment.path().split(\"/\")[1] === path ? \"active\" : \"\";\n        },\n        data(data, runtime) {\n            return this.createStore(\"topmenu\", {\n                link: \"runtime.path\"\n            })\n        },\n        interactions: () => ({\n            \"hamburger\": {\n                \"click\"(sender, dataStore) {\n                    sender.field.$el.classList.toggle(\"checked\");\n                }\n            },\n            \"/$topmenu/link\": {\n                \"click\"(sender, dataStore) {\n                    sender.ev.preventDefault();\n\n                    buildApp.loadPage(sender.field.$el.firstChild.getAttribute(\"href\"), () => {\n                        dataStore.link = sender.field.$el.firstChild.getAttribute(\"href\");\n                    });\n\n                }\n            }\n        })\n    }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/component/topmenu.js?");

/***/ }),

/***/ "../../public/build/dev/config/client.dev.js":
/*!***************************************************!*\
  !*** ../../public/build/dev/config/client.dev.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"environment\": () => (/* binding */ environment)\n/* harmony export */ });\n \nlet environment = {\n    path : function(){\n        return window.location.pathname;\n    },\n    data_loader: {\n        find(query, onResultCallback) {\n\n            setTimeout(() => onResultCallback.call({ dataH: {} }, {\n                name: \"name\",\n                tab: \"all\",\n                items: [{\n                    id: 0,\n                    label: \"Testdaten1\",\n                    checked: true\n                }, {\n                    id: 1,\n                    label: \"Testdaten2\",\n                    checked: false\n                }, {\n                    id: 2,\n                    label: \"Testdaten3\",\n                    checked: false\n                }]\n            }), 1110);\n\n        }\n    }\n};\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/config/client.dev.js?");

/***/ }),

/***/ "../../public/build/dev/config/routes.js":
/*!***********************************************!*\
  !*** ../../public/build/dev/config/routes.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes),\n/* harmony export */   \"getFile\": () => (/* binding */ getFile)\n/* harmony export */ });\nconst routes = {\n    \"home\": \"home\",\n    \"^$\": \"home\",\n    \"user/login\" : \"form\",\n    \"form\" : \"form\",\n    \"_not_found\" : \"notFound\"\n};\n\nfunction getFile(path) {\n\n    let pathCleaned = path.split(\"/\").filter(e => e.trim()!==\"\").join(\"/\");\n     \n    for (let i in routes) {\n\n        let file = routes[i];\n\n        let rex = new RegExp(i, \"ig\");\n\n        let match = pathCleaned.match(rex);\n\n \n        if(match) {\n            return file;\n        }\n    }\n\n    return routes._not_found;\n}\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/config/routes.js?");

/***/ }),

/***/ "../../public/build/dev/middleware/magic_form.js":
/*!*******************************************************!*\
  !*** ../../public/build/dev/middleware/magic_form.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"magic_form\": () => (/* binding */ magic_form)\n/* harmony export */ });\nconst magic_form = function (elementEvents, dataScope = \"/\", onSync, delay = 800) {\n    let calledID = \"\";\n\n    function addValidators(field, fieldPath) {\n        if (field.$el.hasAttribute(\"data-validations\")) {\n            let validators = field.$el.getAttribute(\"data-validations\").split(\",\");\n\n            let metaManager = field.dom.store.getMetaState();\n            let meta = metaManager.getMeta(fieldPath);\n            let validations = field.dom.store.getValidations();\n\n            for (let i of validators) {\n                if (typeof validations[i] === \"function\") {\n                    meta.validators[i] = validations[i];\n                } else {\n                    throw {\n                        name: \"ValidationException\",\n                        message: `Validator named \"${i}\" was not loaded for DataStore \"${field.dom.store.name}\" `,\n                        toString: function () {\n                            return this.name + \": \" + this.message;\n                        }\n                    };\n                }\n            }\n            metaManager.setMeta(fieldPath, meta);\n        }\n    }\n     \n    let kup = {\n        change: function (sender, dataState) {\n            let name = sender.field.$el.getAttribute(\"data-name\").split(\"/\").pop();\n            addValidators(sender.field, sender.field.$el.getAttribute(\"data-name\"));\n            dataState[name] = sender.field.getValue();\n        },\n        keyup: function (sender, dataState) {\n            let name = sender.field.$el.getAttribute(\"data-name\").split(\"/\").pop();\n            addValidators(sender.field, sender.field.$el.getAttribute(\"data-name\"));\n            dataState[name] = sender.field.getValue();\n        }\n    };\n\n    for (let e in this.dom.elementByName) elementEvents[e] = Object.assign({}, elementEvents[e], kup);\n\n    elementEvents[dataScope] = {\n        \"change\"(change, store) {\n            if (typeof onSync === \"function\") {\n                clearTimeout(calledID);\n                calledID = setTimeout(() => onSync(store), delay);\n            }\n        }\n    }\n\n    return elementEvents;\n};\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/middleware/magic_form.js?");

/***/ }),

/***/ "../../public/build/dev/middleware/validator/email.js":
/*!************************************************************!*\
  !*** ../../public/build/dev/middleware/validator/email.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mail_validator\": () => (/* binding */ mail_validator)\n/* harmony export */ });\nconst mail_validator = function (value) {\n    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;\n    let isValid = !(value == '' || !re.test(value));\n\n    return {\n        isValid: isValid,\n        msg: \"E-mail ist nicht gültig\"\n    };\n};\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/middleware/validator/email.js?");

/***/ }),

/***/ "../../public/build/dev/middleware/validator/required.js":
/*!***************************************************************!*\
  !*** ../../public/build/dev/middleware/validator/required.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"required_validator\": () => (/* binding */ required_validator)\n/* harmony export */ });\nconst required_validator = function (value) {\n    return {\n        isValid: typeof value !==\"undefined\" && !!value,\n        msg: \"Dies ist ein Pflichtfeld\"\n    };\n};\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/middleware/validator/required.js?");

/***/ }),

/***/ "../../public/build/dev/page/form.js":
/*!*******************************************!*\
  !*** ../../public/build/dev/page/form.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form)\n/* harmony export */ });\n/* harmony import */ var _middleware_magic_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middleware/magic_form.js */ \"../../public/build/dev/middleware/magic_form.js\");\n/* harmony import */ var _middleware_validator_email_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/validator/email.js */ \"../../public/build/dev/middleware/validator/email.js\");\n/* harmony import */ var _middleware_validator_required_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/validator/required.js */ \"../../public/build/dev/middleware/validator/required.js\");\n\n\n  \n  \n  \n\n \n  let form = {\n        \"html\":\"<extend-head> <title>${_t(\\\"Hier kannst du dich einloggen\\\")}</title> </extend-head> <page> <topmenu-component data-name=\\\"/$topmenu\\\"></topmenu-component> <h1>${_t('Hallo from from')}</h1> <section> <form> <div class=\\\"container\\\"> <div class=\\\"item\\\"> <label for=\\\"age\\\">${_t('Alter')}</label> <input id=\\\"age\\\" type=\\\"number\\\" data-name=\\\"/$user/age\\\" /> <label for=\\\"birthday\\\">${_t('Geburtsdatum')}</label> <input id=\\\"birthday\\\" data-name=\\\"/$user/birthday\\\" type=\\\"date\\\" /> <label for=\\\"bname\\\">${_t('Benutzername')}</label> <input id=\\\"bname\\\" data-name=\\\"/$user/bname\\\" required data-validations=\\\"required_validator\\\" /> <label for=\\\"email\\\">E-Mail</label> <input id=\\\"email\\\" type=\\\"email\\\" data-name=\\\"/$user/email\\\" required data-validations=\\\"mail_validator,required_validator\\\" /> <span data-name=\\\"/_state/$user/email\\\" class=\\\"msg ${ change.value.msg ? 'error':''}\\\">${ change.value.msg ? change.value.msg.map(function(e){return e}) : \\\"\\\" }</span> <label for=\\\"passwd\\\">${_t('Passwort')}</label> <input type=\\\"password\\\" data-name=\\\"/$user/password\\\" id=\\\"passwd\\\" required pattern=\\\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$\\\" /> <button type=\\\"submit\\\" data-name=\\\"/$user/submit\\\">${_t('Anmelden')}</button> </div> <div class=\\\"item biefroest\\\"> </div> </div> </form> </section> <bottommenu-component data-name=\\\"/$bottommenu\\\"></bottommenu-component> </page>\",\"style\":\".error { box-shadow: #f31010 0px 0px 4px 0px; border: 1px solid red; display: block; } span.msg { position: absolute; background-color: lightgoldenrodyellow; border: 1px solid lightgray; border-radius: 0 10px 10px 10px; } .biefroest { background-image: url(\\\"https://mountainmoments.de/wp-content/uploads/2019/04/web_mountainmoments-5-aurora-borealis-fotografieren-J.-Groll-1030x686.jpg\\\"); background-size: cover; background-position-x: center; /* background-image: url(\\\"img/form/biefroest.jpg\\\");*/ }\",\"path\":\"/page/form.js\",\n        \n    mounted() {\n      console.log(\"mounted\", this);\n    },\n    components: { \n      \"topmenu-component\": \"topmenu#mainmenu\",\n      \"bottommenu-component\": \"bottommenu#footermenu\"\n    },\n    data() {\n      return this\n        .createStore(\"user\", { name: \"user login\" })\n        .addValidations({ mail_validator: _middleware_validator_email_js__WEBPACK_IMPORTED_MODULE_1__.mail_validator, required_validator: _middleware_validator_required_js__WEBPACK_IMPORTED_MODULE_2__.required_validator });\n    },\n    interactions() {\n      return _middleware_magic_form_js__WEBPACK_IMPORTED_MODULE_0__.magic_form.call(this, {\n        \"/$user/submit\": {\n          click(change, state) {\n            change.ev.preventDefault();\n            alert(\"SUBMIT\");\n          }\n        },\n        \"/_state/$user/email/msg\": {\n          change(change, state) {\n            if (!state.isValid) {\n              document.querySelector(\"#email\").classList.add(\"error\");\n            } else {\n              document.querySelector(\"#email\").classList.remove(\"error\");\n            }\n            console.log(change, state);\n          }\n        }\n\n      }, \"/$user\", function (data) {\n\n        console.log(\"CHANGE PLEASE BACKEND SYNC\", data)\n\n      });\n    },\n    translations(language) {\n      return {};\n    }\n  }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/form.js?");

/***/ }),

/***/ "../../public/build/dev/page/home.js":
/*!*******************************************!*\
  !*** ../../public/build/dev/page/home.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _component_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/todo.js */ \"../../public/build/dev/component/todo.js\");\n/* harmony import */ var _i18n_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/home.js */ \"../../public/build/dev/page/i18n/home.js\");\n\n    \n    \n    \n    let home = {\n        \"html\":\"<extend-head> <title>${_t('Willkommen home')}</title> </extend-head> <page> <topmenu-component type=\\\"component\\\" data-name=\\\"/$topmenu\\\"></topmenu-component> <h1> ${_t('dtest')} ${home.name}</h1> <input data-name=\\\"/$home/name\\\" /> <div data-name=\\\"/$home/name\\\"></div> <todo-component type=\\\"component\\\" data-name=\\\"/$todo\\\"></todo-component> <bottommenu-component data-name=\\\"/$bottommenu\\\"></bottommenu-component> </page>\",\"style\":\"\",\"path\":\"/page/home.js\",\n        \n        mounted() {\n            console.log(\"mounted\", this);\n        },\n        components: \n             { \"todo-component\": _component_todo_js__WEBPACK_IMPORTED_MODULE_0__.todo,\n              \"topmenu-component\": \"topmenu#mainmenu\", \n              \"bottommenu-component\": \"bottommenu#footermenu\"\n            }\n        ,\n        data() {\n            return this.createStore(\"home\", { name: \"AK home\" });\n        },\n        interactions() {\n            return {\n                \"/$home/name\": {\n                    \"keyup\"(sender, data) { //address specific element in dom\n                        data.name = sender.field.getValue();\n                    }\n                }\n            }\n        },\n        translations(language) {\n            return _i18n_home_js__WEBPACK_IMPORTED_MODULE_1__.translations[language];\n        }\n    }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/home.js?");

/***/ }),

/***/ "../../public/build/dev/page/i18n/form.js":
/*!************************************************!*\
  !*** ../../public/build/dev/page/i18n/form.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translations\": () => (/* binding */ translations)\n/* harmony export */ });\nconst translations = {\"en_EN\":{\"\\\\\":\"\\\\\",\"Hallo from from\":\"Hallo from from\",\"Alter\":\"Alter\",\"Geburtsdatum\":\"Geburtsdatum\",\"Benutzername\":\"Benutzername\",\"Passwort\":\"Passwort\",\"Anmelden\":\"Anmelden\",\"Written by\":\"Written by\",\"Luke Edwards\":\"Luke Edwards\",\"Refactored by\":\"Refactored by\",\"Aaron Muir Hamilton\":\"Aaron Muir Hamilton\",\"Part of\":\"Part of\",\"TodoMVC\":\"TodoMVC\",\"Profile\":\"Profile\",\"Website\":\"Website\",\"About\":\"About\",\"Photo\":\"Photo\",\"Change\":\"Change\",\"Cover photo\":\"Cover photo\",\"Upload a file\":\"Upload a file\",\"or drag and drop\":\"or drag and drop\",\"Save\":\"Save\",\"Personal Information\":\"Personal Information\",\"First name\":\"First name\",\"Last name\":\"Last name\",\"Email address\":\"Email address\",\"United States\":\"United States\",\"Canada\":\"Canada\",\"Mexico\":\"Mexico\",\"Street address\":\"Street address\",\"City\":\"City\",\"Notifications\":\"Notifications\",\"By Email\":\"By Email\",\"Comments\":\"Comments\",\"Candidates\":\"Candidates\",\"Offers\":\"Offers\",\"Push Notifications\":\"Push Notifications\",\"Everything\":\"Everything\",\"Same as email\":\"Same as email\",\"No push notifications\":\"No push notifications\",\"Hallo from login\":\"Hallo from login\"}}\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/i18n/form.js?");

/***/ }),

/***/ "../../public/build/dev/page/i18n/home.js":
/*!************************************************!*\
  !*** ../../public/build/dev/page/i18n/home.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translations\": () => (/* binding */ translations)\n/* harmony export */ });\nconst translations = {\"en_EN\":{\"Willkommen home\":\"Willkommen home\",\"dtest\":\"dtest\",\"\\\\\":\"\\\\\",\"Written by\":\"Written by\",\"Luke Edwards\":\"Luke Edwards\",\"Refactored by\":\"Refactored by\",\"Aaron Muir Hamilton\":\"Aaron Muir Hamilton\",\"Part of\":\"Part of\",\"TodoMVC\":\"TodoMVC\",\"dtest ${home.name}\":\"dtest ${home.name}\",\"Double-click to edit a todo\":\"Double-click to edit a todo\",\"${_t(\\\\\\\"asas\\\\\":\"${_t(\\\\\\\"asas\\\\\",\"Hallo\":\"hello xxx\",\"test\":\"testa\"},\"de_DE\":{\"Willkommen home\":\"Willkommen daheim\",\"Hallo\":\"guten tag de\",\"Written by\":\"Written by\",\"Luke Edwards\":\"Luke Edwards\",\"Refactored by\":\"Refactored by\",\"Aaron Muir Hamilton\":\"Aaron Muir Hamilton\",\"Part of\":\"Part of\",\"TodoMVC\":\"TodoMVC\",\"test\":\"testa\"}}\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/i18n/home.js?");

/***/ }),

/***/ "../../public/build/dev/page/i18n/notFound.js":
/*!****************************************************!*\
  !*** ../../public/build/dev/page/i18n/notFound.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translations\": () => (/* binding */ translations)\n/* harmony export */ });\nconst translations = {\"en_EN\":{\"404 oops Seite nicht gefunden\":\"404 oops Seite nicht gefunden\",\"Hallo\":\"Hallo\",\"Written by\":\"Written by\",\"Luke Edwards\":\"Luke Edwards\",\"Refactored by\":\"Refactored by\",\"Aaron Muir Hamilton\":\"Aaron Muir Hamilton\",\"Part of\":\"Part of\",\"TodoMVC\":\"TodoMVC\",\"Hallo not FOUND\":\"Hallo not FOUND\",\"Double-click to edit a todo\":\"Double-click to edit a todo\",\"oops Seite nicht gefunden\":\"oops Seite nicht gefunden\",\"Seite nicht gefunden\":\"Seite nicht gefunden\"}}\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/i18n/notFound.js?");

/***/ }),

/***/ "../../public/build/dev/page/notFound.js":
/*!***********************************************!*\
  !*** ../../public/build/dev/page/notFound.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notFound\": () => (/* binding */ notFound)\n/* harmony export */ });\n\n \n    let notFound = {\n        \"html\":\"<extend-head> <title>${_t('404 oops Seite nicht gefunden')}</title> </extend-head> <page> <topmenu-component type=\\\"component\\\" data-name=\\\"/$topmenu\\\"></topmenu-component> <h1>${_t('Hallo')} ${notFound.name}</h1> <section class=\\\"todoapp\\\"> <todo-component data-name=\\\"/$items\\\"></todo-component> </section> <bottommenu-component data-name=\\\"/$bottommenu\\\"></bottommenu-component> </page>\",\"style\":\"\",\"path\":\"/page/notFound.js\",\n        \n        components: {\n             \"topmenu-component\": \"topmenu#mainmenu\",\n             \"bottommenu-component\": \"bottommenu#footermenu\"\n            },\n        data() {\n            return this.createStore(\"notFound\", { name: \"AK not Found\" });\n        },\n        interactions() {\n            return {}\n        }\n    }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/notFound.js?");

/***/ }),

/***/ "../../public/build/dev/page lazy recursive ^\\.\\/.*\\.js$":
/*!******************************************************************************!*\
  !*** ../../public/build/dev/page/ lazy ^\.\/.*\.js$ strict namespace object ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./form.js\": [\n\t\t\"../../public/build/dev/page/form.js\",\n\t\t\"main\"\n\t],\n\t\"./home.js\": [\n\t\t\"../../public/build/dev/page/home.js\",\n\t\t\"main\"\n\t],\n\t\"./i18n/form.js\": [\n\t\t\"../../public/build/dev/page/i18n/form.js\",\n\t\t\"main\"\n\t],\n\t\"./i18n/home.js\": [\n\t\t\"../../public/build/dev/page/i18n/home.js\",\n\t\t\"main\"\n\t],\n\t\"./i18n/notFound.js\": [\n\t\t\"../../public/build/dev/page/i18n/notFound.js\",\n\t\t\"main\"\n\t],\n\t\"./notFound.js\": [\n\t\t\"../../public/build/dev/page/notFound.js\",\n\t\t\"main\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"../../public/build/dev/page lazy recursive ^\\\\.\\\\/.*\\\\.js$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/_lazy_^\\.\\/.*\\.js$_strict_namespace_object?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../../public/build/dev/app.js");
/******/ 	
/******/ })()
;