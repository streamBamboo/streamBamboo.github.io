

function addWheel(obj,up,down){
	var use = window.navigator.userAgent.toLowerCase();
	if(use.indexOf('firefox') !=-1){
		obj.addEventListener('DOMMouseScroll',fn,false);
	}else if(use.indexOf('msie') !=-1){
		obj.attachEvent('onmousewheel',fn);
	}else{
		obj.addEventListener('mousewheel',fn,false)
	}
	
	
	function fn(ev){
		var dir = true;  //方向代表上
		if(ev.detail){
			dir = ev.detail>0?false:true;
		}else{
			dir = ev.wheelDelta>0?true:false;
		}
		
		if(dir){
			typeof up == 'function'&&up();
		}else{
			typeof down == 'function'&&down();
		}
		
//		ev.preventDefault();
	}
}


