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
export function fetchDataStores(component, componentsHandler, cb, allready, total, meta, dataH, name) {

    let ready = function (meta) {
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

    if (component.lazyLoading) {
        if (typeof component.data !== "undefined") {

            result = component.data.call(dataH, (meta) => meta, {});
            ready(meta)(result || {});
        } else {
           // console.log("NAME", component, name.split("-component")[0]); 
            result = componentsHandler[name.split("-component")[0]].data.call(dataH, ready(meta), {});
        }

    } else {
        result = component.data.call(dataH, ready(meta), {});
    }
    
    if (!result || typeof result.then !== "function") {
        ready(meta)(result);
    }

    for (let i in component.components) {
        fetchDataStores(component.components[i], componentsHandler, cb, allready, total, meta, dataH, i);
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
                componentHandler[name] = tmpModule[name];
                component.components[i] = componentHandler[componentID];
            }
        }

        cnt = await lookupComponents(component.components[i], cnt, componentHandler);
    }
    return ++cnt;
}