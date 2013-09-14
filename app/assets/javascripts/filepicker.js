$(function(){
	$("body").on("click", ".filepick", function(){
		filepicker.pickAndStore({}, {access: 'public'}, function(inkBlobs){
			_.each(inkBlobs, function(inkBlob){
				$('#annotation_body').val($('#annotation_body').val() + '\n\n'
																		+ inkBlob.url);
			});
		});
	});

});