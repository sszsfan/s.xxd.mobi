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
	
	//压栈open－收支明细详情
	$('.js_open_inoutdetail').on('click', function(event){
		$('#js_show_inoutdetail').addClass('is_show');
		$('.js_container').addClass('is_lock');
	});
	//压栈close－收支明细详情
	$('#js_close_show_page').on('click', function(event){
		$('#js_show_inoutdetail').removeClass('is_show');
		$('.js_container').removeClass('is_lock');
	});
	
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
});