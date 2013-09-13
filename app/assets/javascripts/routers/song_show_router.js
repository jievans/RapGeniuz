RapGenius.Routers.SongShowRouter = Backbone.Router.extend({

	initialize: function(options){
		this.view = options.view;
		Backbone.history.start();
	},

	routes: {
	  ":id": "showAnnotation",
	},

	showAnnotation: function(id){
		console.log("Router firing");
		console.log($("[data-annotation-id = " + id + "]").length);
		$("[data-annotation-id = " + id + "]").trigger("click");
	},
});