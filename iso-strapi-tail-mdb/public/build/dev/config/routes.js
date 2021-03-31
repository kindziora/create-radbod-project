//import routes from "./routes/website.js";

let routes = {
    "^([a-z]{2}_[A-Z]{2})/([.-\w]*)$": 2, // regex input : match group 
    "^home": "website/home.js",
    "^start": "website/start.js",
    "^$": "website/start.js",
    "^register": "website/register.js",
    "^login": "website/login.js",
    "^impressum": "website/impressum.js",
    "_not_found": "website/notFound.js",

    "^profile": "backend/profile.js",
};


export function parseRoute(path) {
    let lang = false;
    let pathCleaned = path.split("/").filter(e => e.trim() !== "").join("/");

    for (let i in routes) {

        let file = routes[i];
       
        let rex = new RegExp(i, "i");

        let match = pathCleaned.match(rex);

        console.log("ROUTE MATCH ", pathCleaned, rex, match);

        if (match) {

            if (Number.isInteger(file)) {
                file = match[file];
                lang = match[1];
            }

            return { filename: file, language: lang };
        }
    }

    return { filename: routes._not_found, language: lang };
}