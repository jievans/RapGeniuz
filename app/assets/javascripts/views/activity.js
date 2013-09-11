RapGenius.Views.UserActivityView = Backbone.View.extend({
	id: "user-activity",

	render: function(){
		var activityColumn = JST["users/activity"]();
		this.$el.html(activityColumn);
		return this;
	},
});