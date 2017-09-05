	function fn(obj,json,fn){//对象，属性名，属性值（目标值），方法
		clearInterval(obj.time);
		
		obj.time = setInterval(function(){//给每个对象单独的定时器
			var status = true;
			for(name in json){
				if(name == 'opacity'){//透明度
					var ck = parseFloat(getStyle(obj,name));
				}else{
					var ck = parseInt(getStyle(obj,name));
				}
				//减速运动
				//目标值减去初始值再均分，可达到减速效果
				speed = (json[name] - ck) / 1;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//三目运算
				
				if(ck != json[name]){
					status = false;
				}
				
				//如果属性名为透明度
				if(name == 'opacity'){//透明度，没有单位
					//除IE外
					obj.style[name] = ck + speed/100;
					obj.style.filter = 'alpha(opacity:'+ (ck*100 + speed) +')';//兼容IE
				}else{
					obj.style[name] = ck + speed + 'px';
				}
				
			}
			
			if(status){
				clearInterval(obj.time);
				fn ? fn() : null;//如果用户传入了第四个参数（方法），即执行方法			
			}
		},30)
	}
	//获取非行内样式
	function getStyle(obj,name){
		if(obj.currentStyle){
			return obj.currentStyle[name];//IE
		}else{
			return getComputedStyle(obj,null)[name];//除IE外
		}
	}