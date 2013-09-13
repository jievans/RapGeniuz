RapGenius.Views.UserInfoView = Backbone.View.extend({

	events: {
		"click .user-avatar-filepick": "submitUserPic",
		"submit #edit-user-form": "updateUser",
	//	"hidden.bs.modal #editUserModal": "updateUser",
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

	updateUser: function(event){
		event.preventDefault();
		var that = this;

		var saved = false;
		var hidden = false;

		$("#editUserModal").one("hidden.bs.modal", function () {
			hidden = true;

			maybeRerender();
		}).modal('hide');

		var userData = $("#edit-user-form").serializeJSON();

		this.model.save(userData,{
			success: function(model){
				saved = true;

				maybeRerender();
			},
		});

		function maybeRerender () {
			if (saved && hidden) {
				that.render();
			}
		}
	},


});