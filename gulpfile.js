'use strict';

const gulp = require('gulp');
const boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);
const path = require('path');
const { uiCatalog } = require('..');


boilerplate({
  build: 'ios-uicatalog',
  projectRoot: __dirname,
  transpile: false,
  iosApps: {
    relativeLocations: {
      iphoneos: path.resolve('..', uiCatalog.relative.iphoneos),
      iphonesimulator: path.resolve('..', uiCatalog.relative.iphonesimulator),
    },
    appName: 'UICatalog.app',
  },
});

//CAMBIANDO COSAS
//CAMBIANDO COSAS

//Tengo que cambiar algun CODIGO
//ES MOMENTO DE HACERLO

//Este es el no se cual cambio

//jajajajajaaj

gulp.task('install', function (done) {
  return gulp.series('ios-apps:install', function installDone (seriesDone) {
    seriesDone();
    done();
  })();
});
