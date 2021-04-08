

  export let textlist = {
        views : {
                   'textlist-e-1' : function (args) { let {change, backendtopmenu,bottommenu,briefing,home,login,modal,signin,tasklist,textlist,topmenu, _t, env} = args; return `<div class="Rtable Rtable--5cols Rtable--collapse"> <div class="Rtable-row Rtable-row--head"> <div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell access-link-cell column-heading">${_t('Anzahl')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Bezahlung')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Ansehen')}</div> </div> <div class="tlist" data-name="/$textlist/items" data-view="text" data-type="list"> </div> </div>`},
                   'textlist-e-2' : function (args) { let {change, backendtopmenu,bottommenu,briefing,home,login,modal,signin,tasklist,textlist,topmenu, _t, env} = args; return `<div class="Rtable-row Rtable-row--head"> <div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell access-link-cell column-heading">${_t('Anzahl')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Bezahlung')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Ansehen')}</div> </div> <div class="tlist" data-name="/$textlist/items" data-view="text" data-type="list"> </div>`},
                   'textlist-e-3' : function (args) { let {change, backendtopmenu,bottommenu,briefing,home,login,modal,signin,tasklist,textlist,topmenu, _t, env} = args; return `<div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell access-link-cell column-heading">${_t('Anzahl')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Bezahlung')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Ansehen')}</div>`},
                   'textlist-e-4' : function (args) { let {change, backendtopmenu,bottommenu,briefing,home,login,modal,signin,tasklist,textlist,topmenu, _t, env} = args; return `${_t('Von')}`},
                   'textlist-e-5' : function (args) { let {change, backendtopmenu,bottommenu,briefing,home,login,modal,signin,tasklist,textlist,topmenu, _t, env} = args; return `${_t('Auftrag')}`},
                   'textlist-e-6' : function (args) { let {change, backendtopmenu,bottommenu,briefing,home,login,modal,signin,tasklist,textlist,topmenu, _t, env} = args; return `${_t('Anzahl')}`},
                   'textlist-e-7' : function (args) { let {change, backendtopmenu,bottommenu,briefing,home,login,modal,signin,tasklist,textlist,topmenu, _t, env} = args; return `${_t('Bezahlung')}`},
                   'textlist-e-8' : function (args) { let {change, backendtopmenu,bottommenu,briefing,home,login,modal,signin,tasklist,textlist,topmenu, _t, env} = args; return `${_t('Ansehen')}`},
                   'textlist-e-9' : function (args) {
        let { change, textlist, _t, env } = args;
        return `<div class="Rtable-row" data-name="/$textlist/items/${change.value.id}" data-type="list-item"> 
                  <div class="Rtable-cell date-cell">
                    <div class="Rtable-cell--heading">Von</div>
                    <div class="Rtable-cell--content date-content"><span class="webinar-date">${change.value.createdAt.substr(5, 14).replace("T", " ")}</div>
                  </div>
                  <div class="Rtable-cell topic-cell">
                    <div class="Rtable-cell--content title-content">${change.value.name}</div>
                  </div>
                  <div class="Rtable-cell access-link-cell">
                    <div class="Rtable-cell--heading">Anzahl</div>
                    <div class="Rtable-cell--content access-link-content">0</div>
                  </div>
                  <div class="Rtable-cell replay-link-cell">
                    <div class="Rtable-cell--heading">Bezahlung</div>
                    <div class="Rtable-cell--content replay-link-content">${change.value.wordcent} cent / Wort</div>
                  </div>
                  <div class="Rtable-cell Rtable-cell--foot pdf-cell">
                    <div class="Rtable-cell--heading">Aktion</div>
                    <div class="Rtable-cell--content pdf-content"><a href="${env.view.url('backend/briefing/' + change.value.id)}" data-events="job:click" data-index="${change.value.id}"> &#9997;</a></div>
                  </div> 
              </div>`;
      },
                   'textlist' : function (args) { let {change, backendtopmenu,bottommenu,briefing,home,login,modal,signin,tasklist,textlist,topmenu, _t, env} = args; return `<div class="wrapper textlist" data-id="textlist-e-1" data-view="textlist-e-1"> <div class="Rtable Rtable--5cols Rtable--collapse" data-id="textlist-e-2" data-view="textlist-e-2"> <div class="Rtable-row Rtable-row--head" data-id="textlist-e-3" data-view="textlist-e-3"> <div class="Rtable-cell date-cell column-heading" data-id="textlist-e-4" data-view="textlist-e-4">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading" data-id="textlist-e-5" data-view="textlist-e-5">${_t('Auftrag')}</div> <div class="Rtable-cell access-link-cell column-heading" data-id="textlist-e-6" data-view="textlist-e-6">${_t('Anzahl')}</div> <div class="Rtable-cell replay-link-cell column-heading" data-id="textlist-e-7" data-view="textlist-e-7">${_t('Bezahlung')}</div> <div class="Rtable-cell pdf-cell column-heading" data-id="textlist-e-8" data-view="textlist-e-8">${_t('Ansehen')}</div> </div> <div class="tlist" data-name="/$textlist/items" data-view="text" data-type="list" data-id="textlist-e-9"> </div> </div> </div>`},
                   'text' : function (args) {
        let { change, textlist, _t, env } = args;
        return `<div class="Rtable-row" data-name="/$textlist/items/${change.value.id}" data-type="list-item"> 
                  <div class="Rtable-cell date-cell">
                    <div class="Rtable-cell--heading">Von</div>
                    <div class="Rtable-cell--content date-content"><span class="webinar-date">${change.value.createdAt.substr(5, 14).replace("T", " ")}</div>
                  </div>
                  <div class="Rtable-cell topic-cell">
                    <div class="Rtable-cell--content title-content">${change.value.name}</div>
                  </div>
                  <div class="Rtable-cell access-link-cell">
                    <div class="Rtable-cell--heading">Anzahl</div>
                    <div class="Rtable-cell--content access-link-content">0</div>
                  </div>
                  <div class="Rtable-cell replay-link-cell">
                    <div class="Rtable-cell--heading">Bezahlung</div>
                    <div class="Rtable-cell--content replay-link-content">${change.value.wordcent} cent / Wort</div>
                  </div>
                  <div class="Rtable-cell Rtable-cell--foot pdf-cell">
                    <div class="Rtable-cell--heading">Aktion</div>
                    <div class="Rtable-cell--content pdf-content"><a href="${env.view.url('backend/briefing/' + change.value.id)}" data-events="job:click" data-index="${change.value.id}"> &#9997;</a></div>
                  </div> 
              </div>`;
      } },
            "style":".textlist { /* Table column sizing ================================== */ /* Apply styles ================================== */ /* Responsive ==================================== */ } .textlist * { box-sizing: border-box; } .textlist .tlist { display: contents; } .textlist .wrapper { width: 100%; max-width: 1000px; margin: 1em auto; padding: 1em; } .textlist .is-striped { background-color: rgba(233, 200, 147, 0.2); } .textlist .date-cell { width: 20%; } .textlist .topic-cell { width: 41%; } .textlist .access-link-cell { width: 13%; } .textlist .replay-link-cell { width: 13%; } .textlist .pdf-cell { width: 13%; } .textlist .Rtable { display: flex; flex-wrap: wrap; margin: 0 0 3em 0; padding: 0; box-shadow: 0 0 40px rgba(0, 0, 0, 0.2); } .textlist .Rtable .Rtable-row { width: 100%; display: flex; } .textlist .Rtable .Rtable-row .Rtable-cell { box-sizing: border-box; flex-grow: 1; padding: 0.8em 1.2em; overflow: hidden; list-style: none; } .textlist .Rtable .Rtable-row .Rtable-cell.column-heading { background-color: #43BAC0; color: white; padding: 1em; } .textlist .Rtable .Rtable-row .Rtable-cell .Rtable-cell--heading { display: none; } .textlist .Rtable .Rtable-row .Rtable-cell .Rtable-cell--content a { font-size: 2em; color: #333; } .textlist .Rtable .Rtable-row .Rtable-cell .Rtable-cell--content .webinar-date { font-weight: 700; } .textlist .Rtable .Rtable-row .Rtable-cell .Rtable-cell--content a:hover { box-shadow: 0 2px 18px black; border-radius: 500px; text-decoration: none; } @media all and (max-width: 750px) { .textlist .is-striped { background-color: white; } .textlist .Rtable--collapse { display: block; width: 100%; padding: 1em; box-shadow: none; } .textlist .Rtable--collapse .Rtable-row { box-sizing: border-box; width: 100%; display: flex; flex-wrap: wrap; margin-bottom: 2em; box-shadow: 0 0 40px rgba(0, 0, 0, 0.2); } .textlist .Rtable--collapse .Rtable-row .Rtable-cell { width: 100% !important; display: flex; align-items: center; } .textlist .Rtable--collapse .Rtable-row .Rtable-cell .Rtable-cell--heading { display: inline-block; flex: 1; max-width: 120px; min-width: 90px; color: #43BAC0; font-weight: 700; border-right: 1px solid #ccc; margin-right: 1em; } .textlist .Rtable--collapse .Rtable-row .Rtable-cell .Rtable-cell--content { flex: 2; padding-left: 1em; } .textlist .Rtable--collapse .topic-cell { background-color: #43BAC0; color: white; font-weight: 700; order: -1; } .textlist .Rtable--collapse .topic-cell .Rtable-cell--content { padding-left: 0 !important; } .textlist .Rtable--collapse .Rtable-row--head { display: none; } } .textlist .no-flexbox .Rtable { display: block; } .textlist .no-flexbox .Rtable.Rtable-cell { width: 100%; }","path":"/component/textlist.js",
    loaded(data) { //pipeline after data has been loaded

    },

    data() {
      return this.createStore("textlist", {
        items: [
          {
            "i": 0,
            "sourcetype": null,
            "_id": "-",
            "name": "-",
            "briefing": "-",
            "published_at": "-",
            "createdAt": "-",
            "updatedAt": "-",
            "__v": 0,
            "wordcent": "-",
            "input": null,
            "output": null,
            "contents": [
              {
                "versions": [],
                "_id": "6065ffd3d65ede005e7cf9af",
                "data": null,
                "briefing": "Bitte schreibe mir einen kurzen Text",
                "published_at": "2021-04-01T17:16:04.992Z",
                "createdAt": "2021-04-01T17:16:03.151Z",
                "updatedAt": "2021-04-01T17:57:46.295Z",
                "__v": 0,
                "project": "6065fc7327b6b3004e467327",
                "title": "sdsdd",
                "id": "6065ffd3d65ede005e7cf9af"
              },
              {
                "versions": [],
                "_id": "60660024d65ede005e7cf9b0",
                "data": null,
                "briefing": "Bitte schreibe mir einen kurzen Text 2 Firma Mühlhaus",
                "__v": 0,
                "published_at": "2021-04-01T17:17:30.723Z",
                "createdAt": "2021-04-01T17:17:24.125Z",
                "updatedAt": "2021-04-01T17:17:30.730Z",
                "project": "6065fc7327b6b3004e467327",
                "id": "60660024d65ede005e7cf9b0"
              }
            ],
            "id": "6065fc7327b6b3004e467327"
          },
        ]
      }).db().find().then(function (res) {
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

          buildApp.loadPage(url, () => {
            console.log(arguments);
          });


        }
      }
    })
  }
