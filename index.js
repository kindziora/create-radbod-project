#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const fs_Extra = require('fs-extra');
const path = require('path');
let projectName = "my-project";
let projectType = "es2015";

program
    .option('-v, --debug', 'output extra debugging')
    .option('-n, --name <name>', 'output extra debugging', './' + projectName)
    .option('-t, --type <type>', 'flavour of your project', projectType);

program.parse(process.argv);

console.log(program.opts());

var sourceDir = path.join(__dirname, "./" + program.type);
var destinationDir = program.name;

if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
}

console.log("clone", sourceDir, destinationDir);

fs_Extra.copy(sourceDir, destinationDir, function (err) {
    console.log(arguments);
    if (err) {
        throw err;
    } else {
        console.log("success!");


        var exec = require('child_process').exec;

        let cp = exec('npm --prefix '+ destinationDir +' install' ).stderr.pipe(process.stderr);

        cp.on("exit", function (code, signal) {
            console.log("Exited", { code: code, signal: signal });
        });

        cp.on("error", console.error.bind(console));

    }



});

