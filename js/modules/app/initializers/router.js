define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var BlogRouter = require('modules/blog/router');

    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new BlogRouter();
            });
        }
    });

    module.exports = new RouterInitializer();
});
