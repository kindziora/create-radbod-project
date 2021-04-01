 
     
    import  { translations }  from "./i18n/profile.js";

    export let profile = {
        views : {
                   'profile-e-1' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,topmenu, _t, env} = args; return `<title>${_t('Willkommen zurück')}</title>`},
                   'profile-e-2' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,topmenu, _t, env} = args; return `${_t('Willkommen zurück')}`},
                   'profile-e-3' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,topmenu, _t, env} = args; return `<backendtopmenu-component type="component" data-name="/$backendtopmenu"></backendtopmenu-component> ${_t('profil')} <bottommenu-component data-name="/$bottommenu"></bottommenu-component>`},
                   'profile-e-14' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,topmenu, _t, env} = args; return `bottommenu-component footer { margin: 4em 0 0 0; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px 0px; grid-template-areas: "logo PRODUCT BLOG followus"; } bottommenu-component footer .logo { grid-area: logo; display: flex; align-items: center; justify-content: center; } bottommenu-component footer ul { list-style-type: none; margin: 0; padding: 0; } @media only screen and (max-width: 768px) { bottommenu-component footer { display: block; } bottommenu-component footer div { text-align: center; } } bottommenu-component .PRODUCT { grid-area: PRODUCT; } bottommenu-component .BLOG { grid-area: BLOG; } bottommenu-component .followus { grid-area: followus; }`},
                   'profile' : function (args) { let {change, backendtopmenu,bottommenu,home,modal,topmenu, _t, env} = args; return `<extend-head data-id="profile-e-1" data-view="profile-e-1"> <title data-id="profile-e-2" data-view="profile-e-2">${_t('Willkommen zurück')}</title> </extend-head> <page data-id="profile-e-3" data-view="profile-e-3"> <backendtopmenu-component type="component" data-name="/$backendtopmenu"><component data-name="backendtopmenu" data-id="backendtopmenu" data-view="backendtopmenu"><svg style="display:none;" data-id="backendtopmenu-e-1" data-view="backendtopmenu-e-1"> <symbol id="down" viewBox="0 0 16 16" data-id="backendtopmenu-e-2" data-view="backendtopmenu-e-2"> <polygon points="3.81 4.38 8 8.57 12.19 4.38 13.71 5.91 8 11.62 2.29 5.91 3.81 4.38" data-id="backendtopmenu-e-3" data-view="backendtopmenu-e-3"></polygon> </symbol> <symbol id="collection" viewBox="0 0 16 16" data-id="backendtopmenu-e-4" data-view="backendtopmenu-e-4"> <rect width="7" height="7" data-id="backendtopmenu-e-5" data-view="backendtopmenu-e-5"></rect> <rect y="9" width="7" height="7" data-id="backendtopmenu-e-6" data-view="backendtopmenu-e-6"></rect> <rect x="9" width="7" height="7" data-id="backendtopmenu-e-7" data-view="backendtopmenu-e-7"></rect> <rect x="9" y="9" width="7" height="7" data-id="backendtopmenu-e-8" data-view="backendtopmenu-e-8"></rect> </symbol> <symbol id="charts" viewBox="0 0 16 16" data-id="backendtopmenu-e-9" data-view="backendtopmenu-e-9"> <polygon points="0.64 7.38 -0.02 6.63 2.55 4.38 4.57 5.93 9.25 0.78 12.97 4.37 15.37 2.31 16.02 3.07 12.94 5.72 9.29 2.21 4.69 7.29 2.59 5.67 0.64 7.38" data-id="backendtopmenu-e-10" data-view="backendtopmenu-e-10"></polygon> <rect y="9" width="2" height="7" data-id="backendtopmenu-e-11" data-view="backendtopmenu-e-11"></rect> <rect x="12" y="8" width="2" height="8" data-id="backendtopmenu-e-12" data-view="backendtopmenu-e-12"></rect> <rect x="8" y="6" width="2" height="10" data-id="backendtopmenu-e-13" data-view="backendtopmenu-e-13"></rect> <rect x="4" y="11" width="2" height="5" data-id="backendtopmenu-e-14" data-view="backendtopmenu-e-14"></rect> </symbol> <symbol id="comments" viewBox="0 0 16 16" data-id="backendtopmenu-e-15" data-view="backendtopmenu-e-15"> <path d="M0,16.13V2H15V13H5.24ZM1,3V14.37L5,12h9V3Z" data-id="backendtopmenu-e-16" data-view="backendtopmenu-e-16"></path> <rect x="3" y="5" width="9" height="1" data-id="backendtopmenu-e-17" data-view="backendtopmenu-e-17"></rect> <rect x="3" y="7" width="7" height="1" data-id="backendtopmenu-e-18" data-view="backendtopmenu-e-18"></rect> <rect x="3" y="9" width="5" height="1" data-id="backendtopmenu-e-19" data-view="backendtopmenu-e-19"></rect> </symbol> <symbol id="pages" viewBox="0 0 16 16" data-id="backendtopmenu-e-20" data-view="backendtopmenu-e-20"> <rect x="4" width="12" height="12" transform="translate(20 12) rotate(-180)" data-id="backendtopmenu-e-21" data-view="backendtopmenu-e-21"></rect> <polygon points="2 14 2 2 0 2 0 14 0 16 2 16 14 16 14 14 2 14" data-id="backendtopmenu-e-22" data-view="backendtopmenu-e-22"></polygon> </symbol> <symbol id="appearance" viewBox="0 0 16 16" data-id="backendtopmenu-e-23" data-view="backendtopmenu-e-23"> <path d="M3,0V7A2,2,0,0,0,5,9H6v5a2,2,0,0,0,4,0V9h1a2,2,0,0,0,2-2V0Zm9,7a1,1,0,0,1-1,1H9v6a1,1,0,0,1-2,0V8H5A1,1,0,0,1,4,7V6h8ZM4,5V1H6V4H7V1H9V4h1V1h2V5Z" data-id="backendtopmenu-e-24" data-view="backendtopmenu-e-24"></path> </symbol> <symbol id="trends" viewBox="0 0 16 16" data-id="backendtopmenu-e-25" data-view="backendtopmenu-e-25"> <polygon points="0.64 11.85 -0.02 11.1 2.55 8.85 4.57 10.4 9.25 5.25 12.97 8.84 15.37 6.79 16.02 7.54 12.94 10.2 9.29 6.68 4.69 11.76 2.59 10.14 0.64 11.85" data-id="backendtopmenu-e-26" data-view="backendtopmenu-e-26"></polygon> </symbol> <symbol id="settings" viewBox="0 0 16 16" data-id="backendtopmenu-e-27" data-view="backendtopmenu-e-27"> <rect x="9.78" y="5.34" width="1" height="7.97" data-id="backendtopmenu-e-28" data-view="backendtopmenu-e-28"></rect> <polygon points="7.79 6.07 10.28 1.75 12.77 6.07 7.79 6.07" data-id="backendtopmenu-e-29" data-view="backendtopmenu-e-29"></polygon> <rect x="4.16" y="1.75" width="1" height="7.97" data-id="backendtopmenu-e-30" data-view="backendtopmenu-e-30"></rect> <polygon points="7.15 8.99 4.66 13.31 2.16 8.99 7.15 8.99" data-id="backendtopmenu-e-31" data-view="backendtopmenu-e-31"></polygon> <rect x="1.28" width="1" height="4.97" data-id="backendtopmenu-e-32" data-view="backendtopmenu-e-32"></rect> <polygon points="3.28 4.53 1.78 7.13 0.28 4.53 3.28 4.53" data-id="backendtopmenu-e-33" data-view="backendtopmenu-e-33"></polygon> <rect x="12.84" y="11.03" width="1" height="4.97" data-id="backendtopmenu-e-34" data-view="backendtopmenu-e-34"></rect> <polygon points="11.85 11.47 13.34 8.88 14.84 11.47 11.85 11.47" data-id="backendtopmenu-e-35" data-view="backendtopmenu-e-35"></polygon> </symbol> <symbol id="options" viewBox="0 0 16 16" data-id="backendtopmenu-e-36" data-view="backendtopmenu-e-36"> <path d="M8,11a3,3,0,1,1,3-3A3,3,0,0,1,8,11ZM8,6a2,2,0,1,0,2,2A2,2,0,0,0,8,6Z" data-id="backendtopmenu-e-37" data-view="backendtopmenu-e-37"></path> <path d="M8.5,16h-1A1.5,1.5,0,0,1,6,14.5v-.85a5.91,5.91,0,0,1-.58-.24l-.6.6A1.54,1.54,0,0,1,2.7,14L2,13.3a1.5,1.5,0,0,1,0-2.12l.6-.6A5.91,5.91,0,0,1,2.35,10H1.5A1.5,1.5,0,0,1,0,8.5v-1A1.5,1.5,0,0,1,1.5,6h.85a5.91,5.91,0,0,1,.24-.58L2,4.82A1.5,1.5,0,0,1,2,2.7L2.7,2A1.54,1.54,0,0,1,4.82,2l.6.6A5.91,5.91,0,0,1,6,2.35V1.5A1.5,1.5,0,0,1,7.5,0h1A1.5,1.5,0,0,1,10,1.5v.85a5.91,5.91,0,0,1,.58.24l.6-.6A1.54,1.54,0,0,1,13.3,2L14,2.7a1.5,1.5,0,0,1,0,2.12l-.6.6a5.91,5.91,0,0,1,.24.58h.85A1.5,1.5,0,0,1,16,7.5v1A1.5,1.5,0,0,1,14.5,10h-.85a5.91,5.91,0,0,1-.24.58l.6.6a1.5,1.5,0,0,1,0,2.12L13.3,14a1.54,1.54,0,0,1-2.12,0l-.6-.6a5.91,5.91,0,0,1-.58.24v.85A1.5,1.5,0,0,1,8.5,16ZM5.23,12.18l.33.18a4.94,4.94,0,0,0,1.07.44l.36.1V14.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V12.91l.36-.1a4.94,4.94,0,0,0,1.07-.44l.33-.18,1.12,1.12a.51.51,0,0,0,.71,0l.71-.71a.5.5,0,0,0,0-.71l-1.12-1.12.18-.33a4.94,4.94,0,0,0,.44-1.07l.1-.36H14.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H12.91l-.1-.36a4.94,4.94,0,0,0-.44-1.07l-.18-.33L13.3,4.11a.5.5,0,0,0,0-.71L12.6,2.7a.51.51,0,0,0-.71,0L10.77,3.82l-.33-.18a4.94,4.94,0,0,0-1.07-.44L9,3.09V1.5A.5.5,0,0,0,8.5,1h-1a.5.5,0,0,0-.5.5V3.09l-.36.1a4.94,4.94,0,0,0-1.07.44l-.33.18L4.11,2.7a.51.51,0,0,0-.71,0L2.7,3.4a.5.5,0,0,0,0,.71L3.82,5.23l-.18.33a4.94,4.94,0,0,0-.44,1.07L3.09,7H1.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H3.09l.1.36a4.94,4.94,0,0,0,.44,1.07l.18.33L2.7,11.89a.5.5,0,0,0,0,.71l.71.71a.51.51,0,0,0,.71,0Z" data-id="backendtopmenu-e-38" data-view="backendtopmenu-e-38"></path> </symbol> <symbol id="collapse" viewBox="0 0 16 16" data-id="backendtopmenu-e-39" data-view="backendtopmenu-e-39"> <polygon points="11.62 3.81 7.43 8 11.62 12.19 10.09 13.71 4.38 8 10.09 2.29 11.62 3.81" data-id="backendtopmenu-e-40" data-view="backendtopmenu-e-40"></polygon> </symbol> <symbol id="search" viewBox="0 0 16 16" data-id="backendtopmenu-e-41" data-view="backendtopmenu-e-41"> <path d="M6.57,1A5.57,5.57,0,1,1,1,6.57,5.57,5.57,0,0,1,6.57,1m0-1a6.57,6.57,0,1,0,6.57,6.57A6.57,6.57,0,0,0,6.57,0Z" data-id="backendtopmenu-e-42" data-view="backendtopmenu-e-42"></path> <rect x="11.84" y="9.87" width="2" height="5.93" transform="translate(-5.32 12.84) rotate(-45)" data-id="backendtopmenu-e-43" data-view="backendtopmenu-e-43"></rect> </symbol> </svg> <header class="page-header" data-id="backendtopmenu-e-44" data-view="backendtopmenu-e-44"> <nav data-id="backendtopmenu-e-45" data-view="backendtopmenu-e-45"> <a href="#0" aria-label="forecastr logo" class="logo" data-id="backendtopmenu-e-46" data-view="backendtopmenu-e-46"> <img src="/img/topmenu/logo_serialtexter.png" alt="no image" data-id="backendtopmenu-e-47" data-view="backendtopmenu-e-47"> </a> <button class="toggle-mob-menu" aria-expanded="false" aria-label="open menu" data-id="backendtopmenu-e-48" data-view="backendtopmenu-e-48"> <svg width="20" height="20" aria-hidden="true" data-id="backendtopmenu-e-49" data-view="backendtopmenu-e-49"> <use xlink:href="#down" data-id="backendtopmenu-e-50" data-view="backendtopmenu-e-50"></use> </svg> </button> <ul class="admin-menu" data-type="list" data-id="backendtopmenu-e-51" data-view="backendtopmenu-e-51"> <li class="menu-heading" data-id="backendtopmenu-e-52" data-view="backendtopmenu-e-52"> <h3 data-id="backendtopmenu-e-53" data-view="backendtopmenu-e-53">${_t('Schreiben')}</h3> </li> <li data-id="backendtopmenu-e-54" data-view="backendtopmenu-e-54"> <a href="#0" data-id="backendtopmenu-e-55" data-view="backendtopmenu-e-55"> <svg data-id="backendtopmenu-e-56" data-view="backendtopmenu-e-56"> <use xlink:href="#pages" data-id="backendtopmenu-e-57" data-view="backendtopmenu-e-57"></use> </svg> <span data-id="backendtopmenu-e-58" data-view="backendtopmenu-e-58">${_t('Aufträge')}</span> </a> </li> <li data-id="backendtopmenu-e-59" data-view="backendtopmenu-e-59"> <a href="#0" data-id="backendtopmenu-e-60" data-view="backendtopmenu-e-60"> <svg data-id="backendtopmenu-e-61" data-view="backendtopmenu-e-61"> <use xlink:href="#trends" data-id="backendtopmenu-e-62" data-view="backendtopmenu-e-62"></use> </svg> <span data-id="backendtopmenu-e-63" data-view="backendtopmenu-e-63">${_t('Trends')}</span> </a> </li> <li data-id="backendtopmenu-e-64" data-view="backendtopmenu-e-64"> <a href="#0" data-id="backendtopmenu-e-65" data-view="backendtopmenu-e-65"> <svg data-id="backendtopmenu-e-66" data-view="backendtopmenu-e-66"> <use xlink:href="#collection" data-id="backendtopmenu-e-67" data-view="backendtopmenu-e-67"></use> </svg> <span data-id="backendtopmenu-e-68" data-view="backendtopmenu-e-68">${_t('Collection')}</span> </a> </li> <li data-id="backendtopmenu-e-69" data-view="backendtopmenu-e-69"> <a href="#0" data-id="backendtopmenu-e-70" data-view="backendtopmenu-e-70"> <svg data-id="backendtopmenu-e-71" data-view="backendtopmenu-e-71"> <use xlink:href="#comments" data-id="backendtopmenu-e-72" data-view="backendtopmenu-e-72"></use> </svg> <span data-id="backendtopmenu-e-73" data-view="backendtopmenu-e-73">${_t('Comments')}</span> </a> </li> <li data-id="backendtopmenu-e-74" data-view="backendtopmenu-e-74"> <a href="#0" data-id="backendtopmenu-e-75" data-view="backendtopmenu-e-75"> <svg data-id="backendtopmenu-e-76" data-view="backendtopmenu-e-76"> <use xlink:href="#appearance" data-id="backendtopmenu-e-77" data-view="backendtopmenu-e-77"></use> </svg> <span data-id="backendtopmenu-e-78" data-view="backendtopmenu-e-78">${_t('Appearance')}</span> </a> </li> <li class="menu-heading" data-id="backendtopmenu-e-79" data-view="backendtopmenu-e-79"> <h3 data-id="backendtopmenu-e-80" data-view="backendtopmenu-e-80">${_t('Einstellungen')}</h3> </li> <li data-id="backendtopmenu-e-81" data-view="backendtopmenu-e-81"> <a href="#0" data-id="backendtopmenu-e-82" data-view="backendtopmenu-e-82"> <svg data-id="backendtopmenu-e-83" data-view="backendtopmenu-e-83"> <use xlink:href="#settings" data-id="backendtopmenu-e-84" data-view="backendtopmenu-e-84"></use> </svg> <span data-id="backendtopmenu-e-85" data-view="backendtopmenu-e-85">${_t('Profil')}</span> </a> </li> <li data-id="backendtopmenu-e-86" data-view="backendtopmenu-e-86"> <a href="#0" data-id="backendtopmenu-e-87" data-view="backendtopmenu-e-87"> <svg data-id="backendtopmenu-e-88" data-view="backendtopmenu-e-88"> <use xlink:href="#options" data-id="backendtopmenu-e-89" data-view="backendtopmenu-e-89"></use> </svg> <span data-id="backendtopmenu-e-90" data-view="backendtopmenu-e-90">${_t('Bezahlung')}</span> </a> </li> <li data-id="backendtopmenu-e-91" data-view="backendtopmenu-e-91"> <a href="#0" data-id="backendtopmenu-e-92" data-view="backendtopmenu-e-92"> <svg data-id="backendtopmenu-e-93" data-view="backendtopmenu-e-93"> <use xlink:href="#charts" data-id="backendtopmenu-e-94" data-view="backendtopmenu-e-94"></use> </svg> <span data-id="backendtopmenu-e-95" data-view="backendtopmenu-e-95">${_t('Statistiken')}</span> </a> </li> <li data-id="backendtopmenu-e-96" data-view="backendtopmenu-e-96"> <a data-id="backendtopmenu-e-97" data-view="backendtopmenu-e-97">${_t('Hilfe')}</a> </li> </ul> </nav> </header></component></backendtopmenu-component> ${_t('profil')} <bottommenu-component data-name="/$bottommenu"><component data-name="bottommenu" data-id="bottommenu" data-view="bottommenu"><footer data-id="bottommenu-e-1" data-view="bottommenu-e-1"> <div class="logo" data-id="bottommenu-e-2" data-view="bottommenu-e-2"> <img src="/img/topmenu/logo64.png" alt="no image" data-id="bottommenu-e-3" data-view="bottommenu-e-3"> </div> <div class="PRODUCT" data-id="bottommenu-e-4" data-view="bottommenu-e-4"> <h3 data-id="bottommenu-e-5" data-view="bottommenu-e-5">${_t('Mehr')}</h3> <ul data-type="list" data-id="bottommenu-e-6" data-view="bottommenu-e-6"> <li data-id="bottommenu-e-7" data-view="bottommenu-e-7"> <a href="#/all" class="selected" data-id="bottommenu-e-8" data-view="bottommenu-e-8">${_t('Website Content')}</a> </li> <li data-id="bottommenu-e-9" data-view="bottommenu-e-9"> <a href="#/active" data-id="bottommenu-e-10" data-view="bottommenu-e-10">${_t('Blog Artikel')}</a> </li> <li data-id="bottommenu-e-11" data-view="bottommenu-e-11"> <a href="#/completed" data-id="bottommenu-e-12" data-view="bottommenu-e-12">${_t('Seo Optimierte Inhalte')}</a> </li> <li data-id="bottommenu-e-13" data-view="bottommenu-e-13"> <a href="/Impressum" data-id="bottommenu-e-14" data-view="bottommenu-e-14">${_t('Impressum')}</a> </li> </ul> </div> <div class="BLOG" data-id="bottommenu-e-15" data-view="bottommenu-e-15"> <h3 data-id="bottommenu-e-16" data-view="bottommenu-e-16">${_t('Blog')}</h3> <ul data-type="list" data-id="bottommenu-e-17" data-view="bottommenu-e-17"> <li data-id="bottommenu-e-18" data-view="bottommenu-e-18"> <a href="#/all" class="selected" data-id="bottommenu-e-19" data-view="bottommenu-e-19">${_t('Wie schreibt man richtig?')}</a> </li> <li data-id="bottommenu-e-20" data-view="bottommenu-e-20"> <a href="#/active" data-id="bottommenu-e-21" data-view="bottommenu-e-21">${_t('SEO-Tricks')}</a> </li> <li data-id="bottommenu-e-22" data-view="bottommenu-e-22"> <a href="#/completed" data-id="bottommenu-e-23" data-view="bottommenu-e-23">${_t('News')}</a> </li> </ul> </div> <div class="followus" data-id="bottommenu-e-24" data-view="bottommenu-e-24"> <h3 data-id="bottommenu-e-25" data-view="bottommenu-e-25">${_t('Follow us')}</h3> <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" data-id="bottommenu-e-26" data-view="bottommenu-e-26"> <defs data-id="bottommenu-e-27" data-view="bottommenu-e-27"> <symbol id="icon-twitter-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-28" data-view="bottommenu-e-28"> <title data-id="bottommenu-e-29" data-view="bottommenu-e-29">${_t('twitter-with-circle')}</title> <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM13.905 8.264c0.004 0.082 0.005 0.164 0.005 0.244 0 2.5-1.901 5.381-5.379 5.381-1.068 0-2.062-0.312-2.898-0.85 0.147 0.018 0.298 0.025 0.451 0.025 0.886 0 1.701-0.301 2.348-0.809-0.827-0.016-1.525-0.562-1.766-1.312 0.115 0.021 0.233 0.033 0.355 0.033 0.172 0 0.34-0.023 0.498-0.066-0.865-0.174-1.517-0.938-1.517-1.854v-0.023c0.255 0.141 0.547 0.227 0.857 0.237-0.508-0.34-0.841-0.918-0.841-1.575 0-0.346 0.093-0.672 0.256-0.951 0.933 1.144 2.325 1.896 3.897 1.977-0.033-0.139-0.049-0.283-0.049-0.432 0-1.043 0.846-1.891 1.891-1.891 0.543 0 1.035 0.23 1.38 0.598 0.431-0.086 0.835-0.242 1.2-0.459-0.141 0.441-0.44 0.812-0.831 1.047 0.383-0.047 0.747-0.148 1.086-0.299-0.253 0.379-0.574 0.713-0.943 0.979z" data-id="bottommenu-e-30" data-view="bottommenu-e-30"> </path> </symbol> <symbol id="icon-youtube-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-31" data-view="bottommenu-e-31"> <title data-id="bottommenu-e-32" data-view="bottommenu-e-32">${_t('youtube-with-circle')}</title> <path d="M11.603 9.833l-2.246-1.048c-0.196-0.091-0.357 0.011-0.357 0.228v1.974c0 0.217 0.161 0.319 0.357 0.228l2.245-1.048c0.197-0.092 0.197-0.242 0.001-0.334zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM10 13.9c-4.914 0-5-0.443-5-3.9s0.086-3.9 5-3.9 5 0.443 5 3.9-0.086 3.9-5 3.9z" data-id="bottommenu-e-33" data-view="bottommenu-e-33"> </path> </symbol> <symbol id="icon-instagram-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-34" data-view="bottommenu-e-34"> <title data-id="bottommenu-e-35" data-view="bottommenu-e-35">${_t('instagram-with-circle')}</title> <path d="M13 10c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.171 0.018-0.338 0.049-0.5h-1.049v3.997c0 0.278 0.225 0.503 0.503 0.503h6.995c0.277 0 0.502-0.225 0.502-0.503v-3.997h-1.049c0.031 0.162 0.049 0.329 0.049 0.5zM10 12c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2zM12.4 7.9h1.199c0.166 0 0.301-0.135 0.301-0.3v-1.199c0-0.166-0.135-0.301-0.301-0.301h-1.199c-0.166 0-0.301 0.135-0.301 0.301v1.199c0.001 0.165 0.136 0.3 0.301 0.3zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.302 0 9.6-4.298 9.6-9.6s-4.298-9.6-9.6-9.6zM15 13.889c0 0.611-0.5 1.111-1.111 1.111h-7.778c-0.611 0-1.111-0.5-1.111-1.111v-7.778c0-0.611 0.5-1.111 1.111-1.111h7.778c0.611 0 1.111 0.5 1.111 1.111v7.778z" data-id="bottommenu-e-36" data-view="bottommenu-e-36"> </path> </symbol> <symbol id="icon-facebook-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-37" data-view="bottommenu-e-37"> <title data-id="bottommenu-e-38" data-view="bottommenu-e-38">${_t('facebook-with-circle')}</title> <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM12.274 7.034h-1.443c-0.171 0-0.361 0.225-0.361 0.524v1.042h1.805l-0.273 1.486h-1.532v4.461h-1.703v-4.461h-1.545v-1.486h1.545v-0.874c0-1.254 0.87-2.273 2.064-2.273h1.443v1.581z" data-id="bottommenu-e-39" data-view="bottommenu-e-39"> </path> </symbol> </defs> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-40" data-view="bottommenu-e-40"> <use xlink:href="#icon-facebook-with-circle" data-id="bottommenu-e-41" data-view="bottommenu-e-41"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-42" data-view="bottommenu-e-42"> <use xlink:href="#icon-instagram-with-circle" data-id="bottommenu-e-43" data-view="bottommenu-e-43"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-44" data-view="bottommenu-e-44"> <use xlink:href="#icon-twitter-with-circle" data-id="bottommenu-e-45" data-view="bottommenu-e-45"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-46" data-view="bottommenu-e-46"> <use xlink:href="#icon-youtube-with-circle" data-id="bottommenu-e-47" data-view="bottommenu-e-47"></use> </svg> </div> </footer><style data-id="profile-e-14" data-view="profile-e-14">bottommenu-component footer { margin: 4em 0 0 0; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px 0px; grid-template-areas: "logo PRODUCT BLOG followus"; } bottommenu-component footer .logo { grid-area: logo; display: flex; align-items: center; justify-content: center; } bottommenu-component footer ul { list-style-type: none; margin: 0; padding: 0; } @media only screen and (max-width: 768px) { bottommenu-component footer { display: block; } bottommenu-component footer div { text-align: center; } } bottommenu-component .PRODUCT { grid-area: PRODUCT; } bottommenu-component .BLOG { grid-area: BLOG; } bottommenu-component .followus { grid-area: followus; }</style></component></bottommenu-component> </page>`} },
            "style":"","path":"/backend/profile.js",
        
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
