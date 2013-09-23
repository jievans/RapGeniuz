RapGenius.Views.UserInfoView = Backbone.View.extend({

	initialize: function(options){
		// this.listenTo(RapGenius.currentUser, "change", this.switchModel);
		this.listenTo(this.model, "change", this.render);
		this.listenTo(this.model, "change", this.checkCurrentUser);
		this.listenTo(RapGenius.currentUser, "change", this.render);
	},

	id: "user-info",

	events: {
		"click .user-avatar-filepick": "submitUserPic",
		"submit #edit-user-form": "updateUser",
	//	"hidden.bs.modal #editUserModal": "updateUser",
	},

	checkCurrentUser: function(){
		if (RapGenius.currentUser.get("id") == this.model.get("id")){
			RapGenius.currentUser.set(this.model.attributes);
		}
	},

  render: function(){
		var content = JST["users/info"]({user: this.model});
		this.$el.html(content);
		return this;
  },

	submitUserPic: function(event){
		var that = this;
		filepicker.pick(function(inkBlob){
			that.model.save({image: inkBlob.url});
		});
	},

	updateUser: function(event){
		event.preventDefault();
		var that = this;

		var saved = false;
		var hidden = false;

		var userData = $("#edit-user-form").serializeJSON();

		$("#editUserModal").one("hidden.bs.modal", function () {

			that.model.save(userData);

		}).modal('hide');

	},


});