

    export let bottommenu = {
        "html":"<footer> <div class=\"logo\"> <img src=\"/img/topmenu/logo64.png\" alt=\"no image\" /> </div> <div class=\"PRODUCT\"> <h3>${_t('Mehr')}</h3> <ul> <li> <a href=\"#/all\" class=\"selected\">${_t('Website Content')}</a> </li> <li> <a href=\"#/active\">${_t('Blog Artikel')}</a> </li> <li> <a href=\"#/completed\">${_t('Seo Optimierte Inhalte')}</a> </li> <li> <a href=\"/Impressum\">${_t('Impressum')}</a> </li> </ul> </div> <div class=\"BLOG\"> <h3>${_t('Blog')}</h3> <ul> <li> <a href=\"#/all\" class=\"selected\">${_t('Wie schreibt man richtig?')}</a> </li> <li> <a href=\"#/active\">${_t('SEO-Tricks')}</a> </li> <li> <a href=\"#/completed\">${_t('News')}</a> </li> </ul> </div> <div class=\"followus\"> <h3>${_t('Follow us')}</h3> <svg style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"> <defs> <symbol id=\"icon-twitter-with-circle\" viewBox=\"0 0 20 20\"> <title>${_t('twitter-with-circle')}</title> <path d=\"M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM13.905 8.264c0.004 0.082 0.005 0.164 0.005 0.244 0 2.5-1.901 5.381-5.379 5.381-1.068 0-2.062-0.312-2.898-0.85 0.147 0.018 0.298 0.025 0.451 0.025 0.886 0 1.701-0.301 2.348-0.809-0.827-0.016-1.525-0.562-1.766-1.312 0.115 0.021 0.233 0.033 0.355 0.033 0.172 0 0.34-0.023 0.498-0.066-0.865-0.174-1.517-0.938-1.517-1.854v-0.023c0.255 0.141 0.547 0.227 0.857 0.237-0.508-0.34-0.841-0.918-0.841-1.575 0-0.346 0.093-0.672 0.256-0.951 0.933 1.144 2.325 1.896 3.897 1.977-0.033-0.139-0.049-0.283-0.049-0.432 0-1.043 0.846-1.891 1.891-1.891 0.543 0 1.035 0.23 1.38 0.598 0.431-0.086 0.835-0.242 1.2-0.459-0.141 0.441-0.44 0.812-0.831 1.047 0.383-0.047 0.747-0.148 1.086-0.299-0.253 0.379-0.574 0.713-0.943 0.979z\"> </path> </symbol> <symbol id=\"icon-youtube-with-circle\" viewBox=\"0 0 20 20\"> <title>${_t('youtube-with-circle')}</title> <path d=\"M11.603 9.833l-2.246-1.048c-0.196-0.091-0.357 0.011-0.357 0.228v1.974c0 0.217 0.161 0.319 0.357 0.228l2.245-1.048c0.197-0.092 0.197-0.242 0.001-0.334zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM10 13.9c-4.914 0-5-0.443-5-3.9s0.086-3.9 5-3.9 5 0.443 5 3.9-0.086 3.9-5 3.9z\"> </path> </symbol> <symbol id=\"icon-instagram-with-circle\" viewBox=\"0 0 20 20\"> <title>${_t('instagram-with-circle')}</title> <path d=\"M13 10c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.171 0.018-0.338 0.049-0.5h-1.049v3.997c0 0.278 0.225 0.503 0.503 0.503h6.995c0.277 0 0.502-0.225 0.502-0.503v-3.997h-1.049c0.031 0.162 0.049 0.329 0.049 0.5zM10 12c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2zM12.4 7.9h1.199c0.166 0 0.301-0.135 0.301-0.3v-1.199c0-0.166-0.135-0.301-0.301-0.301h-1.199c-0.166 0-0.301 0.135-0.301 0.301v1.199c0.001 0.165 0.136 0.3 0.301 0.3zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.302 0 9.6-4.298 9.6-9.6s-4.298-9.6-9.6-9.6zM15 13.889c0 0.611-0.5 1.111-1.111 1.111h-7.778c-0.611 0-1.111-0.5-1.111-1.111v-7.778c0-0.611 0.5-1.111 1.111-1.111h7.778c0.611 0 1.111 0.5 1.111 1.111v7.778z\"> </path> </symbol> <symbol id=\"icon-facebook-with-circle\" viewBox=\"0 0 20 20\"> <title>${_t('facebook-with-circle')}</title> <path d=\"M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM12.274 7.034h-1.443c-0.171 0-0.361 0.225-0.361 0.524v1.042h1.805l-0.273 1.486h-1.532v4.461h-1.703v-4.461h-1.545v-1.486h1.545v-0.874c0-1.254 0.87-2.273 2.064-2.273h1.443v1.581z\"> </path> </symbol> </defs> </svg> <svg height=\"30px\" width=\"30px\"> <use xlink:href=\"#icon-facebook-with-circle\"></use> </svg> <svg height=\"30px\" width=\"30px\"> <use xlink:href=\"#icon-instagram-with-circle\"></use> </svg> <svg height=\"30px\" width=\"30px\"> <use xlink:href=\"#icon-twitter-with-circle\"></use> </svg> <svg height=\"30px\" width=\"30px\"> <use xlink:href=\"#icon-youtube-with-circle\"></use> </svg> </div> </footer>","style":"bottommenu-component footer { margin: 4em 0 0 0; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px 0px; grid-template-areas: \"logo PRODUCT BLOG followus\"; } bottommenu-component footer .logo { grid-area: logo; display: flex; align-items: center; justify-content: center; } bottommenu-component footer ul { list-style-type: none; margin: 0; padding: 0; } @media only screen and (max-width: 768px) { bottommenu-component footer { display: block; } bottommenu-component footer div { text-align: center; } } bottommenu-component .PRODUCT { grid-area: PRODUCT; } bottommenu-component .BLOG { grid-area: BLOG; } bottommenu-component .followus { grid-area: followus; }","path":"/component/bottommenu.js",
        
        loaded(data) { //pipeline after data has been loaded
  
        },
        data(data, runtime) {
            return this.createStore("bottommenu", {
                link: "runtime.path"
            })
        },
        interactions: () => ({
            "hamburger": {
                "click"(sender, dataStore) {
                    sender.field.$el.classList.toggle("checked");
                }
            },
            "/$bottommenu/link": {
                "click"(sender, dataStore) {
                    sender.ev.preventDefault();

                    buildApp.loadPage(sender.field.$el.firstChild.getAttribute("href"), () => {
                        dataStore.link = sender.field.$el.firstChild.getAttribute("href");
                    });

                }
            }
        })
    }
