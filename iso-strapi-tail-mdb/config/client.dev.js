import {viewFunctions} from '../middleware/view/view.js';
 
export let environment = {
    view : new viewFunctions(this),
    fetch: fetch,
    data_loader: {
        find(query, onResultCallback) {

            setTimeout(() => onResultCallback.call({ dataH: {} }, {
                name: "name",
                tab: "all",
                items: [{
                    id: 0,
                    label: "Testdaten1",
                    checked: true
                }, {
                    id: 1,
                    label: "Testdaten2",
                    checked: false
                }, {
                    id: 2,
                    label: "Testdaten3",
                    checked: false
                }]
            }), 110);

        }
    }
};