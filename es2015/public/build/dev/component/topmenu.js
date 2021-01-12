
    export let topmenu = {
        views : {
'COMPONENT-e-2' : (args)=> { let {change, topmenu, _t} = args; return `<li data-id="COMPONENT-e-3" data-view="COMPONENT-e-3"> <a href="/home" class="${topmenu.path}" data-name="link" data-id="COMPONENT-e-4" data-view="COMPONENT-e-4">${_t('home')}</a></li> <li data-id="COMPONENT-e-5" data-view="COMPONENT-e-5"> <a href="/login" class data-name="link" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6">${_t('login')}</a></li>`},
'COMPONENT-e-3' : (args)=> { let {change, topmenu, _t} = args; return `<a href="/home" class="${topmenu.path}" data-name="link" data-id="COMPONENT-e-4" data-view="COMPONENT-e-4">${_t('home')}</a>`},
'COMPONENT-e-4' : (args)=> { let {change, topmenu, _t} = args; return `${_t('home')}`},
'COMPONENT-e-5' : (args)=> { let {change, topmenu, _t} = args; return `<a href="/login" class data-name="link" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6">${_t('login')}</a>`},
'COMPONENT-e-6' : (args)=> { let {change, topmenu, _t} = args; return `${_t('login')}`},
'topmenu' : (args)=> { let {change, topmenu, _t} = args; return `<ul data-type="list" data-id="COMPONENT-e-2" data-view="COMPONENT-e-2"> <li data-id="COMPONENT-e-3" data-view="COMPONENT-e-3"> <a href="/home" class="${topmenu.path}" data-name="link" data-id="COMPONENT-e-4" data-view="COMPONENT-e-4">${_t('home')}</a></li> <li data-id="COMPONENT-e-5" data-view="COMPONENT-e-5"> <a href="/login" class data-name="link" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6">${_t('login')}</a></li> </ul>`} },
            "style":"","path":"/component/topmenu.js",
        
        components: {},
        data(data, runtime){
             
            return this.createStore("topmenu", { 
                path : "runtime.path"
            })
        },
        interactions(){
            return {}
        }
    }
