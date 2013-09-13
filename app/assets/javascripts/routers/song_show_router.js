RapGenius.Routers.SongShowRouter = Backbone.Router.extend({

	initialize: function(options){
		this.view = options.view;
		Backbone.history.start();
	},

	routes: {
		"":    "renderNormal",
	  ":id": "renderWithAnnotation",
	},

	renderNormal: function(id){
		console.log("rendering from renderNormal");
		$("#body").append(this.view.render().$el);
	},

	renderWithAnnotation: function(id){
		console.log("rendering from renderWithAnnotation");
		$("#body").append(this.view.render().$el);
		$("[data-annotation-id = " + id + "]").trigger("click");
	},

});