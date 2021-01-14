
const workboxBuild = require('workbox-build');

const buildSW = () => {
    // This will return a Promise
    console.log("injectManifest");
    return workboxBuild.injectManifest({
        swSrc: './public/serviceWorker.js',
        swDest: './public/build/serviceWorker.js',
        globDirectory: './public/',
        globPatterns: [
            '**\/*.{js,css,html,png}',
            '**\/dev\/js\/*.{js,css,html,png}',
        ]
    }).then(({ count, size, warnings }) => {
       
        console.log(count, size, warnings);
        console.log(`${count} files will be precached, totaling ${size} bytes.`);
    });
}

buildSW();
