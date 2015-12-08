'use strict';

var gulp = require('gulp');
var optimize = require('gulp-requirejs-optimize');
var buildJs = require('./www/build');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var buildConfig = typeof buildJs === 'object' ? buildJs: typeof buildJs === 'function' ? (buildJs): {};


gulp.task('optimize', function(){
	gulp.src("./www/js/**/*.js")
		.pipe(optimize(buildConfig))
		.pipe(gulp.dest('dist'));
});



gulp.task('optimizeCss', function() {
	gulp.src(["www/css/remain.css", "www/css/tmp.css"], {base: 'www/css'})
		.pipe(minifyCss())
		.pipe(concatCss("bundle.min.css"))
		.pipe(gulp.dest("dist"))
});

gulp.task("default", ["optimize", "optimizeCss"]);
