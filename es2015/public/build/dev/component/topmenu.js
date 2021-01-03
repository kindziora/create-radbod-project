
    export let topmenu = {
        views : {
'topmenu' : (args)=> { let {change, topmenu, _t} = args; return `<ul data-type="list" data-id="COMPONENT-e-2" data-view="COMPONENT-e-2"> <li data-id="COMPONENT-e-3" data-view="COMPONENT-e-3"> <a href="/home" class="${topmenu.path}" data-name="link" data-id="COMPONENT-e-4" data-view="COMPONENT-e-4">${_t('home')}</a></li> <li data-id="COMPONENT-e-5" data-view="COMPONENT-e-5"> <a href="/login" class data-name="link" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6">${_t('login')}</a></li> </ul>`} },
        "style":"","path":"/component/topmenu.js",
        
        components: {},
        data(data, runtime){
            console.log(data, runtime);
            return this.createStore("topmenu", { 
                path : "runtime.path"
            })
        },
        interactions(){
            return {}
        }
    }
