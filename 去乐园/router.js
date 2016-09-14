define(["backbone"],function(backbone){
	var Router = Backbone.Router.extend({
		routes:{
			"home":"homefunc",
			"fun":"funfunc",
			"funcard":"funcardfunc",
			"me":"mefunc"
		},
		homefunc:function(){
			require(["./home/home.js"],function(home){
				console.log("home");
				home.home();
				
			})
		},
		funfunc:function(){
			require(['./fun/fun.js'],function(fun){
				fun.fun();
			})
		},
		funcardfunc:function(){
			require(["./funcard/funcard.js"],function(funcard){
				funcard.funcard();
			})
		},
		mefunc:function(){
			require(["./me/me.js"],function(me){
				me.me();
			})
		}	
	})
	var router = new Router();
})