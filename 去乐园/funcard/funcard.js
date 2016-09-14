define(["text!./funcard.html"],function(content){
	function funcard(){
		$("#main").html(content);
	}
	return{
		funcard:funcard
	}
})