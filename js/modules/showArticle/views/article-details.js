define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'article-details',
        template: '#showArticle-article-details',
        templateHelpers: {
            createDate: function(){
                var date = moment(this.date).subtract(0, 'days').calendar();
                return date;
            }

        }
    });
});