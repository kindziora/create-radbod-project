

    export let backendtopmenu = {
        views : {
                   'backendtopmenu' : function (args) { let {change, backendtopmenu,bottommenu,briefing,home,modal,tasklist,textlist,topmenu, _t, env} = args; return `loading`} },
            "style":"","path":"/component/backendtopmenu.js",
        
      lazyLoading :true,
      SSR:false,
      mounted(){
       // document.querySelector(".page-header").style.opacity ="1";
      }, 
        data(data, runtime) {
            return this.createStore("backendtopmenu", {
                link: "runtime.path"
            })
        },
        interactions: () => ({
            "hamburger": {
                "click"(sender, dataStore) {
                    sender.field.$el.classList.toggle("checked");
                }
            },
            "/$backendtopmenu/link": {
                "click"(sender, dataStore) {
                    sender.ev.preventDefault();

                    buildApp.loadPage(sender.field.$el.firstChild.getAttribute("href"), () => {
                        dataStore.link = sender.field.$el.firstChild.getAttribute("href");
                    });

                }
            }
        })
    }
