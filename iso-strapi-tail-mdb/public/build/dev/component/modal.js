

    export let modal = {
        "html":"<div id=\"${modal.name}\" class=\"modal\" data-events=\"close:click\" data-name=\"/$modal/show\"> <!-- Modal content --> <div class=\"modal-content\" > <div class=\"modal-header\"> <h2>${modal.header}</h2> </div> <div class=\"modal-body\"> ${modal.body} </div> <div class=\"modal-footer\"> ${modal.footer} </div> </div> <style> #${modal.name}{ display:${modal.show?'flex':'none'}; } </style> </div>","style":"/* The Modal (background) */ .modal { display: none; /* Hidden by default */ position: fixed; /* Stay in place */ z-index: 2; /* Sit on top */ left: 0; top: 0; width: 100%; /* Full width */ height: 100%; /* Full height */ overflow: auto; /* Enable scroll if needed */ background-color: black; /* Fallback color */ background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */ /* Modal Header */ /* Modal Body */ /* Modal Footer */ /* Modal Content */ /* Add Animation */ } .modal .modal-header h2 { margin: 0; } .modal .modal-body { padding: 1em; overflow: auto; max-height: 70vh; } .modal .modal-footer { color: gray; } .modal .modal-content { max-height: 100vh; position: relative; background-color: #fefefe; margin: auto; padding: 1em; border: 1px solid #888; width: 80%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); animation-name: animatetop; animation-duration: 0.4s; } @keyframes animatetop { from { top: -50vh; opacity: 0; } to { top: 0; opacity: 1; } } /* Modal Content/Box */ .modal-content { background-color: #fefefe; margin: 15% auto; /* 15% from the top and centered */ padding: 20px; border: 1px solid #888; width: 80%; /* Could be more or less, depending on screen size */ } /* The Close Button */ .close { color: #aaa; float: right; font-size: 28px; font-weight: bold; } .close:hover, .close:focus { color: black; text-decoration: none; cursor: pointer; }","path":"/component/modal.js",
        
        lazyLoading:true,
        SSR:false, //@todo BUILT OPTIONAL FLAG TO DISABLE SSR
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
