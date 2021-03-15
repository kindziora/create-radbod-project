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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myApp\": () => (/* binding */ myApp)\n/* harmony export */ });\n/* harmony import */ var _config_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/routes.js */ \"../../public/build/dev/config/routes.js\");\n/* harmony import */ var _component_topmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/topmenu.js */ \"../../public/build/dev/component/topmenu.js\");\n/* harmony import */ var _component_bottommenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/bottommenu.js */ \"../../public/build/dev/component/bottommenu.js\");\n/* harmony import */ var _config_client_dev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/client.dev.js */ \"../../public/build/dev/config/client.dev.js\");\n\n\n/**\n * shared components\n */\n\n\n\nclass myApp extends radbod.app {\n\n    constructor(environment, $appEL) {\n\n        environment.view.path = () => window.location.pathname;\n\n        super(environment);\n        this.$appEL = $appEL;\n        this.sharedComponents = {};\n  \n        this.mountComponent(\"topmenu#mainmenu\", _component_topmenu_js__WEBPACK_IMPORTED_MODULE_1__.topmenu,  (stores, data, component) => {\n            this.sharedComponents[\"topmenu#mainmenu\"] = component;\n        });  \n\n        this.mountComponent(\"bottommenu#footermenu\", _component_bottommenu_js__WEBPACK_IMPORTED_MODULE_2__.bottommenu,  (stores, data, component) => {\n            this.sharedComponents[\"bottommenu#footermenu\"] = component;\n        }); \n        \n     }\n\n\n    /**\n     * \n     * @param {*} stores \n     * @param {*} data \n     * @param {*} component \n     * @param {*} path \n     */\n    render(stores, data, component, path) {\n        let title = component.dom.$el.querySelector('title') ? component.dom.$el.querySelector('page').innerTEXT : path;\n        history.pushState(path, title, path);\n        document.querySelector('#section').innerHTML = \"\";\n        document.querySelector('#section').append(component.dom.$el);\n        this.loaded(path);\n    } \n\n    /**\n     * \n     * @param {*} uri \n     */\n    loading(uri) {\n        document.querySelector('.progress-bar').classList.remove(\"loaded\"); \n        document.querySelector('.progress-bar').classList.add(\"loading\");\n    }\n    /**\n     * \n     * @param {*} uri \n     */\n    loaded(uri) {\n        console.log(\"loaded\");\n        document.querySelector('.progress-bar').classList.remove(\"loading\"); \n        document.querySelector('.progress-bar').classList.add(\"loaded\"); \n    }\n\n    /**\n     * \n     * @param {*} component \n     */\n    renderSharedComponents(component) {\n        \n        for(let i in this.sharedComponents){\n            let tagName = i.split(\"#\")[0] + \"-component\";\n            let shared = component.dom.$el.getElementsByTagName(tagName);\n            if(shared[0]){\n                shared[0].appendChild(this.sharedComponents[i].dom.$el);\n            }\n        }\n\n    }\n \n    /**\n     * \n     * @param {*} path \n     * @param {*} callback \n     */\n    loadPage(path, callback) {\n        let routeInfo = (0,_config_routes_js__WEBPACK_IMPORTED_MODULE_0__.parseRoute)(path);\n        let page = routeInfo.filename;\n\n        this.setLanguage(routeInfo.language); \n\n        this.loading(page);\n\n        if (this.components[page]) {\n\n            this.renderSharedComponents(this.components[page]);\n\n            this.render(null, null, this.components[page], path);\n            if (typeof callback === \"function\")\n                callback(this.components[page]);\n        } else {\n            __webpack_require__(\"../../public/build/dev/page lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(`./${page}.js`).then((module) => {\n                this.mountComponent(page, module[page], (stores, data, component) => {\n                    this.render(stores, data, component, path);\n                    this.renderSharedComponents(this.components[page]);\n\n                    if (typeof callback === \"function\")\n                        callback(component);\n                });\n            }).catch((err)=>{\n                console.log(err);\n                this.loadPage(\"notFound\");\n            });\n\n        }\n    }\n\n}\n\n\n\nwindow.buildApp = new myApp(_config_client_dev_js__WEBPACK_IMPORTED_MODULE_3__.environment, document.querySelector('#section'));\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/app.js?");

/***/ }),

