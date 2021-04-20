

  export let textlist = {
        views : {
                   'textlist-e-1' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<div class="Rtable Rtable--5cols Rtable--collapse"> <div class="Rtable-row Rtable-row--head"> <div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell access-link-cell column-heading">${_t('Anzahl')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Bezahlung')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Ansehen')}</div> </div> <div class="tlist" data-name="/$textlist/items" data-view="text" data-type="list"> </div> </div>`},
                   'textlist-e-2' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<div class="Rtable-row Rtable-row--head"> <div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell access-link-cell column-heading">${_t('Anzahl')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Bezahlung')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Ansehen')}</div> </div> <div class="tlist" data-name="/$textlist/items" data-view="text" data-type="list"> </div>`},
                   'textlist-e-3' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<div class="Rtable-cell date-cell column-heading">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading">${_t('Auftrag')}</div> <div class="Rtable-cell access-link-cell column-heading">${_t('Anzahl')}</div> <div class="Rtable-cell replay-link-cell column-heading">${_t('Bezahlung')}</div> <div class="Rtable-cell pdf-cell column-heading">${_t('Ansehen')}</div>`},
                   'textlist-e-4' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('Von')}`},
                   'textlist-e-5' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('Auftrag')}`},
                   'textlist-e-6' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('Anzahl')}`},
                   'textlist-e-7' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('Bezahlung')}`},
                   'textlist-e-8' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `${_t('Ansehen')}`},
                   'textlist-e-9' : function (args) {
        let { change, textlist, _t, env, tasklist } = args;
        return `<div class="Rtable-row ${change.index % 2!=0? 'is-striped' : ''}" data-name="/$textlist/items/${change.value.id}" data-type="list-item"> 
                  <div class="Rtable-cell date-cell">
                    <div class="Rtable-cell--heading">Von</div>
                    <div class="Rtable-cell--content date-content"><span class="webinar-date">${change.value.createdAt.substr(5, 14).replace("T", " ")}</div>
                  </div>
                  <div class="Rtable-cell topic-cell">
                    <div class="Rtable-cell--content title-content">${change.value.name.replace( new RegExp("(" + tasklist.search + ")", "ig"), "<strong>$1</strong>")}</div>
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
                    <div class="Rtable-cell--content pdf-content"><a data-title="${change.value.name}" href="${env.view.url('backend/briefing/' + change.value.id)}" data-events="job:click" data-index="${change.value.id}"> &#9997;</a></div>
                  </div> 
              </div>`;
      },
                   'textlist' : function (args) { let {change, backendtopmenu,bottommenu,breadcrumb,briefing,home,login,modal,signin,tasklist,text,textlist,topmenu,units,write, _t, env} = args; return `<div class="wrapper textlist" data-id="textlist-e-1" data-view="textlist-e-1"> <div class="Rtable Rtable--5cols Rtable--collapse" data-id="textlist-e-2" data-view="textlist-e-2"> <div class="Rtable-row Rtable-row--head" data-id="textlist-e-3" data-view="textlist-e-3"> <div class="Rtable-cell date-cell column-heading" data-id="textlist-e-4" data-view="textlist-e-4">${_t('Von')}</div> <div class="Rtable-cell topic-cell column-heading" data-id="textlist-e-5" data-view="textlist-e-5">${_t('Auftrag')}</div> <div class="Rtable-cell access-link-cell column-heading" data-id="textlist-e-6" data-view="textlist-e-6">${_t('Anzahl')}</div> <div class="Rtable-cell replay-link-cell column-heading" data-id="textlist-e-7" data-view="textlist-e-7">${_t('Bezahlung')}</div> <div class="Rtable-cell pdf-cell column-heading" data-id="textlist-e-8" data-view="textlist-e-8">${_t('Ansehen')}</div> </div> <div class="tlist" data-name="/$textlist/items" data-view="text" data-type="list" data-id="textlist-e-9"> </div> </div> </div>`},
                   'text' : function (args) {
        let { change, textlist, _t, env, tasklist } = args;
        return `<div class="Rtable-row ${change.index % 2!=0? 'is-striped' : ''}" data-name="/$textlist/items/${change.value.id}" data-type="list-item"> 
                  <div class="Rtable-cell date-cell">
                    <div class="Rtable-cell--heading">Von</div>
                    <div class="Rtable-cell--content date-content"><span class="webinar-date">${change.value.createdAt.substr(5, 14).replace("T", " ")}</div>
                  </div>
                  <div class="Rtable-cell topic-cell">
                    <div class="Rtable-cell--content title-content">${change.value.name.replace( new RegExp("(" + tasklist.search + ")", "ig"), "<strong>$1</strong>")}</div>
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
                    <div class="Rtable-cell--content pdf-content"><a data-title="${change.value.name}" href="${env.view.url('backend/briefing/' + change.value.id)}" data-events="job:click" data-index="${change.value.id}"> &#9997;</a></div>
                  </div> 
              </div>`;
      } },
            "style":"","path":"/component/textlist.js",
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
      }).db().findByName( this.environment.view.path().split("backend/tasklist").pop() ).then(function (res) {
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
          
          this.store.dataH.pxy.$breadcrumb.path = [{ name: "Aufträge", url: "/backend/tasklist" }, { name, url }];

          buildApp.loadPage(url, () => {
            console.log(arguments);
          });


        }
      }
    })
  }
