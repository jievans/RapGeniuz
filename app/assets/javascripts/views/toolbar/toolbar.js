RapGenius.Views.Toolbar = Backbone.View.extend({

	initialize: function(){

		this.listenTo(this.model, "change", this.render);

	},

	id: "toolbar",

	events: {
		"submit #login-form": "submitLogin",
		"submit #create-account-form": "submitCreateAccount",
		"click #logout": "logout",
    "keyup #search-field": "provideSearchResults",
	},

	render: function(){
		console.log("Calling toolbar render");
		var content = JST["page/toolbar"]({currentUser: this.model});
		console.log(this.model);
		this.$el.html(content);
		return this;
	},
  
  provideSearchResults: function(event){
    search_value = $("#search-field").val();
    $.ajax({
      url: "/search",
      type: "GET",
      data: {search: search_value},
      success: function(response){
        console.log(response);
        $("#search-results").html(response);
      },
      error: function(response){
        alert("there was a problem");
        console.log(response);
      },
    });
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

	submitCreateAccount: function(event){
		event.preventDefault();
		var data = $("#create-account-form").serializeJSON();

		$.ajax({
			url: "/users",
			type: "POST",
			data: data,
			success: function(data){
				$("#create-account-modal").one('hidden.bs.modal', function(){
					RapGenius.currentUser.set(data);
				}).modal('hide');
			},

			error: function(response){
				_.each(response.responseJSON.errors, function(error){
					console.log("inside callback");
					$error = $('<div class="alert alert-danger">').html(error);
					$("#create-account-alerts").append($error);
				});
			},

		});
	},

	logout: function(event){
		$.ajax({
			url: "/session",
			type: "Delete",
			success: function(response){
				var propertyReset = {};
				for(var property in RapGenius.currentUser.attributes){
					propertyReset[property] = undefined;
				}

				RapGenius.currentUser.set(propertyReset);
			},
			error: function(){
				alert("There was an error in logging out. Please try again.");
			},
		});
	},


});