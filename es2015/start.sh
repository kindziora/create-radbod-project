#!/bin/bash
#rm -r public/build/dev/ &
git stash
git pull
node buildApp/prod.js 
tsc
pm2 stop all 
ln -sfn /var/www/maschinen/machinecrawler/data/images/ /var/www/maschinen/rebuymachines/public/img/machines 
pm2 start ./webserver/static.js -- prod 
NODE_ENV=production pm2 start /var/www/maschinen/maschinenhandel/server.js
