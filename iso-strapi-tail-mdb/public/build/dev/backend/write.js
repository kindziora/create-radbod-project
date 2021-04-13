


    import  { backendtopmenu }  from "../component/backendtopmenu.js";

    import  { EditorState }  from "../deps/prosemirror-state.js";
    import  { EditorView }  from "../deps/prosemirror-view.js";
    import  { Schema, DOMParser }  from "../deps/prosemirror-model.js";
    import  { schema }  from "../deps/prosemirror-schema-basic.js";
    import  { addListNodes }  from "../deps/prosemirror-schema-list.js";
    import  { exampleSetup }  from "../deps/prosemirror-example-setup.js";


    export let write = {
        views : {
                   'write-e-1' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<title>${_t('Auftragsbriefing')}</title>`},
                   'write-e-2' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('Auftragsbriefing')}`},
                   'write-e-3' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<backendtopmenu-component type="component" data-name="/$backendtopmenu"></backendtopmenu-component> <section class="page-content briefing"> <section class="grid"> <article> <div class="briefing-content"> <h2>${text.title}</h2> ${text.briefing} <div id="editor" style="margin-bottom: 23px"></div> <div style="display: none" id="content"> <h3>${_t('Hello ProseMirror')}</h3> <p>${_t('This is editable text. You can focus it and start typing.')}</p> <p>${_t('To apply styling, you can select a piece of text and manipulate its styling from the menu. The basic schema supports')} <em>${_t('emphasis')}</em>${_t(',')} <strong>${_t('strong text')}</strong>${_t(',')} <a href="http://marijnhaverbeke.nl/blog">${_t('links')}</a>${_t(',')} <code>${_t('code font')}</code>${_t(', and')} <img src="/img/smiley.png"> ${_t('images.')}</p> <p>Block-level structure can be manipulated with key bindings (try ctrl-shift-2 to create a level 2 heading, or enter in an empty textblock to exit the parent block), or through the menu.</p> <p>Try using the “list” item in the menu to wrap this paragraph in a numbered list.</p> </div> <div class="button-container"> <label class="checkb"><input type="checkbox" name="gelesen"> ${_t('habe das Briefing gelesen und verstanden')}</label> <button type="submit" data-name="/$text/submit" class="submit">Verstanden :)</button> </div> </div> </article> </section> </section> <bottommenu-component data-name="/$bottommenu"></bottommenu-component>`},
                   'write-e-5' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<section class="grid"> <article> <div class="briefing-content"> <h2>${text.title}</h2> ${text.briefing} <div id="editor" style="margin-bottom: 23px"></div> <div style="display: none" id="content"> <h3>${_t('Hello ProseMirror')}</h3> <p>${_t('This is editable text. You can focus it and start typing.')}</p> <p>${_t('To apply styling, you can select a piece of text and manipulate its styling from the menu. The basic schema supports')} <em>${_t('emphasis')}</em>${_t(',')} <strong>${_t('strong text')}</strong>${_t(',')} <a href="http://marijnhaverbeke.nl/blog">${_t('links')}</a>${_t(',')} <code>${_t('code font')}</code>${_t(', and')} <img src="/img/smiley.png"> ${_t('images.')}</p> <p>Block-level structure can be manipulated with key bindings (try ctrl-shift-2 to create a level 2 heading, or enter in an empty textblock to exit the parent block), or through the menu.</p> <p>Try using the “list” item in the menu to wrap this paragraph in a numbered list.</p> </div> <div class="button-container"> <label class="checkb"><input type="checkbox" name="gelesen"> ${_t('habe das Briefing gelesen und verstanden')}</label> <button type="submit" data-name="/$text/submit" class="submit">Verstanden :)</button> </div> </div> </article> </section>`},
                   'write-e-6' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<article> <div class="briefing-content"> <h2>${text.title}</h2> ${text.briefing} <div id="editor" style="margin-bottom: 23px"></div> <div style="display: none" id="content"> <h3>${_t('Hello ProseMirror')}</h3> <p>${_t('This is editable text. You can focus it and start typing.')}</p> <p>${_t('To apply styling, you can select a piece of text and manipulate its styling from the menu. The basic schema supports')} <em>${_t('emphasis')}</em>${_t(',')} <strong>${_t('strong text')}</strong>${_t(',')} <a href="http://marijnhaverbeke.nl/blog">${_t('links')}</a>${_t(',')} <code>${_t('code font')}</code>${_t(', and')} <img src="/img/smiley.png"> ${_t('images.')}</p> <p>Block-level structure can be manipulated with key bindings (try ctrl-shift-2 to create a level 2 heading, or enter in an empty textblock to exit the parent block), or through the menu.</p> <p>Try using the “list” item in the menu to wrap this paragraph in a numbered list.</p> </div> <div class="button-container"> <label class="checkb"><input type="checkbox" name="gelesen"> ${_t('habe das Briefing gelesen und verstanden')}</label> <button type="submit" data-name="/$text/submit" class="submit">Verstanden :)</button> </div> </div> </article>`},
                   'write-e-7' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<div class="briefing-content"> <h2>${text.title}</h2> ${text.briefing} <div id="editor" style="margin-bottom: 23px"></div> <div style="display: none" id="content"> <h3>${_t('Hello ProseMirror')}</h3> <p>${_t('This is editable text. You can focus it and start typing.')}</p> <p>${_t('To apply styling, you can select a piece of text and manipulate its styling from the menu. The basic schema supports')} <em>${_t('emphasis')}</em>${_t(',')} <strong>${_t('strong text')}</strong>${_t(',')} <a href="http://marijnhaverbeke.nl/blog">${_t('links')}</a>${_t(',')} <code>${_t('code font')}</code>${_t(', and')} <img src="/img/smiley.png"> ${_t('images.')}</p> <p>Block-level structure can be manipulated with key bindings (try ctrl-shift-2 to create a level 2 heading, or enter in an empty textblock to exit the parent block), or through the menu.</p> <p>Try using the “list” item in the menu to wrap this paragraph in a numbered list.</p> </div> <div class="button-container"> <label class="checkb"><input type="checkbox" name="gelesen"> ${_t('habe das Briefing gelesen und verstanden')}</label> <button type="submit" data-name="/$text/submit" class="submit">Verstanden :)</button> </div> </div>`},
                   'write-e-8' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<h2>${text.title}</h2> ${text.briefing} <div id="editor" style="margin-bottom: 23px"></div> <div style="display: none" id="content"> <h3>${_t('Hello ProseMirror')}</h3> <p>${_t('This is editable text. You can focus it and start typing.')}</p> <p>${_t('To apply styling, you can select a piece of text and manipulate its styling from the menu. The basic schema supports')} <em>${_t('emphasis')}</em>${_t(',')} <strong>${_t('strong text')}</strong>${_t(',')} <a href="http://marijnhaverbeke.nl/blog">${_t('links')}</a>${_t(',')} <code>${_t('code font')}</code>${_t(', and')} <img src="/img/smiley.png"> ${_t('images.')}</p> <p>Block-level structure can be manipulated with key bindings (try ctrl-shift-2 to create a level 2 heading, or enter in an empty textblock to exit the parent block), or through the menu.</p> <p>Try using the “list” item in the menu to wrap this paragraph in a numbered list.</p> </div> <div class="button-container"> <label class="checkb"><input type="checkbox" name="gelesen"> ${_t('habe das Briefing gelesen und verstanden')}</label> <button type="submit" data-name="/$text/submit" class="submit">Verstanden :)</button> </div>`},
                   'write-e-9' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${text.title}`},
                   'write-e-11' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<h3>${_t('Hello ProseMirror')}</h3> <p>${_t('This is editable text. You can focus it and start typing.')}</p> <p>${_t('To apply styling, you can select a piece of text and manipulate its styling from the menu. The basic schema supports')} <em>${_t('emphasis')}</em>${_t(',')} <strong>${_t('strong text')}</strong>${_t(',')} <a href="http://marijnhaverbeke.nl/blog">${_t('links')}</a>${_t(',')} <code>${_t('code font')}</code>${_t(', and')} <img src="/img/smiley.png"> ${_t('images.')}</p> <p>Block-level structure can be manipulated with key bindings (try ctrl-shift-2 to create a level 2 heading, or enter in an empty textblock to exit the parent block), or through the menu.</p> <p>Try using the “list” item in the menu to wrap this paragraph in a numbered list.</p>`},
                   'write-e-12' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('Hello ProseMirror')}`},
                   'write-e-13' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('This is editable text. You can focus it and start typing.')}`},
                   'write-e-14' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('To apply styling, you can select a piece of text and manipulate its styling from the menu. The basic schema supports')} <em>${_t('emphasis')}</em>${_t(',')} <strong>${_t('strong text')}</strong>${_t(',')} <a href="http://marijnhaverbeke.nl/blog">${_t('links')}</a>${_t(',')} <code>${_t('code font')}</code>${_t(', and')} <img src="/img/smiley.png"> ${_t('images.')}`},
                   'write-e-15' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('emphasis')}`},
                   'write-e-16' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('strong text')}`},
                   'write-e-17' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('links')}`},
                   'write-e-18' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('code font')}`},
                   'write-e-20' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `Block-level structure can be manipulated with key bindings (try ctrl-shift-2 to create a level 2 heading, or enter in an empty textblock to exit the parent block), or through the menu.`},
                   'write-e-21' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `Try using the “list” item in the menu to wrap this paragraph in a numbered list.`},
                   'write-e-22' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<label class="checkb"><input type="checkbox" name="gelesen"> ${_t('habe das Briefing gelesen und verstanden')}</label> <button type="submit" data-name="/$text/submit" class="submit">Verstanden :)</button>`},
                   'write-e-23' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<input type="checkbox" name="gelesen"> ${_t('habe das Briefing gelesen und verstanden')}`},
                   'write-e-25' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `Verstanden :)`},
                   'write' : function (args) { let {change, bottommenu,briefing,home,modal,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<extend-head data-id="write-e-1" data-view="write-e-1"> <title data-id="write-e-2" data-view="write-e-2">${_t('Auftragsbriefing')}</title> </extend-head> <page class="light-mode" data-id="write-e-3" data-view="write-e-3"> <backendtopmenu-component type="component" data-name="/$backendtopmenu"><component data-name="topmenu" data-id="topmenu" data-view="topmenu"><navgation data-id="topmenu-e-1" data-view="topmenu-e-1"> <div class="logo" data-id="topmenu-e-2" data-view="topmenu-e-2"><img src="/img/topmenu/logo_serialtexter.png" alt="no image" data-id="topmenu-e-3" data-view="topmenu-e-3"></div> <div class="hamburger" data-events="hamburger:click" data-id="topmenu-e-4" data-view="topmenu-e-4"> <div class="hamburg" data-id="topmenu-e-5" data-view="topmenu-e-5"> <span class="line" data-id="topmenu-e-6" data-view="topmenu-e-6"></span> <span class="line" data-id="topmenu-e-7" data-view="topmenu-e-7"></span> <span class="line" data-id="topmenu-e-8" data-view="topmenu-e-8"></span> </div> </div> <ul id="menu" data-type="list" data-id="topmenu-e-9" data-view="topmenu-e-9"> <li data-name="/$topmenu/link" data-id="topmenu-e-10" data-view="topmenu-e-10"><a href="/start" class data-id="topmenu-e-31" data-view="topmenu-e-31">start</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-12" data-view="topmenu-e-12"><a href="/login" class data-id="topmenu-e-33" data-view="topmenu-e-33">login</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-14" data-view="topmenu-e-14"><a href="/register" class data-id="topmenu-e-35" data-view="topmenu-e-35">registrieren</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-16" data-view="topmenu-e-16"><a href="/blog" class data-id="topmenu-e-37" data-view="topmenu-e-37">blog</a></li> </ul> </navgation><style data-id="briefing-e-23" data-view="briefing-e-23">navgation { display: flex; justify-content: space-between; } navgation .logo { width: 15em; } navgation .hamburger { top: 0; font-size: 1em; display: block; z-index: 2; } navgation .hamburg { display: block; width: 2.14em; height: 2em; position: relative; margin: auto; border-radius: 4px; transition: border-radius .5s; } navgation .line { position: absolute; height: 5px; width: inherit; background: #403d3d; border-radius: 32px; display: block; transition: 0.5s; transform-origin: center; } navgation .line:nth-child(1) { top: 12px; } navgation .line:nth-child(2) { top: 24px; } navgation .line:nth-child(3) { top: 36px; } navgation .hamburger.checked .line:nth-child(1) { transform: translateY(12px) rotate(-45deg); } navgation .hamburger.checked .line:nth-child(2) { opacity: 0; } navgation .hamburger.checked .line:nth-child(3) { transform: translateY(-12px) rotate(45deg); } navgation #menu { position: absolute; width: 100%; display: none; background: white; list-style-type: none; top: 0; margin: 0; padding: 0; } navgation #menu:hover { display: block; } navgation #menu li { display: block; line-height: 50px; text-align: center; } navgation #menu a { color: #999; } navgation #menu a:hover { text-decoration: none; color: #0076d1; } navgation #menu a.active { color: #0076d1; font-weight: 500; } navgation .hamburger:hover ~ #menu, navgation .hamburger.checked ~ #menu { display: block; padding: 0; margin: 0; left: 0; right: 0; } @media only screen and (min-width: 768px) { navgation .hamburger { display: none; } navgation #menu { display: flex; position: static; background: none; clear: none; flex: 1; justify-content: flex-end; } navgation #menu:hover { display: flex; } navgation #menu li { padding: 0 1em; } }</style></component></backendtopmenu-component> <section class="page-content briefing" data-id="write-e-5" data-view="write-e-5"> <section class="grid" data-id="write-e-6" data-view="write-e-6"> <article data-id="write-e-7" data-view="write-e-7"> <div class="briefing-content" data-id="write-e-8" data-view="write-e-8"> <h2 data-id="write-e-9" data-view="write-e-9" data-name="/$text/title">${text.title}</h2> ${text.briefing} <div id="editor" style="margin-bottom: 23px" data-id="write-e-10" data-view="write-e-10"></div> <div style="display: none" id="content" data-id="write-e-11" data-view="write-e-11"> <h3 data-id="write-e-12" data-view="write-e-12">${_t('Hello ProseMirror')}</h3> <p data-id="write-e-13" data-view="write-e-13">${_t('This is editable text. You can focus it and start typing.')}</p> <p data-id="write-e-14" data-view="write-e-14">${_t('To apply styling, you can select a piece of text and manipulate its styling from the menu. The basic schema supports')} <em data-id="write-e-15" data-view="write-e-15">${_t('emphasis')}</em>${_t(',')} <strong data-id="write-e-16" data-view="write-e-16">${_t('strong text')}</strong>${_t(',')} <a href="http://marijnhaverbeke.nl/blog" data-id="write-e-17" data-view="write-e-17">${_t('links')}</a>${_t(',')} <code data-id="write-e-18" data-view="write-e-18">${_t('code font')}</code>${_t(', and')} <img src="/img/smiley.png" data-id="write-e-19" data-view="write-e-19"> ${_t('images.')}</p> <p data-id="write-e-20" data-view="write-e-20">Block-level structure can be manipulated with key bindings (try ctrl-shift-2 to create a level 2 heading, or enter in an empty textblock to exit the parent block), or through the menu.</p> <p data-id="write-e-21" data-view="write-e-21">Try using the “list” item in the menu to wrap this paragraph in a numbered list.</p> </div> <div class="button-container" data-id="write-e-22" data-view="write-e-22"> <label class="checkb" data-id="write-e-23" data-view="write-e-23"><input type="checkbox" name="gelesen" data-id="write-e-24" data-view="write-e-24"> ${_t('habe das Briefing gelesen und verstanden')}</label> <button type="submit" data-name="/$text/submit" class="submit" data-id="write-e-25" data-view="write-e-25">Verstanden :)</button> </div> </div> </article> </section> </section> <bottommenu-component data-name="/$bottommenu"><component data-name="bottommenu" data-id="bottommenu" data-view="bottommenu"><footer data-id="bottommenu-e-1" data-view="bottommenu-e-1"> <div class="logo" data-id="bottommenu-e-2" data-view="bottommenu-e-2"> <img src="/img/topmenu/logo64.png" alt="no image" data-id="bottommenu-e-3" data-view="bottommenu-e-3"> </div> <div class="PRODUCT" data-id="bottommenu-e-4" data-view="bottommenu-e-4"> <h3 data-id="bottommenu-e-5" data-view="bottommenu-e-5">Mehr</h3> <ul data-type="list" data-id="bottommenu-e-6" data-view="bottommenu-e-6"> <li data-id="bottommenu-e-7" data-view="bottommenu-e-7"> <a href="#/all" class="selected" data-id="bottommenu-e-8" data-view="bottommenu-e-8">Website Content</a> </li> <li data-id="bottommenu-e-9" data-view="bottommenu-e-9"> <a href="#/active" data-id="bottommenu-e-10" data-view="bottommenu-e-10">Blog Artikel</a> </li> <li data-id="bottommenu-e-11" data-view="bottommenu-e-11"> <a href="#/completed" data-id="bottommenu-e-12" data-view="bottommenu-e-12">Seo Optimierte Inhalte</a> </li> <li data-id="bottommenu-e-13" data-view="bottommenu-e-13"> <a href="/Impressum" data-id="bottommenu-e-14" data-view="bottommenu-e-14">Impressum</a> </li> </ul> </div> <div class="BLOG" data-id="bottommenu-e-15" data-view="bottommenu-e-15"> <h3 data-id="bottommenu-e-16" data-view="bottommenu-e-16">Blog</h3> <ul data-type="list" data-id="bottommenu-e-17" data-view="bottommenu-e-17"> <li data-id="bottommenu-e-18" data-view="bottommenu-e-18"> <a href="#/all" class="selected" data-id="bottommenu-e-19" data-view="bottommenu-e-19">Wie schreibt man richtig?</a> </li> <li data-id="bottommenu-e-20" data-view="bottommenu-e-20"> <a href="#/active" data-id="bottommenu-e-21" data-view="bottommenu-e-21">SEO-Tricks</a> </li> <li data-id="bottommenu-e-22" data-view="bottommenu-e-22"> <a href="#/completed" data-id="bottommenu-e-23" data-view="bottommenu-e-23">News</a> </li> </ul> </div> <div class="followus" data-id="bottommenu-e-24" data-view="bottommenu-e-24"> <h3 data-id="bottommenu-e-25" data-view="bottommenu-e-25">Follow us</h3> <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" data-id="bottommenu-e-26" data-view="bottommenu-e-26"> <defs data-id="bottommenu-e-27" data-view="bottommenu-e-27"> <symbol id="icon-twitter-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-28" data-view="bottommenu-e-28"> <title data-id="bottommenu-e-29" data-view="bottommenu-e-29">twitter-with-circle</title> <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM13.905 8.264c0.004 0.082 0.005 0.164 0.005 0.244 0 2.5-1.901 5.381-5.379 5.381-1.068 0-2.062-0.312-2.898-0.85 0.147 0.018 0.298 0.025 0.451 0.025 0.886 0 1.701-0.301 2.348-0.809-0.827-0.016-1.525-0.562-1.766-1.312 0.115 0.021 0.233 0.033 0.355 0.033 0.172 0 0.34-0.023 0.498-0.066-0.865-0.174-1.517-0.938-1.517-1.854v-0.023c0.255 0.141 0.547 0.227 0.857 0.237-0.508-0.34-0.841-0.918-0.841-1.575 0-0.346 0.093-0.672 0.256-0.951 0.933 1.144 2.325 1.896 3.897 1.977-0.033-0.139-0.049-0.283-0.049-0.432 0-1.043 0.846-1.891 1.891-1.891 0.543 0 1.035 0.23 1.38 0.598 0.431-0.086 0.835-0.242 1.2-0.459-0.141 0.441-0.44 0.812-0.831 1.047 0.383-0.047 0.747-0.148 1.086-0.299-0.253 0.379-0.574 0.713-0.943 0.979z" data-id="bottommenu-e-30" data-view="bottommenu-e-30"> </path> </symbol> <symbol id="icon-youtube-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-31" data-view="bottommenu-e-31"> <title data-id="bottommenu-e-32" data-view="bottommenu-e-32">youtube-with-circle</title> <path d="M11.603 9.833l-2.246-1.048c-0.196-0.091-0.357 0.011-0.357 0.228v1.974c0 0.217 0.161 0.319 0.357 0.228l2.245-1.048c0.197-0.092 0.197-0.242 0.001-0.334zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM10 13.9c-4.914 0-5-0.443-5-3.9s0.086-3.9 5-3.9 5 0.443 5 3.9-0.086 3.9-5 3.9z" data-id="bottommenu-e-33" data-view="bottommenu-e-33"> </path> </symbol> <symbol id="icon-instagram-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-34" data-view="bottommenu-e-34"> <title data-id="bottommenu-e-35" data-view="bottommenu-e-35">instagram-with-circle</title> <path d="M13 10c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.171 0.018-0.338 0.049-0.5h-1.049v3.997c0 0.278 0.225 0.503 0.503 0.503h6.995c0.277 0 0.502-0.225 0.502-0.503v-3.997h-1.049c0.031 0.162 0.049 0.329 0.049 0.5zM10 12c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2zM12.4 7.9h1.199c0.166 0 0.301-0.135 0.301-0.3v-1.199c0-0.166-0.135-0.301-0.301-0.301h-1.199c-0.166 0-0.301 0.135-0.301 0.301v1.199c0.001 0.165 0.136 0.3 0.301 0.3zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.302 0 9.6-4.298 9.6-9.6s-4.298-9.6-9.6-9.6zM15 13.889c0 0.611-0.5 1.111-1.111 1.111h-7.778c-0.611 0-1.111-0.5-1.111-1.111v-7.778c0-0.611 0.5-1.111 1.111-1.111h7.778c0.611 0 1.111 0.5 1.111 1.111v7.778z" data-id="bottommenu-e-36" data-view="bottommenu-e-36"> </path> </symbol> <symbol id="icon-facebook-with-circle" viewBox="0 0 20 20" data-id="bottommenu-e-37" data-view="bottommenu-e-37"> <title data-id="bottommenu-e-38" data-view="bottommenu-e-38">facebook-with-circle</title> <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM12.274 7.034h-1.443c-0.171 0-0.361 0.225-0.361 0.524v1.042h1.805l-0.273 1.486h-1.532v4.461h-1.703v-4.461h-1.545v-1.486h1.545v-0.874c0-1.254 0.87-2.273 2.064-2.273h1.443v1.581z" data-id="bottommenu-e-39" data-view="bottommenu-e-39"> </path> </symbol> </defs> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-40" data-view="bottommenu-e-40"> <use xlink:href="#icon-facebook-with-circle" data-id="bottommenu-e-41" data-view="bottommenu-e-41"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-42" data-view="bottommenu-e-42"> <use xlink:href="#icon-instagram-with-circle" data-id="bottommenu-e-43" data-view="bottommenu-e-43"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-44" data-view="bottommenu-e-44"> <use xlink:href="#icon-twitter-with-circle" data-id="bottommenu-e-45" data-view="bottommenu-e-45"></use> </svg> <svg height="30px" width="30px" data-id="bottommenu-e-46" data-view="bottommenu-e-46"> <use xlink:href="#icon-youtube-with-circle" data-id="bottommenu-e-47" data-view="bottommenu-e-47"></use> </svg> </div> </footer><style data-id="briefing-e-35" data-view="briefing-e-35">bottommenu-component footer { margin: 4em 0 0 0; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px 0px; grid-template-areas: "logo PRODUCT BLOG followus"; } bottommenu-component footer .logo { grid-area: logo; display: flex; align-items: center; justify-content: center; } bottommenu-component footer ul { list-style-type: none; margin: 0; padding: 0; } @media only screen and (max-width: 768px) { bottommenu-component footer { display: block; } bottommenu-component footer div { text-align: center; } } bottommenu-component .PRODUCT { grid-area: PRODUCT; } bottommenu-component .BLOG { grid-area: BLOG; } bottommenu-component .followus { grid-area: followus; }</style></component></bottommenu-component> </page>`} },
            "style":"@import url(/css/backend.css); .briefing { }","path":"/backend/write.js",
        
        lazyLoading: false,
        mounted() {
            //  console.log("mounted", this);

        },
        components:
        {
            "backendtopmenu-component": "backendtopmenu#mainmenu",
            "bottommenu-component": "bottommenu#footermenu"
        },
        data(cb, env) {

            return this.createStore("text",
                {
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
                }
            ).db().findText(this.environment.view.path().split("/").pop()).then(function (res) {
                let { data, model } = res;

                //  model._data.briefing = data;
                return data;
            });
        },
        interactions() {
            return {
                "write": {
                    "postRender": function (comp) {
                        this.mountComponent("backendtopmenu#mainmenu", backendtopmenu, (stores, data, component) => {
                            this.sharedComponents["backendtopmenu#mainmenu"] = component;
                        });


                        // Mix the nodes from prosemirror-schema-list into the basic schema to
                        // create a schema with list support.
                        const mySchema = new Schema({
                            nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
                            marks: schema.spec.marks
                        });

                        window.view = new EditorView(document.querySelector("#editor"), {
                            state: EditorState.create({
                                doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
                                plugins: exampleSetup({ schema: mySchema })
                            })
                        });


                    }
                },
                "tab": {
                    "click"(sender, dataStore) {
                        sender.ev.preventDefault();
                        let tabName = sender.field.$el.getAttribute("data-ref").split("/")[1];
                        let tab = document.querySelector('#' + tabName);
                        document.querySelectorAll(".tab").forEach(e => e.classList.remove("selected"));
                        tab.classList.add("selected");

                        document.querySelectorAll(".filters li").forEach(e => e.classList.remove("selected"));
                        dataStore.tab = tabName;
                        sender.field.$el.classList.add("selected");
                    }
                },
                "/$tasklist/clickItem": {
                    "click"(sender, dataStore) { //address specific element in dom
                        let index = parseInt(sender.field.$el.getAttribute("data-index"));
                        dataStore.items.some((v, k) => {
                            if (v.id == index) {
                                dataStore.items[k].status = !dataStore.items[k].status;
                                return true;
                            }
                        });
                    }
                },
                "name": {
                    "input"(sender, dataStore) {
                        let index = parseInt(sender.field.$el.getAttribute("data-index"));
                        for (let k in dataStore.items) {
                            let v = dataStore.items[k];
                            if (v.id == index) {
                                dataStore.items[k].label = sender.field.$el.innerText;
                            }
                        }
                    }
                },
                "/$tasklist/deleteItem": {
                    "click"(sender, dataStore) { //address specific element in dom
                        let index = parseInt(sender.field.$el.getAttribute("data-index"));
                        dataStore.items.some((v, k) => {
                            if (v.id == index) {
                                delete dataStore.items[k];
                                return true;
                            }
                        });
                    }
                },
                "/$tasklist/items": {
                    "change"(sender, dataStore) {
                        console.log(dataStore);
                    }
                },
                "/$tasklist/name": {
                    "keyup#tasklist-myinput"(sender, dataStore) { //address specific element in dom
                        dataStore.name = sender.field.getValue();

                        if (sender.ev.keyCode === 13) {
                            dataStore.items.push({
                                id: dataStore.items.length,
                                label: dataStore.name,
                                status: false
                            });
                        }
                    }
                }
            }
        }

    }

