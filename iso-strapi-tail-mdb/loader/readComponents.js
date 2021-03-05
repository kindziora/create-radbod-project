/**
 * 
 * @param {*} component 
 * @param {*} componentsHandler 
 * @param {*} cb 
 * @param {*} allready 
 * @param {*} total 
 * @param {*} meta 
 * @param {*} dataH 
 */
export function fetchDataStores(component, componentsHandler, cb, allready, total, meta, dataH) {

    let callback = function (meta) {
        return (data) => {
            cb(data, component);
            meta.cnt++;
            meta.loaded.push(component);
            if (meta.cnt >= total && !meta.calledFinal) {
                meta.calledFinal = true;
                allready(dataH, meta, data);
            }
        }
    };

    let result;

    if (typeof component !== "string") {
        
        console.log("COMPONENT", component);

        if (component.store) {
            result = component.store;
        } else {
            result = component.data.call(dataH, callback(meta), {});
        }
    } else { 
        let componentID = component.components[i]; 
        result = componentsHandler[componentID].store; 
    }

    if (!result || typeof result.then !== "function") {
        callback(meta)(result);
    }

    for (let i in component.components) {
        fetchDataStores(component.components[i], componentsHandler, cb, allready, total, meta, dataH);
    }

}

/**
 * 
 * @param {*} component 
 * @param {*} cnt 
 * @param {*} componentHandler 
 */
export async function lookupComponents(component, cnt, componentHandler) {
    for (let i in component.components) {
        if (typeof component.components[i] === "string") {
            let componentID = component.components[i];
            let name = component.components[i].split("#")[0];

            if (componentHandler[componentID]) {
                component.components[i] = componentHandler[componentID];
            } else {
                let tmpModule = await import(`../public/build/dev/component/${name}.js`);
                componentHandler[componentID] = tmpModule[name];
                component.components[i] = componentHandler[componentID];
            }
        }

        cnt = await lookupComponents(component.components[i], cnt);
    }
    return ++cnt;
}