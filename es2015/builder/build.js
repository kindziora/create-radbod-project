import {buildSFC} from './build_sfc.js.js.js.js';
import { compileViews } from './compile_views.js.js.js.js';
import { copyFiles } from './copyFiles.js.js.js.js';
import { internationalize, loadAllTranslations } from './translation.js.js.js.js';


(async () => {

    await copyFiles(process.argv[2], {extension : "js"});
    
    await buildSFC(process.argv[2]);
    
    await internationalize(process.argv[3]);
    
    let v = new compileViews();
    await v.compileMultiple(process.argv[3]);
    
}) ();
