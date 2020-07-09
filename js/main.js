(function($) {
	"use strict";
	// aos
	AOS.init();

	// Btn nav collapse
	$('#nav .navbar__collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
	});

	// slider
	$('#home-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		dotsClass: 'intro-dots',
		pauseOnHover: false,
		pauseOnFocus: false,
	});
})(jQuery);