import { getFiles } from './files.js';
import { promises as fs } from 'fs';
import { createFolderAndFiles } from './translation.js';

export async function copyFiles(folder, options) {

/**
 * @TODO copyImages BIDLER AUS SRC ORDNER IN PUBLIC KOPIEREN
 * @param {*} filePath 
 */
    async function copyImages(filePath) {

        if (filePath.indexOf("/img/") !== -1) {

            await fs.mkdir(folderPath.join("/"), { recursive: true });

            if (filename.indexOf("server_") === -1) {

                await fs.copyFile(file, destF);
                console.log("COPY FILES ", file, destF);
            }

        }
    }

    async function copyUsedNodeModules(buildP) {
        let packageJSONString = await fs.readFile("./package.json", 'utf8');
        let packageJSON = JSON.parse(packageJSONString);

        for (let p in packageJSON.dependencies) {
            let pkString = await fs.readFile("./node_modules/" + p + "/" + 'package.json', 'utf8')
            let pk = JSON.parse(pkString);

            let word = pk.browser || pk.main || pk.index;

            if (p === "express") continue;

            if (word) {
                try {
                    await fs.copyFile(
                        "./node_modules/" + p + "/" + word,
                        buildP + '/deps/' + word.split('/').pop());
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

    await fs.copyFile(folder.replace("src", "config/manifest.json"), buildP + "/manifest.json");
    await fs.copyFile(folder.replace("src", "config/routes.js"), buildP + "/routes.js");
    await fs.copyFile(folder.replace("src", "config/client.dev.js"), buildP + "/client.dev.js");

    await fs.copyFile(folder + "/app.js", buildP + "/app.js");

    await fs.mkdir(buildP + "/css", { recursive: true });
    await fs.copyFile(folder + "/../node_modules/water.css/out/water.min.css", buildP + "/css/water.css");


    await fs.mkdir(buildP + "/deps", { recursive: true });

    copyUsedNodeModules(buildP);



}
