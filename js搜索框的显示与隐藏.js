//js搜索框的显示与隐藏
$(function(){
   $('.game-global-setting .filter > input').keyup(function(){
     var keyword = $(this).val().trim().toLowerCase();
     var target  = $(this).data('target');
     $(target).each(function(){
        var title = $(this).data('title');
       (title && title.toLowerCase().indexOf(keyword)!= -1) ? $(this).removeClass('hide'): $(this).addClass('hide');
     })
   })
});


//js 点击弹出
$(document).on('click', '#head .quick-left-nav', function () {
	$.pageUI.quickNavShow();
});

//  点击显示
ui.quickNavShow = function () {
		var html = '<ul class="left-nav">';
			html += '<li class="home"><a class="row" href="/">Home</a></li>';
			html += '<li class="list-item ucenter"><a class="row" href="/Ucenter/order">Mesos</a></li>';
			html += '<li class="list-item ucenter"><a class="row" href="/Items/index">Items</a></li>';
			html += '<li class="list-item ucenter"><a class="row" href="/Ucenter/changepasswd">Nexon Cash</a></li>';
			html += '<li class="list-item ucenter"><a class="row" href="/Powerleveling/index">Powerleveling</a></li>';			
		html += '</ul>';
		var quickNav = $(html);
		ui.lockScreen(0.01).append(quickNav);
		quickNav.animate({left: 0}, 1000);
	}