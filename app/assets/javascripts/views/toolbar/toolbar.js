RapGenius.Views.Toolbar = Bakcbone.View.extend({
	id: "toolbar",

	render: function(){
		var content = JST["toolbar/toolbar"]({currentUser: this.model});
		this.$el.html(content);
	},
});