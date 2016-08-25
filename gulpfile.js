/// <binding Clean='moveLibs' />

var gulp = require('gulp');
var zip=require('gulp-zip');
var unzip=require('gulp-unzip');
var download=require('gulp-download');
var fs = require("fs");
var rimraf = require("rimraf");
var ncp = require("ncp").ncp;
var ts = require('gulp-typescript');
var path = require('path');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var sass = require('gulp-sass');
var less=require('gulp-less');
var react=require('gulp-react');

var server="server";
var client="client";
var styles="styles";

var wwwroot="wwwroot";
var libDir=wwwroot+"/libs";
var bsDir= wwwroot+"/bootstrap";
var bsEditor=wwwroot+"/bootstrapeditor"
var appDir=wwwroot+"/app";
var scriptDir=wwwroot+"/script";
var cssDir=wwwroot+"/css";
var stylesDir=wwwroot+"/styles"

var libFiles = [
    'node_modules/jquery/dist/jquery.js',
	'node_modules/requirejs/require.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/systemjs/dist/system-polyfills.js',

    'node_modules/react/dist/react.js',
	'node_modules/react/dist/react-with-addons.js',
	'node_modules/react-dom/dist/react-dom.js',
    'node_modules/react-router/umd/ReactRouter.js',
];

var solutionFiles=["server/*","wwwroot/*","client/*","styles/*","tsconfig.json","package.json","gulpfile.js"];


gulp.task('package',["build"],function(){
	ncp(server+"/node_modules","server_node_modules",function(){
		rimraf(server+"/node_modules",function(){
			var zipstream=gulp.src(solutionFiles,{base:'.'})
				.pipe(zip("solutions.zip"))
				.pipe(gulp.dest("."));
			zipstream.on('end',function(){
				ncp("server_node_modules",server+"/node_modules",function(){
                    rimraf("server_node_modules",function(){
					   console.log("Created solutions.zip");
                    });
				});
			});
		});
	});
});


function testDownloadTemplate(dir,file){
	fs.stat(dir+'/'+file,function(err,stat){
		if (err)
			download("http://tutorit.net/courses/templates/"+dir+"/"+file).pipe(gulp.dest(dir));
	});
}

gulp.task('templates',function(){
	testDownloadTemplate(".","tsconfig.json");
	fs.stat(server,function(err,stat){
		if (err) fs.mkdirSync(server);
		testDownloadTemplate(server,'server.js');
		testDownloadTemplate(server,'webapi.js');
		testDownloadTemplate(server,'websocket.js');
		testDownloadTemplate(server,'package.json');
	});
	fs.stat(client,function(err,stat){
		if (err) fs.mkdirSync(client);
		testDownloadTemplate(client,'reacttest.jsx');
	});
	fs.stat(styles,function(err,stat){
		if (err) fs.mkdirSync(styles);
		testDownloadTemplate(styles,'lesstest.less');
		testDownloadTemplate(styles,'sasstest.scss');
	});
	fs.stat(wwwroot,function(err,stat){
		if (err) fs.mkdirSync(wwwroot);
		testDownloadTemplate(wwwroot,'index.html');
		fs.stat(wwwroot+'/images',function(err,stat){
			if (err) fs.mkdirSync(wwwroot+'/images');
			testDownloadTemplate(wwwroot+'/images','books.gif');
			testDownloadTemplate(wwwroot+'/images','bookicon.jpg');
		});
        fs.stat(stylesDir,function(err,stat){
            if (err) fs.mkdirSync(stylesDir);
            testDownloadTemplate(stylesDir,'mystyles.css');
        });
        fs.stat(scriptDir,function(err,stat){
            if (err) fs.mkdirSync(scriptDir);
            testDownloadTemplate(scriptDir,'myscripts.js');
        });
        fs.stat(cssDir,function(err,stat){
            if (err) fs.mkdirSync(cssDir); 
        });
        fs.stat(appDir,function(err,stat){
            if (err) fs.mkdirSync(appDir); 
        });
	});
	return 0;
});


gulp.task('moveLibs',['templates'], function () {
    rimraf(libDir, function () {
        fs.mkdir(libDir, function (a) {
            gulp.src(libFiles).pipe(gulp.dest(libDir));
        });
    });
    rimraf(bsDir, function () {
        ncp("node_modules/bootstrap/dist",
             "wwwroot/bootstrap", function (err) {
                 console.log("Created", bsDir);
             });
    });
    rimraf(bsEditor,function(){
        fs.mkdir(bsEditor,function(){
            ncp("node_modules/bootstrap-wysiwyg/css",bsEditor+"/css",function(){
                ncp("node_modules/bootstrap-wysiwyg/src",bsEditor+"/js",function(){
                    console.log("Created wwwroot/bootstrapeditor");
                });
            });
        });
    });
	return 0;
});

gulp.task("clean",function(){
    rimraf(appDir, function () {
        fs.mkdir(appDir, function () {
            console.log("Cleared",appDir)
        });
    });
    rimraf(cssDir, function () {
        fs.mkdir(cssDir, function () {
            console.log("Cleared",cssDir)
        });
    });
});

gulp.task('less', function () {
  return gulp.src('./styles/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(cssDir));
});

gulp.task('sass', function () {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDir));
});


gulp.task("jsxES5",function(){
    return gulp.src('./clientES5/**/*.jsx')
		.pipe(react())
		.pipe(gulp.dest(appDir));
}); 

gulp.task("jsxES6",function(){
    var x=browserify({
        entries: './clientES6/app.jsx',
        extensions: ['.jsx','.js'],
        debug: true
      })
      .transform(babelify.configure({presets: ["es2015","react"]}))
      .bundle()
      .pipe(source('bundledapp.js'))
      .pipe(gulp.dest(appDir));
}); 

 
gulp.task("build",["less","sass","jsxES5","jsxES6"],function(){
	console.log("Compile all");
});

gulp.task("default",["moveLibs"],function(){
	
});