/***/ "../../public/build/dev/component/bottommenu.js":
/*!******************************************************!*\
  !*** ../../public/build/dev/component/bottommenu.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bottommenu\": () => (/* binding */ bottommenu)\n/* harmony export */ });\n\n\n    let bottommenu = {\n        \"html\":\"<footer> <div class=\\\"logo\\\"> <img src=\\\"/img/topmenu/logo64.png\\\" alt=\\\"no image\\\" /> </div> <div class=\\\"PRODUCT\\\"> <h3>${_t('Products')}</h3> <ul> <li> <a href=\\\"#/all\\\" class=\\\"selected\\\">${_t('Website Content')}</a> </li> <li> <a href=\\\"#/active\\\">${_t('Blog Artikel')}</a> </li> <li> <a href=\\\"#/completed\\\">${_t('Seo Optimierte Inhalte')}</a> </li> </ul> </div> <div class=\\\"BLOG\\\"> <h3>${_t('Blog')}</h3> <ul> <li> <a href=\\\"#/all\\\" class=\\\"selected\\\">${_t('Wie schreibt man richtig?')}</a> </li> <li> <a href=\\\"#/active\\\">${_t('SEO-Tricks')}</a> </li> <li> <a href=\\\"#/completed\\\">${_t('News')}</a> </li> </ul> </div> <div class=\\\"followus\\\"> <h3>${_t('Follow us')}</h3> <svg style=\\\"position: absolute; width: 0; height: 0; overflow: hidden;\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"> <defs> <symbol id=\\\"icon-twitter-with-circle\\\" viewBox=\\\"0 0 20 20\\\"> <title>${_t('twitter-with-circle')}</title> <path d=\\\"M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM13.905 8.264c0.004 0.082 0.005 0.164 0.005 0.244 0 2.5-1.901 5.381-5.379 5.381-1.068 0-2.062-0.312-2.898-0.85 0.147 0.018 0.298 0.025 0.451 0.025 0.886 0 1.701-0.301 2.348-0.809-0.827-0.016-1.525-0.562-1.766-1.312 0.115 0.021 0.233 0.033 0.355 0.033 0.172 0 0.34-0.023 0.498-0.066-0.865-0.174-1.517-0.938-1.517-1.854v-0.023c0.255 0.141 0.547 0.227 0.857 0.237-0.508-0.34-0.841-0.918-0.841-1.575 0-0.346 0.093-0.672 0.256-0.951 0.933 1.144 2.325 1.896 3.897 1.977-0.033-0.139-0.049-0.283-0.049-0.432 0-1.043 0.846-1.891 1.891-1.891 0.543 0 1.035 0.23 1.38 0.598 0.431-0.086 0.835-0.242 1.2-0.459-0.141 0.441-0.44 0.812-0.831 1.047 0.383-0.047 0.747-0.148 1.086-0.299-0.253 0.379-0.574 0.713-0.943 0.979z\\\"> </path> </symbol> <symbol id=\\\"icon-youtube-with-circle\\\" viewBox=\\\"0 0 20 20\\\"> <title>${_t('youtube-with-circle')}</title> <path d=\\\"M11.603 9.833l-2.246-1.048c-0.196-0.091-0.357 0.011-0.357 0.228v1.974c0 0.217 0.161 0.319 0.357 0.228l2.245-1.048c0.197-0.092 0.197-0.242 0.001-0.334zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM10 13.9c-4.914 0-5-0.443-5-3.9s0.086-3.9 5-3.9 5 0.443 5 3.9-0.086 3.9-5 3.9z\\\"> </path> </symbol> <symbol id=\\\"icon-instagram-with-circle\\\" viewBox=\\\"0 0 20 20\\\"> <title>${_t('instagram-with-circle')}</title> <path d=\\\"M13 10c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.171 0.018-0.338 0.049-0.5h-1.049v3.997c0 0.278 0.225 0.503 0.503 0.503h6.995c0.277 0 0.502-0.225 0.502-0.503v-3.997h-1.049c0.031 0.162 0.049 0.329 0.049 0.5zM10 12c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2zM12.4 7.9h1.199c0.166 0 0.301-0.135 0.301-0.3v-1.199c0-0.166-0.135-0.301-0.301-0.301h-1.199c-0.166 0-0.301 0.135-0.301 0.301v1.199c0.001 0.165 0.136 0.3 0.301 0.3zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.302 0 9.6-4.298 9.6-9.6s-4.298-9.6-9.6-9.6zM15 13.889c0 0.611-0.5 1.111-1.111 1.111h-7.778c-0.611 0-1.111-0.5-1.111-1.111v-7.778c0-0.611 0.5-1.111 1.111-1.111h7.778c0.611 0 1.111 0.5 1.111 1.111v7.778z\\\"> </path> </symbol> <symbol id=\\\"icon-facebook-with-circle\\\" viewBox=\\\"0 0 20 20\\\"> <title>${_t('facebook-with-circle')}</title> <path d=\\\"M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM12.274 7.034h-1.443c-0.171 0-0.361 0.225-0.361 0.524v1.042h1.805l-0.273 1.486h-1.532v4.461h-1.703v-4.461h-1.545v-1.486h1.545v-0.874c0-1.254 0.87-2.273 2.064-2.273h1.443v1.581z\\\"> </path> </symbol> </defs> </svg> <svg height=\\\"30px\\\" width=\\\"30px\\\"> <use xlink:href=\\\"#icon-facebook-with-circle\\\"></use> </svg> <svg height=\\\"30px\\\" width=\\\"30px\\\"> <use xlink:href=\\\"#icon-instagram-with-circle\\\"></use> </svg> <svg height=\\\"30px\\\" width=\\\"30px\\\"> <use xlink:href=\\\"#icon-twitter-with-circle\\\"></use> </svg> <svg height=\\\"30px\\\" width=\\\"30px\\\"> <use xlink:href=\\\"#icon-youtube-with-circle\\\"></use> </svg> </div> </footer>\",\"style\":\"bottommenu-component footer { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px 0px; grid-template-areas: \\\"logo PRODUCT BLOG followus\\\"; } bottommenu-component footer .logo { grid-area: logo; display: flex; align-items: center; justify-content: center; } bottommenu-component footer ul { list-style-type: none; margin: 0; padding: 0; } @media only screen and (max-width: 768px) { bottommenu-component footer { display: block; } bottommenu-component footer div { text-align: center; } } bottommenu-component .PRODUCT { grid-area: PRODUCT; } bottommenu-component .BLOG { grid-area: BLOG; } bottommenu-component .followus { grid-area: followus; }\",\"path\":\"/component/bottommenu.js\",\n        \n        loaded(data) { //pipeline after data has been loaded\n  \n        },\n        data(data, runtime) {\n            return this.createStore(\"bottommenu\", {\n                link: \"runtime.path\"\n            })\n        },\n        interactions: () => ({\n            \"hamburger\": {\n                \"click\"(sender, dataStore) {\n                    sender.field.$el.classList.toggle(\"checked\");\n                }\n            },\n            \"/$bottommenu/link\": {\n                \"click\"(sender, dataStore) {\n                    sender.ev.preventDefault();\n\n                    buildApp.loadPage(sender.field.$el.firstChild.getAttribute(\"href\"), () => {\n                        dataStore.link = sender.field.$el.firstChild.getAttribute(\"href\");\n                    });\n\n                }\n            }\n        })\n    }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/component/bottommenu.js?");

