import * as fbuilder from './file_builder.js';
import { getFiles } from './files.js';

export async function buildSFC(folder, options){
    for await (const file of getFiles(folder )) {
        if(file.split(".")[1]==="json")continue;

        await fbuilder.buildFile(file, options || {
            buildPath: "public/build/dev"
        });
    }
}
