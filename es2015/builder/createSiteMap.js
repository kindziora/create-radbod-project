module.exports = function (config) {

    var sm = require('sitemap');
    const fs = require('fs');
    const { readDir, mkdirp, rpath } = require('./files');
    let translations = require('./translations');

    let translationsNormal = translations.getPlain();

    let links = [{
        "url": config.host + "/",
        "changefreq": 'daily',
        "links": [
            "/home"
    ]
    }]; 
    
    let blacklist = ['notFound'];

    let haslinks = {};

    for (let language in translationsNormal) {
        if (language[0] === "_") continue;

        let layouts = readDir(`${rpath}app/pages/`).filter(el => /index\.html\.twig$/.test(el)).forEach(
            (file) => {

                let itfc = file.split("/view")[0].split("/").pop();

                if(blacklist.indexOf(itfc) !== -1)return;

                console.log(config.host + "/" + language + "/" + itfc);

                if (typeof haslinks[config.host + "/" + itfc] === "undefined")
                    haslinks[config.host + "/" + itfc] = {
                        "url": config.host + "/" + itfc,
                        "changefreq": 'daily',
                        "links": []
                    }; 

                    haslinks[config.host + "/" + itfc].links.push({
                         lang: language.split('_')[0], url: config.host + "/" + language + "/" + itfc,
                    });

            });

    }
      
    var sitemap = sm.createSitemap({
        hostname: config.host,
        cacheTime: 600000,  //600 sec (10 min) cache purge period
        urls: Object.values(haslinks)
    });
    
    fs.writeFileSync(rpath + "public/sitemap.xml", sitemap.toString());
    fs.writeFileSync(rpath + "public/robots.txt", "Sitemap: " + config.host + "/sitemap.xml");
};