function showMenu (){
	if(!document.getElementById("js_open_menubox")) return false;
	if(!document.getElementById("js_show_menuwrap")) return false;
	if(!document.getElementById("js_show_menubox")) return false;
	var btn = document.getElementById("js_open_menubox");  //按钮
	var wrap = document.getElementById("js_show_menuwrap"); //覆盖层
	var box = document.getElementById("js_show_menubox");  //弹出层
	//var bd = document.getElementById("bd");
	//var dwidth = -0.8*(document.body.scrollWidth);
	btn.onclick = function(){
		wrap.setAttribute("class","show_menubox_transition2");
		box.setAttribute("class","show_menubox_content2"); 
		//moveElement("js_show_menubox",0,10);
		if(document.addEventListener){
			document.addEventListener("touchmove",fun,false);
			//bd.addEventListener("DOMMouseScroll",fun,false);
		}else{
			alert("failed addEventListener");
		}
	};
	wrap.onclick = function(){
		wrap.setAttribute("class","show_menubox_transition1");
		box.setAttribute("class","show_menubox_content1"); 
		//moveElement("js_show_menubox",dwidth,10);
		if(document.removeEventListener){
			document.removeEventListener("touchmove",fun,false);
			//bd.removeEventListener("DOMMouseScroll",fun,false);
		}else{
			alert("failed removeEventListener");
		}
	};
	function fun(e){
		e.preventDefault();
   	    e.stopPropagation();
	}
	touch.on(box, 'swipeleft', function(ev){
		wrap.setAttribute("class","show_menubox_transition1");
		box.setAttribute("class","show_menubox_content1"); 
		//moveElement("js_show_menubox",dwidth,10);
		document.body.style.overflow = "auto";
		document.removeEventListener("touchmove",fun,false);
		//bd.removeEventListener("DOMMouseScroll",fun,false);
	});
	touch.on(wrap, 'swipeleft', function(ev){
		wrap.setAttribute("class","show_menubox_transition1");
		box.setAttribute("class","show_menubox_content1"); 
		//moveElement("js_show_menubox",dwidth,10);
		document.body.style.overflow = "auto";
		document.removeEventListener("touchmove",fun,false);
		//bd.removeEventListener("DOMMouseScroll",fun,false);
	});
	/*wrap.addEventListener('touchmove', function(event) {
		 // 如果这个元素的位置内只有一个手指的话
		if (event.targetTouches.length == 1) {
	　　　　 event.preventDefault();// 阻止浏览器默认事件，重要 
			var touch = event.targetTouches[0];
			// 把元素放在手指所在的位置
			moveElement("js_show_menubox",-300,10);
			}
	}, false);  */ 
}

/*
function touchMove(){
	var wrap = document.getElementById("js_show_menuwrap");
	var dwidth = -0.8*(document.body.scrollWidth);
	var box = document.getElementById("js_show_menubox");
	touch.on(box, 'swipeleft', function(ev){
		wrap.style.display="none";
		moveElement("js_show_menubox",dwidth,10);
		document.body.style.overflow = "auto";
	});
	touch.on(wrap, 'swipeleft', function(ev){
		wrap.style.display="none";
		moveElement("js_show_menubox",dwidth,10);
		document.body.style.overflow = "auto";
	});
}

function stopScroll(){
	if(!document.getElementById("js_show_inoutdetail")) return false;
	if(!document.getElementsByClassName("js_open_inoutdetail")) return false;
	var btns = document.getElementsByClassName("js_open_inoutdetail");
	var wrap = document.getElementById("js_show_inoutdetail");
	var cont = document.getElementsByClassName("js_container");
	var main = document.getElementById("js_main_out");

	btns[0].addEventListener('click',function(){
		wrap.setAttribute("class","show_page is_show");
		cont[0].setAttribute("class","container js_container is_lock");

		var overscroll = function(el) {
		  el.addEventListener('touchstart', function() {
		    var top = el.scrollTop
		      , totalScroll = el.scrollHeight
		      , currentScroll = top + el.offsetHeight

		    //If we're at the top or the bottom of the containers
		    //scroll, push up or down one pixel.
		    //
		    //this prevents the scroll from "passing through" to
		    //the body.
		    if(top === 0) {
		      el.scrollTop = 1
		    } else if(currentScroll === totalScroll) {
		      el.scrollTop = top - 1
		    }
		  })

		  el.addEventListener('touchmove', function(evt) {
		    //if the content is actually scrollable, i.e. the content is long enough
		    //that scrolling can occur
		    if(el.offsetHeight < el.scrollHeight)
		      evt._isScroller = true;
		  })
		}
		overscroll(document.querySelector('.show_menubox_content'));
		document.body.addEventListener('touchmove', function(evt) {
		  //In this case, the default behavior is scrolling the body, which
		  //would result in an overflow.  Since we don't want that, we preventDefault.
		  if(!evt._isScroller) {
		    evt.preventDefault();
		   }
		});

	});
	var btns2 = document.getElementById("js_close_show_page");
	btns2.addEventListener('click', function(){
		wrap.setAttribute("class","show_page");
		cont[0].setAttribute("class","container js_container");
	});

}
*/

