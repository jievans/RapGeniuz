$(function(){
	$("body").on("click", ".filepick", function(){
		filepicker.pick(function(inkBlob){
			$('#annotation_body').val($('#annotation_body').val() + '\n\n'
																	+ inkBlob.url);
		});
	});

});