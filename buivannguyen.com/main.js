$(window).on('load', function(event) {
   $('#loader').delay(1000).fadeOut('fast');
});
$(document).ready(function() {
	AOS.init({
		easing: 'ease-in-out-sine'
	});
	// Scroll function
	$(document).scroll(function(event) {

		var bodyScroll = $("html,body").scrollTop();
		if (bodyScroll > 20) {
			$("#nav").addClass('nav-active');
			$(".scrolltop").addClass('scrollTop-active');

		}else{
			$("#nav").removeClass('nav-active');
			$(".scrolltop").removeClass('scrollTop-active');
		};
	});

	$("#toggle-menu").click(function(event) {
		$(".main-menu").addClass('main-menu-active');
	});
	$("#close-menu").click(function(event) {
		$(".main-menu").removeClass('main-menu-active');
	});

	$(".link-scroll").click(function(event) {
		event.stopPropagation();
		var idElements = $(this).attr("href");
		var offsetTop = $(idElements).offset().top;
		if ($(".main-menu").hasClass('main-menu-active')) {
			$(".main-menu").removeClass('main-menu-active');
		};
		if(offsetTop > 1200)
		{
			$('html,body').animate({scrollTop: offsetTop},1600);
		}else{
			$('html,body').animate({scrollTop: offsetTop},800);
		};
	});

	$('.scrolltop').click(function(event) {
      $('html,body').animate({scrollTop: 0},1400);
   });
});