function stopScroll(){
	if(!document.getElementById("js_show_inoutdetail")) return false;
	if(!document.getElementById("js_main2")) return false;
	if(!document.getElementsByClassName("js_open_inoutdetail")) return false;
	var btns = document.getElementsByClassName("js_open_inoutdetail");
	var wrap = document.getElementById("js_show_inoutdetail");
	var cont = document.getElementsByClassName("js_container");
	var main = document.getElementById("js_main_out");

	var overscroll = function(el) {
	  el.addEventListener('touchstart', function() {
	    var top = el.scrollTop
	      , totalScroll = el.scrollHeight
	      , currentScroll = top + el.offsetHeight

	    //If we're at the top or the bottom of the containers
	    //scroll, push up or down one pixel.
	    //
	    //this prevents the scroll from "passing through" to
	    //the body.
	    if(top === 0) {
	      el.scrollTop = 1
	    } else if(currentScroll === totalScroll) {
	      el.scrollTop = top - 1
	    }
	  })

	  el.addEventListener('touchmove', function(evt) {
	    //if the content is actually scrollable, i.e. the content is long enough
	    //that scrolling can occur
	    if(el.offsetHeight < el.scrollHeight)
	      evt._isScroller = true;
	  })
	}
	var fun = function(evt) {
	  //In this case, the default behavior is scrolling the body, which
	  //would result in an overflow.  Since we don't want that, we preventDefault.
	  if(!evt._isScroller) {
	    evt.preventDefault();
	   }
	};
	overscroll(document.querySelector('#js_main2'));
	document.body.addEventListener('touchmove', fun);
	document.body.removeEventListener('touchmove', fun);

	btns[0].addEventListener('click',function(){
		wrap.setAttribute("class","show_page is_show");
		cont[0].setAttribute("class","container js_container is_lock");
	});

	var btns2 = document.getElementById("js_close_show_page");
	btns2.addEventListener('click', function(){
		wrap.setAttribute("class","show_page");
		cont[0].setAttribute("class","container js_container");
	});

}

function showWrapper(){
	if(!document.getElementById("js_control_btn001")) return false;
	var wraps = document.getElementsByClassName("js_wrapper");
	var masks = document.getElementsByClassName("js_mask");
	var btn = document.getElementById("js_control_btn001");
	var btn2 = document.getElementById("js_control_btn002");
	var closes = document.getElementsByClassName("js_close_wrap");
	var closes2 = document.getElementById("js_close_wrap2");
	function fun(e){
		e.preventDefault();
   	    e.stopPropagation();
	}
	btn.onclick = function(){
		masks[0].setAttribute("class","js_mask mask_2");
		wraps[0].setAttribute("class","js_wrapper wrapper_2");
		document.addEventListener("touchmove",fun,false);
	};
	closes[0].onclick = function(){
		masks[0].setAttribute("class","js_mask mask_1");
		wraps[0].setAttribute("class","js_wrapper wrapper_1");
		document.removeEventListener("touchmove",fun,false);
	};
	masks[0].onclick = function(){
		masks[0].setAttribute("class","js_mask mask_1");
    	wraps[0].setAttribute("class","js_wrapper wrapper_1");
    	document.removeEventListener("touchmove",fun,false);
	};
	if(document.getElementById("js_close_wrap2")){
		closes2.onclick = function(){
			masks[0].setAttribute("class","js_mask mask_1");
			wraps[0].setAttribute("class","js_wrapper wrapper_1");
			document.removeEventListener("touchmove",fun,false);
		};
	}
	if(document.getElementById("js_control_btn002")){
		btn2.onclick = function(){
			masks[1].setAttribute("class","js_mask mask_2");
			wraps[1].setAttribute("class","js_wrapper wrapper_2");
			document.addEventListener("touchmove",fun,false);
		};
		closes[1].onclick = function(){
			masks[1].setAttribute("class","js_mask mask_1");
			wraps[1].setAttribute("class","js_wrapper wrapper_1");
			document.removeEventListener("touchmove",fun,false);
		};
		masks[1].onclick = function(){
			masks[1].setAttribute("class","js_mask mask_1");
			wraps[1].setAttribute("class","js_wrapper wrapper_1");
			document.removeEventListener("touchmove",fun,false);
		};
	}
}


/*	var EventUtil = {
		addHandler: function(element, type, handler){
			if(element.addEventListener){
				element.addEventListener(type, handler, false);
			}else if(element.attachEvent){
				element.attachEvent("on"+type, handler);
			}else{
				element["on"+type] = handler;
			}
		},
		removeHandler: function(element, type, handler){
			if(element.removeEventListener){
				element.removeEventListener(type, handler, false);
			}else if(element.detachEvent){
				element.detachEvent("on"+type, handler);
			}else{
				element["on"+ type] = null;
			}
		}
	}
	*/
	
/*	function slideControl(){
		var box = document.getElementById("slide_control");
		var startP=0 ,moveP=0 ,endP=0 , dis=0, dd=0;
		var epos = 0;
		function fun1(){
			box.addEventListener("touchstart",function(event){
				startP = event.touches[0].pageY;
			},false);
			
		}

		function fun2(){
			fun1();
			box.addEventListener("touchmove",function(event){
				event.preventDefault();
				moveP = event.changedTouches[0].pageY;
				dis = dd + moveP - startP;
				box.style.top = dis + "px";
				if(parseInt(box.style.top) <= -160){
					box.style.top = "-160px";
				}
				if(parseInt(box.style.top) >= 40){
					box.style.top = "40px";
				}
			},false);

		}

		function fun3(){
			box.addEventListener("touchend",function(event){
				endP = event.changedTouches[0].pageY;
				dd = dd + endP - startP;
				if(dd<=-120){
					dd = -120;
					box.style.top = "-120px";
				}
				if(dd>=0){
					dd = 0;
					box.style.top = "0px";
				}
				if(dd<0 && dd>-120){
					
					var res = parseInt(dd/40);
					var rest = dd%40;
					
					if(rest<-20){
						dd = (res-1)*40;
						box.style.top = dd+"px";
					}else{
						
						dd = res*40;
						box.style.top = dd+"px";
					}
				}
				dis = dd;
			})
		}
		fun3();
		fun2();
	}*/

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
addLoadEvent(showMenu);
addLoadEvent(stopScroll);
addLoadEvent(showWrapper);
//addLoadEvent(slideControl);