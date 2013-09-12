RapGenius.Views.UserInfoView = Backbone.View.extend({


  id: "user-info",

  render: function(){
		var content = JST["users/info"]({user: this.model});
		this.$el.html(content);
		return this;
  },
});