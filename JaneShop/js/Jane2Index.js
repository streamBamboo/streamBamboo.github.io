window.onload = function(){
	var ul = document.getElementsByTagName('ul')[0];
	var li = ul.getElementsByTagName('li');
	var nav = document.getElementsByClassName('nav')[0];
	nav.style.background = localStorage.getItem('bg2');
	for(var i = 0; i < li.length; i++){
		li[i].onclick = function(){
			for(var j = 0; j < li.length; j++){
				li[j].style.backgroundPositionY = '0px';
			}
			this.style.backgroundPositionY = '-15px';
			nav.style.background = this.title;
			localStorage.setItem('bg2',this.title);
		}
	}
	
	var change = document.getElementsByClassName('change')[0];
	var liChange = change.getElementsByTagName('li');
	var show = document.getElementsByClassName('show')[0];
	var ulShow = show.getElementsByTagName('ul')[0];
	for(var i = 0; i < liChange.length; i++){
		liChange[i].onclick = function(){
			for(var j = 0; j < liChange.length; j++){
				liChange[j].style.background = '#ccc';
			}
			this.style.background = '#FA5889';
			var num = -this.title * 790;
			fn(ulShow,{"left":num});
		}
	}
	
	var rightTp = document.getElementsByClassName('right-tp')[0];
	var btn = document.getElementsByClassName('button')[0];
	var rightTpLi = rightTp.getElementsByTagName('li');
	var btnLi = btn.getElementsByTagName('li');
	
	for(var i = 0; i < btnLi.length; i++){
		btnLi[i].index = i;
		btnLi[i].onmouseover = function(){
			for(var j = 0; j < btnLi.length; j++){
				rightTpLi[j].className = '';
				btnLi[j].style.background = '';
				btnLi[j].style.backgroundImage = '';
			}
			rightTpLi[this.index].className = 'active';
			this.style.background = 'skyblue';
			this.style.backgroundImage = 'url(img/adindex.gif)';
		}
	}
	
}
