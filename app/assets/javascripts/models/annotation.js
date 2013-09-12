RapGenius.Models.Annotation = Backbone.Model.extend({
	urlRoot: "/annotations",

	parse: function(data){
		if (data.song){
			if(data.song.album){
				this.album = data.song.album;
				delete data.song.album;
			}

			if(data.song.artist){
				this.artist = data.song.artist;
				delete data.song.artist;
			}

			this.song = data.song;
			delete data.song;
		}
		return data;
	},

});