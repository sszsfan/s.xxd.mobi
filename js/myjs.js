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
	var dwidth = -0.8*(document.body.scrollWidth);
	btn.onclick = function(){
		wrap.style.display="block";
		box.style.display="block";
		moveElement("js_show_menubox",0,10);
	};
	wrap.onclick = function(){
		wrap.style.display="none";
		moveElement("js_show_menubox",dwidth,10);
	};
}
function touchMove(){
	var wrap = document.getElementById("js_show_menuwrap");
	var dwidth = -0.8*(document.body.scrollWidth);
	var box = document.getElementById("js_show_menubox");
	touch.on('#js_show_menuwrap', 'touchstart', function(ev){
		ev.preventDefault();
	});
	touch.on(box, 'swipeleft', function(ev){
		wrap.style.display="none";
		moveElement("js_show_menubox",dwidth,10);
	});
	touch.on(wrap, 'swipeleft', function(ev){
		wrap.style.display="none";
		moveElement("js_show_menubox",dwidth,10);
	});
}
addLoadEvent(showMenu);
addLoadEvent(touchMove);