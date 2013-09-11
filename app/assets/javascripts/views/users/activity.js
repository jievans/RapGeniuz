RapGenius.Views.UserActivityView = Backbone.View.extend({

	subViews: [],

	events: {

	},

	id: "user-activity",

	render: function(){
		var that = this;
		this.collection.each(function(annotation){
			var annotationStreamView = new RapGenius.Views.StreamAnnotationView({
																			model: annotation,
																	});
		  that.subViews.push(annotationStreamView);
			that.$el.append(annotationStreamView.render().$el);
		});
		return this;
	},
});