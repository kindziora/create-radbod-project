import { getFiles } from './files.js';
import { renderSCSSFile } from './styles.js';

import { promises as fs } from 'fs';

import { default as ff} from 'fs';

import { createFolderAndFiles } from './translation.js';

const importStatement = /import(.*?)from\s+("|')(.*?)("|');/ig;

export async function copyFiles(folder, options) {

    /**
     * @TODO copyImages BIDLER AUS SRC ORDNER IN PUBLIC KOPIEREN
     * @param {*} filePath 
     */
    async function copyImages(folder, buildPath) {

        for await (const file of getFiles(folder || '/home/akindziora/projekte/radbod/test/todoMVC/src/')) {

            let folderPath = file.replace("src", buildPath).split("/");

            let pos = folderPath.indexOf("img");
            if (pos !== -1) {
                let path = "./" + buildPath + "/" + folderPath.slice(pos).join("/");
                let finalfolder = path.split("/");
                finalfolder.pop(); 
                await fs.mkdir(finalfolder.join("/"), { recursive: true });
                await fs.copyFile(file, path);
                
            }
        }
    }

    async function copyUsedNodeModules(buildP) {
        let packageJSONString = await fs.readFile("./package.json", 'utf8');
        let packageJSON = JSON.parse(packageJSONString);

        for (let p in packageJSON.dependencies) {
            let pkString = await fs.readFile("./node_modules/" + p + "/" + 'package.json', 'utf8')
            let pk = JSON.parse(pkString);

            let word = pk.module || pk.browser || pk.main || pk.index;

            if (p === "express") continue;

            if (word) {
                try {
                    

                    let inputFile = await fs.readFile("./node_modules/" + p + "/" + word, 'utf8')
                    let transformedImports = inputFile.replace(importStatement, 'import \$1 from ".\/\$3.js";');
                    
                    await fs.writeFile( 
                        buildP + '/deps/' + p +  ".js", transformedImports, { flag: "wx" });

                 /*   await fs.copyFile(
                        "./node_modules/" + p + "/" + word,
                        buildP + '/deps/' + p +  ".js", ff.constants.COPYFILE_EXCL); */
 
                } catch (e) {
                    console.log(e);
                }

            }
        }

    }

    let buildPath = options.buildPath || "public/build/dev";

    await fs.rmdir(buildPath, { recursive: true });

    for await (const file of getFiles(folder || '/home/akindziora/projekte/radbod/test/todoMVC/src/')) {
        let folderPath = file.replace("src", buildPath).split("/");
        let filename = folderPath.pop();

        let destF = file.replace("src", buildPath);

        if (filename.split(".")[1] === options.extension) {

            await fs.mkdir(folderPath.join("/"), { recursive: true });

            if (filename.indexOf("server_") === -1) {

                await fs.copyFile(file, destF);
                console.log("COPY FILES ", file, destF);
            }

        }

        if (filename.split(".")[1] === "html") {
            //translation
            await createFolderAndFiles(destF);
        }

    }


    let buildP = folder.replace("src", buildPath);

    await fs.mkdir(buildP + "/config", { recursive: true });

    await fs.copyFile(folder.replace("src", "config/manifest.json"), buildP + "/manifest.json");
    await fs.copyFile(folder.replace("src", "config/routes.js"), buildP + "/config/routes.js");
    await fs.copyFile(folder.replace("src", "config/client.dev.js"), buildP + "/config/client.dev.js");

    await fs.copyFile(folder + "/app.js", buildP + "/app.js");

    await fs.mkdir(buildP + "/css", { recursive: true });
    await fs.copyFile(folder + "/../node_modules/water.css/out/water.min.css", buildP + "/css/water.css");
    await fs.copyFile(folder + "/../node_modules/slim-select/dist/slimselect.css", buildP + "/css/slimselect.css");
 
    let indexCSS = await renderSCSSFile(folder + "/styles/index.scss", buildP + "/css/index.css");

    fs.writeFile(buildP + "/css/index.css", indexCSS.css, function(err){
        console.log(err);
    });

 
    let iCSS = await renderSCSSFile(folder + "/styles/backend.scss", buildP + "/css/backend.css");

    fs.writeFile(buildP + "/css/backend.css", iCSS.css, function(err){
        console.log(err);
    });

    await fs.copyFile(folder + "/../node_modules/radbod/dist/radbod.js", buildP + "/deps/radbod.js");

    await copyImages(folder, buildPath);

    await fs.mkdir(buildP + "/deps", { recursive: true });

    copyUsedNodeModules(buildP);

    

}
