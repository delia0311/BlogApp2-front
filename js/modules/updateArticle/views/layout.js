define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var UpdateArticleModel = require('../models/model');

    module.exports = Marionette.ItemView.extend({
        id: 'update-article',
        template: '#updateArticle-layout' ,

        events:{
            'click #saveButton': 'saveNewArticle',
            'click #deleteButton': 'deleteThisArticle'
        },

        initialize: function(options){
            this.model = new UpdateArticleModel({
                id:options.id
            });
            this.model.fetch();
            this.listenTo(this.model, 'destroy', this.goHome);
            this.listenTo(this.model,'sync', this.render);
        },
        goHome: function() {
            Backbone.history.navigate('#home', true);
        },
        saveNewArticle: function(){
            var updateTitle = $('#updateTitle').val();
            var updateDescription = $('#updateDescription').val();
            var updateContent = $('#updateContent').val();
            var updateImage = $('#updateImage').val();

            this.model.set('title',updateTitle);
            this.model.set('description',updateDescription);
            this.model.set('content',updateContent);
            this.model.set('url_image',updateImage);

            this.model.save();

        },
        deleteThisArticle: function(){
            this.model.destroy().always(function(){
                Backbone.history.navigate('#home', true);

            })

        }

    });
});