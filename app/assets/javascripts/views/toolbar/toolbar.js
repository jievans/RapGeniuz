RapGenius.Views.Toolbar = Backbone.View.extend({

	initialize: function(){
		if(this.model){
			this.listenTo(this.model, "change", this.render);
		}
	},

	id: "toolbar",

	events: {
		"submit #login-form": "submitLogin",
	},

	render: function(){
		var content = JST["page/toolbar"]({currentUser: this.model});
		this.$el.html(content);
		return this;
	},

	submitLogin: function(event){
		event.preventDefault();
		var data = $("#login-form").serializeJSON();
		$.ajax({
			url: "/session",
			type: "POST",
			data: data,
			success: function(data){
				$("#login-modal").one('hidden.bs.modal', function(){
					RapGenius.currentUser.set(data);
				}).modal('hide');
			},
			error: function(response){
				$errors = $('<div class="alert alert-danger">').html(response
																									.responseJSON.errors);
				$("#login-alerts").append($errors);
			},

		});
	},


});