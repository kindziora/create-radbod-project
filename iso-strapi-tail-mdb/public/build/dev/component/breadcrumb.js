

    export let breadcrumb = {
        views : {
                   'breadcrumb-e-1' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<ul data-name="/$breadcrumb/path" data-view="item"> </ul>`},
                   'breadcrumb-e-2' : function (args) {
                let { change, breadcrumb, _t, env } = args;
                return `<li data-name="/$breadcrumb/path/${change.value.id}" data-type="list-item"><a data-events="blink:click" href="${change.value.url}">${change.value.name}</a></li>`;
            },
                   'breadcrumb-e-8' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<a data-events="blink:click" href="/backend/tasklist">Aufträge</a>`},
                   'breadcrumb-e-9' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `Aufträge`},
                   'breadcrumb' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<div id="cssmenu" data-id="breadcrumb-e-1" data-view="breadcrumb-e-1"> <ul data-name="/$breadcrumb/path" data-view="item" data-type="list" data-id="breadcrumb-e-2"><li data-name="/$breadcrumb/path/undefined" data-type="list-item" data-id="breadcrumb-e-8" data-view="breadcrumb-e-8"><a data-events="blink:click" href="/backend/tasklist" data-id="breadcrumb-e-9" data-view="breadcrumb-e-9">Aufträge</a></li></ul> </div>`},
                   'item' : function (args) {
                let { change, breadcrumb, _t, env } = args;
                return `<li data-name="/$breadcrumb/path/${change.value.id}" data-type="list-item"><a data-events="blink:click" href="${change.value.url}">${change.value.name}</a></li>`;
            } },
            "style":"@charset \"UTF-8\"; /* Menu container */ #cssmenu { left: var(--page-header-width); width: calc(100% - var(--page-header-width)); display: flex; position: relative; font-size: 14px; line-height: 1em; border-radius: 2px; /* Icons */ /* Menu */ /* Menu items */ /* Hover event */ } #cssmenu ul { display: flex; flex-direction: row; list-style: none; margin: 0; padding: 0; } #cssmenu ul li:not(:last-child):after { content: \"––>\"; } #cssmenu ul li a { display: inline-block; font-weight: 600; padding: 6px; margin-bottom: 1em; text-decoration: none; text-transform: uppercase; } #cssmenu ul li:last-child { color: gray; } #cssmenu ul li:hover a { color: #297EFE; }","path":"/component/breadcrumb.js",
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
