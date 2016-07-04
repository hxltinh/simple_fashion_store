'use strict';
const gulp = require('gulp');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const gutil = require('gulp-util');

const webpack = require('webpack');
const webpackDev = require('./pre/webpack/development');
const webpackProd = require('./pre/webpack/production');
const webpackQC = require('./pre/webpack/quality-control');

const WebpackDevServer = require('webpack-dev-server');

gulp.task('dev', (cb) => {
  const devConf = webpackDev();
  const compiler = webpack(devConf.config);
  const wbSeverIns = new WebpackDevServer(compiler, devConf.devServerConfig);
  wbSeverIns.listen(devConf.envConfig.api.port, '0.0.0.0', (err) => {
    if(err) throw new gutil.PluginError('webpack-dev-server', err);
    // Server listening
    gutil.log('[webpack-dev-server]', `http://localhost:${devConf.envConfig.api.port}`);

  })
  return cb();
});

// === +++ Start Production gulp config +++ ===
// clear all file in client foler
gulp.task('clean-client', done => {
  gulp.src('client/*').pipe(vinylPaths(del))
    .on('finish', () => done());
});

// copy all file/folder from src/lib to client/lib foler
gulp.task('copy-client-lib', done => {
  gulp.src(['src/lib/**/*']).pipe(gulp.dest('client/lib'))
    .on('finish', () => done());
});

// copy all file/folder from src/lib to client/lib foler
gulp.task('copy-client-images', done => {
  gulp.src(['src/images/**/*']).pipe(gulp.dest('client/images'))
    .on('finish', () => done());
});

// copy template client foler
gulp.task('copy-client-template', done => {
  gulp.src(['template/index.html']).pipe(gulp.dest('client/index.html'))
    .on('finish', () => done());
});

gulp.task( 'prodTranspile', (done) => {
  const prodConf = webpackProd();
  webpack( prodConf.config, ( err, stat) => {
    if(err) throw new gutil.PluginError('webpack', err);
    return done();
  });
});

// build app for production
gulp.task('production',gulp.series('clean-client','copy-client-template' , 'copy-client-lib', 'copy-client-images', 'prodTranspile'));

// === +++ Start Quality Control gulp config +++ ===
// clear all file in qc foler
gulp.task('clean-qc', done => {
  gulp.src('qc/*').pipe(vinylPaths(del))
    .on('finish', () => done());
});

// copy all file/folder from src/lib to qc/lib foler
gulp.task('copy-qc-lib', done => {
  gulp.src(['src/lib/**/*']).pipe(gulp.dest('qc/lib'))
    .on('finish', () => done());
});

// copy all file/folder from src/lib to qc/lib foler
gulp.task('copy-qc-images', done => {
  gulp.src(['src/images/**/*']).pipe(gulp.dest('qc/images'))
    .on('finish', () => done());
});

// copy template qc foler
gulp.task('copy-qc-template', done => {
  gulp.src(['template/index.html']).pipe(gulp.dest('qc/index.html'))
    .on('finish', () => done());
});

gulp.task( 'qcTranspile', (done) => {
  const qcConf = webpackQC();
  webpack( qcConf.config, ( err, stat) => {
    if(err) throw new gutil.PluginError('webpack', err);
    return done();
  });
});

// build app for quality control
gulp.task('qc',gulp.series('clean-qc','copy-qc-template' , 'copy-qc-lib', 'copy-qc-images', 'qcTranspile'));
