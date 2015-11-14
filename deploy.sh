#! usr/bin/env sh

node ./node_modules/.bin/r.js  -o www/build.js && ./node_modules/.bin/serve -D dist
