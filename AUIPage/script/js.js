$(function(){
	var html = document.documentElement;
	var hwidth = html.getBoundingClientRect().width;
	html.style.fontSize = hwidth / 18 + "px";
	
	/*
	 * iPad设备等宽屏设备应该要另一个版本
	 */
	
	var imgsrc="img/notuser1.jpg";//用户图片
	$('.banner .close').bind('touchend',function(){
		$(this).parent().fadeOut(function(){
			$(this).remove();
		});
	});
	
	$('.closeright').bind('touchend',function(){
		$(this).parent().fadeOut(function(){
			$(this).remove();
		});
	});
	
	$('#send_msg').bind('input',function(){
		if($(this).val()){
			$('#sendicon').addClass('sendi').parent().addClass('footer_cirgreen').attr('send','true');
		}
		else{
			$('#sendicon').removeClass('sendi').parent().removeClass('footer_cirgreen').attr('send','false');
		}
	});
	$('#send_btn').bind('touchend',function(){
		if($(this).attr('send')=='true'){
			/*
			 * 此处应有AJAX提交
			 */
			var t=new Date();
			var year=t.getFullYear();
			var month=pushzero(t.getMonth()+1);
			var date=pushzero(t.getDate());
			var hour=pushzero(t.getHours());
			var minute=pushzero(t.getMinutes());
			var timeStr=year+'年'+month+'月'+date+'日'+hour+':'+minute;
			var newMsg=$('#send_msg').val();
			var timeart=document.createElement('div');
			timeart.className='aui-chat-header';
			var timecont=document.createElement('p');
			timecont.className='timebox';
			timecont.innerHTML=timeStr;
			timeart.appendChild(timecont);
			$('#chat').append(timeart);
			var chatItem=document.createElement('div');
			chatItem.className='aui-chat-item aui-chat-right';
			var chatMedia=document.createElement('div');
			chatMedia.className='aui-chat-media';
			var userimg=document.createElement('img');
			userimg.src=imgsrc;
			userimg.alt='';
			chatMedia.appendChild(userimg);
			chatItem.appendChild(chatMedia);
			var chatInner=document.createElement('div');
			chatInner.className='aui-chat-inner';
			var chatName=document.createElement('div');
			chatName.className='aui-chat-name';
			chatInner.appendChild(chatName);
			var chatContent=document.createElement('div');
			chatContent.className='aui-chat-content';
			var chatArrow=document.createElement('div');
			chatArrow.className='aui-chat-arrow';
			chatContent.appendChild(chatArrow);
			chatContent.innerHTML+=newMsg;
			chatInner.appendChild(chatContent);
			var chatStatus=document.createElement('div');
			chatStatus.className='aui-chat-status';
			chatInner.appendChild(chatStatus);
			chatItem.appendChild(chatInner);
			$('#chat').append(chatItem);
			$('body').scrollTop($('#chat').height());
			$('#send_msg').val('');
			$('#sendicon').removeClass('sendi').parent().removeClass('footer_cirgreen').attr('send','false');
		}
		else{
			return false;
		}
	});
	function pushzero(num){//8->08
		var newNum=num;
		if(parseInt(num)<10){
			newNum='0'+newNum;
		}
		return newNum;
	}
});
