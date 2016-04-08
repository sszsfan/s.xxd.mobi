jQuery(document).ready(function($){
	//成功/失败 提示
	$('.js_button_001').on('click', function(event){
		$('.js_modal_001').addClass('is_visible');
		$('.js_modal_open').addClass('modal_open');
		setTimeout("$('.js_modal_001').removeClass('is_visible')",1000);
		setTimeout("$('.js_modal_open').removeClass('modal_open')",1000);
	});
	
	//交互弹出/关闭层 提示
	$('.js_button_002').on('click', function(event){
		$('.js_modal_002').addClass('is_visible');
		$('.js_modal_open').addClass('modal_open');
	});
	$('.js_drop_002').on('click', function(event){
		$('.js_modal_002').removeClass('is_visible');
		$('.js_modal_open').removeClass('modal_open');
	});
	//交互弹出/关闭层 提示
	$('.js_button_003').on('click', function(event){
		$('.js_modal_003').addClass('is_visible');
		$('.js_modal_open').addClass('modal_open');
	});
	$('.js_drop_003').on('click', function(event){
		$('.js_modal_003').removeClass('is_visible');
		$('.js_modal_open').removeClass('modal_open');
	});
	//交互弹出/关闭层 提示
	$('.js_button_004').on('click', function(event){
		$('.js_modal_004').addClass('is_visible');
		$('.js_modal_open').addClass('modal_open');
	});
	$('.js_drop_004').on('click', function(event){
		$('.js_modal_004').removeClass('is_visible');
		$('.js_modal_open').removeClass('modal_open');
	});

	//修改送货时间change_time
	$('.js_change_time').on('click',function(event) {
		var mask = $('.js_mask2');
		var weuiActionsheet = $('.js_weui_actionsheet2');
		weuiActionsheet.addClass('weui_actionsheet_toggle');
		mask.show().addClass('weui_fade_toggle').on('click',function(event) {
			hideActionSheet(weuiActionsheet, mask);
		});
		$('.js_actionsheet_confirm').on('click',function(event) {
			hideActionSheet(weuiActionsheet, mask);
		});
		weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');

	    function hideActionSheet(weuiActionsheet, mask) {
		    weuiActionsheet.removeClass('weui_actionsheet_toggle');
		    mask.removeClass('weui_fade_toggle');
		    weuiActionsheet.on('transitionend', function() {
			    mask.hide();
		    }).on('webkitTransitionEnd',function() {
				mask.hide();
			})
		}
	});	
    //收款
	$('.js_button_pay').on('click',function(event) {
		var mask = $('.js_mask3');
		var weuiActionsheet = $('.js_weui_actionsheet3');
		weuiActionsheet.addClass('weui_actionsheet_toggle');
		mask.show().addClass('weui_fade_toggle').on('click',function(event) {
			hideActionSheet(weuiActionsheet, mask);
		});
		$('.js_actionsheet_confirm').on('click',function(event) {
			hideActionSheet(weuiActionsheet, mask);
		});
		weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');

	    function hideActionSheet(weuiActionsheet, mask) {
		    weuiActionsheet.removeClass('weui_actionsheet_toggle');
		    mask.removeClass('weui_fade_toggle');
		    weuiActionsheet.on('transitionend', function() {
			    mask.hide();
		    }).on('webkitTransitionEnd',function() {
				mask.hide();
			})
		}
	});	
    //收款-代付
	$('.js_pay_others').on('click',function(event) {

		var mask = $('.js_mask4');
		var weuiActionsheet = $('.js_weui_actionsheet4');
		weuiActionsheet.addClass('weui_actionsheet_toggle');
		mask.show().addClass('weui_fade_toggle').on('click',function(event) {
			hideActionSheet(weuiActionsheet, mask);
		});
		$('.js_actionsheet_confirm2').on('click',function(event) {
			hideActionSheet(weuiActionsheet, mask);
		});
		weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');

	    function hideActionSheet(weuiActionsheet, mask) {
		    weuiActionsheet.removeClass('weui_actionsheet_toggle');
		    mask.removeClass('weui_fade_toggle');
		    weuiActionsheet.on('transitionend', function() {
			    mask.hide();
		    }).on('webkitTransitionEnd',function() {
				mask.hide();
			})
		}
	
	});	
	//交互弹出success
	$('.js_wei_pay').on('click', function(event){
		$('.js_show_success').addClass('is_show');
	});
	$('.js_close').on('click', function(event){
		$('.js_show_success').removeClass('is_show');
	});
	$('.js_show_mask').on('click', function(event){
		$('.js_show_success').removeClass('is_show');
	});
	

	//压栈open
	$('#js_open_show_page').on('click', function(event){
		$('#js_show_page').addClass('is_show');
		$('.js_container').addClass('is_lock');
	});
	//压栈close
	$('#js_close_show_page').on('click', function(event){
		$('#js_show_page').removeClass('is_show');
		$('.js_container').removeClass('is_lock');
	});
/*
	//压栈open－收支明细详情
	$('.js_open_inoutdetail').on('click', function(event){
		$('#js_show_inoutdetail').addClass('is_show');
		$('.js_container').addClass('is_lock');
		$('#js_container').bind("touchmove",function(event){
			event.preventDefault();
			event.stopPropagation();
		});
		$('#js_main1').css({overflow:"hidden",height:"10px"});
		$('#js_main2').bind("touchmove",function(event){
			event.preventDefault();
			event.stopPropagation();
		});
		
	});
	//压栈close－收支明细详情
	$('#js_close_show_page').on('click', function(event){
		$('#js_show_inoutdetail').removeClass('is_show');
		$('.js_container').removeClass('is_lock');
		$('#js_main1').css({overflow:"auto",height:"100%"});
		$('#js_main2').unbind("touchmove");
		//$('#bd').unbind("touchmove");
	});
*/	
	//压栈open－验证手机短信
	$('.js_open_checksms').on('click', function(event){
		$('#js_show_checksms').addClass('is_show');
		$('.js_container').addClass('is_lock');
	});
	//压栈close－验证手机短信
	$('#js_close_show_page').on('click', function(event){
		$('#js_show_checksms').removeClass('is_show');
		$('.js_container').removeClass('is_lock');
	});
function stopScroll(){
	var initTop = 0;
	$(window).scroll(function(){
	 var scrollTop = $(document).scrollTop();
	 if(scrollTop > initTop){
	  $("body").scrollTop(0);
	 } else {
	  $("body").scrollTop(0);
	 }
	 initTop = scrollTop;
	});	
}
/*
	$("#js_main").touchmove= function(){
		if($("#js_main").innerHeight() + $("#js_main").scrollTop() >= obj.scrollHeight) {
        console.log('bottom');
        if(delta < 0) {
           console.log('to bottom!!');
           e.preventDefault();
           return false;
        }
    }
    if($("#js_main").scrollTop() === 0) {
        console.log('top');
        
        if(delta > 0) {
           console.log('to top!!');
           e.preventDefault();
           return false;
        }
    }
	};

var overscroll = function(el) {
  el.bind('touchstart', function() {
    var top = el.scrollTop
      , totalScroll = el.scrollHeight
      , currentScroll = top + el.offsetHeight;
    //If we're at the top or the bottom of the containers
    //scroll, push up or down one pixel.
    //
    //this prevents the scroll from "passing through" to
    //the body.
    if(top === 0) {
      el.scrollTop = 1;
    } else if(currentScroll === totalScroll) {
      el.scrollTop = top - 1;
    }
  });
  el.bind('touchmove', function(evt) {
    //if the content is actually scrollable, i.e. the content is long enough
    //that scrolling can occur
    if(el.offsetHeight < el.scrollHeight)
      evt._isScroller = true;
  });
}
overscroll($('#js_main_out'));
document.body.bind('touchmove', function(evt) {
  //In this case, the default behavior is scrolling the body, which
  //would result in an overflow.  Since we don't want that, we preventDefault.
  if(!evt._isScroller) {
    evt.preventDefault();
  }
});
*/

	/*wrap.addEventListener('touchmove', function(event) {
		 // 如果这个元素的位置内只有一个手指的话
		if (event.targetTouches.length == 1) {
	　　　　 event.preventDefault();// 阻止浏览器默认事件，重要 
			var touch = event.targetTouches[0];
			// 把元素放在手指所在的位置
			moveElement("js_show_menubox",-300,10);
			}
	}, false);  */ 
});