$(document).ready(function() {
	var category_num;
	var categorySticky = $('#category').offset().top - 50;
	var category1 = $('#category-1').offset().top - $(window).height() / 4;
	var category2 = $('#category-2').offset().top - $(window).height() / 4;
	var category3 = $('#category-3').offset().top - $(window).height() / 4;
	var category4 = $('#category-4').offset().top - $(window).height() / 4;
	function scroll() {
		if($(window).width() > 1024) {
			if ($(window).scrollTop() >= categorySticky) {
				$('#category').addClass('sticky');
			} else {
				$('#category').removeClass('sticky');
			}
			if ($(window).scrollTop() >= category1) {
				$('#category-title').text('WEBSITE');
			}
			if ($(window).scrollTop() >= category2) {
				$('#category-title').text('PROJECT');
			}
			if ($(window).scrollTop() >= category3) {
				$('#category-title').text('UI DESIGN');
			}
			if ($(window).scrollTop() >= category4) {
				$('#category-title').text('OTHER');
			}
		}
	}
	document.onscroll = scroll;
	$('#category p').click(function() {
		category_num = $(this).data('category');
		$('html, body').animate({ scrollTop: $( '#category-' + category_num ).offset().top }, 500);
	});

	$('.outer-box').click( function() {
		if ($(window).width() < 1025) { /* 用 mobile 直接跳頁面 */
			var show = $(this).data('card');
			$(location).attr('href', 'https://hiwei.github.io/weiii/'+ show +'.html');
		} else {
			var show = $(this).data('card');
			$('#white, .ext-' +show).fadeIn(500);
			$('body').css('overflow-y','hidden');
		}
	});
	$('.close, #white').click( function() {
		$('.ext, #white').fadeOut(500);
		setTimeout(function(){
			$('body').css('overflow-y','auto');
		}, 500);
	});
})