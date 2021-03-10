
import path from 'path';
import { promises as fs } from 'fs';
import {getCSS} from './styles.js';
import {purgeCSSFromString} from './styles.js';

const __dirname = path.resolve();
const template = /<template.*>([^]+)?<\/template>/igm;
const script = /<script.*>([^]+)?<\/script>/igm;
const scriptLang = /<script.*language\=\"([A-Za-z0-9 _]*)\"/igm;
const rstyleScope = /<style.*scope\=\"([#.A-Za-z0-9 _]*)\"/igm;
const openeningBracketObject = /export.*?\s({)/gim;
const importStatement = /import(.*?)from\s+("|')(.*?)("|');/ig;
const style = /<style.*>([^]+)?<\/style>/igm;

let options = { buildPath: "public/build/dev" };

export async function extract(content) {

    let html = Array.from(content.matchAll(template))[0][1];
    content = content.replace(html, "");
    let js = Array.from(content.matchAll(script))[0][1];
    content = content.replace(js, "");

    let css = Array.from(content.matchAll(style))[0];
 
    css = css.length  > 1 ?css[1]:"";
    css = typeof css !=="undefined" ? css : "";

 
    return { html, js, css};
}

/**
 * 
 * @param {*} script 
 * @param {*} codeToInject 
 */
async function injectCode(script, codeToInject) {
    let find = Array.from(script.matchAll(openeningBracketObject))[0][0];
    return script.replace(find, find + codeToInject);
}

/**
 * 
 * @param {*} script 
 * @param {*} extension 
 */
async function replaceImports(script, extension) {
    return script.replace(importStatement, 'import \$1 from "\$3.' + extension + '";');
}

async function getName(filepath) {
    return filepath.split("/").pop().split('.')[0];
}

async function getBuildLocation(filepath) {
    return filepath.replace("src", options.buildPath);
}
async function getSrcLocation(filepath) {
    return filepath.replace(options.buildPath, "src");
}
export async function buildFile(file, opts) {
    options = opts ? opts : options;

    if(file.indexOf(".") ==-1){
        file = file+ ".html";
    }

    console.log("BUILD: try to build " + file);

    let content = await fs.readFile(file, 'utf8');

    if(!Array.from(content.matchAll(template))[0]){
        console.log("no template tag in single file component: ", file)
        return;
    };
    let slang = Array.from(content.matchAll(scriptLang))[0][1];
    let styleScope = Array.from(content.matchAll(rstyleScope))[0] ? Array.from(content.matchAll(rstyleScope))[0][1] : "";
    let fileBuilt = await getBuildLocation(file);
    fileBuilt = fileBuilt.replace("html", slang);

    let { html, js, css } = await extract(content);
    try {
        css = await getCSS(css, styleScope); 
      //  let purgedCssData = await purgeCSSFromString(css, html);
     //   css = purgedCssData[0].css;
    }catch(e) {
        console.log("SCSS ERROR: ", e);
    }
    
    let strP = JSON.stringify({
        html: html.replace(/\s/ig, " ").replace(/  +/ig, " ").trim(),
        style: css.replace(/\s/ig, " ").replace(/  +/ig, " ").trim(),
        path: fileBuilt.split(options.buildPath)[1]
    });
    let inject = `
        ${strP.substring(1, strP.length-1)},
        `;
    
    let replacedImports = await replaceImports(js, slang);
    let newFile = await injectCode(replacedImports, inject);

    let bpath = fileBuilt.split("/");
    bpath.pop();

    await fs.mkdir(bpath.join("/"), { recursive: true });
    
    await fs.writeFile(fileBuilt, newFile);

    return {fileBuilt, newFile, slang};

}

