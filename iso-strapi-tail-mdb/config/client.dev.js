 
export let environment = {
    path : function(){
        return window.location.pathname;
    },
    data_loader: {
        find(query, onResultCallback) {

            setTimeout(() => onResultCallback.call({ dataH: {} }, {
                name: "AK TODOS c asdfsdf sdf",
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
            }), 1000);

        }
    }
};