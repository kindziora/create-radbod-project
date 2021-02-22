
    export let topmenu = {
        views : {
       'topmenu' : function(args){ let {change, topmenu, _t} = args; return `<ul data-type="list" data-id="topmenu-e-2" data-view="topmenu-e-2"> <li data-id="topmenu-e-3" data-view="topmenu-e-3"> <a href="/home" class="${topmenu.hallo}" data-name="link" data-id="topmenu-e-4" data-view="topmenu-e-4">${_t('home')}</a></li> <li data-id="topmenu-e-5" data-view="topmenu-e-5"> <a href="/form" class data-name="link" data-id="topmenu-e-6" data-view="topmenu-e-6">${_t('form')}</a></li> </ul>`},
       'topmenu-e-2' : function (args) { let {change, topmenu, _t} = args; return `<li> <a href="/home" class="${topmenu.hallo}" data-name="link">${_t('home')}</a></li> <li> <a href="/form" class data-name="link">${_t('form')}</a></li>`},
       'topmenu-e-3' : function (args) { let {change, topmenu, _t} = args; return `<a href="/home" class="${topmenu.hallo}" data-name="link">${_t('home')}</a>`},
       'topmenu-e-4' : function (args) { let {change, topmenu, _t} = args; return `${_t('home')}`},
       'topmenu-e-5' : function (args) { let {change, topmenu, _t} = args; return `<a href="/form" class data-name="link">${_t('form')}</a>`},
       'topmenu-e-6' : function (args) { let {change, topmenu, _t} = args; return `${_t('form')}`} },
            "style":"","path":"/component/topmenu.js",
        
        data(data, runtime){
            console.log(this);
            return this.createStore("topmenu", { 
                path : "runtime.path"
            })
        },
        interactions(){
            return {}
        }
    }
