require.config({
//	baseUrl:"./js",
	paths:{
		index:"./index",
		bootstrap:"./bootstrap",
		jquery:"./jquery-2.1.1",	
		carousel:"./home/carousel",
		touch:"./touch.min",
		underscore:"./underscore",
		backbone:"./backbone",
		router:"./router",
		text:"./text"
	}
})
require(["backbone","jquery","router.js","touch","index"],function(backbone){
	
	backbone.history.start();
})
