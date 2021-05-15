#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { copyDir } = require('./util');
const child = require('child_process');

const rootDir = path.join(__dirname, '..');

const appName = process.argv[2];
const appLocation = path.join(rootDir, appName);

fs.mkdirSync(appLocation, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Directory created successfully!');
});
console.log('rootDir', rootDir, appName);

(async () => {
  await copyDir('./app', appLocation);
})();

child.execSync(
  `cd ${appLocation} && npm i && cd client && npm i`,
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  }
);
