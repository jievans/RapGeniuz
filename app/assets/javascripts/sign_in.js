//  LESSON: Cannot do this
// $div = $('<div></div>').find('div');
// console.log($div);



$(function(){

	form_authenticity_token = $('meta[name="csrf-token"]').attr("content");

	$('#sign-in').on('click', function(){

		$('body').append(JST["session/new"]());

		$form = $('#sign-in-form');

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

	$('body').on('click', '#sign-in-form', function(event){
		event.preventDefault();
		console.log("We're inside the event.");
		console.log($(event.target));
		if ($(event.target).hasClass('exit')) $(this).remove();

		if($(event.target).hasClass('signin-button')){

			console.log("You clicked on the signin-button");
			$form = $('#sign-in-form');
			var data = $form.serializeJSON();

			$.ajax({
				url: "/session",
				type: "Post",
				data: data,
				success: function(response){
					location.reload(true);
				},
				error: function(response){
					var errors = response.responseJSON.errors;
					$('#sign-in-form').prepend(errors);
				},
			});


		}

	});




});