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
	
/*
	//压栈open－收支明细详情
	$('.js_open_inoutdetail').on('click', function(event){
		$('#js_show_inoutdetail').addClass('is_show');
		$('.js_container').addClass('is_lock');
		$('#js_container').bind("touchmove",function(event){
			event.preventDefault();
			event.stopPropagation();
		});
		
	});

	//压栈close－收支明细详情
	$('#js_close_show_page').on('click', function(event){
		$('#js_show_inoutdetail').removeClass('is_show');
		$('.js_container').removeClass('is_lock');

		$('#js_main2').unbind("touchmove");
		//$('#bd').unbind("touchmove");
	});
*/
	function stopScroll3(){
		if(!document.getElementById("js_show_checksms")) return false;
		var overscroll = function(el) {
		  el.addEventListener('touchstart', function() {
		    var top = el.scrollTop
		      , totalScroll = el.scrollHeight
		      , currentScroll = top + el.offsetHeight
		    if(top === 0) {
		      el.scrollTop = 1
		    } else if(currentScroll === totalScroll) {
		      el.scrollTop = top - 1
		    }
		  })
		  el.addEventListener('touchmove', function(evt) {
		    if(el.offsetHeight < el.scrollHeight)
		      evt._isScroller = true;
		  })
		}
		var fun = function(evt) {
		  if(!evt._isScroller) {
		    evt.preventDefault();
		   }
		};
		var aa=$('.scroll')[0];
		overscroll(aa);
		$('body').bind('touchmove', fun);
	  $('body').unbind('touchmove', fun);

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
	} 
	stopScroll3();

	function stopScroll2(){
		if(!document.getElementById("js_show_page")) return false;
		var overscroll2 = function(el) {
		  el.addEventListener('touchstart', function() {
		    var top = el.scrollTop
		      , totalScroll = el.scrollHeight
		      , currentScroll = top + el.offsetHeight
		    if(top === 0) {
		      el.scrollTop = 1
		    } else if(currentScroll === totalScroll) {
		      el.scrollTop = top - 1
		    }
		  })
		  el.addEventListener('touchmove', function(evt) {
		    if(el.offsetHeight < el.scrollHeight)
		      evt._isScroller = true;
		  })
		}
		var fun = function(evt) {
		  if(!evt._isScroller) {
		    evt.preventDefault();
		   }
		};
		var aa=$('.scroll')[0];
		overscroll2(aa);
		$('body').bind('touchmove', fun);
	  $('body').unbind('touchmove', fun);
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
	}
  stopScroll2();		
/*  	
	  //压栈open——修改姓名、手机号码、安全密码
	  $('.js_change_btn').each(function(index){
	    $(this).click(function(){
	      $("#js_main_info").removeClass("is_hidden").addClass("is_show");
	      $("#js_main_info > .js_change_info:eq("+index+")").removeClass("hidden").addClass("show");
				if(parseInt($("#js_main_info > .js_change_info:eq("+index+")").height()) > parseInt($("body")[0].clientHeight)-50){
					alert($("#js_main_info > .js_change_info:eq("+index+")").height());
					alert($("body")[0].clientHeight);
					//$('#js_main_info').unbind("touchmove");
					$('#js_main_info').unbind("touchmove");

				}else{
					$('#js_main_info').bind("touchmove",function(event){
						event.preventDefault();
						event.stopPropagation();
					});
				}	

	    });
	  });
	  //压栈close——修改姓名、手机号码、安全密码
	  $('.js_close_btn').each(function(index){
	  	$(this).click(function(){
	      $("#js_main_info").removeClass("is_show").addClass("is_hidden");
	      $("#js_main_info > .js_change_info:eq("+index+")").removeClass("show").addClass("hidden");
	      $('#js_main_info').unbind("touchmove");
	  	});
	  });
*/	  

  

	function stopScroll(){
	  //压栈open——修改姓名、手机号码、安全密码
	  $('.js_change_btn').each(function(index){
	    $(this).click(function(){
	      $("#js_main_info").removeClass("is_hidden").addClass("is_show");
	      $("#js_main_info > .js_change_info:eq("+index+")").removeClass("hidden").addClass("show");
      	$('#js_main_info').bind("touchmove",function(event){
					event.preventDefault();
					event.stopPropagation();
				});
	      if(parseInt($("#js_main_info > .js_change_info:eq("+index+")").height()) > parseInt($("body")[0].clientHeight)-50){
					var overscroll = function(el) {
					  el.addEventListener('touchstart', function() {
					    var top = el.scrollTop
					      , totalScroll = el.scrollHeight
					      , currentScroll = top + el.offsetHeight
					    if(top === 0) {
					      el.scrollTop = 1
					    } else if(currentScroll === totalScroll) {
					      el.scrollTop = top - 1
					    }
					  })
					  el.addEventListener('touchmove', function(evt) {
					    if(el.offsetHeight < el.scrollHeight)
					      evt._isScroller = true;
					  })
					}
					var fun = function(evt) {
					  if(!evt._isScroller) {
					    evt.preventDefault();
					   }
					};
					var aa=$('.main2')[0];
			    overscroll(aa);
			    $('#js_main_info').unbind("touchmove");
					$('body').bind('touchmove', fun);
			  	$('body').unbind('touchmove', fun);
				}
	    });
	  });
	  //压栈close——修改姓名、手机号码、安全密码
	  $('.js_close_btn').each(function(index){
	  	$(this).click(function(){
	      $("#js_main_info").removeClass("is_show").addClass("is_hidden");
	      $("#js_main_info > .js_change_info:eq("+index+")").removeClass("show").addClass("hidden");
	  	});
	  });
	  //压栈close2——修改姓名、手机号码、安全密码
	  $('.js_close_show_page2').each(function(index){
	  	$(this).click(function(){
	  		$("#js_main_info").removeClass("is_show").addClass("is_hidden");
	  		$("#js_main_info > .js_change_info:eq("+index+")").removeClass("show").addClass("hidden");
	  	});
	  });		
	}
	stopScroll();

	/*wrap.addEventListener('touchmove', function(event) {
		 // 如果这个元素的位置内只有一个手指的话
		if (event.targetTouches.length == 1) {
	　　　　 event.preventDefault();// 阻止浏览器默认事件，重要 
			var touch = event.targetTouches[0];
			// 把元素放在手指所在的位置
			moveElement("js_show_menubox",-300,10);
			}
	}, false);  */ 
	//通知页面-弹出下拉内容
	var m=-1;
	$(".notice_title").each(function(index){
		$(this).click(function(){
			//$(".notice_details:eq("+index+")").slideToggle();
			if(m != index){
				m = index;
				$(".notice_title").removeClass("notice_title2");
				$(".up").removeClass("down");
				$(this).addClass("notice_title2");
				$(".notice_details:gt("+index+")").slideUp("fast");
				$(".notice_details:lt("+index+")").slideUp("fast");
				$(".notice_details:eq("+index+")").slideToggle("fast");
				$(".up:eq("+index+")").addClass("down");
			}else{
				$(".up").removeClass("down");
				$(this).removeClass("notice_title2");
				$(".notice_details:eq("+index+")").slideToggle("fast");
				m = -1;
			}
			
		});
	});

	//签到成功通知
	$("#js_check_in").bind("click",function(){
		$("#js_checked_success").removeClass("checked_success1").addClass("checked_success2").fadeOut("slow");
		$("#js_check_in").fadeOut("normal");
		$("#js_checked").fadeIn("normal");
	});
});