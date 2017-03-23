'use strict';

const download = require('download');
const fs = require('fs-extra')

const leGithubURL = 'https://github.com/LogentriesCommunity/le_ios/archive/master.zip'
const leGithubDir = 'le_ios-master'
const leSrcDir = 'le_ios-master/lelib'
const leDestDir = 'ios/lelib'

function cleanup() {
  fs.remove(leGithubDir, function (err) {
    if (err) return console.error(err)
  })
}

function moveFiles() {
  fs.move(leSrcDir, leDestDir, {'clobber': true}, (err) => {
    if (err) return console.error(err)
    cleanup()
  })
}

download(leGithubURL, '.', {'extract': true}).then(moveFiles)
