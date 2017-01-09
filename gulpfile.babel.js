'use strict'
import gulp from 'gulp'
import babel from 'gulp-babel'
import riot from 'gulp-riot'
import concat from 'gulp-concat'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import connect from 'gulp-connect'
import browserify from 'browserify'
import babelify from 'babelify'
import eventStream from 'event-stream'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import envify from 'envify/custom'
import fs from 'fs'


gulp.task('connect', () => {
  connect.server({
    root: ["./docs", "./dist"],
    livereload: true
  })
})


gulp.task('themes', function(cb) {
    return gulp.src('./src/**/*-theme.scss')
    .pipe(concat('riot-material-theme.css'))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./tmp'))
});

gulp.task('scripts', ['themes'], () => {

  var THEME_CSS = fs.readFileSync('./tmp/riot-material-theme.css', 'utf8');

  var core = browserify('./src/core/core.js')
    .transform(envify({
      THEME_CSS: THEME_CSS
    }))
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())

  var mixins = gulp.src('./src/core/mixins/**/*.js')
    .pipe(babel())

  var tags = gulp.src('./src/components/**/*.tag')
    .pipe(riot())
    .pipe(babel())

  return eventStream.merge(core, mixins, tags)
    .pipe(concat('riot-material.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('sass', () => {
  return gulp.src([
    './src/core/styles/variables.scss',
    './src/core/styles/**/*.scss',
    './src/components/**/*.scss',
    '!./src/**/*-theme.scss'
  ])
  .pipe(concat('riot-material.css'))
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {

   gulp.watch([
     './src/components/**/*.tag',
     './src/core/**/*.js',
     './src/**/*-theme.scss'
   ], ['scripts'])

   gulp.watch('./src/**/*.scss', ['sass'])

   gulp.watch(['./docs/**/*', './src/**/*'])
   .on('change', (file) => {
     gulp.src(file.path).pipe(connect.reload())
   })
})

gulp.task('default', [
  'scripts',
  'sass',
  'connect',
  'watch'
])
