'use strict'
import gulp from 'gulp'
import babel from 'gulp-babel'
import riot from 'gulp-riot'
import concat from 'gulp-concat'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import connect from 'gulp-connect'
import eventStream from 'event-stream'


gulp.task('connect', () => {
  connect.server({
    root: ["./docs", "./dist"],
    livereload: true
  })
})

gulp.task('scripts', () => {

  var tags = gulp.src('./src/components/**/*.tag')
    .pipe(riot())

  var core = gulp.src([
    './src/core/**/*.js'
  ])
  .pipe(babel())

  return eventStream.merge(tags, core)
    .pipe(concat('riot-material.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('sass', () => {
  return gulp.src([
    './src/core/styles/variables.scss',
    './src/core/styles/base.scss',
    './src/components/**/*.scss'
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
   gulp.watch('./src/components/**/*.tag', ['scripts'])
   gulp.watch('./src/core/**/*.js', ['scripts'])
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
