RapGenius.Views.ShowAnnotationView = Backbone.View.extend({

	id: "annotation-display",

	events: {
		"click .edit-annotation-button": "showEditAnnotation",
		"submit #edit-annotation-form": "submitEditAnnotation",
	},

	render: function(){
		var html = this.model.get("body").replace(/\n/g, function(match){
			return "<br>";
		});

		html = html.replace(/https?:\/\/.+\S/g, function(match){
			return '<img src="' + match + '"></img>'
		});

		var renderedContent = JST["annotations/show"]({annotation: html});
		var $renderedContent = $(renderedContent);
		this.$el.html($renderedContent);
		return this;
	},

	showEditAnnotation: function(event){
		var content = JST["annotations/edit"]({annotation: this.model});
		this.$el.html(content);
	},

	submitEditAnnotation: function(event){
		event.preventDefault();
		var that = this;
		var updates = $('#edit-annotation-form').serializeJSON();
		this.model.save(updates, {
			success: function(model){
				that.render();
			},
		});
	},

});