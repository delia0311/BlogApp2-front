define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ItemCollection = require('../models/ItemCollection');
    var moment = require('moment');
    module.exports = Marionette.ItemView.extend({
        tagName: 'li',
        className:'listaArticol',
        template: '#home-Item',
        templateHelpers:{
            createDate: function(){
                var date = moment(new Date(this.model.date)).format("MMM Do YY");
                return date;
            }
        }
    });
});