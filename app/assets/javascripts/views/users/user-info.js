RapGenius.Views.UserInfoView = Backbone.View.extend({

	events: {
		"click .user-avatar-filepick": "submitUserPic",
	},

  id: "user-info",

  render: function(){
		var content = JST["users/info"]({user: this.model});
		this.$el.html(content);
		return this;
  },

	submitUserPic: function(event){
		var that = this;
		filepicker.pick(function(inkBlob){
			that.model.save({image: inkBlob.url}, {
				success: function(){
					that.render();
				},
			});
		});
	},
});