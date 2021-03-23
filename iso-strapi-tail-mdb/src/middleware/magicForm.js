export const magic_form = function (elementEvents, dataScope = "/", onSync, delay = 800) {
    let calledID = "";
     
    let kup = {
        change: function (sender, dataState) {
            if(sender.field.$el.tagName ==="DIV")return;
            let name = sender.field.$el.getAttribute("data-name").split("/").pop();
            dataState[name] = sender.field.getValue();
        },
        keyup: function (sender, dataState) {
            if(sender.field.$el.tagName ==="DIV")return;
            let name = sender.field.$el.getAttribute("data-name").split("/").pop();
            dataState[name] = sender.field.getValue();
        }
    };

    for (let e in this.dom.elementByName){ 
        elementEvents[e] = Object.assign({}, elementEvents[e], kup);
    } 

    elementEvents[dataScope] = {
        "change"(change, store) {
            if (typeof onSync === "function") {
                clearTimeout(calledID);
                calledID = setTimeout(() => onSync(store), delay);
            }
        }
    }

    return elementEvents;
};