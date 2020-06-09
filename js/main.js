(function($) {
	"use strict";
	// aos
	AOS.init();

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
	// $('#works-slider').slick({
	// 	infinite: true,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 3000,
	// 	speed: 800,
	// 	prevArrow: '<button type="button" class="slick-prev">Попередній</button>',
	// 	nextArrow: '<button type="button" class="slick-next">Наступний</button>'
	// })
	$("#test_confirm").click(function() {
		// Open customized confirmation dialog window
		$.fancyConfirm({
			title: "Use Google's location service?",
			message:
			"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running",
			okButton: "Agree",
			noButton: "Disagree",
			callback: function(value) {
			if (value) {
				$("#test_confirm_rez").html("Let's do this!");
			} else {
				$("#test_confirm_rez").html("Maybe later.");
			}
			}
		});
	});
})(jQuery);