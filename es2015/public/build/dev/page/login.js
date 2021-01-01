
    export let login = {
        views : {
'login' : (args)=> { let {change, user, _t} = args; return `<h1 data-id="COMPONENT-e-2" data-view="COMPONENT-e-2">${_t('Hallo from login')}</h1> <section data-id="COMPONENT-e-3" data-view="COMPONENT-e-3"> <form data-id="COMPONENT-e-4" data-view="COMPONENT-e-4"> <label for="age" data-id="COMPONENT-e-5" data-view="COMPONENT-e-5">${_t('Alter')}</label> <input id="age" type="number" data-id="COMPONENT-e-6" data-view="COMPONENT-e-6"> <label for="birthday" data-id="COMPONENT-e-7" data-view="COMPONENT-e-7">${_t('Geburtsdatum')}</label> <input id="birthday" type="date" data-id="COMPONENT-e-8" data-view="COMPONENT-e-8"> <label for="bname" data-id="COMPONENT-e-9" data-view="COMPONENT-e-9">${_t('Benutzername')}</label> <input id="bname" required data-id="COMPONENT-e-10" data-view="COMPONENT-e-10"> <label for="passwd" data-id="COMPONENT-e-11" data-view="COMPONENT-e-11">${_t('Passwort')}</label> <input type="password" id="passwd" required data-id="COMPONENT-e-12" data-view="COMPONENT-e-12"> <button type="submit" data-id="COMPONENT-e-13" data-view="COMPONENT-e-13">${_t('Anmelden')}</button> </form> </section> <footer class="info" data-id="COMPONENT-e-14" data-view="COMPONENT-e-14"> <p data-id="COMPONENT-e-15" data-view="COMPONENT-e-15">${_t('Double-click to edit a todo')}</p> <p data-id="COMPONENT-e-16" data-view="COMPONENT-e-16">${_t('Written by')} <a href="http://twitter.com/lukeed05" data-id="COMPONENT-e-17" data-view="COMPONENT-e-17">${_t('Luke Edwards')}</a></p> <p data-id="COMPONENT-e-18" data-view="COMPONENT-e-18">${_t('Refactored by')} <a href="https://github.com/xorgy" data-id="COMPONENT-e-19" data-view="COMPONENT-e-19">${_t('Aaron Muir Hamilton')}</a></p> <p data-id="COMPONENT-e-20" data-view="COMPONENT-e-20">${_t('Part of')} <a href="http://todomvc.com" data-id="COMPONENT-e-21" data-view="COMPONENT-e-21">${_t('TodoMVC')}</a></p> </footer>`} },
        "style":"","path":"/page/login.js",
        
        data() {
            return this.createStore("user", { name: "AK home" });
        },
        interactions() {
            return {};
        },
        translations(language){
            return {};
        }
    }