/***/ }),

/***/ "../../public/build/dev/component/todo.js":
/*!************************************************!*\
  !*** ../../public/build/dev/component/todo.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\n\n    /**\n     * @TODO\n     * \n     **/\n    let todo = {\n        \"html\":\"<header class=\\\"header\\\"> <h1>${_t('todos')} ${todo.name}</h1> <input class=\\\"new-todo\\\" data-name=\\\"/$todo/name\\\" data-id=\\\"todo-myinput\\\" placeholder=\\\"What needs to be done?\\\" autofocus /> </header> <span> ${_t('hier ist nochmal der name')} ${todo.name} </span> <div data-name=\\\"/$todo/name\\\"></div> <section id=\\\"todos\\\"> <label for=\\\"toggle-all\\\"> <input id=\\\"toggle-all\\\" data-events=\\\"toggle:click\\\" class=\\\"toggle-all\\\" type=\\\"checkbox\\\" data-name=\\\"/$todo/items\\\" /> ${_t('Mark all as complete')}</label> <div id=\\\"all\\\" class=\\\"tab selected\\\"> <h3>${_t('All')}</h3> <ul class=\\\"todo-list\\\" data-name=\\\"/$todo/items\\\" data-view=\\\"todo-list\\\"> ${_t('...loading...')} </ul> </div> <div id=\\\"active\\\" class=\\\"tab\\\"> <h3>${_t('active')}</h3> <ul class=\\\"todo-list\\\" data-name=\\\"/$todo/items\\\" data-view=\\\"todo-list-active\\\"> </ul> </div> <div id=\\\"completed\\\" class=\\\"tab\\\"> <h3>${_t('completed')}</h3> <ul class=\\\"todo-list\\\" data-name=\\\"/$todo/items\\\" data-view=\\\"todo-list-completed\\\"> </ul> </div> <footer class=\\\"footer\\\"> <span class=\\\"todo-count\\\" data-name=\\\"/$todo/tab\\\"><strong data-name=\\\"/$todo/items\\\" data-view=\\\"count\\\"></strong></span> <ul class=\\\"filters\\\"> <li> <a href=\\\"#/all\\\" data-events=\\\"tab:click\\\" class=\\\"selected\\\">${_t('All')}</a> </li> <li> <a href=\\\"#/active\\\" data-events=\\\"tab:click\\\">${_t('Active')}</a> </li> <li> <a href=\\\"#/completed\\\" data-events=\\\"tab:click\\\">${_t('Completed')}</a> </li> </ul> <button class=\\\"clear-completed\\\">${_t('Clear completed')}</button> </footer> </section>\",\"style\":\"#todos input.toggle { vertical-align: middle; } #todos footer { display: grid; grid-template-columns: 1fr 3fr 3fr; } #todos button.destroy { color: crimson; font-weight: 900; padding: 0; background: none; } #todos li.todo-item { list-style: decimal; } #todos .tab { display: none; } #todos .tab.selected { display: block; } #todos .filters li { display: inline; } #todos .filters li a { color: inherit; margin: 3px; padding: 3px 7px; text-decoration: none; border: 1px solid transparent; border-radius: 3px; } #todos .filters li a:hover { border-color: rgba(175, 47, 47, 0.1); } #todos .filters li a.selected { border-color: rgba(175, 47, 47, 0.2); }\",\"path\":\"/component/todo.js\",\n        \n        lazyLoading: true, /* server side rendering does not wait for store \"todo\" for rendering */\n        mounted() {\n          //  console.log(\"mounted\", this);\n\n        },\n        views: {\n            \"count\": function (args) {\n                switch (args.todo.tab) {\n                    case \"all\": return args.todo.items.filter((i) => i).length;\n                    case \"active\": return args.todo.items.filter((i) => !i.checked).length;\n                    case \"completed\": return args.todo.items.filter((i) => i.checked).length;\n                }\n            },\n            \"todo-list\": function (args) {\n                let { change, todo, _t } = args;\n                return `<li data-name=\"/$todo/items/${change.value.id}\" data-type=\"list-item\" class=\"todo-item\">\n                    <input class=\"toggle\" ${change.value.checked ? `checked` : ``} type=\"checkbox\" data-name=\"/$todo/clickItem\" data-index=\"${change.value.id}\" />\n                    <label contenteditable=\"true\" data-events=\"name:input\" data-index=\"${change.value.id}\" data-name=\"/$todo/items/${change.value.id}\">${change.value.label}</label>\n                    <button class=\"destroy\" data-name=\"/$todo/deleteItem\" data-index=\"${change.value.id}\">&#10007;</button>\n                </li>`;\n            },\n            \"todo-list-active\": function (args) {\n                let { change, todo, _t } = args;\n                return !change.value.checked ? this.dom.views[\"todo-list\"].call(this, args) : \"\";\n            },\n            \"todo-list-completed\": function (args) {\n                let { change, todo, _t } = args;\n                return change.value.checked ? this.dom.views[\"todo-list\"].call(this, args) : \"\";\n            }\n\n        },\n        data(dataReady) {\n\n            return this.createStore(\"todo\", {}).find({ id: 1 }, function (data) {\n\n\n                if (typeof dataReady === \"function\")\n                    dataReady(data);\n\n            });\n\n        },\n        interactions() {\n            return {\n                \"tab\": {\n                    \"click\"(sender, dataStore) {\n                        sender.ev.preventDefault();\n                        let tabName = sender.field.$el.getAttribute(\"href\").split(\"/\")[1];\n                        let tab = document.querySelector('#' + tabName);\n                        document.querySelectorAll(\".tab\").forEach(e => e.classList.remove(\"selected\"));\n                        tab.classList.add(\"selected\");\n\n                        document.querySelectorAll(\".filters li a\").forEach(e => e.classList.remove(\"selected\"));\n                        dataStore.tab = tabName;\n                        sender.field.$el.classList.add(\"selected\");\n                    }\n                },\n                \"/$todo/clickItem\": {\n                    \"click\"(sender, dataStore) { //address specific element in dom\n                        let index = parseInt(sender.field.$el.getAttribute(\"data-index\"));\n                        dataStore.items.some((v, k) => {\n                            if (v.id == index) {\n                                dataStore.items[k].checked = !dataStore.items[k].checked;\n                                return true;\n                            }\n                        });\n                    }\n                },\n                \"name\": {\n                    \"input\"(sender, dataStore) {\n                        let index = parseInt(sender.field.$el.getAttribute(\"data-index\"));\n                        for (let k in dataStore.items) {\n                            let v = dataStore.items[k];\n                            if (v.id == index) {\n                                dataStore.items[k].label = sender.field.$el.innerText;\n                            }\n                        }\n                    }\n                },\n                \"/$todo/deleteItem\": {\n                    \"click\"(sender, dataStore) { //address specific element in dom\n                        let index = parseInt(sender.field.$el.getAttribute(\"data-index\"));\n                        dataStore.items.some((v, k) => {\n                            if (v.id == index) {\n                                delete dataStore.items[k];\n                                return true;\n                            }\n                        });\n                    }\n                },\n                \"toggle\": {\n                    \"click\"(sender, dataStore) {\n                        dataStore.checked = !dataStore.checked;\n                        dataStore.items.forEach((i) => i.checked = dataStore.checked);\n                    }\n                },\n                \"/$todo/items\": {\n                    \"change\"(sender, dataStore) {\n                        console.log(dataStore);\n                    }\n                },\n                \"/$todo/name\": {\n                    \"keyup#todo-myinput\"(sender, dataStore) { //address specific element in dom\n                        dataStore.name = sender.field.getValue();\n\n                        if (sender.ev.keyCode === 13) {\n                            dataStore.items.push({\n                                id: dataStore.items.length,\n                                label: dataStore.name,\n                                checked: false\n                            });\n                        }\n                    }\n                }\n            }\n        }\n\n    }\n\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/component/todo.js?");

