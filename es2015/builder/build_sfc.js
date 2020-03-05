import * as fbuilder from './file_builder.js.js.js.js';
import { getFiles } from './files.js.js.js.js';
 
export async function buildSFC(folder, options){
    for await (const file of getFiles(folder || '/home/akindziora/projekte/kjs/test/todoMVC/src/')) {
        await fbuilder.buildFile(file, options || {
            buildPath: "public/build/dev"
        });
    }
}
