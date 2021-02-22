#!/bin/bash
sh ../nginx-node-config/apply-local.sh maschinenwebsite &
nodemon -w app/ buildApp/dev.js -e html,twig,scss,js,ts,css &
tsc -w &
nodemon -w public/build/ webserver/static.js -e html,twig,css,js &