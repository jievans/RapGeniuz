RapGenius.Views.StreamAnnotationView = Backbone.View.extend({

	attributes: {
		class: "annotation-stream-unit",
	},

	events: {
		"click .edit-annotation-button": "showEditAnnotation",
		"submit #edit-annotation-form": "submitEditAnnotation",
		"click .delete-annotation-button": "deleteAnnotation",
	},

	render: function(){

		var header = JST["annotations/referent"]({annotation: this.model,
																		  referent: this.model.get("referent")});

		var html = this.model.get("body").replace(/\n/g, function(match){
			return "<br>";
		});

		html = html.replace(/https?:\/\/.+\S/g, function(match){
			return '<img id="annotation-image" src="' + match + '"></img>'
		});

		this.model.html = html;

		var renderedContent = JST["annotations/show"]({annotation: this.model});
		this.$el.empty();
		this.$el.append(header, renderedContent);
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

	deleteAnnotation: function(event){
		debugger;
		this.model.destroy();
	},

});