/***/ }),

/***/ "../../public/build/dev/component/topmenu.js":
/*!***************************************************!*\
  !*** ../../public/build/dev/component/topmenu.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"topmenu\": () => (/* binding */ topmenu)\n/* harmony export */ });\n\n\n    let topmenu = {\n        \"html\":\"<navgation> <div class=\\\"logo\\\"><img src=\\\"/img/topmenu/logo_serialtexter.png\\\" alt=\\\"no image\\\" /></div> <div class=\\\"hamburger\\\" data-events=\\\"hamburger:click\\\"> <div class=\\\"hamburg\\\"> <span class=\\\"line\\\"></span> <span class=\\\"line\\\"></span> <span class=\\\"line\\\"></span> </div> </div> <ul id=\\\"menu\\\"> <li data-name=\\\"/$topmenu/link\\\"><a href=\\\"${env.view.url('start')}\\\" class=\\\"${env.view.isActive('start')}\\\">${_t('start')}</a></li> <li data-name=\\\"/$topmenu/link\\\"><a href=\\\"${env.view.url('home')}\\\" class=\\\"${env.view.isActive('home')}\\\">${_t('home')}</a></li> <li data-name=\\\"/$topmenu/link\\\"><a href=\\\"${env.view.url('form')}\\\" class=\\\"${ env.view.isActive('form') }\\\">${_t('form')}</a></li> <li data-name=\\\"/$topmenu/link\\\"><a href=\\\"${env.view.url('extra')}\\\" class=\\\"${env.view.isActive('extra')}\\\">${_t('extra')}</a></li> </ul> </navgation>\",\"style\":\"navgation { display: flex; justify-content: space-between; } navgation .logo { width: 15em; } navgation .hamburger { top: 0; font-size: 1em; display: flex; z-index: 2; } navgation .hamburg { display: block; width: 2.14em; height: 2em; position: relative; margin: auto; border-radius: 4px; transition: border-radius .5s; } navgation .line { position: absolute; height: 5px; width: inherit; background: #403d3d; border-radius: 32px; display: block; transition: 0.5s; transform-origin: center; } navgation .line:nth-child(1) { top: 12px; } navgation .line:nth-child(2) { top: 24px; } navgation .line:nth-child(3) { top: 36px; } navgation .hamburger.checked .line:nth-child(1) { transform: translateY(12px) rotate(-45deg); } navgation .hamburger.checked .line:nth-child(2) { opacity: 0; } navgation .hamburger.checked .line:nth-child(3) { transform: translateY(-12px) rotate(45deg); } navgation #menu { position: absolute; width: 100%; display: none; background: white; list-style-type: none; top: 0; margin: 0; padding: 0; } navgation #menu:hover { display: block; } navgation #menu li { display: block; line-height: 50px; text-align: center; } navgation #menu a { color: #999; } navgation #menu a:hover { text-decoration: none; color: #0076d1; } navgation #menu a.active { color: #0076d1; font-weight: 500; } navgation .hamburger:hover ~ #menu, navgation .hamburger.checked ~ #menu { display: block; padding: 0; margin: 0; left: 0; right: 0; } @media only screen and (min-width: 768px) { navgation .hamburger { display: none; } navgation #menu { display: flex; position: static; background: none; clear: none; flex: 1; justify-content: flex-end; } navgation #menu:hover { display: flex; } navgation #menu li { padding: 0 1em; } }\",\"path\":\"/component/topmenu.js\",\n        \n        loaded(data) { //pipeline after data has been loaded\n\n        },\n        data(data, runtime) {\n            return this.createStore(\"topmenu\", {\n                link: \"runtime.path\"\n            })\n        },\n        interactions: () => ({\n            \"hamburger\": {\n                \"click\"(sender, dataStore) {\n                    sender.field.$el.classList.toggle(\"checked\");\n                }\n            },\n            \"/$topmenu/link\": {\n                \"click\"(sender, dataStore) {\n                    sender.ev.preventDefault();\n\n                    buildApp.loadPage(sender.field.$el.firstChild.getAttribute(\"href\"), () => {\n                        dataStore.link = sender.field.$el.firstChild.getAttribute(\"href\");\n                    });\n\n                }\n            }\n        })\n    }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/component/topmenu.js?");

