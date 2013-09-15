RapGenius.Views.Toolbar = Backbone.View.extend({

	initialize: function(){
		if(this.model){
			this.listenTo(this.model, "change", this.render);
		}
	},

	id: "toolbar",

	events: {
		"click #login-button": "submitLogin",
	},

	render: function(){
		var content = JST["page/toolbar"]({currentUser: this.model});
		this.$el.html(content);
		return this;
	},

	submitLogin: function(event){
		var data = $("#login-form").serializeJSON();
		$.ajax({
			url: "/session",
			type: "POST",
			data: data,
			success: function(data){
				$("#login-modal").one('hidden.bs.modal', function(){
					RapGenius.currentUser.set(data);
				}).hide();
			},
			error: function(response){
				$errors = $('<div class="alert alert-danger">').html(response
																									.responseJSON.errors);
				$("#login-modal .modal-header").append($errors);
			},

		});
	},


});