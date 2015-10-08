define(function(require, exports, module) {
    var Marionette = require('marionette');
    var RouteController = require('./controllers/route-controller');

    module.exports = Marionette.AppRouter.extend({
        controller: RouteController,
        appRoutes: {

            '#show-article/:articleId/update-comment/:commentId': 'showUpdateComment'

        }
    });
});