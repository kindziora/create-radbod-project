const config = require('../../app/config/dev.ts');
const fs = require('fs');
const { readDir, mkdirp, rpath } = require('./files');
var Purgecss = require('purgecss');

var purgecssResult = new Purgecss({
    content: ["./public/build/dev/pages.html", "./public/build/dev/widgets.html"],
    css: ["./public/build/dev/*.css", "./public/build/dev/**/*.css"]
})

console.log(purgecssResult.purge());