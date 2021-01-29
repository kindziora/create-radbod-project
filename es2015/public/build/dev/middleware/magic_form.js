export const magic_form = function (elementEvents, onSync, delay = 800) {
    let calledID = "";

    function addValidators(field, fieldPath) {
        if (field.$el.hasAttribute("data-validations")) {
            let validators = field.$el.getAttribute("data-validations").split(",");

            let metaManager = field.dom.store.getMetaState();
            let meta = metaManager.getMeta(fieldPath);
            let validations = field.dom.store.getValidations();

            for (let i of validators) {
                if (typeof validations[i] === "function") {
                    meta.validators[i] = validations[i];
                } else {
                    throw {
                        name: "ValidationException",
                        message: `Validator named "${i}" was not loaded for DataStore "${field.dom.store.name}" `,
                        toString: function () {
                            return this.name + ": " + this.message;
                        }
                    };
                }
            }
            metaManager.setMeta(fieldPath, meta);
        }
    }
    let callback = function (sender, dataState) {
        let name = sender.field.$el.getAttribute("data-name").split("/").pop();
        addValidators(sender.field, sender.field.$el.getAttribute("data-name"));
        dataState[name] = sender.field.getValue();
    };

    let kup = {
        change: callback,
        keyup: callback
    };

    for (let e in this.dom.elementByName) elementEvents[e] = Object.assign({}, elementEvents[e], kup);

    elementEvents["/"] = {
        "change"(change, store) {
            if (typeof onSync === "function") {
                clearTimeout(calledID);
                calledID = setTimeout(() => onSync(store), delay);
            }
        }
    }

    return elementEvents;
};