

    export let xtern = {
        views : {
       'xtern' : function(args){ let {change, xternal, _t} = args; return `<h2 data-id="xtern-e-2" data-view="xtern-e-2">${_t('externe daten')}</h2> <div data-id="xtern-e-3" data-view="xtern-e-3"> ${_t('xtern')} ${ xternal.name } </div>`},
       'xtern-e-2' : function (args) { let {change, xternal, _t} = args; return `${_t('externe daten')}`},
       'xtern-e-3' : function (args) { let {change, xternal, _t} = args; return `${_t('xtern')} ${ xternal.name }`} },
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
