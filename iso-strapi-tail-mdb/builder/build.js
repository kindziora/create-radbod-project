import {buildSFC} from './scripts/build_sfc.js';
import { compileViews } from './scripts/compile_views.js';
import { copyFiles } from './scripts/copyFiles.js';
import { internationalize, loadAllTranslations } from './scripts/translation.js';


(async () => {
    
    await copyFiles(process.argv[2], {extension : "js"});
    
    await buildSFC(process.argv[2]);
    
    await internationalize(process.argv[3]);
    
    let v = new compileViews();
    await v.compileMultiple(process.argv[3]);
    
}) ();
