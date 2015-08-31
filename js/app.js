/**
 * Created by sergey on 30.08.15.
 */
$(document).ready(function(){

	'use strict';

	// Липкая панель
	var $menu = $('#menu');
	var HeaderTop = $menu.offset().top;
	$(window).scroll(function(){
		if( $(window).scrollTop() > HeaderTop ) {
			$menu.addClass('fixed');

			var Offset = ($(window).scrollTop() - HeaderTop);

			var Top = Math.ceil(((Offset+$menu.outerHeight()) > ($menu.outerHeight()/2)) ?
				($menu.outerHeight()*1) : offset+$menu.outerHeight());

			$menu.parent().css({paddingTop: Top+'px'});

		} else {
			$menu.parent().css({paddingTop: '0px'});
			$menu.removeClass('fixed');
		}
	});

	/*
	 * https://css-tricks.com/snippets/jquery/smooth-scrolling/
	 */
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var Offset = target.offset().top;

				$('html,body').animate({
					scrollTop: (Offset > 0 ? Offset-($menu.outerHeight()*1) : Offset)
				}, 1000);
				return false;
			}
		}
	});

	// Инициализация карусели
	setTimeout(function(){
		if($('div.carousel-wrapper').length > 0){
			$('div.carousel-wrapper').jCarouselLite({
				containerSelector: 'div.carousel',
				itemSelector: 'div.item',
				btnNext: '.next',
				btnPrev: '.prev',
				mouseWheel: true,
				autoCSS: true,
				responsive: true,
				circular: true,
				autoWidth: true,
				speed: 500,
				timeout: 5000,
				auto: true
			});
		}
	}, (1000*2));


	setTimeout(function(){
		googleMaps.initialize();
	}, (1000*2));

});