/***/ }),

/***/ "../../public/build/dev/config/client.dev.js":
/*!***************************************************!*\
  !*** ../../public/build/dev/config/client.dev.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"environment\": () => (/* binding */ environment)\n/* harmony export */ });\n/* harmony import */ var _middleware_view_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middleware/view/view.js */ \"../../public/build/dev/middleware/view/view.js\");\n\n\n\nlet environment = {\n    view : new _middleware_view_view_js__WEBPACK_IMPORTED_MODULE_0__.viewFunctions(undefined),\n    data_loader: {\n        find(query, onResultCallback) {\n\n            setTimeout(() => onResultCallback.call({ dataH: {} }, {\n                name: \"name\",\n                tab: \"all\",\n                items: [{\n                    id: 0,\n                    label: \"Testdaten1\",\n                    checked: true\n                }, {\n                    id: 1,\n                    label: \"Testdaten2\",\n                    checked: false\n                }, {\n                    id: 2,\n                    label: \"Testdaten3\",\n                    checked: false\n                }]\n            }), 110);\n\n        }\n    }\n};\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/config/client.dev.js?");

/***/ }),

/***/ "../../public/build/dev/config/routes.js":
/*!***********************************************!*\
  !*** ../../public/build/dev/config/routes.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes),\n/* harmony export */   \"parseRoute\": () => (/* binding */ parseRoute)\n/* harmony export */ });\nconst routes = {\n    \"^([a-z]{2}_[A-Z]{2})/([.-\\w]*)$\": 2, // regex input : match group \n    \"^home\": \"home\",\n    \"^start\": \"start\",\n    \"^$\": \"start\",\n    \"^user/login\": \"form\",\n    \"^form\": \"form\",\n    \"_not_found\": \"notFound\"\n};\n\nfunction parseRoute(path) {\n    let lang = false;\n    let pathCleaned = path.split(\"/\").filter(e => e.trim() !== \"\").join(\"/\");\n\n    for (let i in routes) {\n\n        let file = routes[i];\n       \n        let rex = new RegExp(i, \"i\");\n\n        let match = pathCleaned.match(rex);\n\n        console.log(\"ROUTE MATCH \", pathCleaned, rex, match);\n\n        if (match) {\n\n            if (Number.isInteger(file)) {\n                file = match[file];\n                lang = match[1];\n            }\n\n            return { filename: file, language: lang };\n        }\n    }\n\n    return { filename: routes._not_found, language: lang };\n}\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/config/routes.js?");

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

/***/ "../../public/build/dev/middleware/view/view.js":
/*!******************************************************!*\
  !*** ../../public/build/dev/middleware/view/view.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"viewFunctions\": () => (/* binding */ viewFunctions)\n/* harmony export */ });\nconst REGEX_LANGUAGE = /([a-z]{2}_[A-Z]{2})/;\n\n/**\n * \n * @param {*} context \n * @returns \n */\nclass viewFunctions {\n    \n    /**\n     * \n     * @param {*} context \n     */\n    constructor(context){\n        this.context = context;\n    }\n\n    /**\n     * \n     * @returns \n     */\n    getLanguage() {\n        return this.path().match(REGEX_LANGUAGE) ? this.path().match(REGEX_LANGUAGE)[1] : false;\n    }\n\n    /**\n     * \n     * @returns \n     */\n    path() {\n        return this.context.path();\n    }\n\n    /**\n     * \n     * @param {*} name \n     * @param {*} path \n     * @returns \n     */\n    isActive(name, path) {\n        path = path || this.path();\n        path = path.replace(/(\\/[a-z]{2}_[A-Z]{2})/, \"\");\n        return path.split(\"/\")[1] === name ? \"active\" : \"\";\n    }\n\n    /**\n     * \n     * @param {*} pageName \n     * @param {*} language \n     * @returns \n     */\n    url(pageName, language) {\n        return [language || this.getLanguage() ||\"\" , pageName].join(\"/\");\n    }\n}\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/middleware/view/view.js?");

/***/ }),

