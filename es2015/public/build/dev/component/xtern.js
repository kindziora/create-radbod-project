

    export let xtern = {
        views : {
'xtern' : (args)=> { let {change, xternal, _t} = args; return `<h2>${_t('externe daten')}</h2> <div> ${_t('xtern')} ${ todo.name } </div>`} },
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
