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
		$("#body").append(this.view.render().$el);
	},

	renderWithAnnotation: function(id){
		this.view.$el.remove();
		$("#body").append(this.view.render().$el);
		$(function(){
			$("[data-annotation-id = " + id + "]").trigger("click");
		});
	},

});