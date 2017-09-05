window.onload = function(){
	var ul = document.getElementsByTagName('ul')[0];
	var li = ul.getElementsByTagName('li');
	var nav = document.getElementsByClassName('nav')[0];
	nav.style.background = localStorage.getItem('bg');
	for(var i = 0; i < li.length; i++){
		li[i].onclick = function(){
			for(var j = 0; j < li.length; j++){
				li[j].style.backgroundPositionY = '0px';
			}
			this.style.backgroundPositionY = '-15px';
			nav.style.background = this.title;
			localStorage.setItem('bg',this.title);
		}
	}
	
	
	var center = document.getElementsByClassName('center')[0];
	var btn = center.getElementsByTagName('button');
	var div = center.getElementsByClassName('class');
	var pic = center.getElementsByClassName('box')[0];
	var picLi = center.getElementsByTagName('li');
	var content = document.getElementsByClassName('content')[0];
	
	for(var i = 0; i < picLi.length; i++){
		picLi[i].onclick = function(){
			pic.innerHTML = this.innerHTML + '<div class="fdj"></div>';
			content.innerHTML = this.innerHTML;
			looks.innerHTML = this.innerHTML;
		}
	}
	
	for(var i = 0; i < btn.length; i++){
		btn[i].index = i;
		btn[i].onclick = function(){
			for(var j = 0; j < btn.length; j++){
				btn[j].style.background = '';
				div[j].style.display = 'none';
			}
			this.style.background = '#6D84B4';
			div[this.index].style.display = 'block';
		}
	}
	
	
	var size = document.getElementsByClassName("size")[0];
	var sizeTxt = size.getElementsByTagName("strong")[0];
	var liSize = size.getElementsByTagName("li");
	for(var i = 0; i < liSize.length; i++){
		liSize[i].onclick = function(){
			for(var j = 0; j < liSize.length; j++){
				liSize[j].style.backgroundColor = '';
			}
			this.style.backgroundColor = '#FF6600';
			sizeTxt.innerHTML = this.innerHTML;
		}
	}
	
	var changeColor = document.getElementsByClassName('color-change')[0];
	var liChangeColor = changeColor.getElementsByTagName('li');
	var strongChangeColor = changeColor.getElementsByTagName('strong')[0];
	var smallBg = document.getElementsByClassName('small-bg')[0];
	var liSmallBg = smallBg.getElementsByTagName('li');
	var bigBg = document.getElementsByClassName('box')[0];
	
	liChangeColor[0].onclick = function(){
		liSmallBg[0].innerHTML = '<img src="images/pro_img/blue_one_small.jpg"/>';
		liSmallBg[1].innerHTML = '<img src="images/pro_img/blue_two_small.jpg"/>';
		liSmallBg[2].innerHTML = '<img src="images/pro_img/blue_three_small.jpg"/>';
		bigBg.innerHTML = '<img src="images/pro_img/blue_one_small.jpg"/>' + '<div class="fdj"></div>';
		looks.innerHTML = '<img src="images/pro_img/blue_one_small.jpg"/>';
		content.innerHTML = '<img src="images/pro_img/blue_one_small.jpg"/>';
		strongChangeColor.innerHTML = '蓝白';
	}
	liChangeColor[1].onclick = function(){
		liSmallBg[0].innerHTML = '<img src="images/pro_img/yellow_one_small.jpg"/>';
		liSmallBg[1].innerHTML = '<img src="images/pro_img/yellow_two_small.jpg"/>';
		liSmallBg[2].innerHTML = '<img src="images/pro_img/yellow_three_small.jpg"/>';
		bigBg.innerHTML = '<img src="images/pro_img/yellow_one_small.jpg"/>' + '<div class="fdj"></div>';
		looks.innerHTML = '<img src="images/pro_img/yellow_one_small.jpg"/>';
		content.innerHTML = '<img src="images/pro_img/yellow_one_small.jpg"/>';
		strongChangeColor.innerHTML = '黄白';
	}
	liChangeColor[2].onclick = function(){
		liSmallBg[0].innerHTML = '<img src="images/pro_img/green_one_small.jpg"/>';
		liSmallBg[1].innerHTML = '<img src="images/pro_img/green_two_small.jpg"/>';
		liSmallBg[2].innerHTML = '<img src="images/pro_img/green_three_small.jpg"/>';
		bigBg.innerHTML = '<img src="images/pro_img/green_one_small.jpg"/>' + '<div class="fdj"></div>';
		looks.innerHTML = '<img src="images/pro_img/green_one_small.jpg"/>';
		content.innerHTML = '<img src="images/pro_img/green_one_small.jpg"/>';
		strongChangeColor.innerHTML = '粉绿';
	}
	var numSort = document.getElementById('num-sort');
	var proPrice = document.getElementsByClassName('pro-price')[0];
	var proStrong = proPrice.getElementsByTagName('strong')[0];
	var nums = null;
	numSort.onclick = function(){
		proStrong.innerHTML = this.value * 200;
		nums = this.value;
	}
	
	var look = document.getElementsByClassName('look')[0];
	var looks = document.getElementsByClassName('looks')[0];
	look.onclick = function(){
		looks.style.display = 'block';
	}
	looks.onclick = function(){
		looks.style.display = 'none';
	}
	
	//五星好评
	var rating = document.getElementsByClassName('rating')[0];
	var ratingLi = rating.getElementsByTagName('li');
	var num = null;
	for(var i = 0; i < ratingLi.length; i++){
		ratingLi[i].index = i + 1;
		ratingLi[i].onmouseover = function(){
			rating.style.backgroundPositionY = this.index * -16 + 'px';
		}
		ratingLi[i].onclick = function(){
			num = this.index;
		}
		ratingLi[i].onmouseout = function(){
			rating.style.backgroundPositionY = num * -16 + 'px';
		}
	}
	
	var shop = document.getElementsByClassName('shop')[0];
	shop.onclick = function(){
		alert('您选购了免烫高支棉条纹衬衣，颜色为' + strongChangeColor.innerHTML + '，尺寸为' + sizeTxt.innerHTML + '，数量为' + nums + '，合计' + nums*200 + '元。您给予的评分为' + num + '星' );
	}
}