define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var UpdateCommentModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'update-comment',
        template: '#updateComment-layout' ,

        events:{
            'click #saveButtonComment': 'saveNewComment',
            'click #deleteButtonComment': 'deleteThisComment'
        },

        initialize: function(options){
            this.model = new UpdateCommentModel({
                articleId:options.articleId,
                commentId:options.commentId
            });
            this.model.fetch();
            this.listenTo(this.model, 'destroy', this.goHome);
            this.listenTo(this.model,'sync', this.render);
        },
        goHome: function() {
            Backbone.history.navigate('#show-article/'+this.options.articleId, true);
        },
        saveNewComment: function(){
            var updateContent = $('#updateContent').val();

            this.model.set('content',updateContent);
            this.model.url = 'http://localhost:8081/blog-rest-service/article/' + this.options.articleId + '/comment/' + this.options.commentId;

            var self = this;

            this.model.save().always(function(){
                Backbone.history.navigate('#show-article/' + self.options.articleId, true);
            });

        },
        deleteThisComment: function(){

            this.model.url = 'http://localhost:8081/blog-rest-service/article/' + this.options.articleId + '/comment/' + this.options.commentId;

            var self = this;

            this.model.destroy().always(function(){
                Backbone.history.navigate('#show-article/' + self.options.articleId, true);
            });

        }

    });
});