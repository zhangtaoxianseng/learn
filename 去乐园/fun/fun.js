define(["text!./fun.html"],function(content){
	function fun(){
		$("#main").html(content);
		$.ajax({
			type:"get",
			dataType:"json",
			url:"http://duif.applinzi.com/leyuan/leyuan_data.php?address=%E5%85%A8%E5%9F%8E",
			async:true,
			success:function(res){
				var arr = res.data;
				setData(arr);
			}
		})
		function setData(arr){
//			var imgObj = $("<img src='" + arr[0].img + "' />");
			for (var i = 1; i < arr.length; i++) {
				var listObj = $("<div class='main2_imgs_list'><img src='" + arr[i].img + "' /><li class='main2_imgs_li'><div class='main2_li_left'><p></p><p></p></div><div class='main2_li_right'><p class='glyphicon glyphicon-map-marker'></p><p></p><div></li></div>");
					listObj.find("p").eq(0).text(arr[i].name);
					listObj.find("p").eq(1).text(arr[i].address);
//					listObj.find("p").eq(0).text(arr[i].dist);
					listObj.find("p").eq(3).text(arr[i].dist + " 公里");
				$(".main2_imgs").append(listObj);
//				var  liObj = $("<li class='col-xs-4'>"+ arr[i].address +"</li>");
//				$(".main2_middle").append(liObj);
			}
			
		}
//		function setDist(arr){
//			var arr2 = [];
//			for (var i = 0; i < arr.length; i++) {
//				 arr2.push(arr[i].dist);
//			}
//			arr2.sort(compare(a,b){
//				return a<b;
//			})
//			for(var j =0 ; j < arr2.length;j++){
//				var imgObj = $("<img src='" + arr[j].img + "' />");	
//				$(".main2_imgs").append(imgObj);
//			}
//		}
		
	}
	return{
		fun:fun
	}
	
})