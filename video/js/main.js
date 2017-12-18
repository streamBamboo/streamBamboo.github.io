$(function(){
	//底部
	$('.bottom_bar div').click(function(){
		$(this).addClass('active').parent('a').siblings('a').children('div').removeClass('active');
	})
	var num = 0; 
	$('.icon_dropDown').click(function(e){
		num++;
		if(num%2==0){
			$('.list_list_ul1').addClass('toggleUp');
			$('.list_list_ul1').removeClass('toggleDown');
		}else if(num%2==1){
			$('.list_list_ul1').addClass('toggleDown');
			$('.list_list_ul1').removeClass('toggleUp');
		}
		e.stopPropagation();
	})
	
	$(document).on('touchmove',function(e){
		$('.list_list_ul1').addClass('toggleUp');
		$('.list_list_ul1').removeClass('toggleDown');
		num=0;
		e.stopPropagation();
	})
	$(document).click(function(e){
		$('.list_list_ul1').addClass('toggleUp');
			$('.list_list_ul1').removeClass('toggleDown');
		num=0;
		e.stopPropagation();
	})
	//选择播放类型
	$('.list_list').on('click','a',function(e){
		$(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active');
		e.stopPropagation();
	})
	$('.list_sort_ul').on('click','a',function(){
		$(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active');
	})
	$('.play_wrapper').on('click','a',function(){
		$(this).addClass('active').parent('div').siblings('div').children('a').removeClass('active');
	})
	
	//简介
	$('.synopsis_more').click(function(){
		var _this =$(this);
		$('.synopsis_omit').toggleClass('hideed');
		$('.synopsis_noomit').toggleClass('hideed');
		if($('.synopsis_omit').hasClass('hideed')){
			_this.text('收起')
//			_this.css('bottom','-.2rem')
		}else(
			_this.text('更多')
		)
	})
	
	//选集
	$('.play_slide').on('click','a',function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	//全部选集
	$('.play_over').click(function(){
		console.log(1)
		$('.play_anthology').addClass('transform_y');
	})
	
	$('.play_wrapper2').on('click','a',function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	$('.play_close').click(function(){
		$('.play_anthology').removeClass('transform_y');
	})
	
	
	$('.meal_1').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.total').text($(this).children('.vip_total').text())
	})
})
