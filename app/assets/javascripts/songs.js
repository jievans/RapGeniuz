// Is there a way to get propagation history????

// TODO: setting referent twice, need to fix
// TODO: delete annotation if song update fails
// TODO: Is there no way to prevent clearing the selection?
// TODO: Refactor errors with custom events

$(
  function(){

		$('body').on('error_added', function(event){
			$target = $(event.target);
			$target.position({
				my: "center center",
				at: "center center",
				of: $(window),
			});
			$exit = $target.find(".exit");
			$exit.position({
				my: "right top",
				at: "right-10 top+10",
				of: $target,
			});

			$exit.on('click', function(){
				$target.remove();
			});
		});

		$('.lyrics-wrapper').on('click', 'a.annotation', function(event){
			event.preventDefault();
			$anchor = $(this);
			$.ajax({
				url: $anchor.attr('href'),
				type: "GET",
				success: function(data){
					renderedContent = JST["annotation_show"]({annotation: data});
					$renderedContent = $(renderedContent);
					$anchor.after($renderedContent);
					$renderedContent.position({my: "left center",
																		 at: "right+10 center",
																		 of: $anchor});
				},
			});
		});

		// keep annotation form from being able to be annotated
		$('.lyrics-wrapper').on('mouseup', '#annotation-form', function(event){
			console.log("regsitered event in annotation form");
			event.stopPropagation();
		});

		$('.lyrics-wrapper').on('mouseup', '#annotation-show', function(event){
			console.log("registered event in annotation form");
			event.stopPropagation();
		});



    // ask about the difference between click and mouseup, and how they interact
    // important thing seems to be that they're the same
    $('.lyrics-wrapper').on('mouseup', function(event){

			// this line should be unnecessary

			if($(event.target).attr('id') === 'explain-button') return true;
			$('#annotation-form').remove();
			$('#annotation-show').remove();


			console.log('got to second part');
      var previous_button = $('#explain-button');
      if (previous_button.length > 0 ) previous_button.remove();

      var selection = window.getSelection();
			if (selection.rangeCount === 0) return true;
      var range = selection.getRangeAt(0);
			if (containsAnchor(range)) return true;

      var text = range.toString();
      if ($.trim(text) === "") return true;

      clonedRange = range.cloneRange();
      clonedRange.collapse(false);

      annotate_button = $("<span>",
                          {id: "explain-button", text: "Annotate"} )[0];
      clonedRange.insertNode(annotate_button);
    });

		var containsAnchor = function(range){
			console.log(hasAnchor(range));
			if (hasAnchor(range)){
				message = {};
				message["Invalid Selection"] = "One cannot annotate that which has already been annotated...dude.";
				var $errorMessage = $(JST["errors/message"]({messages: message}));
				$('body').append($errorMessage);
				$errorMessage.trigger('error_added');
				return true;
			}

			return false;
		};

		var hasAnchor = function(range){
			var $anchorParents = $(range.startContainer).parents();
			var $offsetParents = $(range.endContainer).parents();
			var $childNodes = $(range.cloneContents().childNodes);
			console.log($childNodes);
			return $childNodes.is('a') ||
				 		 $anchorParents.is('a') || $offsetParents.is('a');
		};


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

			console.log(range.toString());


			var postError = function(errorObject){
				$error = $(JST["errors/message"]({messages: errorObject}))
				$('body').append($error);
				$error.position({
					my: "center center",
					at: "center center",
					of: $(window),
				});

				$exit = $error.find(".exit");
				$exit.position({
					my: "right top",
					at: "right-10 top+10",
					of: $error,
				});

				$exit.on("click", function(){
					$error.remove();
				});
			}


     // annotation_form = $("<span>",
 //                          {id: "explain-button", text: "Annotate"} )[0];

 // if updating song data fails, just delete the annotation

			setTimeout(function(){

				$.ajax({
				url: "/annotations",
				type: "POST",
				data: {referent: range.toString()},
				success: function(first_data){
					$button.remove();
					var id = first_data.id;
					clonedRange.insertNode($form[0]);
					$form.on("click", "#submit-button", function(event){
						$anchor = $('<a>', { "class": "annotation", href: "/annotations/" + id, "data-annotation-id": id });
						var formData = $form.serializeJSON();
						formData.annotation.referent = range.toString();
						$.ajax({
							url: "/annotations/" + id,
							data: formData,
							type: "PUT",
							success: function(second_data){
								range.surroundContents($anchor[0]);
								$form.remove();
								var lyrics = $('.lyrics-wrapper').html();
								var songData = {song: {lyrics: lyrics}};
								$.ajax({
									url: "/songs/" + $('.song-info').attr('data-song-id'),
									type: "PUT",
									data: songData,
									error: function(response){
										// where we left off
										var selector = 'a[data-annotation-id="' + id + '"]';
										$(selector).contents().unwrap();
										var errorObject = response.responseJSON;
										postError(errorObject);
									},
								});
							},
						});

					});
				},
			});

			}, 200);

    });


  }
);




// $('.lyrics-wrapper').on("click", function(){alert("You clicked");});
