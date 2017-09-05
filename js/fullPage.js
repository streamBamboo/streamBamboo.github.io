$(function() {
	$("#myFullPage").fullpage({
		menu: "#menu",
		navigation: true,
		slidesNavigation:true,
		anchors: ["a", "b", "c", "d", "e"],
		//                   锚点名字        处于第几屏
		afterLoad: function(anchorLink, index) {
			if(index == 1) {
				$(".personal h1").addClass("animated fadeInDownBig")
				for(var i = 0; i < $(".personal p").length; i++) {
					$(".personal p").eq(i).delay(i * 500).animate({
						left: 50 + "%",
						opacity: 1,
					}, 500)
				}
				$(".personal img").addClass("office")
			}else{
				$(".personal h1").removeClass("animated fadeInDownBig")
				for(var i = 0; i < $(".personal p").length; i++) {
					$(".personal p").eq(i).animate({
						left: 0 + "%",
						opacity: 0,
					}, 1)
				}
				$(".personal img").removeClass("office")
			}
			
			if(index == 2){
				$(".major li").eq(0).addClass('animated bounceInDown')
				$(".major li").eq(1).addClass('animated bounceInLeft')
				$(".major li").eq(2).addClass('animated flip')
				$(".major li").eq(3).addClass('animated flipInX')
				$(".major li").eq(4).addClass('animated rotateIn')
				$(".major li").eq(5).addClass('animated rotateInDownLeft')
				$(".major li").eq(6).addClass('animated rotateInDownRight')
				$(".major li").eq(7).addClass('animated bounceInRight')
				$(".major li").eq(8).addClass('animated bounceInUp')
			}else{
				$(".major li").eq(0).removeClass('animated bounceInDown')
				$(".major li").eq(1).removeClass('animated bounceInLeft')
				$(".major li").eq(2).removeClass('animated flip')
				$(".major li").eq(3).removeClass('animated flipInX')
				$(".major li").eq(4).removeClass('animated rotateIn')
				$(".major li").eq(5).removeClass('animated rotateInDownLeft')
				$(".major li").eq(6).removeClass('animated rotateInDownRight')
				$(".major li").eq(7).removeClass('animated bounceInRight')
				$(".major li").eq(8).removeClass('animated bounceInUp')
			}
			
			if(index == 3){
				$(".work li").eq(0).addClass('animated bounceInDown')
				$(".work li").eq(1).addClass('animated bounceInLeft')
				$(".work li").eq(2).addClass('animated rotateInUpLeft')
				$(".work li").eq(3).addClass('animated rotateInUpRight')
			}else{
				$(".work li").eq(0).removeClass('animated bounceInDown')
				$(".work li").eq(1).removeClass('animated bounceInLeft')
				$(".work li").eq(2).removeClass('animated rotateInUpLeft')
				$(".work li").eq(3).removeClass('animated rotateInUpRight')
			}
			if(index == 5){
				$(".self li").eq(0).addClass('animated bounceInDown')
				$(".self li").eq(1).addClass('animated bounceInLeft')
				$(".self li").eq(2).addClass('animated rotateInUpLeft')
			}else{
				$(".self li").eq(0).removeClass('animated bounceInDown')
				$(".self li").eq(1).removeClass('animated bounceInLeft')
				$(".self li").eq(2).removeClass('animated rotateInUpLeft')
			}
			
			
		},
	});
})