/***/ "../../public/build/dev/page/form.js":
/*!*******************************************!*\
  !*** ../../public/build/dev/page/form.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form)\n/* harmony export */ });\n/* harmony import */ var _middleware_magic_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middleware/magic_form.js */ \"../../public/build/dev/middleware/magic_form.js\");\n/* harmony import */ var _middleware_validator_email_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/validator/email.js */ \"../../public/build/dev/middleware/validator/email.js\");\n/* harmony import */ var _middleware_validator_required_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/validator/required.js */ \"../../public/build/dev/middleware/validator/required.js\");\n\n\n  \n  \n  \n\n \n  let form = {\n        \"html\":\"<extend-head> <title>${_t(\\\"Hier kannst du dich einloggen\\\")}</title> </extend-head> <page> <topmenu-component data-name=\\\"/$topmenu\\\"></topmenu-component> <h1>${_t('Hallo from from')}</h1> <section> <form> <div class=\\\"container\\\"> <div class=\\\"item\\\"> <label for=\\\"age\\\">${_t('Alter')}</label> <input id=\\\"age\\\" type=\\\"number\\\" data-name=\\\"/$user/age\\\" /> <label for=\\\"birthday\\\">${_t('Geburtsdatum')}</label> <input id=\\\"birthday\\\" data-name=\\\"/$user/birthday\\\" type=\\\"date\\\" /> <label for=\\\"bname\\\">${_t('Benutzername')}</label> <input id=\\\"bname\\\" data-name=\\\"/$user/bname\\\" required data-validations=\\\"required_validator\\\" /> <label for=\\\"email\\\">${_t('E-Mail')}</label> <input id=\\\"email\\\" type=\\\"email\\\" data-name=\\\"/$user/email\\\" required data-validations=\\\"mail_validator,required_validator\\\" /> <span data-name=\\\"/_state/$user/email\\\" class=\\\"msg ${ change.value.msg ? 'error':''}\\\">${ change.value.msg ? change.value.msg.map(function(e){return e}) : \\\"\\\" }</span> <label for=\\\"passwd\\\">${_t('Passwort')}</label> <input type=\\\"password\\\" data-name=\\\"/$user/password\\\" id=\\\"passwd\\\" required pattern=\\\"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$\\\" /> <div class=\\\"button-container\\\"> <button type=\\\"submit\\\" data-name=\\\"/$user/submit\\\">${_t('Anmelden')}</button> </div> </div> <div class=\\\"item biefroest\\\"> </div> </div> </form> </section> <bottommenu-component data-name=\\\"/$bottommenu\\\"></bottommenu-component> </page>\",\"style\":\"[data-name=\\\"form\\\"] .container { display: flex; } @media only screen and (max-width: 640px) { [data-name=\\\"form\\\"] .container { flex-direction: column; } } [data-name=\\\"form\\\"] .item { min-height: 100px; flex-grow: 1; width: 50%; } @media only screen and (max-width: 640px) { [data-name=\\\"form\\\"] .item { width: 100%; } } .error { box-shadow: #f31010 0px 0px 4px 0px; border: 1px solid red; display: block; } span.msg { position: absolute; background-color: lightgoldenrodyellow; border: 1px solid lightgray; border-radius: 0 10px 10px 10px; } .biefroest { background-image: url(\\\"https://mountainmoments.de/wp-content/uploads/2019/04/web_mountainmoments-5-aurora-borealis-fotografieren-J.-Groll-1030x686.jpg\\\"); background-size: cover; background-position-x: center; /* background-image: url(\\\"img/form/biefroest.jpg\\\");*/ }\",\"path\":\"/page/form.js\",\n        \n    mounted() {\n      console.log(\"mounted\", this);\n    },\n    components: { \n      \"topmenu-component\": \"topmenu#mainmenu\",\n      \"bottommenu-component\": \"bottommenu#footermenu\"\n    },\n    data() {\n      return this\n        .createStore(\"user\", { name: \"user login\" })\n        .addValidations({ mail_validator: _middleware_validator_email_js__WEBPACK_IMPORTED_MODULE_1__.mail_validator, required_validator: _middleware_validator_required_js__WEBPACK_IMPORTED_MODULE_2__.required_validator });\n    },\n    interactions() {\n      return _middleware_magic_form_js__WEBPACK_IMPORTED_MODULE_0__.magic_form.call(this, {\n        \"/$user/submit\": {\n          click(change, state) {\n            change.ev.preventDefault();\n            alert(\"SUBMIT\");\n          }\n        },\n        \"/_state/$user/email/msg\": {\n          change(change, state) {\n            if (!state.isValid) {\n              document.querySelector(\"#email\").classList.add(\"error\");\n            } else {\n              document.querySelector(\"#email\").classList.remove(\"error\");\n            }\n            console.log(change, state);\n          }\n        }\n\n      }, \"/$user\", function (data) {\n\n        console.log(\"CHANGE PLEASE BACKEND SYNC\", data)\n\n      });\n    },\n    translations() {\n      return {};\n    }\n  }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/form.js?");

/***/ }),

