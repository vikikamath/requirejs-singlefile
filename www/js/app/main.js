define(['require','jquery', './lib','./controller/c1', './controller/c2', './model/m1', './model/m2'], function (require, $) {
    var lib = require('./lib');

    //A fabricated API to show interaction of
    //common and specific pieces.
    // controller.setModel(model);
    $(function () {
        $('select').change(function (){

            var _ctrllrModel = $( "select option:selected" ).val().split('|');

            require(_ctrllrModel, function (c, m) {
                c.setModel(m);
                c.render(lib.getBody())
            });

            // controller.render(lib.getBody());
        } )
        
    });
});
