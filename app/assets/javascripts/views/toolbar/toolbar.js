RapGenius.Views.Toolbar = Backbone.View.extend({

	initialize: function(){
		if(this.model){
			this.listenTo(this.model, "change", this.render);
		}
	},

	id: "toolbar",

	render: function(){
		var content = JST["page/toolbar"]({currentUser: this.model});
		this.$el.html(content);
		return this;
	},
});