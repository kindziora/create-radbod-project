

    export let topmenu = {
        "html":"<navgation> <div class=\"logo\"><img src=\"/img/topmenu/logo_serialtexter.png\" alt=\"no image\" /></div> <div class=\"hamburger\" data-events=\"hamburger:click\"> <div class=\"hamburg\"> <span class=\"line\"></span> <span class=\"line\"></span> <span class=\"line\"></span> </div> </div> <ul id=\"menu\"> <li data-name=\"/$topmenu/link\"><a href=\"${env.view.url('start')}\" class=\"${env.view.isActive('start')}\">${_t('start')}</a></li> <li data-name=\"/$topmenu/link\"><a href=\"${env.view.url('login')}\" class=\"${env.view.isActive('login')}\">${_t('login')}</a></li> <li data-name=\"/$topmenu/link\"><a href=\"${env.view.url('register')}\" class=\"${ env.view.isActive('register') }\">${_t('registrieren')}</a></li> <li data-name=\"/$topmenu/link\"><a href=\"${env.view.url('blog')}\" class=\"${env.view.isActive('blog')}\">${_t('blog')}</a></li> </ul> </navgation>","style":"navgation { display: flex; justify-content: space-between; } navgation .logo { width: 15em; } navgation .hamburger { top: 0; font-size: 1em; display: block; z-index: 2; } navgation .hamburg { display: block; width: 2.14em; height: 2em; position: relative; margin: auto; border-radius: 4px; transition: border-radius .5s; } navgation .line { position: absolute; height: 5px; width: inherit; background: #403d3d; border-radius: 32px; display: block; transition: 0.5s; transform-origin: center; } navgation .line:nth-child(1) { top: 12px; } navgation .line:nth-child(2) { top: 24px; } navgation .line:nth-child(3) { top: 36px; } navgation .hamburger.checked .line:nth-child(1) { transform: translateY(12px) rotate(-45deg); } navgation .hamburger.checked .line:nth-child(2) { opacity: 0; } navgation .hamburger.checked .line:nth-child(3) { transform: translateY(-12px) rotate(45deg); } navgation #menu { position: absolute; width: 100%; display: none; background: white; list-style-type: none; top: 0; margin: 0; padding: 0; } navgation #menu:hover { display: block; } navgation #menu li { display: block; line-height: 50px; text-align: center; } navgation #menu a { color: #999; } navgation #menu a:hover { text-decoration: none; color: #0076d1; } navgation #menu a.active { color: #0076d1; font-weight: 500; } navgation .hamburger:hover ~ #menu, navgation .hamburger.checked ~ #menu { display: block; padding: 0; margin: 0; left: 0; right: 0; } @media only screen and (min-width: 768px) { navgation .hamburger { display: none; } navgation #menu { display: flex; position: static; background: none; clear: none; flex: 1; justify-content: flex-end; } navgation #menu:hover { display: flex; } navgation #menu li { padding: 0 1em; } }","path":"/component/topmenu.js",
        
        loaded(data) { //pipeline after data has been loaded

        },
        data(data, runtime) {
            return this.createStore("topmenu", {
                link: "runtime.path"
            })
        },
        interactions: () => ({
            "hamburger": {
                "click"(sender, dataStore) {
                    sender.field.$el.classList.toggle("checked");
                }
            },
            "/$topmenu/link": {
                "click"(sender, dataStore) {
                    sender.ev.preventDefault();

                    buildApp.loadPage(sender.field.$el.firstChild.getAttribute("href"), () => {
                        dataStore.link = sender.field.$el.firstChild.getAttribute("href");
                    });

                }
            }
        })
    }
