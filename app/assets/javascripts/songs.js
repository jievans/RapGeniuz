$(
  function(){

    // ask about the difference between click and mouseup, and how they interact
    // important thing seems to be that they're the same
    $('.lyrics-wrapper').on('mouseup', function(event){
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


    $('.lyrics-wrapper').on('mouseup', '#explain-button', function(event){
      event.stopPropagation();
      var selection = window.getSelection();
      $button = $(this);
      // is it possible to insert information through pseudo-selector
      $button.empty();
      $button.addClass('loading');


    });




  }
);




// $('.lyrics-wrapper').on("click", function(){alert("You clicked");});
