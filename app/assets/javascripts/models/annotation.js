RapGenius.Models.Annotation = Backbone.Model.extend({
	urlRoot: "/annotations",

	parse: function(data){
		if (data.song){
			this.song = new RapGenius.Models.Song(data.song);
			if(data.song.album){
				this.song.album = new RapGenius.Models.Album(data.song.album);
				delete data.song.album;
			}

			if(data.song.artist){
				this.song.artist = new RapGenius.Models.Artist(data.song.artist);
				delete data.song.artist;
			}
			delete data.song;
		}
		return data;
	},

});