RapGenius.Views.SongShowView = Backbone.View.extend({

//  lyricsView: new RapGenius.Views.Lyrics({model: this.model}),
  events: {
    "click .annotation": "displayAnnotation",
    "mouseup .lyrics-wrapper": "showAnnotateButton",
    "mousedown #explain-button": "makeAnnotation",
  //  "submit #annotation-form": "submitAnnotation",
  },


  render: function(){
    console.log("render being called");
     $el = this.$el;
//     $el.html(lyricsView.render().$el);
//     $editLyrics = $('<span>').attr('class', 'button edit-lyrics');
//     $editLyrics.html("Edit Lyrics");
    var renderedContent = JST["songs/show"]({song: this.model});
    $el.html(renderedContent);
    return this;
  },

  displayAnnotation: function(event){
    console.log("We are in displayAnnotation");
		event.preventDefault();
    event.stopPropagation();
    var that = this;
		var $anchor = $(event.target);
		$.ajax({
			url: $anchor.attr('href'),
			type: "GET",
			success: function(data){
				renderedContent = JST["annotation_show"]({annotation: data});
				$renderedContent = $(renderedContent);
				that.$el.append($renderedContent);
				$renderedContent.position({my: "left center",
																	 at: "right+10 center",
																	 of: $anchor});
			},
		});
	},

  positionMessage: function(message){
			var $message = message;
			$message.position({
				my: "center center",
				at: "center center",
				of: $(window),
			});
			var $exit = $message.find(".exit");
			$exit.position({
				my: "right top",
				at: "right-10 top+10",
				of: $message,
			});

			$exit.on('click', function(exit_event){
				console.log("clicking on x");
				// debugger changes the console.log output;
				$message.remove();
			//	console.log(form_event.target);

			//	$(error_event.target).remove();

			});
	},

  containsAnchor: function(range){
			if (this.hasAnchor(range)){
				var message = {};
				message["Invalid Selection"] = "One cannot annotate that which has already been annotated...dude.";
				console.log("Adding an error");
				var $errorMessage = $(JST["errors/message"]({messages: message}));
				this.$el.append($errorMessage);

		//		$('body').find('.error-message').trigger('error_added');

          this.positionMessage($errorMessage);
      //	$errorMessage.trigger('message_added');
				return true;
			}

			return false;
		},

  hasAnchor: function(range){
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
		},



  showAnnotateButton: function(event){

			// this line should be unnecessary
			if($(event.target).attr('id') === 'explain-button') return true;

      $('#annotation-show').remove();
      // why is this line necessary???
      if($(event.target).hasClass('annotation')) return true;

      if($(".error-message").length > 0){
        this.render();
        return true;
      }

			console.log('got to second part');
			var previous_button = $('#explain-button');
			if (previous_button.length > 0 ) previous_button.remove();

			var selection = rangy.getSelection();


      if (selection.rangeCount === 0){
        this.render();
        return true;
      }

			var range = selection.getRangeAt(0);

			if ($.trim(range.toString()) === "") {
        this.render();
        return true;
      }
			console.log(selection.rangeCount);
			if (this.containsAnchor(range)) return true;



			clonedRange = range.cloneRange();
			clonedRange.collapse(false);

			annotate_button = $("<span>",
			{id: "explain-button", text: "Annotate"} )[0];
			clonedRange.insertNode(annotate_button);
	},

  makeAnnotation: function(event){
      var that = this;
			event.stopPropagation();
			//	event.preventDefault();
			var selection = window.getSelection();
			var range = selection.getRangeAt(0);
			var $button = $(event.target);
			// is it possible to insert information through pseudo-selector
			$button.empty();
			$button.addClass('loading');

			var clonedRange = range.cloneRange();
			clonedRange.collapse(false);
			var formContent = JST["annotation_form"]();
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
        var $dummy = $('<span>');
				// clonedRange.insertNode($form[0]);
        clonedRange.insertNode($dummy[0]);
        that.$el.append($form);
        $form.position({
          my: "left center",
          at: "right+300 center",
          of: $dummy,
        });
        $dummy.remove();

        // this whole thing can be reformatted of course...
        // TODO: makes more sense to save the data through the model and then render.  also, the form on submit can be pulled out...all it needs is the referent...which by the way, should have the range.toString called earlier and stored, since the range might have collapsed by then.


				$form.on("submit", function(event){
          event.preventDefault();
					var formData = $form.serializeJSON();
					formData.annotation.referent = range.toString();
          debugger;
					formData.annotation.song_id = that.model.get("id");
					$.ajax({
						url: "/annotations",
						data: formData,
						type: "POST",
						success: function(data){
							var id = data.id;
							$anchor = $('<a>', { "class": "annotation", href: "/" + id, "data-annotation-id": id });
							range.surroundContents($anchor[0]);
							$form.remove();
							var lyrics = $('.lyrics-wrapper').html();
							var songData = {song: {lyrics: lyrics}};
							$.ajax({
								url: "/songs/" + that.model.get("id"),
								type: "PUT",
								data: songData,
                success: function(){
                  that.model.fetch({
                    success: function(){
                      that.render();
                    },
                  });
                },
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

	},

});