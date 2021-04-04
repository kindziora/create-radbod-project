
    import  { signin }  from "../component/signin.js";
    import  { translations }  from "./i18n/login.js";

    export let login = {
        "html":"<extend-head> <title>${_t('Willkommen zurück')}</title> </extend-head> <page> <topmenu-component type=\"component\" data-name=\"/$topmenu\"></topmenu-component> <signin-component type=\"component\" data-name=\"/$user\"></signin-component> <bottommenu-component data-name=\"/$bottommenu\"></bottommenu-component> </page>","style":"","path":"/website/login.js",
        
        mounted() {
            console.log("mounted", this);
        },
        components:
        {
            "signin-component": signin,
            "topmenu-component": "topmenu#mainmenu",
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
