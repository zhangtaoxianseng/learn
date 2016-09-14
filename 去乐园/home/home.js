define(["text!./home.html","jquery","bootstrap","carousel"],function(content){
	function home(){
		console.log("home")
		$("#main").html(content);
		$.ajax({
			type:"get",
			dataType:"json",
			url:"http://duif.applinzi.com/leyuan/home_data.php",
			async:true,
			success:function(res){
				var arr = res.slider;
				var arr2 = res.arealist;
				var arr3 = res.reclist;
				setData(arr,arr2,arr3);
				
			}
		})
		
		function setData(arr,arr2,arr3){
			for (var i = 0; i < arr.length; i++) {
			var imgObj = $("<img src='"+ arr[i].img  +"'/>")
			$(".imgs").append(imgObj);
		}
			for (var i = 0; i < arr2.length; i++) {
			var imgObj2 = $("<img src='" + arr2[i].img + "'/>")
			$(".main1_img1").append(imgObj2);
			}
			for (var i = 0; i < arr3.length; i++) {
			var imgObj3 = $("<img src='" + arr3[i].img  + "'/>")
			$(".main1_imgs").append(imgObj3);
			}
		}
		
		
	}
	return{
		home:home
	}
	
})