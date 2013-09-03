$(
  function(){

    // ask about the difference between click and mouseup, and how they interact
    // important thing seems to be that they're the same
    $('.lyrics-wrapper').on('mouseup', function(event){

			// this line should be unnecessary


			if($(event.target).attr('id') === 'explain-button') return true;
			console.log('got to second part');
      var previous_button = $('#explain-button');
      if (previous_button.length > 0 ) previous_button.remove();

      var selection = window.getSelection();
      var range = selection.getRangeAt(0);

      var text = range.toString();
      if ($.trim(text) === "") return true;

      clonedRange = range.cloneRange();
      clonedRange.collapse(false);

      annotate_button = $("<span>",
                          {id: "explain-button", text: "Annotate"} )[0];
      clonedRange.insertNode(annotate_button);
    });

		// TODO: Is there no way to prevent clearing the selection?

    $('.lyrics-wrapper').on('mousedown', '#explain-button', function(event){
      event.stopPropagation();
		//	event.preventDefault();
      var selection = window.getSelection();
			var range = selection.getRangeAt(0);
      $button = $(this);
      // is it possible to insert information through pseudo-selector
      $button.empty();
      $button.addClass('loading');

			clonedRange = range.cloneRange();
			clonedRange.collapse(false);
			formContent = JST["annotation_form"]();
			$form = $(formContent);

			clonedRange.insertNode($form[0]);

     // annotation_form = $("<span>",
 //                          {id: "explain-button", text: "Annotate"} )[0];

			setTimeout(function(){

				$.ajax({
				url: "/annotations",
				type: "POST",
				success: function(data){
					$button.remove();
					var id = data.id;
					$anchor = $('<a>', { href: "/annotations/" + id });
					range.surroundContents($anchor[0]);
				},
			});

			}, 200);

    });


  }
);




// $('.lyrics-wrapper').on("click", function(){alert("You clicked");});
