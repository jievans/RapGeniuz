$(
  function(){
    $('.lyrics-wrapper').on('mouseup', function(){
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
  }
);




// $('.lyrics-wrapper').on("click", function(){alert("You clicked");});
