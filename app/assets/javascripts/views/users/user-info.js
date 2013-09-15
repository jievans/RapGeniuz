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

	// switchModel: function(){
//
// 		if(RapGenius.currentUser != this.model &&
// 		RapGenius.currentUser.get("id") == this.model.get("id")){
// 			this.stopListening(this.model);
// 			this.oldModel = this.model;
// 			this.model = RapGenius.currentUser;
// 			this.listenTo(this.model, "change", this.render);
// 			this.render();
// 		}
//
// 		if(RapGenius.currentUser == this.model &&
// 			!RapGenius.currentUser.get("id")){
// 			this.stopListening(this.model);
// 			this.listenTo(RapGenius.currentUser, "change", this.switchModel);
// 			this.model = this.oldModel;
// 			this.listenTo(this.model, "change", this.render);
// 			this.render();
// 		} // else {
// // 			this.model = this.oldModel;
// // 			debugger;
// // 			console.log(this.oldModel);
// // 			this.render();
// // 		}
// 	},

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