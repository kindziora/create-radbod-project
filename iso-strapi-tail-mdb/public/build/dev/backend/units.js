

    import  { backendtopmenu }  from "../component/backendtopmenu.js";

    export let units = {
        views : {
                   'units-e-1' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<title>${_t('Offene Textaufträge')}</title>`},
                   'units-e-2' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `${_t('Offene Textaufträge')}`},
                   'units-e-3' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<backendtopmenu-component type="component" data-name="/$backendtopmenu"></backendtopmenu-component> <section class="page-content"> <section class="search-and-user"> <form> <input type="search" data-name="/$units/search" placeholder="Aufträge suchen..."> <button type="submit" aria-label="submit form"> <svg aria-hidden="true"> <use xlink:href="#search"></use> </svg> </button> </form> </section> <section class="grid"> <article> <div class="wrapper"> <div class="Rtable Rtable--5cols Rtable--collapse"> <div class="Rtable-row Rtable-row--head"> <div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Wörter')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Schreiben')}</div> </div> <div class="tlist" data-name="/$units" data-view="text" data-type="list"> </div> </div> </div> </article> </section> </section> <bottommenu-component data-name="/$bottommenu"></bottommenu-component>`},
                   'units-e-5' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<section class="search-and-user"> <form> <input type="search" data-name="/$units/search" placeholder="Aufträge suchen..."> <button type="submit" aria-label="submit form"> <svg aria-hidden="true"> <use xlink:href="#search"></use> </svg> </button> </form> </section> <section class="grid"> <article> <div class="wrapper"> <div class="Rtable Rtable--5cols Rtable--collapse"> <div class="Rtable-row Rtable-row--head"> <div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Wörter')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Schreiben')}</div> </div> <div class="tlist" data-name="/$units" data-view="text" data-type="list"> </div> </div> </div> </article> </section>`},
                   'units-e-6' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<form> <input type="search" data-name="/$units/search" placeholder="Aufträge suchen..."> <button type="submit" aria-label="submit form"> <svg aria-hidden="true"> <use xlink:href="#search"></use> </svg> </button> </form>`},
                   'units-e-7' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<input type="search" data-name="/$units/search" placeholder="Aufträge suchen..."> <button type="submit" aria-label="submit form"> <svg aria-hidden="true"> <use xlink:href="#search"></use> </svg> </button>`},
                   'units-e-9' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<svg aria-hidden="true"> <use xlink:href="#search"></use> </svg>`},
                   'units-e-10' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<use xlink:href="#search"></use>`},
                   'units-e-12' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<article> <div class="wrapper"> <div class="Rtable Rtable--5cols Rtable--collapse"> <div class="Rtable-row Rtable-row--head"> <div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Wörter')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Schreiben')}</div> </div> <div class="tlist" data-name="/$units" data-view="text" data-type="list"> </div> </div> </div> </article>`},
                   'units-e-13' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<div class="wrapper"> <div class="Rtable Rtable--5cols Rtable--collapse"> <div class="Rtable-row Rtable-row--head"> <div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Wörter')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Schreiben')}</div> </div> <div class="tlist" data-name="/$units" data-view="text" data-type="list"> </div> </div> </div>`},
                   'units-e-14' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<div class="Rtable Rtable--5cols Rtable--collapse"> <div class="Rtable-row Rtable-row--head"> <div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Wörter')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Schreiben')}</div> </div> <div class="tlist" data-name="/$units" data-view="text" data-type="list"> </div> </div>`},
                   'units-e-15' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<div class="Rtable-row Rtable-row--head"> <div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Wörter')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Schreiben')}</div> </div> <div class="tlist" data-name="/$units" data-view="text" data-type="list"> </div>`},
                   'units-e-16' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Wörter')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Schreiben')}</div>`},
                   'units-e-17' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `${_t('Von')}`},
                   'units-e-18' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `${_t('Auftrag')}`},
                   'units-e-19' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `${_t('Wörter')}`},
                   'units-e-20' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `${_t('Schreiben')}`},
                   'units' : function (args) { let {change, bottommenu,breadcrumb,briefing,home,modal,tasklist,textlist,topmenu,units, _t, env} = args; return `<extend-head data-id="units-e-1" data-view="units-e-1"> <title data-id="units-e-2" data-view="units-e-2">${_t('Offene Textaufträge')}</title> </extend-head> <page class="light-mode" data-id="units-e-3" data-view="units-e-3"> <backendtopmenu-component type="component" data-name="/$backendtopmenu"><component data-name="topmenu" data-id="topmenu" data-view="topmenu"><navgation data-id="topmenu-e-1" data-view="topmenu-e-1"> <div class="logo" data-id="topmenu-e-2" data-view="topmenu-e-2"><img src="/img/topmenu/logo_serialtexter.png" alt="no image" data-id="topmenu-e-3" data-view="topmenu-e-3"></div> <ul id="menu" data-type="list" data-id="topmenu-e-4" data-view="topmenu-e-4"> <li data-name="/$topmenu/link" data-id="topmenu-e-5" data-view="topmenu-e-5"><a href="${env.view.url('start')}" class="${env.view.isActive('/start')}" data-id="topmenu-e-6" data-view="topmenu-e-6">${_t('start')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-7" data-view="topmenu-e-7"><a href="${env.view.url('login')}" class="${env.view.isActive('/login')}" data-id="topmenu-e-8" data-view="topmenu-e-8">${_t('login')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-9" data-view="topmenu-e-9"><a href="${env.view.url('register')}" class="${ env.view.isActive('/register') }" data-id="topmenu-e-10" data-view="topmenu-e-10">${_t('registrieren')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-11" data-view="topmenu-e-11"><a href="${env.view.url('blog')}" class="${env.view.isActive('/blog')}" data-id="topmenu-e-12" data-view="topmenu-e-12">${_t('blog')}</a></li> </ul> </navgation><style data-id="briefing-e-23" data-view="briefing-e-23">navgation { display: flex; justify-content: space-between; } navgation .logo { width: 15em; } navgation #menu { z-index: 2; position: absolute; width: 100%; display: none; background: white; list-style-type: none; top: 0; margin: 0; padding: 0; } navgation #menu li { display: block; line-height: 50px; text-align: center; } navgation #menu a { color: #999; } navgation #menu a:hover { text-decoration: none; color: #0076d1; } navgation #menu a.active { color: #0076d1; font-weight: 500; } @media only screen and (max-width: 768px) { navgation .logo { display: none; } navgation #menu { display: flex; padding: 0; margin: 0; font-size: 1.5em; left: 0; right: 0; justify-content: center; position: fixed; box-shadow: 0 1px 8px black; } navgation #menu li { display: flex; line-height: 50px; flex-grow: 1; flex-flow: column; text-align: center; } } @media only screen and (min-width: 768px) { navgation #menu { display: flex; position: static; background: none; clear: none; flex: 1; justify-content: flex-end; } navgation #menu li { padding: 0 1em; } }</style></component></backendtopmenu-component> <section class="page-content" data-id="units-e-5" data-view="units-e-5"> <section class="search-and-user" data-id="units-e-6" data-view="units-e-6"> <form data-id="units-e-7" data-view="units-e-7"> <input type="search" data-name="/$units/search" placeholder="Aufträge suchen..." data-id="units-e-8" data-view="units-e-8"> <button type="submit" aria-label="submit form" data-id="units-e-9" data-view="units-e-9"> <svg aria-hidden="true" data-id="units-e-10" data-view="units-e-10"> <use xlink:href="#search" data-id="units-e-11" data-view="units-e-11"></use> </svg> </button> </form> </section> <section class="grid" data-id="units-e-12" data-view="units-e-12"> <article data-id="units-e-13" data-view="units-e-13"> <div class="wrapper" data-id="units-e-14" data-view="units-e-14"> <div class="Rtable Rtable--5cols Rtable--collapse" data-id="units-e-15" data-view="units-e-15"> <div class="Rtable-row Rtable-row--head" data-id="units-e-16" data-view="units-e-16"> <div class="Rtable-cell date-cell column-heading" data-id="units-e-17" data-view="units-e-17">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading" data-id="units-e-18" data-view="units-e-18">${_t('Auftrag')}</div> <div class="Rtable-cell replay-link-cell column-heading" data-id="units-e-19" data-view="units-e-19">${_t('Wörter')}</div> <div class="Rtable-cell pdf-cell column-heading" data-id="units-e-20" data-view="units-e-20">${_t('Schreiben')}</div> </div> <div class="tlist" data-name="/$units" data-view="text" data-type="list" data-id="units-e-21"> </div> </div> </div> </article> </section> </section> <bottommenu-component data-name="/$bottommenu"><component data-name="bottommenu" data-id="bottommenu" data-view="bottommenu"><footer data-id="bottommenu-e-1" data-view="bottommenu-e-1"> <div class="logo" data-id="bottommenu-e-2" data-view="bottommenu-e-2"> <img src="/img/topmenu/logo64.png" alt="no image" data-id="bottommenu-e-3" data-view="bottommenu-e-3"> </div> <div class="PRODUCT" data-id="bottommenu-e-4" data-view="bottommenu-e-4"> <h3 data-id="bottommenu-e-5" data-view="bottommenu-e-5">${_t('Mehr')}</h3> <ul data-type="list" data-id="bottommenu-e-6" data-view="bottommenu-e-6"> <li data-id="bottommenu-e-7" data-view="bottommenu-e-7"> <a href="#/all" class="selected" data-id="bottommenu-e-8" data-view="bottommenu-e-8">${_t('Website Content')}</a> </li> <li data-id="bottommenu-e-9" data-view="bottommenu-e-9"> <a href="#/active" data-id="bottommenu-e-10" data-view="bottommenu-e-10">${_t('Blog Artikel')}</a> </li> <li data-id="bottommenu-e-11" data-view="bottommenu-e-11"> <a href="#/completed" data-id="bottommenu-e-12" data-view="bottommenu-e-12">${_t('Seo Optimierte Inhalte')}</a> </li> <li data-id="bottommenu-e-13" data-view="bottommenu-e-13"> <a href="/Impressum" data-id="bottommenu-e-14" data-view="bottommenu-e-14">${_t('Impressum')}</a> </li> </ul> </div> <div class="BLOG" data-id="bottommenu-e-15" data-view="bottommenu-e-15"> <h3 data-id="bottommenu-e-16" data-view="bottommenu-e-16">${_t('Blog')}</h3> <ul data-type="list" data-id="bottommenu-e-17" data-view="bottommenu-e-17"> <li data-id="bottommenu-e-18" data-view="bottommenu-e-18"> <a href="#/all" class="selected" data-id="bottommenu-e-19" data-view="bottommenu-e-19">${_t('Wie schreibt man richtig?')}</a> </li> <li data-id="bottommenu-e-20" data-view="bottommenu-e-20"> <a href="#/active" data-id="bottommenu-e-21" data-view="bottommenu-e-21">${_t('SEO-Tricks')}</a> </li> <li data-id="bottommenu-e-22" data-view="bottommenu-e-22"> <a href="#/completed" data-id="bottommenu-e-23" data-view="bottommenu-e-23">${_t('News')}</a> </li> </ul> </div> <div class="followus" data-id="bottommenu-e-24" data-view="bottommenu-e-24"> <h3 data-id="bottommenu-e-25" data-view="bottommenu-e-25">${_t('Follow us')}</h3> <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" data-id="bottommenu-e-26" data-view="bottommenu-e-26"> <defs data-id="bottommenu-e-27" data-view="bottommenu-e-27"> <symbol id="icon-twitter-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-28" data-view="bottommenu-e-28"> <title data-id="bottommenu-e-29" data-view="bottommenu-e-29">${_t('twitter-with-circle')}</title> <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM13.905 8.264c0.004 0.082 0.005 0.164 0.005 0.244 0 2.5-1.901 5.381-5.379 5.381-1.068 0-2.062-0.312-2.898-0.85 0.147 0.018 0.298 0.025 0.451 0.025 0.886 0 1.701-0.301 2.348-0.809-0.827-0.016-1.525-0.562-1.766-1.312 0.115 0.021 0.233 0.033 0.355 0.033 0.172 0 0.34-0.023 0.498-0.066-0.865-0.174-1.517-0.938-1.517-1.854v-0.023c0.255 0.141 0.547 0.227 0.857 0.237-0.508-0.34-0.841-0.918-0.841-1.575 0-0.346 0.093-0.672 0.256-0.951 0.933 1.144 2.325 1.896 3.897 1.977-0.033-0.139-0.049-0.283-0.049-0.432 0-1.043 0.846-1.891 1.891-1.891 0.543 0 1.035 0.23 1.38 0.598 0.431-0.086 0.835-0.242 1.2-0.459-0.141 0.441-0.44 0.812-0.831 1.047 0.383-0.047 0.747-0.148 1.086-0.299-0.253 0.379-0.574 0.713-0.943 0.979z" data-id="bottommenu-e-30" data-view="bottommenu-e-30"> </path> </symbol> <symbol id="icon-youtube-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-31" data-view="bottommenu-e-31"> <title data-id="bottommenu-e-32" data-view="bottommenu-e-32">${_t('youtube-with-circle')}</title> <path d="M11.603 9.833l-2.246-1.048c-0.196-0.091-0.357 0.011-0.357 0.228v1.974c0 0.217 0.161 0.319 0.357 0.228l2.245-1.048c0.197-0.092 0.197-0.242 0.001-0.334zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM10 13.9c-4.914 0-5-0.443-5-3.9s0.086-3.9 5-3.9 5 0.443 5 3.9-0.086 3.9-5 3.9z" data-id="bottommenu-e-33" data-view="bottommenu-e-33"> </path> </symbol> <symbol id="icon-instagram-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-34" data-view="bottommenu-e-34"> <title data-id="bottommenu-e-35" data-view="bottommenu-e-35">${_t('instagram-with-circle')}</title> <path d="M13 10c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.171 0.018-0.338 0.049-0.5h-1.049v3.997c0 0.278 0.225 0.503 0.503 0.503h6.995c0.277 0 0.502-0.225 0.502-0.503v-3.997h-1.049c0.031 0.162 0.049 0.329 0.049 0.5zM10 12c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2zM12.4 7.9h1.199c0.166 0 0.301-0.135 0.301-0.3v-1.199c0-0.166-0.135-0.301-0.301-0.301h-1.199c-0.166 0-0.301 0.135-0.301 0.301v1.199c0.001 0.165 0.136 0.3 0.301 0.3zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.302 0 9.6-4.298 9.6-9.6s-4.298-9.6-9.6-9.6zM15 13.889c0 0.611-0.5 1.111-1.111 1.111h-7.778c-0.611 0-1.111-0.5-1.111-1.111v-7.778c0-0.611 0.5-1.111 1.111-1.111h7.778c0.611 0 1.111 0.5 1.111 1.111v7.778z" data-id="bottommenu-e-36" data-view="bottommenu-e-36"> </path> </symbol> <symbol id="icon-facebook-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-37" data-view="bottommenu-e-37"> <title data-id="bottommenu-e-38" data-view="bottommenu-e-38">${_t('facebook-with-circle')}</title> <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM12.274 7.034h-1.443c-0.171 0-0.361 0.225-0.361 0.524v1.042h1.805l-0.273 1.486h-1.532v4.461h-1.703v-4.461h-1.545v-1.486h1.545v-0.874c0-1.254 0.87-2.273 2.064-2.273h1.443v1.581z" data-id="bottommenu-e-39" data-view="bottommenu-e-39"> </path> </symbol> </defs> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-40" data-view="bottommenu-e-40"> <use xlink:href="#icon-facebook-with-circle" data-id="bottommenu-e-41" data-view="bottommenu-e-41"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-42" data-view="bottommenu-e-42"> <use xlink:href="#icon-instagram-with-circle" data-id="bottommenu-e-43" data-view="bottommenu-e-43"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-44" data-view="bottommenu-e-44"> <use xlink:href="#icon-twitter-with-circle" data-id="bottommenu-e-45" data-view="bottommenu-e-45"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-46" data-view="bottommenu-e-46"> <use xlink:href="#icon-youtube-with-circle" data-id="bottommenu-e-47" data-view="bottommenu-e-47"></use> </svg> </div> </footer><style data-id="briefing-e-35" data-view="briefing-e-35">bottommenu-component footer { margin: 4em 0 0 0; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px 0px; grid-template-areas: "logo PRODUCT BLOG followus"; } bottommenu-component footer .logo { grid-area: logo; display: flex; align-items: center; justify-content: center; } bottommenu-component footer ul { list-style-type: none; margin: 0; padding: 0; } @media only screen and (max-width: 768px) { bottommenu-component footer { display: block; } bottommenu-component footer div { text-align: center; } } bottommenu-component .PRODUCT { grid-area: PRODUCT; } bottommenu-component .BLOG { grid-area: BLOG; } bottommenu-component .followus { grid-area: followus; }</style></component></bottommenu-component> </page>`},
                   'text' : function (args) {
                let { change, units, _t, env } = args;
                return `<div class="Rtable-row" data-name="/$units/items/${change.value.id}" data-type="list-item"> 
                  <div class="Rtable-cell date-cell">
                    <div class="Rtable-cell--heading">Von</div>
                    <div class="Rtable-cell--content date-content"><span class="webinar-date">${change.value.createdAt.substr(5, 14).replace("T", " ")}</div>
                  </div>
                  <div class="Rtable-cell topic-cell">
                    <div class="Rtable-cell--content title-content">${change.value.title}</div>
                  </div> 
                  <div class="Rtable-cell replay-link-cell">
                    <div class="Rtable-cell--heading">Bezahlung</div>
                    <div class="Rtable-cell--content replay-link-content">150 Wörter</div>
                  </div>
                  <div class="Rtable-cell Rtable-cell--foot pdf-cell">
                    <div class="Rtable-cell--heading">Aktion</div>
                    <div class="Rtable-cell--content pdf-content"><a data-title="${change.value.title}" href="${env.view.url('backend/write/' + change.value.id)}" data-events="job:click" data-index="${change.value.id}"> &#9997;</a></div>
                  </div> 
              </div>`;
            } },
            "style":"@import url(/css/backend.css);","path":"/backend/units.js",
        
        lazyLoading: false,
        mounted() {
            //  console.log("mounted", this);

        },
        components:
        {
            "backendtopmenu-component": "backendtopmenu#mainmenu",
            "bottommenu-component": "bottommenu#footermenu"
        },
        data() {

            return this.createStore("units", {
                items:
                    [{
                        "versions": [],
                        "_id": "6065ffd3d65ede005e7cf9af",
                        "data": null,
                        "briefing": "Bitte schreibe mir einen kurzen Text",
                        "published_at": "2021-04-01T17:16:04.992Z",
                        "createdAt": "2021-04-01T17:16:03.151Z",
                        "updatedAt": "2021-04-04T13:14:42.291Z",
                        "__v": 0,
                        "project": {
                            "sourcetype": null,
                            "_id": "6065fc7327b6b3004e467327",
                            "name": "Business Profile schreiben",
                            "briefing": "<h3>Lieber Autor, </h3>\n\n<p>in diesem Job sollen wir Unternehmenstexte für die zukünftigen Webseiten verschiedener Unternehmen erstellen. \n\nUnser Kunde ist ein Dienstleister, der Ärzten, Handwerkern etc. Webseiten-Pakete verkauft. Wir erstellen die Texte für die Pakete mit vier Kategorien (meist „Startseite“, „Über uns“, „Philosophie“ und „Leistungen“).</p>\n\n<p>Vielleicht kennst du diesen Job bereits – wir haben ihn neu gebaut und einen API-Job generiert. Das bedeutet, dass der Kunde die Vorgaben direkt in den Job schickt und die fertigen Texte nach Überprüfung durch unsere Qualitätsmanager direkt zurück erhält.</p>\n\n<p>Wir haben vertraglich festgelegt, dass wir die Texte innerhalb von 6 Werktagen an den Kunden zurück schicken, die Lieferzeiten waren bisher zu lange. Ich bin sehr zuversichtlich, dass wir das zusammen schaffen! :)</p>\n\n\n \n![ak.png](/uploads/ak_f19a214172.png)\n",
                            "published_at": "2021-04-01T17:02:06.913Z",
                            "createdAt": "2021-04-01T17:01:39.499Z",
                            "updatedAt": "2021-04-04T13:14:42.292Z",
                            "__v": 0,
                            "wordcent": 2.3,
                            "input": null,
                            "output": null,
                            "id": "6065fc7327b6b3004e467327"
                        },
                        "title": "sdsdd",
                        "textLatest": "hlk fjlkjlfghlkgfh klgfk gfhfghgh fghgfh",
                        "validation": null,
                        "id": "6065ffd3d65ede005e7cf9af"
                    }]

            }).db().findUnitsByProjectID(this.environment.view.path().split("/").pop()).then(function (res) {
                let { data, model } = res;
                model._data.items = data;

                return data;
            });

        },
        interactions: () => ({
            "job": {
                click(context, store) {
                    context.ev.preventDefault();
                    let url = context.field.$el.getAttribute("href");
                    let name = context.field.$el.getAttribute("data-title"); 

                    this.store.dataH.pxy.$breadcrumb.path = [
                        { name: "Aufträge", url: "/backend/tasklist" }, 
                        { name: store[0].project.name, url: "/backend/briefing/" + store[0].project.id}, 
                        { name: "Texte", url: "/backend/units/" +  store[0].project.id }, 
                        { name, url } 
                    ];

                    buildApp.loadPage(url, () => {
                        console.log(arguments);
                    });

                }
            },
            "units": {
                "postRender": function (comp) {
                    this.mountComponent("backendtopmenu#mainmenu", backendtopmenu, (stores, data, component) => {
                        this.sharedComponents["backendtopmenu#mainmenu"] = component;
                    });

                    comp.store.dataH.pxy.$breadcrumb.path = [
                        { name: "Aufträge", url: "/backend/tasklist" },
                        { name: comp.store._data[0].project.name, url: "/backend/briefing/" + comp.store._data[0].project.id}, 
                        { name: "Texte", url: "/backend/units/" +  comp.store._data[0].project.id }, 
                    ];

                }
            }
        })
    }

