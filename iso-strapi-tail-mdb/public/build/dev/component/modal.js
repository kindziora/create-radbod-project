

    export let modal = {
        views : {
                   'modal-e-1' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,textlist,topmenu, _t, env} = args; return `<!-- Modal content --> <div class="modal-content"> <div class="modal-header"> <h2>${modal.header}</h2> </div> <div class="modal-body"> ${modal.body} </div> <div class="modal-footer"> ${modal.footer} </div> </div> <style> #${modal.name}{ display:${modal.show?'flex':'none'}; } </style>`},
                   'modal-e-2' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,textlist,topmenu, _t, env} = args; return `<div class="modal-header"> <h2>${modal.header}</h2> </div> <div class="modal-body"> ${modal.body} </div> <div class="modal-footer"> ${modal.footer} </div>`},
                   'modal-e-3' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,textlist,topmenu, _t, env} = args; return `<h2>${modal.header}</h2>`},
                   'modal-e-4' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,textlist,topmenu, _t, env} = args; return `${modal.header}`},
                   'modal-e-5' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,textlist,topmenu, _t, env} = args; return `${modal.body}`},
                   'modal-e-6' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,textlist,topmenu, _t, env} = args; return `${modal.footer}`},
                   'modal-e-7' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,textlist,topmenu, _t, env} = args; return `#${modal.name}{ display:${modal.show?'flex':'none'}; }`},
                   'modal' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,tasklist,textlist,topmenu, _t, env} = args; return `<div id="${modal.name}" class="modal" data-events="close:click" data-name="/$modal/show" data-id="modal-e-1" data-view="modal-e-1"> <!-- Modal content --> <div class="modal-content" data-id="modal-e-2" data-view="modal-e-2"> <div class="modal-header" data-id="modal-e-3" data-view="modal-e-3"> <h2 data-id="modal-e-4" data-view="modal-e-4" data-name="/$modal/header">${modal.header}</h2> </div> <div class="modal-body" data-id="modal-e-5" data-view="modal-e-5" data-name="/$modal/body"> ${modal.body} </div> <div class="modal-footer" data-id="modal-e-6" data-view="modal-e-6" data-name="/$modal/footer"> ${modal.footer} </div> </div> <style data-id="modal-e-7" data-view="modal-e-7"> #${modal.name}{ display:${modal.show?'flex':'none'}; } </style> </div>`} },
            "style":"/* The Modal (background) */ .modal { display: none; /* Hidden by default */ position: fixed; /* Stay in place */ z-index: 2; /* Sit on top */ left: 0; top: 0; width: 100%; /* Full width */ height: 100%; /* Full height */ overflow: auto; /* Enable scroll if needed */ background-color: black; /* Fallback color */ background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */ /* Modal Header */ /* Modal Body */ /* Modal Footer */ /* Modal Content */ /* Add Animation */ } .modal .modal-header h2 { margin: 0; } .modal .modal-body { padding: 1em; overflow: auto; max-height: 70vh; } .modal .modal-footer { color: gray; } .modal .modal-content { max-height: 100vh; position: relative; background-color: #fefefe; margin: auto; padding: 1em; border: 1px solid #888; width: 80%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); animation-name: animatetop; animation-duration: 0.4s; } @keyframes animatetop { from { top: -50vh; opacity: 0; } to { top: 0; opacity: 1; } } /* Modal Content/Box */ .modal-content { background-color: #fefefe; margin: 15% auto; /* 15% from the top and centered */ padding: 20px; border: 1px solid #888; width: 80%; /* Could be more or less, depending on screen size */ } /* The Close Button */ .close { color: #aaa; float: right; font-size: 28px; font-weight: bold; } .close:hover, .close:focus { color: black; text-decoration: none; cursor: pointer; }","path":"/component/modal.js",
        
        lazyLoading:true,
        
        loaded(data) { //pipeline after data has been loaded

        },
        data(data, runtime) {
            return this.createStore("modal", {
                error: [],
                link: "runtime.path",
                name: "modal1",
                header: "Hinweis",
                body: "...",
                footer: "proudly presented by serialtexter.de",
                show:false
            })
        },
        interactions: () => ({
            "close": {
                "click"(sender, dataStore) {
                    dataStore.show = false; 
                }
            } 
        })
    }
