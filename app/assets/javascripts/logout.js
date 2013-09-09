$(function(){

	$('body').on('click', '#logout', function(event){

		$.ajax({
			url: "/session",
			type: "DELETE",
			success: function(){
				location.reload(true);
			},
			error: function(){
				alert("There was an error in logging out.  Please try again.");
			},
		});

	});

});