$(window).ready(function(){
	//鼠标在图片上方移动事件
	$(".box").mousemove(function(ev){
		//left的值
		var l = 0;
		//top的值
		var t = 0;
		
		//水平方向左侧(当鼠标位置的X值大于放大镜宽度的一半+图片的margin-left时)
		if(ev.clientX+$(window).scrollLeft() > $(".fdj").width()/2+$(".big-box").offset().left){
			l = ev.clientX+$(window).scrollLeft()-$(".fdj").width()/2-$(".big-box").offset().left;
		}
		//水平方向右侧(当鼠标位置的X值大于鼠标到图片左边距离+图片的margin-left时)
		if(ev.clientX+$(window).scrollLeft() > $(".box").width()-$(".fdj").width()/2+$(".big-box").offset().left){
			l = $(".box").width()-$(".fdj").width();
		}
		
		//垂直方向上方(当鼠标位置的Y值大于放大镜宽度的一半+图片的margin-top时)
		if(ev.clientY+$(window).scrollTop() > $(".fdj").height()/2+$(".big-box").offset().top){
			t = ev.clientY+$(window).scrollTop()-$(".fdj").height()/2-$(".big-box").offset().top;
		}
		//垂直方向下方(当鼠标位置的Y值大于鼠标到图片左边距离+图片的margin-top时)
		if(ev.clientY+$(window).scrollTop() > $(".box").height()-$(".fdj").height()/2+$(".big-box").offset().top){
			t = $(".box").width()-$(".fdj").height();
		}
		
		$(".fdj").css({display:"block",left:l,top:t});
		$(".content").css({display:"block"}).children().css({display:"block",left:-2*l,top:-2*t});
	})
	//鼠标离开事件
	$(".box").mouseout(function(){
		$(".fdj").css({display:"none"});
		$(".content").css({display:"none"});
	})
})
