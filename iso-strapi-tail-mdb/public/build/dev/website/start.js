
    import  { translations }  from "./i18n/start.js";

    export let start = {
        "html":"<extend-head> <title>${_t('Willkommen start')}</title> </extend-head> <page> <topmenu-component type=\"component\" data-name=\"/$topmenu\"></topmenu-component> <div class=\"hero-body\"> <div class=\"centered\"> <div class=\"container\"> <div id=\"headline-animated\" class=\"typerTarget\">${_t('einfach | gute | Texte')}</div> <h3>${_t('Es ist keine Selbstverständlichkeit perfekte Inhalte zu schreiben, aber wir Arbeiten daran.')}</h3> <div class=\"button-container\"> <button class=\"submit\"> ${_t('Texte kaufen')} </button> <button> ${_t('Texte schreiben')} </button> </div> </div> <div> <figure> <img src=\"img/start/worker.svg\" alt=\"Description\"> </figure> </div> </div> </div> <div class=\"text-container\"> <hr /> <h1>${_t('Suchmaschinenoptimierte Texte')}</h1> <h3>&bdquo;verantwortungsvoll und transparent&quot;</h3> <div class=\"divider\"></div> </div> <div class=\"card-container\"> <div class=\"card-item\"> <div class=\"card-title\"> <h4>${_t('Integration')}</h4> </div> <div class=\"card-icon\"> <img src=\"img/start/light-bulb.svg\"> </div> <div class=\"card-text\"> <p>${_t('Einfach in Wordpress oder Drupal unser Plugin nutzen und Texte erhalten.')}</p> </div> <div class=\"button-container\"> <button class=\"submit\"> Los geht's </button> </div> </div> <div class=\"card-item\"> <div class=\"card-title\"> <h4>${_t('Qualitätssicherung')}</h4> </div> <div class=\"card-icon\"> <img src=\"img/start/rocket.svg\"> </div> <div class=\"card-text\"> <p>Individuellen und einzigartigen Inhalt in 3 Qualitätsstufen: normal, gesichtet, lektoriert.</p> </div> <div class=\"button-container\"> <button class=\"submit\"> ${_t('Beispiele')} </button> </div> </div> <div class=\"card-item\"> <div class=\"card-title\"> <h4>${_t('Zahlungen')}</h4> </div> <div class=\"card-icon\"> <img src=\"img/start/web.svg\"> </div> <div class=\"card-text\"> <p>${_t('Wir sind fair und günstig. Ihr bestimmt das Budget und erhaltet das was ihr zahlt.')}</p> </div> <div class=\"button-container\"> <button class=\"submit\"> ${_t('Budget im Blick')} </button> </div> </div> </div> <bottommenu-component data-name=\"/$bottommenu\"></bottommenu-component> </page>","style":".text-container { text-align: center; margin: 8em 0; } .divider { height: 3px; border-radius: 50px; background: #f39200; width: 60px; margin: auto; } .card-container { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0em 7em; grid-template-areas: \". . .\"; } .card-container .card-item { text-align: center; padding: 1em; border: 1px solid #ededed; } .card-container .card-item button { font-weight: 400; } .card-container .card-item .card-icon { display: block; margin-left: auto; margin-right: auto; width: 50%; } .card-container .card-item .card-icon img { width: 100px; } .hero-body { display: flex; align-items: center; justify-content: center; } @-webkit-keyframes blink-caret { 50% { border-color: transparent; } } .hero-body .typerTarget { border-right: 1px solid #404145; -webkit-animation: blink-caret 0.5s step-end infinite alternate; animation: blink-caret 0.5s step-end infinite alternate; } .hero-body #headline-animated { font-size: 2.5em; height: 1.5em; font-weight: 400; width: fit-content; overflow: auto; } .hero-body .centered { width: 75%; display: grid; grid-template-columns: 1fr 1fr; align-items: center; justify-content: center; } .hero-body .centered .container { display: block; color: #444f60; } .hero-body .centered .container h3 { color: #999; font-weight: 400; } @media only screen and (max-width: 768px) { .hero-body .centered { width: 100%; display: block; } } @media only screen and (max-width: 768px) { .card-container { width: 100%; display: block; } }","path":"/website/start.js",
        
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
