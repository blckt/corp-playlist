'use strict'

const co = require('co')
const globby = require('globby')
const mount = require('koa-mount')

// Finds all the routes in '/routes' and mounts them to app
// Every file in '/routes' is a set of routes.
module.exports = co.wrap(function * (app) {
  let routePaths = yield globby(['api/src/routes/**/*.js'])

  routePaths.forEach((routePath) => {

    // Removes 'api/src'
    const filePath = routePath.slice(7, routePath.length)

    // Removes 'api/src/routes' prefix and '.js' suffix
    const mountPath = routePath.slice(14, routePath.length - 3)

    try {
      app.use(mount(mountPath, require('../' + filePath).middleware()))
      console.log('Mounted ' + filePath + ' to ' + mountPath)
    } catch (err) {
      console.error(err)
    }
  })
})
