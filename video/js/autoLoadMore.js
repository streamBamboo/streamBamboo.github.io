    /**
 * 
 * @cchen
 * @date    2017-11-11 
 * @version 3
 * @plugin autoLoadMore
 */
;(function(root, factory) {
    root.autoLoadMore = factory();

})(window, function() {
    var autoLoadMore = function(options) {
        this.opt = {};
        this.raf = '';
        this.ajax_flag = 0;
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
        this.extend(options);
        this.init();
    };
    autoLoadMore.prototype = {
        extend: function(options) {
            var defaults = {
            	scrollerEle: '#scroller-wrapper',
            	listEle: '.thelist',
                tipsPadding: 10,
                tipsFontColor: '#777',
                tipsFontSize: 12,
                tipsBackground: 'transparent',
                start_page: 2,
                ajax_type: 'GET',
                ajax_url: '',
                ajax_data: {},
                finishTips: '已没有更多数据',
                overtopHeight: 0,
                requestKey: 'data',
                requestSuccess: function(res){}
            };
            var key;
            for (key in options) {
                var defaultVal = defaults[key];
                var optionVal = options[key];
                if (optionVal == defaultVal) {
                    continue;
                } else if (optionVal !== undefined) {
                    defaults[key] = optionVal;
                }

            }
            this.opt = defaults;

        },
        init: function() {
        	var addCssByStyle = function(cssString){  

			    var doc=document;  
			    var style=doc.createElement("style");  
			    style.setAttribute("type", "text/css");  
			  
			    if(style.styleSheet){// IE  
			        style.styleSheet.cssText = cssString;  
			    } else {// w3c  
			        var cssText = doc.createTextNode(cssString);  
			        style.appendChild(cssText);  
			    }  
			  
			    var heads = doc.getElementsByTagName("head");  
			    if(heads.length)  
			        heads[0].appendChild(style);  
			    else  
			        doc.documentElement.appendChild(style);  
			};
			
            var _this = this;
            _this.$scrollerEle = _this.opt.scrollerEle == 'window'? $(window) : $(this.opt.scrollerEle);
            _this.scrollerEleH = _this.opt.scrollerEle == 'window'? _this.$scrollerEle.height() - _this.opt.overtopHeight : _this.$scrollerEle.height();
            var loaderGif = '<div class="ball-clip-rotate"><div></div></div>'; 
            var addloadTpl = '<div class="add-loading" style="padding:'+_this.opt.tipsPadding+'px 0;background-color:'+_this.opt.tipsBackground+';text-align:center;color:'+_this.opt.tipsFontColor+';font-size:'+_this.opt.tipsFontSize+'px;">'+loaderGif+'加载中...</div>';
            addCssByStyle('.ball-clip-rotate{display:inline-block;margin-right:5px;vertical-align:middle;}.ball-clip-rotate>div{border-radius:100%;margin:2px;border:2px solid #ccc;border-bottom-color:transparent;height:16px;width:16px;background:0 0!important;display:inline-block;-webkit-animation:rotate .75s 0s linear infinite;animation:rotate .75s 0s linear infinite;}@keyframes rotate{0%{transform:rotate(0deg);}50%{transform:rotate(180deg);}100%{transform:rotate(360deg);}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);}50%{-webkit-transform:rotate(180deg);}100%{-webkit-transform:rotate(360deg);}}');
            var $scroller = _this.opt.scrollerEle == 'window' ? $('body') : _this.$scrollerEle;
            var $thelist = $scroller.find(_this.opt.listEle);  
            var listH = parseInt($thelist.height()); //列表高度
            var dif = listH - _this.scrollerEleH;
            if(dif > 10){
                $thelist.after(addloadTpl);
            }

            _this.bindEvent();            
        },
        bindEvent: function(){
            var _this = this;
            var debounce = function(func, wait, immediate) {
                var timeout;
                return function() {
                    var context = this, args = arguments;
                    var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            };
            var scrollHandler = debounce(function() {
                var $scroller = _this.opt.scrollerEle == 'window' ? $('body') : _this.$scrollerEle;
                var topPos = parseFloat(_this.$scrollerEle.scrollTop().toFixed(2));  //滚动高度
                var $thelist = $scroller.find(_this.opt.listEle);  
                var listH = parseInt($thelist.height()); //列表高度
                var dif = listH - _this.scrollerEleH;
                var bounnceValue = _this.opt.scrollerEle == 'window' ? dif - 150+_this.opt.overtopHeight : dif - 150
                var data = _this.opt.ajax_data;
                data.page = _this.opt.start_page;
                if (dif > 10 && topPos > bounnceValue && _this.ajax_flag == 0) {
                    _this.ajax_flag = 1;
                    $.ajax({
                        type: _this.opt.ajax_type,
                        url: _this.opt.ajax_url,
                        data: data,
                        dataType: 'json',
                        success: function(res) {
                            if (res.error == 0) {
                                _this.opt.requestSuccess(res);
                                if (res[_this.opt.requestKey] != null && res[_this.opt.requestKey].length > 0) {
                                    _this.ajax_flag = 0;
                                    // $thelist.next().remove();
                                }
                                else{
                                     $thelist.next().html(_this.opt.finishTips);
                                    _this.ajax_flag = 1;
                                }
                                _this.opt.start_page++;
                            } else {
                                $thelist.next().html(_this.opt.finishTips);
                                _this.ajax_flag = 1;
                            }
                        }
                    });
                }
            }, 200);
            _this.$scrollerEle.on('scroll', scrollHandler);
        },
        updateData: function(key,val){
            var _this = this;
            _this.opt.ajax_data[key] = val;
        },
        resetPage: function(){
            var _this = this;
            _this.opt.start_page = 2;
            _this.ajax_flag = 0;
        }
    };
    return autoLoadMore;
});