/***/ "../../public/build/dev/page/home.js":
/*!*******************************************!*\
  !*** ../../public/build/dev/page/home.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _component_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/todo.js */ \"../../public/build/dev/component/todo.js\");\n/* harmony import */ var _i18n_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/home.js */ \"../../public/build/dev/page/i18n/home.js\");\n\n    \n    \n    \n    let home = {\n        \"html\":\"<extend-head> <title>${_t('Willkommen home')}</title> </extend-head> <page> <topmenu-component type=\\\"component\\\" data-name=\\\"/$topmenu\\\"></topmenu-component> <h1> ${_t('dtest')} ${home.name}</h1> <input data-name=\\\"/$home/name\\\" /> <div data-name=\\\"/$home/name\\\"></div> <todo-component type=\\\"component\\\" data-name=\\\"/$todo\\\"></todo-component> <bottommenu-component data-name=\\\"/$bottommenu\\\"></bottommenu-component> </page>\",\"style\":\"\",\"path\":\"/page/home.js\",\n        \n        mounted() {\n            console.log(\"mounted\", this);\n        },\n        components: \n             { \"todo-component\": _component_todo_js__WEBPACK_IMPORTED_MODULE_0__.todo,\n              \"topmenu-component\": \"topmenu#mainmenu\", \n              \"bottommenu-component\": \"bottommenu#footermenu\"\n            }\n        ,\n        data() {\n            return this.createStore(\"home\", { name: \"AK home\" });\n        },\n        interactions() {\n            return {\n                \"/$home/name\": {\n                    \"keyup\"(sender, data) { //address specific element in dom\n                        data.name = sender.field.getValue();\n                    }\n                }\n            }\n        },\n        translations() {\n            return _i18n_home_js__WEBPACK_IMPORTED_MODULE_1__.translations;\n        }\n    }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/home.js?");

/***/ }),

/***/ "../../public/build/dev/page/i18n/form.js":
/*!************************************************!*\
  !*** ../../public/build/dev/page/i18n/form.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translations\": () => (/* binding */ translations)\n/* harmony export */ });\nconst translations = {\"en_EN\":{\"\\\\\":\"\\\\\",\"Hallo from from\":\"Hallo from from\",\"Alter\":\"Alter\",\"Geburtsdatum\":\"Geburtsdatum\",\"Benutzername\":\"Benutzername\",\"E-Mail\":\"E-Mail\",\"Passwort\":\"Passwort\",\"Anmelden\":\"Anmelden\"}}\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/i18n/form.js?");

/***/ }),

/***/ "../../public/build/dev/page/i18n/home.js":
/*!************************************************!*\
  !*** ../../public/build/dev/page/i18n/home.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translations\": () => (/* binding */ translations)\n/* harmony export */ });\nconst translations = {\"en_EN\":{\"Willkommen home\":\"Willkommen home\",\"dtest\":\"dtest\"}}\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/i18n/home.js?");

/***/ }),

/***/ "../../public/build/dev/page/i18n/notFound.js":
/*!****************************************************!*\
  !*** ../../public/build/dev/page/i18n/notFound.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translations\": () => (/* binding */ translations)\n/* harmony export */ });\nconst translations = {\"en_EN\":{\"404 oops Seite nicht gefunden\":\"404 oops Seite nicht gefunden\",\"Hallo\":\"Hallo\"}}\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/i18n/notFound.js?");

/***/ }),

/***/ "../../public/build/dev/page/i18n/start.js":
/*!*************************************************!*\
  !*** ../../public/build/dev/page/i18n/start.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translations\": () => (/* binding */ translations)\n/* harmony export */ });\nconst translations = {\"en_EN\":{\"Willkommen start\":\"Willkommen start\",\"einfach | gute | Texte\":\"simple | pleasing | content\",\"Lorem ipsum sit dolor ametc, is a dummy text used by typography industry\":\"Lorem ipsum sit dolor ametc, is a dummy text used by typography industry\",\"Get Started\":\"Get Started\",\"Discover\":\"Discover\",\"Great Power Comes\":\"Great Power Comes\",\"With great Responsability\":\"With great Responsability\",\"Addons & Plugins\":\"Addons & Plugins\",\"This is some explanatory text that is on two rows\":\"This is some explanatory text that is on two rows\",\"Cloud integration\":\"Cloud integration\"},\"de_DE\":{\"Willkommen start\":\"Willkommen start\",\"einfach | gute | Texte\":\"einfach | gute | Texte\",\"Lorem ipsum sit dolor ametc, is a dummy text used by typography industry\":\"Lorem ipsum sit dolor ametc, is a dummy text used by typography industry\",\"Get Started\":\"Get Started\",\"Discover\":\"Discover\"}}\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/i18n/start.js?");

/***/ }),

/***/ "../../public/build/dev/page/notFound.js":
/*!***********************************************!*\
  !*** ../../public/build/dev/page/notFound.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notFound\": () => (/* binding */ notFound)\n/* harmony export */ });\n\n \n    let notFound = {\n        \"html\":\"<extend-head> <title>${_t('404 oops Seite nicht gefunden')}</title> </extend-head> <page> <topmenu-component type=\\\"component\\\" data-name=\\\"/$topmenu\\\"></topmenu-component> <h1>${_t('Hallo')} ${notFound.name}</h1> <section class=\\\"todoapp\\\"> <todo-component data-name=\\\"/$items\\\"></todo-component> </section> <bottommenu-component data-name=\\\"/$bottommenu\\\"></bottommenu-component> </page>\",\"style\":\"\",\"path\":\"/page/notFound.js\",\n        \n        components: {\n             \"topmenu-component\": \"topmenu#mainmenu\",\n             \"bottommenu-component\": \"bottommenu#footermenu\"\n            },\n        data() {\n            return this.createStore(\"notFound\", { name: \"AK not Found\" });\n        },\n        interactions() {\n            return {}\n        }\n    }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/notFound.js?");

/***/ }),

