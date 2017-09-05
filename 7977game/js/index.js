window.onload = function() {
	function Tab(id) {
		this.pox = document.getElementById(id);

		this.btn = this.pox.getElementsByTagName('input');

		this.click();
	}

	Tab.prototype.click = function() {
		var that = this;
		for(var i = 0; i < this.btn.length; i++) {
			this.btn[i].index = i;
			this.btn[i].onclick = function() {
				that.init(this.index);
			}
		}
	}

	Tab.prototype.init = function(index) {
		for(var i = 0; i < this.btn.length; i++) {
			this.btn[i].className = '';
		}
		this.btn[index].className = 'active';
	}

	var t = new Tab('box');
	createBanner();
}

function createBanner() {

	let banner = id("banner");
	let swCon = banner.getElementsByClassName('swiper-container')[0]
	let str = ''
	let div = document.createElement('div');
	div.className = 'swiper-wrapper';
	swCon.innerHTML = '';
	for(var i = 0; i < json.arr.length; i++) {
		div.innerHTML += '<div class="swiper-slide"><img src="' + json.arr[i] + '" alt="" /></div>'

	}

	swCon.appendChild(div)
	swCon.innerHTML += '<div class="swiper-pagination"></div>';

	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 1,
		paginationClickable: true,
		loop: true,
		autoplay: 2000,
		autoplayDisableOnInteraction: false,
		spaceBetween: 30,
        effect: 'fade'
	});

}