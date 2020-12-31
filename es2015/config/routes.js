export const routes = {
    "home": "home",
    "^$": "home",
    "user/login" : "login",
    "login" : "login",
    "_not_found" : "notFound"
};

export function getFile(path) {

    let pathCleaned = path.split("/").filter(e => e.trim()!=="").join("/");
    console.log("path", path);
    for (let i in routes) {

        let file = routes[i];

        let rex = new RegExp(i, "ig");

        let match = pathCleaned.match(rex);

        console.log("match", match, "rex", rex);

        if(match) {
            return file;
        }
    }

    return routes._not_found;
}