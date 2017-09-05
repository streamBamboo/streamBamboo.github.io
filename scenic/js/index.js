function fnLoad() {
	var welcome = id('welcome');
	var index = id('index');
	var num = 0;
	var onBg = false; //背景开关
	var timer = null;
	var onTime = false; //时间开关
	var startTime = new Date().getTime(); //获取当前时间---秒
	//把图片路径套在一个数组里面
	var arr = ['img/tree.jpg', 'img/title.png', 'img/title2.png', 'img/logo.png', 'img/cloud.png', 'img/shake.png']

	for(var i = 0; i < arr.length; i++) {
		//实例化图片
		var img = new Image();
		img.src = arr[i];
		//图片加载完成后背景开关打开
		img.onload = function() {
			num++;
			if(num == arr.length) {
				onBg = true;
			}
		}
	}

	timer = setInterval(function() {
		//图片加载完成后的时间和刚开始的初始时间的差大于6秒
		if((new Date().getTime() - startTime) > 6000) {
			//6秒后时间开关打开
			onTime = true;
		}
		//背景开关和时间开关都为true时，给第二个页面添加显示类名
		if(onTime && onBg) {
			clearTimeout(timer)
			welcome.style.opacity = 0;
			addClass(index, 'showPage')
		}
	}, 200)
	//transition的一个结束事件
	bind(welcome, 'transitionend', end);
	//兼容
	bind(welcome, 'webkitTransitionEnd', end);

	function end() {
		removeClass(welcome, 'showPage')
		fnIndex();
	}
}

function fnIndex() {
	var list = id('list');
	var index = id('index');
	var nav = index.getElementsByClassName('nav')[0];
	var oAll = nav.getElementsByTagName('a');
	var lis = list.children;
	var iW = view().w; //可视区域宽度，封装好的js里面调用
	var num = 0;
	var timer = null;
	var now = 0; //当轮播到当前位置，手指按下可以滑动图片
	var startX = null;
	var tranlateX = 0;

	autoplay();
	fnStar();

	function autoplay() {
		timer = setInterval(function() {
			num++;
			num = num % lis.length;
			now = -num * iW; //当前位置，iW一个屏幕的宽度
			//num值改变，list的translate也跟着改变
			list.style.transform = list.style.webkitTransform = 'translateX(' + now + 'px)';
			tab()
		}, 2500)
	}

	bind(list, 'touchstart', start);
	bind(list, 'touchmove', move);
	bind(list, 'touchend', end);

	function start(ev) {
		ev = ev.changedTouches[0];
		//当手指按下时，过渡效果清0，定时器清0，
		list.style.transition = 'none';
		clearInterval(timer);
		//获取手指当前按下的X轴的值
		startX = ev.pageX;
		//now = now + tranlateX;

	}

	function move(ev) {
		ev = ev.changedTouches[0];
		var dis = ev.pageX - startX; //手指移动的距离
		tranlateX = dis; //把移动的距离存起来
		list.style.transform = list.style.webkitTransform = 'translateX(' + (now + dis) + 'px)';

	}

	function end() {
		console.log(now)
		now = now + tranlateX; //手指抬起时,当前第几张图片的translate值再加上移动的距离，重新赋值给now这个当前值
		num = -Math.round(now / iW); //四舍五入取整，确定手指抬起时图片滑动的距离是否超过一半
		//限制第一张和最后一张图片不被滑出(就是在第一张或者最后一张图片滑动时始终都是第一张或者最后一张图片，不然它们被滑走变成空白区域)
		if(num >= lis.length - 1) {
			num = lis.length - 1;
		}

		if(num <= 0) {
			num = 0;
		}
		//手指抬起时重新给图片过渡时间
		list.style.transition = '.5s'
		list.style.transform = list.style.webkitTransform = 'translateX(-' + (num * iW) + 'px)';
		now = -num * iW;
		tab()
		//调用再次轮播
		autoplay();
	}

	function tab() {
		//图片轮播和圆点同步
		for(var i = 0; i < oAll.length; i++) {
			removeClass(oAll[i], 'active');
		}
		addClass(oAll[num], 'active')
	}

}

