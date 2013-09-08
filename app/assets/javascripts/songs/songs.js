// Is there a way to get propagation history????

// TODO: setting referent twice, need to fix
// TODO: delete annotation if song update fails
// TODO: Is there no way to prevent clearing the selection?
// TODO: Refactor errors with custom events

// 'use strict'

$(
	function(){

		$('body').on('error_added', function(error_event){
			var $target = $(error_event.target);
			$target.position({
				my: "center center",
				at: "center center",
				of: $(window),
			});
			var $exit = $target.find(".exit");
			$exit.position({
				my: "right top",
				at: "right-10 top+10",
				of: $target,
			});

			$exit.on('click', function(exit_event){
				console.log("clicking on x");
				// debugger changes the console.log output;
				$target.remove();
			//	console.log(form_event.target);

			//	$(error_event.target).remove();

			});
		});

    $('.edit-lyrics').on('click', function(event){

      var id = $('.song-info').attr('data-song-id');
      $.ajax({
        url: "/songs/" + id,
        type: "GET",
        dataType: "json",
        success: function(data){
          console.log(data);
          $('.lyrics-wrapper').empty();
          var content = JST["songs/edit"]({song: data});
          $('.lyrics-wrapper').html(content);
        },
      });
    });

    $('body').on('submit', '#edit-song-form', function(event){
      event.preventDefault();
      var id = $('.song-info').attr('data-song-id');
      var lyricsData = {lyrics: $(this).find("textarea").val(), }
      $.ajax({
        url: "/songs/" + id + "/markdown",
        type: "Post",
        data: lyricsData,
        success: function(data){
          $(".lyrics-wrapper").html(data.lyrics);
        },
      });
    });

		$('.lyrics-wrapper').on('click', 'a.annotation', function(event){
			event.preventDefault();
			var $anchor = $(this);
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
			$('.error-message').remove();


			console.log('got to second part');
			var previous_button = $('#explain-button');
			if (previous_button.length > 0 ) previous_button.remove();

			var selection = rangy.getSelection();
			if (selection.rangeCount === 0) return true;

			var range = selection.getRangeAt(0);
			if ($.trim(range.toString()) === "") return true;
			console.log(selection.rangeCount);
			if (containsAnchor(range)) return true;



			clonedRange = range.cloneRange();
			clonedRange.collapse(false);

			annotate_button = $("<span>",
			{id: "explain-button", text: "Annotate"} )[0];
			clonedRange.insertNode(annotate_button);
		});

		var containsAnchor = function(range){
			if (hasAnchor(range)){
				var message = {};
				message["Invalid Selection"] = "One cannot annotate that which has already been annotated...dude.";
				console.log("Adding an error");
				var $errorMessage = $(JST["errors/message"]({messages: message}));
				$('body').append($errorMessage);

		//		$('body').find('.error-message').trigger('error_added');
				$errorMessage.trigger('error_added');
				return true;
			}

			return false;
		};

		var hasAnchor = function(range){
			// console.log(range);
			// 			console.log($(range.getNodes([1])));
			// return $(range.getNodes([1])).is('a');
			var $anchorParents = $(range.startContainer).parents();
			var $offsetParents = $(range.endContainer).parents();
			var containsAnchors = $(range.getNodes([1])).is('a');
			// 			var $childNodes = $(range.cloneContents().childNodes);
			// 			console.log($childNodes);
			return containsAnchors ||
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
				var $error = $(JST["errors/message"]({messages: errorObject}))
				$('body').append($error);
				$error.position({
					my: "center center",
					at: "center center",
					of: $(window),
				});

				var $exit = $error.find(".exit");
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

				$button.remove();
				clonedRange.insertNode($form[0]);
				$form.on("click", "#submit-button", function(event){
					var formData = $form.serializeJSON();
					formData.annotation.referent = range.toString();
					formData.annotation.song_id = $('.song-info').attr('data-song-id');
					$.ajax({
						url: "/annotations",
						data: formData,
						type: "POST",
						success: function(data){
							var id = data.id;
							$anchor = $('<a>', { "class": "annotation", href: "/annotations/" + id, "data-annotation-id": id });
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

			}, 200);

	});


});




// $('.lyrics-wrapper').on("click", function(){alert("You clicked");});
