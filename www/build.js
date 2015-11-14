{
     baseUrl: "js",

     // entry point with requirejs.config() usually
     mainConfigFile: 'js/common.js',

     // start with almond
     name: "../../bower_components/almond/almond",

     // output to directory/file to be created
     out: "../dist/main.js",

     // default uglify, uncomment to not mangle
     // optimize: "none",


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