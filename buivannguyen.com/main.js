$(document).ready(function() {
	AOS.init({
		easing: 'ease-in-out-sine'
	});
	// Scroll function
	$(document).scroll(function(event) {

		var bodyScroll = $("html,body").scrollTop();
		if (bodyScroll > 20) {
			$("#nav").addClass('nav-active');
		}else{
			$("#nav").removeClass('nav-active');
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
		$('html,body').animate({scrollTop: offsetTop},600);
	});
});