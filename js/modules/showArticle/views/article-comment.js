define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var UpdateCommentModel = require('modules/updateComment/models/model');
    var moment = require('moment');

    module.exports = Marionette.ItemView.extend({
        id: 'article-comment',
        template: '#showArticle-article-comment',
        templateHelpers: {
            createDate: function(){
                var date = moment(this.date).subtract(0, 'days').calendar();
                return date;
            }

        }
    });
});