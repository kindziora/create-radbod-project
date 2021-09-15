
    import  { translations }  from "./i18n/start.js";

    export let start = {
        views : {
                   'start-e-1' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<title>${_t('Willkommen start')}</title>`},
                   'start-e-2' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Willkommen start')}`},
                   'start-e-3' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<topmenu-component type="component" data-name="/$topmenu"></topmenu-component> <div class="hero-body"> <div class="centered"> <div class="container"> <div id="headline-animated" class="typerTarget">${_t('einfach | gute | Texte')}</div> <h3>${_t('Es ist keine Selbstverständlichkeit perfekte Inhalte zu schreiben, aber wir Arbeiten daran.')}</h3> <div class="button-container"> <button class="submit"> ${_t('Texte kaufen')} </button> <button> ${_t('Texte schreiben')} </button> </div> </div> <div> <figure> <img src="img/start/worker.svg" alt="Description"> </figure> </div> </div> </div> <div class="text-container"> <hr> <h1>${_t('Suchmaschinenoptimierte Texte')}</h1> <h3>„verantwortungsvoll und transparent"</h3> <div class="divider"></div> </div> <div class="card-container"> <div class="card-item"> <div class="card-title"> <h4>${_t('Integration')}</h4> </div> <div class="card-icon"> <img src="img/start/light-bulb.svg"> </div> <div class="card-text"> <p>${_t('Einfach in Wordpress oder Drupal unser Plugin nutzen und Texte erhalten.')}</p> </div> <div class="button-container"> <button class="submit"> Los geht's </button> </div> </div> <div class="card-item"> <div class="card-title"> <h4>${_t('Qualitätssicherung')}</h4> </div> <div class="card-icon"> <img src="img/start/rocket.svg"> </div> <div class="card-text"> <p>Individuellen und einzigartigen Inhalt in 3 Qualitätsstufen: normal, gesichtet, lektoriert.</p> </div> <div class="button-container"> <button class="submit"> ${_t('Beispiele')} </button> </div> </div> <div class="card-item"> <div class="card-title"> <h4>${_t('Zahlungen')}</h4> </div> <div class="card-icon"> <img src="img/start/web.svg"> </div> <div class="card-text"> <p>${_t('Wir sind fair und günstig. Ihr bestimmt das Budget und erhaltet das was ihr zahlt.')}</p> </div> <div class="button-container"> <button class="submit"> ${_t('Budget im Blick')} </button> </div> </div> </div> <bottommenu-component data-name="/$bottommenu"></bottommenu-component>`},
                   'start-e-5' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<div class="centered"> <div class="container"> <div id="headline-animated" class="typerTarget">${_t('einfach | gute | Texte')}</div> <h3>${_t('Es ist keine Selbstverständlichkeit perfekte Inhalte zu schreiben, aber wir Arbeiten daran.')}</h3> <div class="button-container"> <button class="submit"> ${_t('Texte kaufen')} </button> <button> ${_t('Texte schreiben')} </button> </div> </div> <div> <figure> <img src="img/start/worker.svg" alt="Description"> </figure> </div> </div>`},
                   'start-e-6' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<div class="container"> <div id="headline-animated" class="typerTarget">${_t('einfach | gute | Texte')}</div> <h3>${_t('Es ist keine Selbstverständlichkeit perfekte Inhalte zu schreiben, aber wir Arbeiten daran.')}</h3> <div class="button-container"> <button class="submit"> ${_t('Texte kaufen')} </button> <button> ${_t('Texte schreiben')} </button> </div> </div> <div> <figure> <img src="img/start/worker.svg" alt="Description"> </figure> </div>`},
                   'start-e-7' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<div id="headline-animated" class="typerTarget">${_t('einfach | gute | Texte')}</div> <h3>${_t('Es ist keine Selbstverständlichkeit perfekte Inhalte zu schreiben, aber wir Arbeiten daran.')}</h3> <div class="button-container"> <button class="submit"> ${_t('Texte kaufen')} </button> <button> ${_t('Texte schreiben')} </button> </div>`},
                   'start-e-8' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('einfach | gute | Texte')}`},
                   'start-e-9' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Es ist keine Selbstverständlichkeit perfekte Inhalte zu schreiben, aber wir Arbeiten daran.')}`},
                   'start-e-10' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<button class="submit"> ${_t('Texte kaufen')} </button> <button> ${_t('Texte schreiben')} </button>`},
                   'start-e-11' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Texte kaufen')}`},
                   'start-e-12' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Texte schreiben')}`},
                   'start-e-13' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<figure> <img src="img/start/worker.svg" alt="Description"> </figure>`},
                   'start-e-14' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<img src="img/start/worker.svg" alt="Description">`},
                   'start-e-16' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<hr> <h1>${_t('Suchmaschinenoptimierte Texte')}</h1> <h3>„verantwortungsvoll und transparent"</h3> <div class="divider"></div>`},
                   'start-e-18' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Suchmaschinenoptimierte Texte')}`},
                   'start-e-19' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `„verantwortungsvoll und transparent"`},
                   'start-e-21' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<div class="card-item"> <div class="card-title"> <h4>${_t('Integration')}</h4> </div> <div class="card-icon"> <img src="img/start/light-bulb.svg"> </div> <div class="card-text"> <p>${_t('Einfach in Wordpress oder Drupal unser Plugin nutzen und Texte erhalten.')}</p> </div> <div class="button-container"> <button class="submit"> Los geht's </button> </div> </div> <div class="card-item"> <div class="card-title"> <h4>${_t('Qualitätssicherung')}</h4> </div> <div class="card-icon"> <img src="img/start/rocket.svg"> </div> <div class="card-text"> <p>Individuellen und einzigartigen Inhalt in 3 Qualitätsstufen: normal, gesichtet, lektoriert.</p> </div> <div class="button-container"> <button class="submit"> ${_t('Beispiele')} </button> </div> </div> <div class="card-item"> <div class="card-title"> <h4>${_t('Zahlungen')}</h4> </div> <div class="card-icon"> <img src="img/start/web.svg"> </div> <div class="card-text"> <p>${_t('Wir sind fair und günstig. Ihr bestimmt das Budget und erhaltet das was ihr zahlt.')}</p> </div> <div class="button-container"> <button class="submit"> ${_t('Budget im Blick')} </button> </div> </div>`},
                   'start-e-22' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<div class="card-title"> <h4>${_t('Integration')}</h4> </div> <div class="card-icon"> <img src="img/start/light-bulb.svg"> </div> <div class="card-text"> <p>${_t('Einfach in Wordpress oder Drupal unser Plugin nutzen und Texte erhalten.')}</p> </div> <div class="button-container"> <button class="submit"> Los geht's </button> </div>`},
                   'start-e-23' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<h4>${_t('Integration')}</h4>`},
                   'start-e-24' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Integration')}`},
                   'start-e-25' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<img src="img/start/light-bulb.svg">`},
                   'start-e-27' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<p>${_t('Einfach in Wordpress oder Drupal unser Plugin nutzen und Texte erhalten.')}</p>`},
                   'start-e-28' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Einfach in Wordpress oder Drupal unser Plugin nutzen und Texte erhalten.')}`},
                   'start-e-29' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<button class="submit"> Los geht's </button>`},
                   'start-e-30' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `Los geht's`},
                   'start-e-31' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<div class="card-title"> <h4>${_t('Qualitätssicherung')}</h4> </div> <div class="card-icon"> <img src="img/start/rocket.svg"> </div> <div class="card-text"> <p>Individuellen und einzigartigen Inhalt in 3 Qualitätsstufen: normal, gesichtet, lektoriert.</p> </div> <div class="button-container"> <button class="submit"> ${_t('Beispiele')} </button> </div>`},
                   'start-e-32' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<h4>${_t('Qualitätssicherung')}</h4>`},
                   'start-e-33' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Qualitätssicherung')}`},
                   'start-e-34' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<img src="img/start/rocket.svg">`},
                   'start-e-36' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<p>Individuellen und einzigartigen Inhalt in 3 Qualitätsstufen: normal, gesichtet, lektoriert.</p>`},
                   'start-e-37' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `Individuellen und einzigartigen Inhalt in 3 Qualitätsstufen: normal, gesichtet, lektoriert.`},
                   'start-e-38' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<button class="submit"> ${_t('Beispiele')} </button>`},
                   'start-e-39' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Beispiele')}`},
                   'start-e-40' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<div class="card-title"> <h4>${_t('Zahlungen')}</h4> </div> <div class="card-icon"> <img src="img/start/web.svg"> </div> <div class="card-text"> <p>${_t('Wir sind fair und günstig. Ihr bestimmt das Budget und erhaltet das was ihr zahlt.')}</p> </div> <div class="button-container"> <button class="submit"> ${_t('Budget im Blick')} </button> </div>`},
                   'start-e-41' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<h4>${_t('Zahlungen')}</h4>`},
                   'start-e-42' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Zahlungen')}`},
                   'start-e-43' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<img src="img/start/web.svg">`},
                   'start-e-45' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<p>${_t('Wir sind fair und günstig. Ihr bestimmt das Budget und erhaltet das was ihr zahlt.')}</p>`},
                   'start-e-46' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Wir sind fair und günstig. Ihr bestimmt das Budget und erhaltet das was ihr zahlt.')}`},
                   'start-e-47' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<button class="submit"> ${_t('Budget im Blick')} </button>`},
                   'start-e-48' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `${_t('Budget im Blick')}`},
                   'start' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,notFound,profile,register,signin,start,tasklist,textlist,todo,topmenu,units,user,write, _t, env} = args; return `<extend-head data-id="start-e-1" data-view="start-e-1"> <title data-id="start-e-2" data-view="start-e-2">${_t('Willkommen start')}</title> </extend-head> <page data-id="start-e-3" data-view="start-e-3"> <topmenu-component type="component" data-name="/$topmenu"><component data-name="topmenu" data-id="topmenu" data-view="topmenu"><navgation data-id="topmenu-e-1" data-view="topmenu-e-1"> <div class="logo" data-id="topmenu-e-2" data-view="topmenu-e-2"><img src="/img/topmenu/logo_serialtexter.png" alt="no image" data-id="topmenu-e-3" data-view="topmenu-e-3"></div> <ul id="menu" data-type="list" data-id="topmenu-e-4" data-view="topmenu-e-4"> <li data-name="/$topmenu/link" data-id="topmenu-e-5" data-view="topmenu-e-5"><a href="${env.view.url('start')}" class="${env.view.isActive('/start')}" data-id="topmenu-e-6" data-view="topmenu-e-6">${_t('start')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-7" data-view="topmenu-e-7"><a href="${env.view.url('login')}" class="${env.view.isActive('/login')}" data-id="topmenu-e-8" data-view="topmenu-e-8">${_t('login')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-9" data-view="topmenu-e-9"><a href="${env.view.url('register')}" class="${ env.view.isActive('/register') }" data-id="topmenu-e-10" data-view="topmenu-e-10">${_t('registrieren')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-11" data-view="topmenu-e-11"><a href="${env.view.url('blog')}" class="${env.view.isActive('/blog')}" data-id="topmenu-e-12" data-view="topmenu-e-12">${_t('blog')}</a></li> </ul> </navgation><style data-id="briefing-e-23" data-view="briefing-e-23">navgation { display: flex; justify-content: space-between; } navgation .logo { width: 15em; } navgation #menu { z-index: 2; position: absolute; width: 100%; display: none; background: white; list-style-type: none; top: 0; margin: 0; padding: 0; } navgation #menu li { display: block; line-height: 50px; text-align: center; } navgation #menu a { color: #999; } navgation #menu a:hover { text-decoration: none; color: #0076d1; } navgation #menu a.active { color: #0076d1; font-weight: 500; } @media only screen and (max-width: 768px) { navgation .logo { display: none; } navgation #menu { display: flex; padding: 0; margin: 0; font-size: 1.5em; left: 0; right: 0; justify-content: center; position: fixed; box-shadow: 0 1px 8px black; } navgation #menu li { display: flex; line-height: 50px; flex-grow: 1; flex-flow: column; text-align: center; } } @media only screen and (min-width: 768px) { navgation #menu { display: flex; position: static; background: none; clear: none; flex: 1; justify-content: flex-end; } navgation #menu li { padding: 0 1em; } }</style></component></topmenu-component> <div class="hero-body" data-id="start-e-5" data-view="start-e-5"> <div class="centered" data-id="start-e-6" data-view="start-e-6"> <div class="container" data-id="start-e-7" data-view="start-e-7"> <div id="headline-animated" class="typerTarget" data-id="start-e-8" data-view="start-e-8">${_t('einfach | gute | Texte')}</div> <h3 data-id="start-e-9" data-view="start-e-9">${_t('Es ist keine Selbstverständlichkeit perfekte Inhalte zu schreiben, aber wir Arbeiten daran.')}</h3> <div class="button-container" data-id="start-e-10" data-view="start-e-10"> <button class="submit" data-id="start-e-11" data-view="start-e-11"> ${_t('Texte kaufen')} </button> <button data-id="start-e-12" data-view="start-e-12"> ${_t('Texte schreiben')} </button> </div> </div> <div data-id="start-e-13" data-view="start-e-13"> <figure data-id="start-e-14" data-view="start-e-14"> <img src="img/start/worker.svg" alt="Description" data-id="start-e-15" data-view="start-e-15"> </figure> </div> </div> </div> <div class="text-container" data-id="start-e-16" data-view="start-e-16"> <hr data-id="start-e-17" data-view="start-e-17"> <h1 data-id="start-e-18" data-view="start-e-18">${_t('Suchmaschinenoptimierte Texte')}</h1> <h3 data-id="start-e-19" data-view="start-e-19">„verantwortungsvoll und transparent"</h3> <div class="divider" data-id="start-e-20" data-view="start-e-20"></div> </div> <div class="card-container" data-id="start-e-21" data-view="start-e-21"> <div class="card-item" data-id="start-e-22" data-view="start-e-22"> <div class="card-title" data-id="start-e-23" data-view="start-e-23"> <h4 data-id="start-e-24" data-view="start-e-24">${_t('Integration')}</h4> </div> <div class="card-icon" data-id="start-e-25" data-view="start-e-25"> <img src="img/start/light-bulb.svg" data-id="start-e-26" data-view="start-e-26"> </div> <div class="card-text" data-id="start-e-27" data-view="start-e-27"> <p data-id="start-e-28" data-view="start-e-28">${_t('Einfach in Wordpress oder Drupal unser Plugin nutzen und Texte erhalten.')}</p> </div> <div class="button-container" data-id="start-e-29" data-view="start-e-29"> <button class="submit" data-id="start-e-30" data-view="start-e-30"> Los geht's </button> </div> </div> <div class="card-item" data-id="start-e-31" data-view="start-e-31"> <div class="card-title" data-id="start-e-32" data-view="start-e-32"> <h4 data-id="start-e-33" data-view="start-e-33">${_t('Qualitätssicherung')}</h4> </div> <div class="card-icon" data-id="start-e-34" data-view="start-e-34"> <img src="img/start/rocket.svg" data-id="start-e-35" data-view="start-e-35"> </div> <div class="card-text" data-id="start-e-36" data-view="start-e-36"> <p data-id="start-e-37" data-view="start-e-37">Individuellen und einzigartigen Inhalt in 3 Qualitätsstufen: normal, gesichtet, lektoriert.</p> </div> <div class="button-container" data-id="start-e-38" data-view="start-e-38"> <button class="submit" data-id="start-e-39" data-view="start-e-39"> ${_t('Beispiele')} </button> </div> </div> <div class="card-item" data-id="start-e-40" data-view="start-e-40"> <div class="card-title" data-id="start-e-41" data-view="start-e-41"> <h4 data-id="start-e-42" data-view="start-e-42">${_t('Zahlungen')}</h4> </div> <div class="card-icon" data-id="start-e-43" data-view="start-e-43"> <img src="img/start/web.svg" data-id="start-e-44" data-view="start-e-44"> </div> <div class="card-text" data-id="start-e-45" data-view="start-e-45"> <p data-id="start-e-46" data-view="start-e-46">${_t('Wir sind fair und günstig. Ihr bestimmt das Budget und erhaltet das was ihr zahlt.')}</p> </div> <div class="button-container" data-id="start-e-47" data-view="start-e-47"> <button class="submit" data-id="start-e-48" data-view="start-e-48"> ${_t('Budget im Blick')} </button> </div> </div> </div> <bottommenu-component data-name="/$bottommenu"><component data-name="bottommenu" data-id="bottommenu" data-view="bottommenu"><footer data-id="bottommenu-e-1" data-view="bottommenu-e-1"> <div class="logo" data-id="bottommenu-e-2" data-view="bottommenu-e-2"> <img src="/img/topmenu/logo64.png" alt="no image" data-id="bottommenu-e-3" data-view="bottommenu-e-3"> </div> <div class="PRODUCT" data-id="bottommenu-e-4" data-view="bottommenu-e-4"> <h3 data-id="bottommenu-e-5" data-view="bottommenu-e-5">${_t('Mehr')}</h3> <ul data-type="list" data-id="bottommenu-e-6" data-view="bottommenu-e-6"> <li data-id="bottommenu-e-7" data-view="bottommenu-e-7"> <a href="#/all" class="selected" data-id="bottommenu-e-8" data-view="bottommenu-e-8">${_t('Website Content')}</a> </li> <li data-id="bottommenu-e-9" data-view="bottommenu-e-9"> <a href="#/active" data-id="bottommenu-e-10" data-view="bottommenu-e-10">${_t('Blog Artikel')}</a> </li> <li data-id="bottommenu-e-11" data-view="bottommenu-e-11"> <a href="#/completed" data-id="bottommenu-e-12" data-view="bottommenu-e-12">${_t('Seo Optimierte Inhalte')}</a> </li> <li data-id="bottommenu-e-13" data-view="bottommenu-e-13"> <a href="/Impressum" data-id="bottommenu-e-14" data-view="bottommenu-e-14">${_t('Impressum')}</a> </li> </ul> </div> <div class="BLOG" data-id="bottommenu-e-15" data-view="bottommenu-e-15"> <h3 data-id="bottommenu-e-16" data-view="bottommenu-e-16">${_t('Blog')}</h3> <ul data-type="list" data-id="bottommenu-e-17" data-view="bottommenu-e-17"> <li data-id="bottommenu-e-18" data-view="bottommenu-e-18"> <a href="#/all" class="selected" data-id="bottommenu-e-19" data-view="bottommenu-e-19">${_t('Wie schreibt man richtig?')}</a> </li> <li data-id="bottommenu-e-20" data-view="bottommenu-e-20"> <a href="#/active" data-id="bottommenu-e-21" data-view="bottommenu-e-21">${_t('SEO-Tricks')}</a> </li> <li data-id="bottommenu-e-22" data-view="bottommenu-e-22"> <a href="#/completed" data-id="bottommenu-e-23" data-view="bottommenu-e-23">${_t('News')}</a> </li> </ul> </div> <div class="followus" data-id="bottommenu-e-24" data-view="bottommenu-e-24"> <h3 data-id="bottommenu-e-25" data-view="bottommenu-e-25">${_t('Follow us')}</h3> <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" data-id="bottommenu-e-26" data-view="bottommenu-e-26"> <defs data-id="bottommenu-e-27" data-view="bottommenu-e-27"> <symbol id="icon-twitter-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-28" data-view="bottommenu-e-28"> <title data-id="bottommenu-e-29" data-view="bottommenu-e-29">${_t('twitter-with-circle')}</title> <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM13.905 8.264c0.004 0.082 0.005 0.164 0.005 0.244 0 2.5-1.901 5.381-5.379 5.381-1.068 0-2.062-0.312-2.898-0.85 0.147 0.018 0.298 0.025 0.451 0.025 0.886 0 1.701-0.301 2.348-0.809-0.827-0.016-1.525-0.562-1.766-1.312 0.115 0.021 0.233 0.033 0.355 0.033 0.172 0 0.34-0.023 0.498-0.066-0.865-0.174-1.517-0.938-1.517-1.854v-0.023c0.255 0.141 0.547 0.227 0.857 0.237-0.508-0.34-0.841-0.918-0.841-1.575 0-0.346 0.093-0.672 0.256-0.951 0.933 1.144 2.325 1.896 3.897 1.977-0.033-0.139-0.049-0.283-0.049-0.432 0-1.043 0.846-1.891 1.891-1.891 0.543 0 1.035 0.23 1.38 0.598 0.431-0.086 0.835-0.242 1.2-0.459-0.141 0.441-0.44 0.812-0.831 1.047 0.383-0.047 0.747-0.148 1.086-0.299-0.253 0.379-0.574 0.713-0.943 0.979z" data-id="bottommenu-e-30" data-view="bottommenu-e-30"> </path> </symbol> <symbol id="icon-youtube-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-31" data-view="bottommenu-e-31"> <title data-id="bottommenu-e-32" data-view="bottommenu-e-32">${_t('youtube-with-circle')}</title> <path d="M11.603 9.833l-2.246-1.048c-0.196-0.091-0.357 0.011-0.357 0.228v1.974c0 0.217 0.161 0.319 0.357 0.228l2.245-1.048c0.197-0.092 0.197-0.242 0.001-0.334zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM10 13.9c-4.914 0-5-0.443-5-3.9s0.086-3.9 5-3.9 5 0.443 5 3.9-0.086 3.9-5 3.9z" data-id="bottommenu-e-33" data-view="bottommenu-e-33"> </path> </symbol> <symbol id="icon-instagram-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-34" data-view="bottommenu-e-34"> <title data-id="bottommenu-e-35" data-view="bottommenu-e-35">${_t('instagram-with-circle')}</title> <path d="M13 10c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.171 0.018-0.338 0.049-0.5h-1.049v3.997c0 0.278 0.225 0.503 0.503 0.503h6.995c0.277 0 0.502-0.225 0.502-0.503v-3.997h-1.049c0.031 0.162 0.049 0.329 0.049 0.5zM10 12c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2zM12.4 7.9h1.199c0.166 0 0.301-0.135 0.301-0.3v-1.199c0-0.166-0.135-0.301-0.301-0.301h-1.199c-0.166 0-0.301 0.135-0.301 0.301v1.199c0.001 0.165 0.136 0.3 0.301 0.3zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.302 0 9.6-4.298 9.6-9.6s-4.298-9.6-9.6-9.6zM15 13.889c0 0.611-0.5 1.111-1.111 1.111h-7.778c-0.611 0-1.111-0.5-1.111-1.111v-7.778c0-0.611 0.5-1.111 1.111-1.111h7.778c0.611 0 1.111 0.5 1.111 1.111v7.778z" data-id="bottommenu-e-36" data-view="bottommenu-e-36"> </path> </symbol> <symbol id="icon-facebook-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-37" data-view="bottommenu-e-37"> <title data-id="bottommenu-e-38" data-view="bottommenu-e-38">${_t('facebook-with-circle')}</title> <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM12.274 7.034h-1.443c-0.171 0-0.361 0.225-0.361 0.524v1.042h1.805l-0.273 1.486h-1.532v4.461h-1.703v-4.461h-1.545v-1.486h1.545v-0.874c0-1.254 0.87-2.273 2.064-2.273h1.443v1.581z" data-id="bottommenu-e-39" data-view="bottommenu-e-39"> </path> </symbol> </defs> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-40" data-view="bottommenu-e-40"> <use xlink:href="#icon-facebook-with-circle" data-id="bottommenu-e-41" data-view="bottommenu-e-41"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-42" data-view="bottommenu-e-42"> <use xlink:href="#icon-instagram-with-circle" data-id="bottommenu-e-43" data-view="bottommenu-e-43"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-44" data-view="bottommenu-e-44"> <use xlink:href="#icon-twitter-with-circle" data-id="bottommenu-e-45" data-view="bottommenu-e-45"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-46" data-view="bottommenu-e-46"> <use xlink:href="#icon-youtube-with-circle" data-id="bottommenu-e-47" data-view="bottommenu-e-47"></use> </svg> </div> </footer><style data-id="briefing-e-35" data-view="briefing-e-35">bottommenu-component footer { margin: 4em 0 0 0; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px 0px; grid-template-areas: "logo PRODUCT BLOG followus"; } bottommenu-component footer .logo { grid-area: logo; display: flex; align-items: center; justify-content: center; } bottommenu-component footer ul { list-style-type: none; margin: 0; padding: 0; } @media only screen and (max-width: 768px) { bottommenu-component footer { display: block; } bottommenu-component footer div { text-align: center; } } bottommenu-component .PRODUCT { grid-area: PRODUCT; } bottommenu-component .BLOG { grid-area: BLOG; } bottommenu-component .followus { grid-area: followus; }</style></component></bottommenu-component> </page>`} },
            "style":".text-container { text-align: center; margin: 8em 0; } .divider { height: 3px; border-radius: 50px; background: #f39200; width: 60px; margin: auto; } .card-container { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0em 7em; grid-template-areas: \". . .\"; } .card-container .card-item { text-align: center; padding: 1em; border: 1px solid #ededed; } .card-container .card-item button { font-weight: 400; } .card-container .card-item .card-icon { display: block; margin-left: auto; margin-right: auto; width: 50%; } .card-container .card-item .card-icon img { width: 100px; } .hero-body { display: flex; align-items: center; justify-content: center; padding-top: 5em; } @-webkit-keyframes blink-caret { 50% { border-color: transparent; } } .hero-body .typerTarget { border-right: 1px solid #404145; -webkit-animation: blink-caret 0.5s step-end infinite alternate; animation: blink-caret 0.5s step-end infinite alternate; } .hero-body #headline-animated { font-size: 2.5em; height: 1.5em; font-weight: 400; width: fit-content; overflow: auto; } .hero-body .centered { width: 75%; display: grid; grid-template-columns: 1fr 1fr; align-items: center; justify-content: center; } .hero-body .centered .container { display: block; color: #444f60; } .hero-body .centered .container h3 { color: #999; font-weight: 400; } @media only screen and (max-width: 768px) { .hero-body .centered { width: 100%; display: block; } } @media only screen and (max-width: 1024px) { .hero-body #headline-animated { font-size: 2em; } } @media only screen and (max-width: 768px) { .card-container { width: 100%; display: block; } }","path":"/website/start.js",
        
        mounted() {
            //   console.log("mounted", this);

            !function(e,t){e.autoTyper=function(e){var o={selector:"",words:[],charSpeed:85,delay:2100,loop:!0,flipflop:!0,position:0,currentWord:"",element:null,isStopped:!1};!function(e){if(e)for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t])}(e);var n=function*(){(o.position===o.currentWord.length||o.isStopped)&&(o.flipflop&&(yield setTimeout(function(){i().next()},o.delay)),yield null),o.element.innerHTML+=o.currentWord[o.position++],yield setTimeout(function(){n().next()},o.position<o.currentWord.length?o.charSpeed:0)},i=function*(){(0===o.position||o.isStopped)&&(yield null),o.element.innerHTML=o.currentWord.substr(0,--o.position),yield setTimeout(function(){i().next()},o.position>0?o.charSpeed:0)},r=function*(e,t){yield setTimeout(function(){o.position=0,o.currentWord=e,o.element.innerHTML="",n().next()},t)},l=function*(){o.isStopped&&(yield null);for(var e=0,t=0;t<o.words.length;t++){if(o.words[t]){r(o.words[t],e).next();var n=o.words[t].length*o.charSpeed;o.flipflop&&(n*=2),e+=n+o.delay}}yield setTimeout(function(){o.loop&&l().next()},e)};this.start=function(){if("string"==typeof o.selector&&o.selector&&Array.isArray(o.words)&&o.words.length){var e=t.querySelector(o.selector);e&&(o.element=e,o.isStopped=!1,l().next())}},this.stop=function(){o.isStopped=!0,o.position=0,o.currentWord=""}}}(window,document);
            
            window.setTimeout(() => {
                var options = {
                    delay: 6100,
                    selector: "#headline-animated",
                    words: ["einfach | gute | Texte...", "...Texte | einfach | gut", "...Texte | einfach | gut"]
                };

                // start auto typer
                var typer = new autoTyper(options);
                typer.start();

            }, 1000);

        },
        components:
        {
            "topmenu-component": "topmenu#mainmenu",
            "bottommenu-component": "bottommenu#footermenu"
        }
        ,
        data() {
            return this.createStore("start", { name: "AK start" });
        },
        interactions() {
            return {
                "/$start/name": {
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
