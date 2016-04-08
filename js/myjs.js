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

function moveElement(elementID,final_x,interval) {
	var dwidth = -0.8*(document.body.scrollWidth);
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {
    elem.style.left = dwidth + "px";
  }
  var xpos = parseInt(elem.style.left);
  if (xpos == final_x) {
    return true;
  }
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  elem.style.left = xpos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}

function showMenu (){
	var btn = document.getElementById("js_open_menubox");
	var wrap = document.getElementById("js_show_menuwrap");
	var box = document.getElementById("js_show_menubox");
	var bd = document.getElementById("bd");
	var dwidth = -0.8*(document.body.scrollWidth);
	btn.onclick = function(){
		wrap.style.display="block";
		box.style.display="block";
		moveElement("js_show_menubox",0,10);
		if(document.addEventListener){
			document.addEventListener("touchmove",fun,false);
			bd.addEventListener("DOMMouseScroll",fun,false);
		}else{
			alert("failed addEventListener");
		}
	};
	wrap.onclick = function(){
		wrap.style.display="none";
		moveElement("js_show_menubox",dwidth,10);
		if(document.removeEventListener){
			document.removeEventListener("touchmove",fun,false);
			bd.removeEventListener("DOMMouseScroll",fun,false);
		}else{
			alert("failed removeEventListener");
		}
	};
	function fun(e){
			e.preventDefault();
   	  e.stopPropagation();
	}
	touch.on(box, 'swipeleft', function(ev){
		wrap.style.display="none";
		moveElement("js_show_menubox",dwidth,10);
		document.body.style.overflow = "auto";
		document.removeEventListener("touchmove",fun,false);
		bd.removeEventListener("DOMMouseScroll",fun,false);
	});
	touch.on(wrap, 'swipeleft', function(ev){
		wrap.style.display="none";
		moveElement("js_show_menubox",dwidth,10);
		document.body.style.overflow = "auto";
		document.removeEventListener("touchmove",fun,false);
		bd.removeEventListener("DOMMouseScroll",fun,false);
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


addLoadEvent(showMenu);
addLoadEvent(touchMove);
addLoadEvent(stopScroll);