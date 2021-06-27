(function ($) {
	'use strict';
	$('.language-dropdown li').on('click', function () {
		let name = $(this).find('.name').text();
		let image = $(this).find('img').attr('src');
		$('#flag_img').attr('src', image);
		$('#flag_img').attr('alt', name);
		$('#ct_name').text(name);
	});
	$('.responsive-trigger').on('click', function () {
		$('.mainmenu').toggleClass('active');
		$(this).toggleClass('active');
	});
	// Page Scroll
	$(document).ready(function ($) {
		$('a[href*=#]:not([href=#])').click(function () {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
				location.hostname == this.hostname
			) {
				let target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate(
						{
							scrollTop: target.offset().top - 32,
						},
						1000
					);
					return false;
				}
			}
		});
	});

	// Fixed Nav
	$(document).ready(function ($) {
		$(window).scroll(function () {
			let scrollTop = 98;
			if ($(window).scrollTop() >= scrollTop) {
				$('.header-area').addClass('sticky');
			}
			if ($(window).scrollTop() < scrollTop) {
				$('.header-area').removeClass('sticky');
			}
		});

		// Active Nav Link
		$('.mainmenu li a').click(function () {
			$('.mainmenu li a').removeClass('active');
			$(this).addClass('active');
		});
	});

	$('.hero-slider-active').slick({
		arrows: false,
		dots: true,
	});

	$('.gallery-active').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
})(jQuery);