function fnStar() {
	var index = id('index');
	var mask = id('mask');
	var btn = index.getElementsByClassName('btn')[0];
	var info = index.getElementsByClassName('info')[0];
	var score = index.getElementsByClassName('score')[0];
	var score1 = index.getElementsByClassName('score1')[0];
	var tag = score1.getElementsByClassName('tag')[0];
	var lis = score.getElementsByTagName('li');
	var timer = null;
	//获取评论的数据，以后用来传到后台存储
	var arr = ['太差', '没有想象中的差', '一般', '良好', '棒极了']
	//遍历li
	for(var i = 0; i < lis.length; i++) {
		//自执行函数，形成一个闭包
		(function(index) {
			//获取元素
			var oAll = lis[index].getElementsByTagName('a');
			var oInput = lis[index].getElementsByTagName('input')[0];
			//遍历a
			for(var j = 0; j < oAll.length; j++) {
				//自定义下标
				oAll[j].index = j;
				//绑定事件，调用js里面的封装
				bind(oAll[j], 'touchstart', function() {
					for(var k = 0; k < oAll.length; k++) {
						//手指按下的下标大于等于a里面的下标，背景图片的位置改变
						if(this.index >= oAll[k].index) {
							oAll[k].style.backgroundPosition = '0 0'
						} else {
							//可以修改评价
							oAll[k].style.backgroundPosition = '-38px 0'
						}
						//把得到的评价存储到input的value里面，用来传输到后台
						oInput.value = arr[this.index];
						addClass(btn, 'submit')
					}
				})
			}
		})(i)
	}

	bind(btn, 'touchstart', function() {
		var t = getScore();
		clearTimeout(timer);
		if(t) { //评分全部打完
			if(getTag()) { //标签已经添加
				addClass(mask, 'showPage');
				fnMask()
			} else { //没有添加标签
				setInfo(info, '给景区添加标签')
			}
		} else { //还有未打分的
			setInfo(info, '给景区评分')
		}
	})

	function setInfo(obj, value) {
		//景区评分的封装，没有评分时，p标签的显示效果
		obj.innerHTML = value;
		obj.style.transform = obj.style.webkitTransform = 'scale(1)';
		obj.style.opacity = 1;
		//2秒后p标签再次隐藏起来
		timer = setTimeout(function() {
			obj.style.transform = obj.style.webkitTransform = 'scale(0)';
			obj.style.opacity = 0;
		}, 2000)

	}

	function getScore() {
		for(var i = 0; i < lis.length; i++) {
			var oInput = lis[i].getElementsByTagName('input')[0];
			//判断input的value是否都为空
			if(!oInput.value) {
				return false;
			}
		}
		return true;
	}

	function getTag() {
		var aInput = tag.getElementsByTagName('input');

		for(var i = 0; i < aInput.length; i++) {
			if(aInput[i].checked) {
				return true;
			}
		}
		return false;
	}

}

function fnMask() {
	var index = id('index');
	var mask = id('mask');
	var news = id('news');
	addClass(news, 'showPage');

	//	index.style.opacity = '.6';

	setTimeout(function() {
		mask.style.opacity = 1;
		mask.style.zIndex = 11;
		index.style.filter = index.style.webkitFilter = 'blur(3px)';
	}, 20)

	setTimeout(function() {
		removeClass(index, 'showPage')
		//		index.style.opacity = 1;
		mask.style.opacity = 0;
		index.style.filter = index.style.webkitFilter = 'blur(0px)';
		mask.style.zIndex = 8;
		removeClass(mask, 'showPage')

		fnNews();
	}, 3000)
}

function fnNews() {
	var news = id('news');
	var form = id('form');
	var upload = news.getElementsByClassName('upload')[0];
	var btn = news.getElementsByClassName('btn')[0];
	var aInput = upload.getElementsByTagName('input');
	var onoff = false;

	addClass(form, 'showPage')

	bind(aInput[0], 'change', function() {
		var f = this.files[0];
		if(f) {
			var type = f.type.split('/')[0];
			if(type == 'video') {
				addClass(btn, 'submit');
				onoff = true;
			} else {
				alert('请上传正确格式文件')
			}
		}

	})

	bind(aInput[1], 'change', function() {
		var f = this.files[0];
		if(f) {
			var type = f.type.split('/')[0];
			if(type == 'image') {
				addClass(btn, 'submit');
				onoff = true;
			} else {
				alert('请上传正确格式文件')
			}
		}

	})

	bind(btn, 'touchstart', function() {
		if(onoff) {
			//通过ajax上传数据
			fnForm();
			removeClass(news, 'showPage')
		}
	})

}

function fnForm() {
	var form = id('form');
	var again = id('again');
	var labels = form.getElementsByTagName('label');
	var btn = form.getElementsByClassName('btn')[0];
	var onoff = false;

	for(var i = 0; i < labels.length; i++) {
		bind(labels[i], 'touchstart', function() {
			addClass(btn, 'submit');
			onoff = true;
		})
	}

	bind(btn, 'touchstart', function() {
		if(onoff) {
			fnAgain();
			removeClass(form, 'showPage')
			addClass(again, 'showPage')
		}
	})
}

function fnAgain() {
	var again = id('again');
	var index = id('index');
	var btn = again.getElementsByClassName('btn')[0];

	bind(btn, 'touchstart', function() {
		addClass(index, 'showPage')
		removeClass(again, 'showPage')
		fnIndex();
	})
}