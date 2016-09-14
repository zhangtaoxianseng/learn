

	define(["jquery"],function(){
		document.documentElement.style.fontSize = innerWidth/32 +"px";
	window.onresize =function(){
		document.documentElement.style.fontSize = innerWidth/32 + "px";
	}
		$("#footer").find("a").on("click",function(){
			$("#footer").find("a").css("color","gray");
			$(this).css("color","orangered");
		})
	})