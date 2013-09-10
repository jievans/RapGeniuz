$(function(){
	$("body").on("click", ".filepick", function(){
		filepicker.pick(function(inkBlob){
			console.log(inkBlob.url);
		});
	});
});