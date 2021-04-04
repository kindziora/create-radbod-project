
    import  { todo }  from "../component/todo.js";
    import  { translations }  from "./i18n/home.js";
    
    export let home = {
        "html":"<extend-head> <title>${_t('Willkommen home')}</title> </extend-head> <page> <topmenu-component type=\"component\" data-name=\"/$topmenu\"></topmenu-component> <h1> ${_t('dtest')} ${home.name}</h1> <input data-name=\"/$home/name\" /> <div data-name=\"/$home/name\"></div> <todo-component type=\"component\" data-name=\"/$todo\"></todo-component> <bottommenu-component data-name=\"/$bottommenu\"></bottommenu-component> </page>","style":"","path":"/website/home.js",
        
        mounted() {
            console.log("mounted", this);
        },
        components: 
             { "todo-component": todo,
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
