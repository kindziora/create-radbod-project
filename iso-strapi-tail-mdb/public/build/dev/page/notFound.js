
 
    export let notFound = {
        "html":"<extend-head> <title>${_t('404 oops Seite nicht gefunden')}</title> </extend-head> <page> <topmenu-component type=\"component\" data-name=\"/$topmenu\"></topmenu-component> <h1>${_t('Hallo')} ${notFound.name}</h1> <section class=\"todoapp\"> <todo-component data-name=\"/$items\"></todo-component> </section> <bottommenu-component data-name=\"/$bottommenu\"></bottommenu-component> </page>","style":"","path":"/page/notFound.js",
        
        components: {
             "topmenu-component": "topmenu#mainmenu",
             "bottommenu-component": "bottommenu#footermenu"
            },
        data() {
            return this.createStore("notFound", { name: "AK not Found" });
        },
        interactions() {
            return {}
        }
    }
