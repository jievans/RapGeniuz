// Dummy Span appeared to be automatically removed from DOM when span was empty.
// TODO: When you have a space in your selection, it doesn't put in the span for the annotation form.
// TODO: annotation.body.replace(/\n/)function(match){return "<br>";})
// TODO: clear finished annotation views on click for show annotation button

RapGenius.Views.SongShowView = Backbone.View.extend({

//  lyricsView: new RapGenius.Views.Lyrics({model: this.model}),

// TODO: change .annotation event to mouseup instead of click

	subViews: [],

	initialize: function(){
		this.listenTo(this.model, "change", this.render);
    this.listenTo(RapGenius.currentUser, "change", this.render);
	},

	id: "song-show",

	assign: function(view){
		this.subViews.push(view);
	},

  events: {
    "click .annotation": "displayAnnotation",
    "mouseup .lyrics-wrapper": "showAnnotateButton",
    "mousedown #explain-button": "makeAnnotation",
    "click .edit-lyrics": "showEditSong",
    "click #edit-song-button": "submitEditSong",
		"click .cancel": "render",
  //  "submit #annotation-form": "submitAnnotation",
  },

  render: function(){
    console.log("render being called");
    $el = this.$el;
    var renderedContent = JST["songs/show"]({song: this.model});
    $el.html(renderedContent);
    return this;
  },


  submitEditSong: function(event){
    var that = this;
    event.preventDefault();
    var id = this.model.get("id");
    var lyricsData = $(event.target).parent().find("textarea").val();
    
    var htmlLyrics = that.lyricsToHtml(lyricsData.trim());
    
    that.model.save({lyrics: htmlLyrics}, {
      wait: true,
      
      error: function(model, response){
        errors = response.responseJSON;    
        for(var error in errors){
          $errorDiv = $('<div class="song-edit-alert">').html(errors[error]);
          $("#song-wrapper").prepend($errorDiv);
        }
      },
    })
  },
  
  lyricsToHtml: function(lyrics){
    var markdownAnchor = /(\[)((.|\n)+?)(\])(\()(\d+)(\))/g;
    
    function replacer(match, p1, p2, p3, p4, p5, p6, p7){
      return '<a class="annotation" ' + 'href="/' + p6 + '" ' +  'data-annotation-id="' + p6 + '">' + p2 + '</a>';
    }
    
    var withAnchors = lyrics.replace(markdownAnchor, replacer);
    
    var htmlLyrics = withAnchors.replace(/\n/g, function(match){
      return "<br>";
    });
    
    return htmlLyrics;
  },

  displayAnnotation: function(event){
    console.log("We are in displayAnnotation");
		event.preventDefault();
    event.stopPropagation();
    $("#main").trigger("click");
		var $anchor = $(event.target);
		var that = this;
    
    var annotations = that.model.annotations;
    var annotation = annotations.get($anchor.attr("data-annotation-id"));
    
		var annotationView = new RapGenius.Views.ShowAnnotationView(
			{model: annotation, composite: that}
		);
    
    that.assign(annotationView);
    
    $("body").append(annotationView.render().$el); 
    
    $("#main").one("click", function(){
      annotationView.remove();
    });
    
		annotationView.$el.position({my: "left top-10",
															 at: "right+10 top",
															 of: $anchor});
	},

  showEditSong: function(event){
		var anchor_regex = /(<a.*?data-annotation-id=")(\d+)(">)((.|\n)*?)(<\/a>)/g;
		var plain_lyrics = this.model.get("lyrics").replace(/<br>/g, function(match){
															return '\n';
													 }).replace(anchor_regex, function(match,
														 p1, p2, p3, p4){
														return "[" + p4 + "]" + "("
														+ _.str.trim(p2) + ")";
													 });



     var content = JST["songs/edit"]({plain_lyrics: plain_lyrics});
     $('#song-wrapper').html(content);

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

      if($(event.target).is('textarea')) return true;
			if($(event.target).attr('id') === 'explain-button') return true;
    //  if($(event.target).attr('id') === 'edit-song-button') return true;

			// _.each(this.subViews, function(subView){
//         subView.remove();
//       });

      // why is this line necessary???
      if($(event.target).hasClass('annotation')) return true;

      if($(".error-message").length > 0){
        this.render();
        return true;
      }
      
      // refactor
 //     $("#annotation-form").remove();

			console.log('got to second part');
			var previous_button = $('#explain-button');
			if (previous_button.length > 0 ) previous_button.remove();

			var selection = rangy.getSelection();


      if (selection.rangeCount === 0){
       // this.render();
        return true;
      }

			var range = selection.getRangeAt(0);

			if ($.trim(range.toString()) === "") {
       // this.render();
        return true;
      }
      
      if( !RapGenius.currentUser.get("id") ){
        $("#annotation-login").modal("show");
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
  
  submitAnnotation: function submitAnnotation(event){
    var range = submitAnnotation.range;
    var that = submitAnnotation.that;
    var $form = submitAnnotation.$form;
    event.preventDefault();
    var formData = $(this).serializeJSON();
    formData.annotation.referent = range.toHtml();
    formData.annotation.song_id = that.model.get("id");
          
    var newAnnotation = new RapGenius.Models.Annotation(formData.annotation);
          
    newAnnotation.save({}, {
      wait: true,
      success: function(annotationModel, annotationResponse){
      //  annotationModel.set(annotationResponse, {parse: true});
        var id = annotationResponse.id;
        $anchor = $('<a>', { "class": "annotation", href: "/" + id, "data-annotation-id": id });
        range.surroundContents($anchor[0]);
        $form.remove();
        var lyrics = $('.lyrics-wrapper').html();
              
        that.model.save({lyrics: lyrics}, {
          success: function(model, response){
            that.model.annotations.add(newAnnotation);
          },
          error: function(model, response){
            // where we left off
            var selector = 'a[data-annotation-id="' + id + '"]';
            $(selector).contents().unwrap();
            var errorObject = response.responseJSON;
            that.postError(errorObject);
          },
        });
      },
    });

  },
  
  postError: function(errorObject){
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
  },

  makeAnnotation: function(event){
      var that = this;
			event.stopPropagation();
      $("#main").click();
			//	event.preventDefault();
			var selection = rangy.getSelection();
			var range = selection.getRangeAt(0);
			var $button = $(event.target);
			// is it possible to insert information through pseudo-selector
			$button.empty();
			$button.addClass('loading');

			var clonedRange = range.cloneRange();
			clonedRange.collapse(false);
			var $form = $(JST["annotations/new"]());

      that.submitAnnotation.range = range;
      that.submitAnnotation.that = that;
      that.submitAnnotation.$form = $form;


			// annotation_form = $("<span>",
			//                          {id: "explain-button", text: "Annotate"} )[0];

			// if updating song data fails, just delete the annotation

			setTimeout(function(){

				$button.remove();
        var $dummy = $('<span>dummy text<span>');
				// clonedRange.insertNode($form[0]);
        clonedRange.insertNode($dummy[0]);
        $("body").append($form);
        $("#main").one("click", function(){
          $form.remove();
        });
        $form.position({
          my: "left center+100",
          at: "right+75 center",
          of: $dummy,
        });
        
				console.log($dummy.parent());
        $dummy.remove();

        // this whole thing can be reformatted of course...
        // TODO: makes more sense to save the data through the model and then render.  also, the form on submit can be pulled out...all it needs is the referent...which by the way, should have the range.toString called earlier and stored, since the range might have collapsed by then.


				$form.on("submit", that.submitAnnotation);

			}, 200);

	},

});