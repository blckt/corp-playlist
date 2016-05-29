'use strict'

global.call = {}

const globby = require('globby')

module.exports = function () {
  let methodPaths = globby.sync(['api/src/methods/**/*.js'])

  methodPaths.forEach((methodPath) => {
    // ['api', 'src', 'methods', 'folderName', 'fileName']
    const path = methodPath.split("/")
    const folderName = path[3]
    const fileName = path[4]

    // removes '.js' extension from filename
    const fileNameNoExt = fileName.slice(0, fileName.length - 3)

    // retrieves exported methods from the file in file path
    const methods = require('../methods/' + folderName + "/" + fileName)

    // constructs tokens and populates caller dictionary
    Object.keys(methods).forEach((key) => {
      // initializes objects if not already existing
      if (typeof(call[folderName]) === 'undefined'){
        call[folderName] = {}
      }
      if (typeof(call[folderName][fileNameNoExt]) === 'undefined') {
        call[folderName][fileNameNoExt] = {}
      }
      call[folderName][fileNameNoExt][key] = methods[key]
    })
  })
}
