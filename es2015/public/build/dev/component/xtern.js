

    export let xtern = {
        views : {
'component-1-element-2' : (args)=> { let {change, xternal, _t} = args; return `${_t('externe daten')}`},
'component-1-element-3' : (args)=> { let {change, xternal, _t} = args; return `${_t('xtern')} ${ todo.name }`},
'xtern' : (args)=> { let {change, xternal, _t} = args; return `<h2 data-id="component-1-element-2" data-view="component-1-element-2">${_t('externe daten')}</h2> <div data-id="component-1-element-3" data-view="component-1-element-3"> ${_t('xtern')} ${ todo.name } </div>`} },
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
