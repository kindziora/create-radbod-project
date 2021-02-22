
import { resolve } from 'path';
import { promises as fs } from 'fs';
export const htmlFileList = ["page", "component", "layout"];

export function folderViewList(filepath) {
    return htmlFileList.filter(allowed => filepath.indexOf(allowed) >= 0).length === 0;
}


export async function* getFiles(dir) {
    let dirents = await fs.readdir(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            yield* getFiles(res);
        } else {
            yield res;
        }
    }
}

/**
 * 
 * @param {*} str 
 */
export function parseFunction(str) {
    var fn_body_idx = str.indexOf('{'),
        fn_body = str.substring(fn_body_idx + 1, str.lastIndexOf('}')),
        fn_declare = str.substring(0, fn_body_idx),
        fn_params = fn_declare.substring(fn_declare.indexOf('(') + 1, fn_declare.lastIndexOf(')')),
        args = fn_params.split(',');

    args.push(fn_body);

    /**
     * 
     */
    function Fn() {
        return Function.apply(this, args);
    }
    Fn.prototype = Function.prototype;

    return new Fn();
}
