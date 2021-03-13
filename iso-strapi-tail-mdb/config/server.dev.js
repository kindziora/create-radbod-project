export let environment = {
    isLinkActive : function(){}, //set on runtine inside server_html_loader
    data_loader: {
        find(options, cb) {
            setTimeout(() => cb.call({ dataH: {} }, { name: "test load asynchronous server",    items: [{
                id: 0,
                label: "Testdaten1 server",
                checked: false
            }, {
                id: 1,
                label: "Testdaten2 server",
                checked: false
            }, {
                id: 2,
                label: "Testdaten3 server",
                checked: false
            }, {
                id: 3,
                label: "Testdaten4 server",
                checked: false
            }]}), 0);
        }
    }
};