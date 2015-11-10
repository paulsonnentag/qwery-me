#!/bin/bash
mkdir .temp
BABEL_ENV=production webpack -p --config webpack.production.config.js
cp -r build/* .temp
git checkout gh-pages
cp -r .temp/* .
rm -r .temp
