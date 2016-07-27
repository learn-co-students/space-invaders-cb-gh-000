global.expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core')

const babelSpaceship = babel.transformFileSync(
  path.resolve(__dirname, '..', 'spaceship.js'), {
    presets: ['es2015']
  }
)
const babelCrewMember = babel.transformFileSync(
  path.resolve(__dirname, '..', 'crewMember.js'), {
    presets: ['es2015']
  }
)

jsdom({
  src: babelSpaceship.code + babelCrewMember.code
})
