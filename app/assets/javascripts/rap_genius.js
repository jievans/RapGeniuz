window.RapGenius = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Repositories: {
    Songs: {},
		UserAnnotationStreams: {},
		UserSongStreams: {},
  },
	SignedIn: false,
  initialize: function() {
  }
};

$(document).ready(function(){

  if($('#song-show').length > 0){

    var json = RapGenius.Repositories.Songs.show;

    var model = new RapGenius.Models.Song(json);

    var songShowView = new RapGenius.Views.SongShowView({model: model});
    // $('#song-wrapper').html(songShowView.render().$el);

    $('#song-show').html(songShowView.render().$el);

  }


  RapGenius.initialize();
});
