//  LESSON: Cannot do this
// $div = $('<div></div>').find('div');
// console.log($div);



$(function(){

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


});