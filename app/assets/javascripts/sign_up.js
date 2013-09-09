$(function(){

	$('#sign-up').on('click', function(){

		$('body').append(JST["users/new"]());

		$form = $('#sign-up-form');

		$exit = $('.exit');

		$form.position({
			my: "center center",
			at: "center center",
			of: $(window)
		});

		$exit.position({
			my: "right top",
			at: "right-10 top+10",
			of: $form
		});

	});

	$('body').on('click', '#sign-up-form', function(event){
		event.preventDefault();
		console.log("We're inside the event.");
		console.log($(event.target));
		if ($(event.target).hasClass('exit')) $(this).remove();

		if($(event.target).hasClass('signup-button')){

			$form = $('#sign-up-form');
			var data = $form.serializeJSON();

			$.ajax({
				url: "/users",
				type: "Post",
				data: data,
				success: function(response){
					window.location.replace(response.url)
				},
			});


		}
	});



});