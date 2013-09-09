RapGenius.Views.LyricsView = Backbone.View.extend({

  className: "lyrics-wrapper",

  render: function(){
    this.$el.html(this.model.lyrics);
    return this;
  },

});