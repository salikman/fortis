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
		// if ()
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
	$('#partners-slider').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1367,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 381,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
})(jQuery);