/***/ "../../public/build/dev/page/start.js":
/*!********************************************!*\
  !*** ../../public/build/dev/page/start.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _i18n_start_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/start.js */ \"../../public/build/dev/page/i18n/start.js\");\n\n    \n\n    let start = {\n        \"html\":\"<extend-head> <title>${_t('Willkommen start')}</title> </extend-head> <page> <topmenu-component type=\\\"component\\\" data-name=\\\"/$topmenu\\\"></topmenu-component> <div class=\\\"hero-body\\\"> <div class=\\\"centered\\\"> <div class=\\\"container\\\"> <h1>${_t('einfach | gute | Texte')}</h1> <h3>${_t('Lorem ipsum sit dolor ametc, is a dummy text used by typography industry')} </h3> <div class=\\\"button-container\\\"> <button class=\\\"submit\\\"> ${_t('Get Started')} </button> <button> ${_t('Discover')} </button> </div> </div> <div> <figure> <img src=\\\"img/start/worker.svg\\\" alt=\\\"Description\\\"> </figure> </div> </div> </div> <div class=\\\"text-container\\\"> <hr/> <h1 >${_t('Great Power Comes')} </h1> <h3>${_t('With great Responsability')}</h3> <hr/> </div> <div class=\\\"card-container\\\"> <div class=\\\"card-item\\\"> <div class=\\\"card-title\\\"> <h4>${_t('Addons & Plugins')}</h4> </div> <div class=\\\"card-icon\\\"> <img src=\\\"img/icons/rocket.svg\\\"> </div> <div class=\\\"card-text\\\"> <p>${_t('This is some explanatory text that is on two rows')}</p> </div> <button class=\\\"submit\\\"> ${_t('Get Started')} </button> </div> <div class=\\\"card-item\\\"> <div class=\\\"card-title\\\"> <h4>${_t('Cloud integration')}</h4> </div> <div class=\\\"card-icon\\\"> <img src=\\\"img/icons/rocket.svg\\\"> </div> <div class=\\\"card-text\\\"> <p>${_t('This is some explanatory text that is on two rows')}</p> </div> <button class=\\\"submit\\\"> ${_t('Get Started')} </button> </div> <div class=\\\"card-item\\\"> <div class=\\\"card-title\\\"> <h4>${_t('Cloud integration')}</h4> </div> <div class=\\\"card-icon\\\"> <img src=\\\"img/icons/rocket.svg\\\"> </div> <div class=\\\"card-text\\\"> <p>${_t('This is some explanatory text that is on two rows')}</p> </div> <button class=\\\"submit\\\"> ${_t('Get Started')} </button> </div> </div> <bottommenu-component data-name=\\\"/$bottommenu\\\"></bottommenu-component> </page>\",\"style\":\".text-container { text-align: center; margin: 8em 0; } .card-container { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0em 7em; grid-template-areas: \\\". . .\\\"; } .card-container .card-item { text-align: center; padding: 1em; } .card-container .card-item button { font-weight: 400; } .hero-body { display: flex; align-items: center; justify-content: center; } .hero-body .centered { width: 75%; display: grid; grid-template-columns: 1fr 1fr; align-items: center; justify-content: center; } .hero-body .centered .container { display: block; color: #444f60; } .hero-body .centered .container h3 { color: #999; font-weight: 400; } @media only screen and (max-width: 768px) { .centered, .card-container { width: 100%; display: block; } }\",\"path\":\"/page/start.js\",\n        \n        mounted() {\n            //   console.log(\"mounted\", this);\n        },\n        components:\n        {\n            \"topmenu-component\": \"topmenu#mainmenu\",\n            \"bottommenu-component\": \"bottommenu#footermenu\"\n        }\n        ,\n        data() {\n            return this.createStore(\"start\", { name: \"AK start\" });\n        },\n        interactions() {\n            return {\n                \"/$start/name\": {\n                    \"keyup\"(sender, data) { //address specific element in dom\n                        data.name = sender.field.getValue();\n                    }\n                }\n            }\n        },\n        translations() {\n            return _i18n_start_js__WEBPACK_IMPORTED_MODULE_0__.translations;\n        }\n    }\n\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/start.js?");

/***/ }),

/***/ "../../public/build/dev/page lazy recursive ^\\.\\/.*\\.js$":
/*!******************************************************************************!*\
  !*** ../../public/build/dev/page/ lazy ^\.\/.*\.js$ strict namespace object ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./form.js\": [\n\t\t\"../../public/build/dev/page/form.js\",\n\t\t\"main\"\n\t],\n\t\"./home.js\": [\n\t\t\"../../public/build/dev/page/home.js\",\n\t\t\"main\"\n\t],\n\t\"./i18n/form.js\": [\n\t\t\"../../public/build/dev/page/i18n/form.js\",\n\t\t\"main\"\n\t],\n\t\"./i18n/home.js\": [\n\t\t\"../../public/build/dev/page/i18n/home.js\",\n\t\t\"main\"\n\t],\n\t\"./i18n/notFound.js\": [\n\t\t\"../../public/build/dev/page/i18n/notFound.js\",\n\t\t\"main\"\n\t],\n\t\"./i18n/start.js\": [\n\t\t\"../../public/build/dev/page/i18n/start.js\",\n\t\t\"main\"\n\t],\n\t\"./notFound.js\": [\n\t\t\"../../public/build/dev/page/notFound.js\",\n\t\t\"main\"\n\t],\n\t\"./start.js\": [\n\t\t\"../../public/build/dev/page/start.js\",\n\t\t\"main\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"../../public/build/dev/page lazy recursive ^\\\\.\\\\/.*\\\\.js$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://cmon-build/../../public/build/dev/page/_lazy_^\\.\\/.*\\.js$_strict_namespace_object?");

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