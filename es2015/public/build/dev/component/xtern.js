

    export let xtern = {
        views : {
'COMPONENT-e-2' : (args)=> { let {change, xternal, _t} = args; return `${_t('externe daten')}`},
'COMPONENT-e-3' : (args)=> { let {change, xternal, _t} = args; return `${_t('xtern')} ${ xternal.name }`},
'xtern' : (args)=> { let {change, xternal, _t} = args; return `<h2 data-id="COMPONENT-e-2" data-view="COMPONENT-e-2">${_t('externe daten')}</h2> <div data-id="COMPONENT-e-3" data-view="COMPONENT-e-3"> ${_t('xtern')} ${ xternal.name } </div>`} },
            "style":"","path":"/component/xtern.js",
        
        components: {},
        data(){
            return this.createStore("xternal", { 
                name : "AK xternal",
                items:[{
                        label: "xternal",
                        checked: false
                      }]
            })
        },
        interactions(){
            return { }
        }

    }
