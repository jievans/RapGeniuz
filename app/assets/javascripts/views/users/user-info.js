RapGenius.Views.UserInfoView = Backbone.View.extend({

	initialize: function(options){
		if(RapGenius.currentUser &&
			RapGenius.currentUser.get("id") == this.model.get("id")){
			this.model = RapGenius.currentUser;
		}

		this.listenTo(this.model, "change", this.render);
	},

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

		// $("#editUserModal").one("hidden.bs.modal", function () {
	// 		hidden = true;
	//
	// 		// that.model.save(userData);
	//
	// 		maybeRerender();
	// 	}).modal('hide');





		// this.model.save(userData,{
// 			silent: true,
// 			success: function(model){
// 				saved = true;
//
// 				maybeRerender();
// 			},
// 		});

		// function maybeRerender () {
	// 		if (saved && hidden) {
	// 			that.render();
	// 		}
	// 	}


	},


});