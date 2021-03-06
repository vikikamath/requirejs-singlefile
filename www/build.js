module.exports = {
     baseUrl: "www/js",

     // entry point with requirejs.config() usually
     mainConfigFile: 'www/js/common.js',

     // bundle almond instead of requirejs
     name: "../../bower_components/almond/almond",

     // output to directory/file to be created
     out: "../dist/bundle.min.js",

     // default uglify, uncomment to not mangle
     optimize: "uglify2",


     // paths relative to baseUrl
     paths: {
         app: 'app',
         jquery: '../../bower_components/jquery/dist/jquery.min'
     },

     // path relative to baseUrl
     include: [
        "page",
        "app/main"
    ]
}
