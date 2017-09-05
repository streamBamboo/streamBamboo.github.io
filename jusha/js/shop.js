window.onload = function() {

	secondBar();

	function secondBar() {
		var allsort = id('allsort');
		var item = allsort.getElementsByClassName('item')[0];
		var str = '';

		for(var i = 0; i < aData.name.length; i++) {
			str += '<a href="#">' + aData.name[i] + '</a>';

		}
		str += '<div class="i-mc"></div>'

		item.innerHTML = str
		var iMc = allsort.getElementsByClassName('i-mc')[0];
		var oAll = item.getElementsByTagName('a');
		for(var i = 0; i < oAll.length; i++) {
			oAll[i].index = i;
			oAll[i].onmouseover = function() {
				iMc.style.top = this.index * oAll[this.index].offsetHeight + 'px';
				var oUl = document.createElement('ul');
				iMc.innerHTML = '<h4>' + aData.name[this.index] + '</h4>';
				for(var j = 0; j < tData.all[this.index].text.length; j++) {
					oUl.innerHTML += '<li><a href="javascript:;">' + tData.all[this.index].text[j] + '</a></li>'
				}

				iMc.style.position = 'left:190px'
				iMc.appendChild(oUl)
			}
		}
	}
	createUl(qData.oPll, 'all')
	createUl(qData.oPll, 'tv')
	createUl(vData.oQll, 'tv')
	channelTap();

	function channelTap() {
		var channel = id('channel');
		var channelTap = channel.getElementsByClassName('channelTap')[0];
		var channelBar = channel.getElementsByClassName('channelBar')[0];
		var oAll = channelTap.getElementsByTagName('a');
		var oUl = channelBar.getElementsByTagName('ul');
		for(var i = 0; i < oAll.length; i++) {
			oAll[i].index = i;
			oAll[i].onmouseover = function() {
				for(var i = 0; i < oAll.length; i++) {
					oAll[i].className = '';
					oUl[i].className = 'tv';
				}
				this.className = 'tapActive';
				oUl[this.index].className = 'all';
				click(this.index);
			}
		}

	}

	function createUl(json, className) {
		var channel = id('channel');
		var channelBar = channel.getElementsByClassName('channelBar')[0];
		var oUl = document.createElement('ul');
		var str = '';

		for(var i = 0; i < json.length; i++) {
			str += '<li>' +
				'<p><img src="' + json[i].imgSrc + '"/></p>' +
				'<p>' + json[i].name + '</p>' +
				'<p>现价：<span>' + json[i].money + '</span></p>' +
				'</li>'

			var oLi = oUl.getElementsByTagName('li');
			oUl.style.width = (oLi.length + 2) * 230 + 'px';
			oUl.className = className;
			oUl.innerHTML = str;
			channelBar.appendChild(oUl);

		}
	}

	click(0)

	function click(nub) {
		var channel = id('channel');
		var channelBar = channel.getElementsByClassName('channelBar')[0];
		var oSpan = channelBar.getElementsByTagName('span');
		var oUl = channelBar.getElementsByTagName('ul')[nub];
		var oLi = oUl.getElementsByTagName('li');
		var num = 0;

		oSpan[0].onclick = function() {
			if(num <= 0) {
				num = 0
			} else {
				num--;
			}
			oUl.style.left = -(num * 4 * oLi[num].offsetWidth + 15 * 4 * num) + 'px';
		}
		oSpan[1].onclick = function() {
			if(num >= parseInt(oLi.length / 4)) {
				num = parseInt(oLi.length / 4)
			} else {
				num++;
			}
			oUl.style.left = -(num * 4 * oLi[num].offsetWidth + 15 * 4 * num) + 'px';
		}

	}




/******************************************************************************/


	//封装
	
	function laster(obj,type){
		var oUl = document.createElement('ul');
		for(var i = 0; i < Last.fin.length; i++) {
			oUl.innerHTML += '<li>' +
				'<p><img src="' + Last.fin[i].imgSrc + '" /></p>' +
				'<p>' + Last.fin[i].name + '</p>' +
				'<p class="clearfix">'+type+'' +
				'<span>' + Last.fin[i].money + '</span>' +
				'<span>' + Last.fin[i].agio + '</span>' +
				'</p>' +
				'</li>'
			obj.appendChild(oUl)
		}
	}

	
	lastUl()
	function lastUl() {
		var last = document.getElementById('last');
		laster(last,"疯抢价：")
	}

	roundUl()
	function roundUl() {
		var round = document.getElementById('round');
		var oUl = document.createElement('ul');
		for(var i = 0; i < Last.fin.length; i++) {
			oUl.innerHTML += '<li style="position: relative;">' +
				'<p><img src="' + Last.fin[i].imgSrc + '" /></p>' +
				'<p>' + Last.fin[i].name + '</p>' +
				'<p class="clearfix">团价：' +
				'<span>' + Last.fin[i].money + '</span>' +
				'<span>' + Last.fin[i].agio + '</span>' +
				'</p>' +
				'<p class="sold"><span>' + Last.fin[i].sold + '</span></p>'
			'</li>'
			round.appendChild(oUl)
		}

	}
/******************************************************************************/
	limitUl()

	function limitUl() {
		var limit = document.getElementById('limit');
		var oUl = document.createElement('ul');
		for(var i = 0; i < Last.fin.length; i++) {
			oUl.innerHTML += '<li style="position: relative;">' +
				'<p><img src="' + Last.fin[i].imgSrc + '" /></p>' +
				'<p>' + Last.fin[i].name + '</p>' +
				'<p class="clearfix">限时购：' +
				'<span>' + Last.fin[i].money + '</span>' +
				'<span>' + Last.fin[i].agio + '</span>' +
				'</p>' +
				'<p class="limitTime"></p>'
			'</li>'
			limit.appendChild(oUl)
		}

	}
	setTime()

	function setTime() {
		var data = new Date();

		var day = data.getDay();
		var hour = data.getHours();
		var min = data.getMinutes();
		var miao = data.getSeconds();
		var limitTime = document.getElementsByClassName('limitTime');

		var str = '<span class="glyphicon glyphicon-time"></span>剩余&nbsp;' + (7 - day) + "天&nbsp;" + zore(24 - hour) + "小时&nbsp;" + zore(60 - min) + "分钟" + zore(60 - miao) + "秒";

		for(var i = 0; i < limitTime.length; i++) {
			limitTime[i].innerHTML = ''
			limitTime[i].innerHTML = str;
		}
	}
	setInterval(setTime, 1000)

/******************************************************************************/
	function Rounds(obj,type){
		var oUl = document.createElement('ul');
		for(var i = 0; i < Round.world.length; i++) {
			oUl.innerHTML += '<li style="position: relative;">' +
				'<p><img src="' + Round.world[i].imgSrc + '" /></p>' +
				'<p>' + Round.world[i].name + '</p>' +
				'<p class="clearfix">'+type+'' +
				'<span>' + Round.world[i].money + '</span>' +
				'<span>' + Round.world[i].agio + '</span>' +
				'</p>' +
				'</li>'
			obj.appendChild(oUl)
		}
	}

	impUl()

	function impUl() {
		var imp = document.getElementById('imp');
		Rounds(imp,'爆款价：')

	}

	arrivalUl()

	function arrivalUl() {
		var arrival = document.getElementById('arrival');
		laster(arrival,'新品价：')	

	}

	

	fittingUl()

	function fittingUl() {
		var fitting = document.getElementsByClassName('fitting')[0];
		Rounds(fitting,'')
	}

/******************************************************************************/

	function homes(obj){
		var oUl = document.createElement('ul');
		for(var i = 0; i < home.app.length; i++) {
			oUl.innerHTML += '<li style="position: relative;">' +
				'<p><img src="' + home.app[i].imgSrc + '" /></p>' +
				'<p>' + home.app[i].name + '</p>' +
				'<p class="clearfix">' +
				'<span>' + home.app[i].money + '</span>' +
				'<span>' + home.app[i].agio + '</span>' +
				'</p>' +
				'</li>'
			obj.appendChild(oUl)
		}
	}



	appliancesUl()

	function appliancesUl() {
		var appliances = document.getElementsByClassName('appliances')[0];
		homes(appliances)
	}

	cateUl()

	function cateUl() {
		var cate = document.getElementsByClassName('cate')[0];
		Rounds(cate,'')
	}

	casesUl()

	function casesUl() {
		var cases = document.getElementsByClassName('cases')[0];
		Rounds(cases,'')
	}

	careUl()

	function careUl() {
		var care = document.getElementsByClassName('care')[0];
		Rounds(care,'')
	}

	outdoorUl()

	function outdoorUl() {
		var outdoor = document.getElementsByClassName('outdoor')[0];
		laster(outdoor,'')

	}

	jewelryUl()

	function jewelryUl() {
		var jewelry = document.getElementsByClassName('jewelry')[0];
		homes(jewelry)
	}

	footUl()

	function footUl() {
		var footer = document.getElementById('footer');
		var div = document.createElement('div');
		div.className = 'foot clearfix';
		var str = '';
		for(var i = 0; i < foot.h4.length; i++) {
			str += '<ul>' +
				'<h4>' + foot.h4[i] + '</h4>' +
				'</ul>';

		}
		div.innerHTML = str
		footer.appendChild(div)
		var oUl = div.getElementsByTagName('ul');

		for(var i = 0; i < oUl.length; i++) {
			oUl[i].index = i;
			for(var j = 0; j < foot.li[oUl[i].index].alls.length; j++) {
				oUl[i].innerHTML += '<li><a href="">' + foot.li[oUl[i].index].alls[j] + '</a></li>';
			}

		}
	}


scroll()
	
	function scroll(){	
		var right_top = document.getElementById('right_top');
		var oLi = right_top.getElementsByTagName('li');
		if(document.body.scrollTop >=350){
			oLi[0].style.display = 'block';
			oLi[1].style.display = 'block';
		}else if(document.body.scrollTop <=550){
			oLi[0].style.display = 'none';
			oLi[1].style.display = 'none';
		}
		
	}
	document.onmousewheel = function(){
		scroll();
		addWheel(document.body,up,down)
	}
	blockImg()
	function blockImg(){
		var right_top = document.getElementById('right_top');
		var oLi = right_top.getElementsByTagName('li');
		var oImg = oLi[2].getElementsByTagName('img');
		oLi[2].onmouseover = function(){
			oImg[0].style.display = 'block'
		}
		
		oLi[2].onmouseout = function(){
			oImg[0].style.display = 'none'
		}
	}



	function up(){
		var right_top = document.getElementById('right_top');
		var oLi = right_top.getElementsByTagName('li');
		var oImg = oLi[2].getElementsByTagName('img');
		oImg[1].style.transform = oImg[1].style.webkitTransform = 'translateY('+document.body.scrollTop+'px)';
		oImg[2].style.transform = oImg[2].style.webkitTransform = 'translateY('+document.body.scrollTop+'px)';
		setTimeout(function(){
			oImg[1].style.transform = oImg[1].style.webkitTransform = 'translateY(0)';
			oImg[2].style.transform = oImg[2].style.webkitTransform = 'translateY(0)';
		},200)
		
	}


	function down(){
		var right_top = document.getElementById('right_top');
		var oLi = right_top.getElementsByTagName('li');
		var oImg = oLi[2].getElementsByTagName('img');
		oImg[1].style.transform = oImg[1].style.webkitTransform = 'translateY('+(-document.body.scrollTop)+'px)';
		oImg[2].style.transform = oImg[2].style.webkitTransform = 'translateY('+(-document.body.scrollTop)+'px)';
		setTimeout(function(){
			oImg[1].style.transform = oImg[1].style.webkitTransform = 'translateY(0)';
			oImg[2].style.transform = oImg[2].style.webkitTransform = 'translateY(0)';
		},200)
	}


}