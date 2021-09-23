

    export let breadcrumb = {
        views : {
                   'breadcrumb-e-1' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,modal,profile,tasklist,textlist,topmenu,units,write, _t, env} = args; return `<ul data-name="/$breadcrumb/path" data-view="item"> </ul> <div class="admin-profile"> <span class="greeting">${_t('Hi Alex')}</span> <div class="notifications"> <span class="badge">${_t('1')}</span> <img src="http://localhost:1337${env.data_loader.user.image ? env.data_loader.user.image.formats.thumbnail.url : ''}"> </div> </div>`},
                   'breadcrumb-e-2' : function (args) {
                let { change, breadcrumb, _t, env } = args;
                return `<li data-name="/$breadcrumb/path/${change.value.id}" data-type="list-item"><a data-events="blink:click" href="${change.value.url}">${change.value.name}</a></li>`;
            },
                   'breadcrumb-e-3' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,modal,profile,tasklist,textlist,topmenu,units,write, _t, env} = args; return `<span class="greeting">${_t('Hi Alex')}</span> <div class="notifications"> <span class="badge">${_t('1')}</span> <img src="http://localhost:1337${env.data_loader.user.image ? env.data_loader.user.image.formats.thumbnail.url : ''}"> </div>`},
                   'breadcrumb-e-4' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,modal,profile,tasklist,textlist,topmenu,units,write, _t, env} = args; return `${_t('Hi Alex')}`},
                   'breadcrumb-e-5' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,modal,profile,tasklist,textlist,topmenu,units,write, _t, env} = args; return `<span class="badge">${_t('1')}</span> <img src="http://localhost:1337${env.data_loader.user.image ? env.data_loader.user.image.formats.thumbnail.url : ''}">`},
                   'breadcrumb-e-6' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,modal,profile,tasklist,textlist,topmenu,units,write, _t, env} = args; return `${_t('1')}`},
                   'breadcrumb-e-13' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,modal,profile,tasklist,textlist,topmenu,units,write, _t, env} = args; return `<a data-events="blink:click" href="/backend/tasklist">Aufträge</a>`},
                   'breadcrumb-e-14' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,modal,profile,tasklist,textlist,topmenu,units,write, _t, env} = args; return `Aufträge`},
                   'breadcrumb' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,modal,profile,tasklist,textlist,topmenu,units,write, _t, env} = args; return `<div id="cssmenu" data-id="breadcrumb-e-1" data-view="breadcrumb-e-1"> <ul data-name="/$breadcrumb/path" data-view="item" data-type="list" data-id="breadcrumb-e-2"><li data-name="/$breadcrumb/path/undefined" data-type="list-item" data-id="breadcrumb-e-13" data-view="breadcrumb-e-13"><a data-events="blink:click" href="/backend/tasklist" data-id="breadcrumb-e-14" data-view="breadcrumb-e-14">Aufträge</a></li></ul> <div class="admin-profile" data-id="breadcrumb-e-3" data-view="breadcrumb-e-3"> <span class="greeting" data-id="breadcrumb-e-4" data-view="breadcrumb-e-4">${_t('Hi Alex')}</span> <div class="notifications" data-id="breadcrumb-e-5" data-view="breadcrumb-e-5"> <span class="badge" data-id="breadcrumb-e-6" data-view="breadcrumb-e-6">${_t('1')}</span> <img src="http://localhost:1337${env.data_loader.user.image ? env.data_loader.user.image.formats.thumbnail.url : ''}" data-id="breadcrumb-e-7" data-view="breadcrumb-e-7"> </div> </div> </div>`},
                   'item' : function (args) {
                let { change, breadcrumb, _t, env } = args;
                return `<li data-name="/$breadcrumb/path/${change.value.id}" data-type="list-item"><a data-events="blink:click" href="${change.value.url}">${change.value.name}</a></li>`;
            } },
            "style":"@charset \"UTF-8\"; /* Menu container */ #cssmenu { left: var(--page-header-width); width: calc(100% - var(--page-header-width)); display: flex; position: relative; font-size: 14px; line-height: 1em; border-radius: 2px; justify-content: space-between; /* Icons */ /* Menu */ /* Menu items */ /* Hover event */ } #cssmenu ul { display: flex; flex-direction: row; list-style: none; margin: 0; padding: 0; } #cssmenu ul li:not(:last-child):after { content: \"––>\"; } #cssmenu ul li a { display: inline-block; font-weight: 600; padding: 6px; margin-bottom: 1em; text-decoration: none; text-transform: uppercase; } #cssmenu ul li:last-child { color: gray; } #cssmenu ul li:hover a { color: #297EFE; } component[data-id=\"breadcrumb\"] { display: flex; } @media screen and (max-width: 767px) { #cssmenu { left: 0; width: 100%; } }","path":"/component/breadcrumb.js",
        lazyLoading: true,

        loaded(data) { //pipeline after data has been loaded

        },
        data(data, runtime) {
            return this.createStore("breadcrumb", { path: [{ name: "Aufträge", url: "/backend/tasklist" }] })
        },
        interactions: () => ({
            "blink": {
                "click"(sender, dataStore) {
                    sender.ev.preventDefault();
                    let url = sender.field.$el.getAttribute("href");
                    buildApp.loadPage(url, () => {
                        console.log(arguments);
                    });
                    

                }
            }
        })
    }
