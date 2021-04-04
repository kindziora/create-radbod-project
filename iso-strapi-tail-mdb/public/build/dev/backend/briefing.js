
  /**
   * @tasklist
   * 
   **/


  export let briefing = {
        "html":"<extend-head> <title>${_t('Auftragsbriefing')}</title> </extend-head> <page class=\"light-mode\"> <backendtopmenu-component type=\"component\" data-name=\"/$backendtopmenu\"></backendtopmenu-component> <section class=\"page-content briefing\"> <section class=\"grid\"> <article> <div class=\"briefing-content\"> <span class=\"date\">${env.view.date(briefing.createdAt)}</span> <h2>${briefing.name}</h2> ${briefing.briefing} <div class=\"button-container\"> <label class=\"checkb\"><input type=\"checkbox\" name=\"gelesen\" /> ${_t('habe das Briefing gelesen und verstanden')}</label> <button type=\"submit\" data-name=\"/$briefing/submit\" class=\"submit\">Verstanden :)</button> </div> </div> </article> </section> </section> <bottommenu-component data-name=\"/$bottommenu\"></bottommenu-component> </page>","style":"@import url(/css/backend.css); .briefing { } .briefing .date { font-weight: 200; float: right; } .briefing .briefing-content { text-align: justify; padding: 1em; } @media screen and (max-width: 767px) { .briefing .briefing-content { padding: 0; } } .briefing .button-container { text-align: center; padding: 3em 0; } .briefing .checkb { width: 100%; }","path":"/backend/briefing.js",
        
    lazyLoading: false, /* server side rendering does not wait for store "tasklist" for rendering */
    mounted() {
      //  console.log("mounted", this);

    },
    components:
    {
      "backendtopmenu-component": "backendtopmenu#mainmenu",
      "bottommenu-component": "bottommenu#footermenu"
    },
    data(cb, env) {

      return this.createStore("briefing",
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
        }
      ).db().findProject(this.environment.view.path().split("/").pop()).then(function (res) {
        let { data, model } = res;

        //  model._data.briefing = data;
        return data;
      });
    },
    interactions() {
      return {
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

