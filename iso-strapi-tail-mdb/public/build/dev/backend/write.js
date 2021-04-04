 
     
    import  { translations }  from "./i18n/profile.js";

    export let write = {
        "html":"<extend-head> <title>${_t('Willkommen zurück')}</title> </extend-head> <page> <backendtopmenu-component type=\"component\" data-name=\"/$backendtopmenu\"></backendtopmenu-component> ${_t('test')} <bottommenu-component data-name=\"/$bottommenu\"></bottommenu-component> </page>","style":"","path":"/backend/write.js",
        
        mounted() {
            console.log("mounted", this);
        },
        components:
        { 
            "backendtopmenu-component": "backendtopmenu#mainmenu",
            "bottommenu-component": "bottommenu#footermenu"
        }
        ,
        data() {
            return this.createStore("home", { name: "AK home" });
        }, 
        interactions() {
            return {
                "/$home/name": {
                    "keyup"(sender, data) { //address specific element in dom
                        data.name = sender.field.getValue();
                    }
                }
            }
        },
        translations() {
            return translations;
        }
    }
