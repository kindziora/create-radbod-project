
    export let topmenu = {
        views : {
       'topmenu' : function(args){ let {change, topmenu, _t} = args; return `<navgation data-id="topmenu-e-2" data-view="topmenu-e-2"> <div class="logo" data-id="topmenu-e-3" data-view="topmenu-e-3">${_t('logo')}</div> <div class="hamburger" data-events="hamburger:click" data-id="topmenu-e-4" data-view="topmenu-e-4"> <div class="hamburg" data-id="topmenu-e-5" data-view="topmenu-e-5"> <span class="line" data-id="topmenu-e-6" data-view="topmenu-e-6"></span> <span class="line" data-id="topmenu-e-7" data-view="topmenu-e-7"></span> <span class="line" data-id="topmenu-e-8" data-view="topmenu-e-8"></span> </div> </div> <nav id="menu" data-id="topmenu-e-9" data-view="topmenu-e-9"> <a href="/home" class="${topmenu.hallo}" data-name="link" data-id="topmenu-e-10" data-view="topmenu-e-10">${_t('home')}</a> <a href="/form" class data-name="link" data-id="topmenu-e-11" data-view="topmenu-e-11">${_t('form')}</a> <a href="#" data-id="topmenu-e-12" data-view="topmenu-e-12">${_t('Article 3')}</a> <a href="#" data-id="topmenu-e-13" data-view="topmenu-e-13">${_t('Article 4')}</a> <a href="#" data-id="topmenu-e-14" data-view="topmenu-e-14">${_t('Article 5')}</a> </nav> </navgation>`},
       'topmenu-e-2' : function (args) { let {change, topmenu, _t} = args; return `<div class="logo">${_t('logo')}</div> <div class="hamburger" data-events="hamburger:click"> <div class="hamburg"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div> </div> <nav id="menu"> <a href="/home" class="${topmenu.hallo}" data-name="link">${_t('home')}</a> <a href="/form" class data-name="link">${_t('form')}</a> <a href="#">${_t('Article 3')}</a> <a href="#">${_t('Article 4')}</a> <a href="#">${_t('Article 5')}</a> </nav>`},
       'topmenu-e-3' : function (args) { let {change, topmenu, _t} = args; return `${_t('logo')}`},
       'topmenu-e-4' : function (args) { let {change, topmenu, _t} = args; return `<div class="hamburg"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`},
       'topmenu-e-5' : function (args) { let {change, topmenu, _t} = args; return `<span class="line"></span> <span class="line"></span> <span class="line"></span>`},
       'topmenu-e-9' : function (args) { let {change, topmenu, _t} = args; return `<a href="/home" class="${topmenu.hallo}" data-name="link">${_t('home')}</a> <a href="/form" class data-name="link">${_t('form')}</a> <a href="#">${_t('Article 3')}</a> <a href="#">${_t('Article 4')}</a> <a href="#">${_t('Article 5')}</a>`},
       'topmenu-e-10' : function (args) { let {change, topmenu, _t} = args; return `${_t('home')}`},
       'topmenu-e-11' : function (args) { let {change, topmenu, _t} = args; return `${_t('form')}`},
       'topmenu-e-12' : function (args) { let {change, topmenu, _t} = args; return `${_t('Article 3')}`},
       'topmenu-e-13' : function (args) { let {change, topmenu, _t} = args; return `${_t('Article 4')}`},
       'topmenu-e-14' : function (args) { let {change, topmenu, _t} = args; return `${_t('Article 5')}`} },
            "style":"navgation { background: #EEE; display: flex; justify-content: space-between; } .logo { font-size: 2em; line-height: 3em; padding: 0 0.5em; } .hamburger { padding: 0 0.5em; font-size: 1.5em; line-height: 3em; display: flex; z-index: 2; } .hamburg { display: block; background: #555; width: 3.14em; height: 2.1em; position: relative; margin: auto; border-radius: 4px; transition: border-radius .5s; } .line { position: absolute; left: 10px; height: 4px; width: 55px; background: #fff; border-radius: 2px; display: block; transition: 0.5s; transform-origin: center; } .line:nth-child(1) { top: 12px; } .line:nth-child(2) { top: 24px; } .line:nth-child(3) { top: 36px; } .hamburger.checked .line:nth-child(1) { transform: translateY(12px) rotate(-45deg); } .hamburger.checked .line:nth-child(2) { opacity: 0; } .hamburger.checked .line:nth-child(3) { transform: translateY(-12px) rotate(45deg); } nav { position: absolute; width: 100%; background: #eee; display: none; } nav:hover { display: block; } nav a { display: block; line-height: 50px; text-align: center; } .hamburger:hover~nav { display: block; } .hamburger.checked~nav { display: block; } @media only screen and (min-width: 768px) { .hamburger { display: none; } nav { position: static; display: flex; background: none; clear: none; flex: 1; justify-content: flex-end; } nav:hover { display: flex; } nav a { padding: 0 1em; } }","path":"/component/topmenu.js",
        
        mounted() {
            console.log("mounted", this);
 
        },
        data(data, runtime) {
            console.log(this);
            return this.createStore("topmenu", {
                path: "runtime.path"
            })
        },
        interactions() {
            return {
                "hamburger": {
                    "click"(sender, dataStore) {
                        sender.field.$el.classList.toggle("checked");
                    }
                }
            }
        }
    }
