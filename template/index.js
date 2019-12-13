jQuery(document).ready(function($) {
	$(document).scroll(function(event) {
		if($("html,body").scrollTop() > 20)
		{
			$(".nav").addClass('nav-active');
		}else{
			$(".nav").removeClass('nav-active');
		};
		if($("html,body").scrollTop() > 200){
			$('.back-to-top').addClass('back-to-top-active');
			$("#contact-icon").addClass('contact-icon-active');
		}
		else{
			$('.back-to-top').removeClass('back-to-top-active');
			$("#contact-icon").removeClass('contact-icon-active');
		}
	});
	$('.back-to-top').click(function(event) {
		$('html,body').animate({scrollTop: 0},1400);
	});
	$("#contact-icon button").click(function(event) {
		$("#contact-icon ul").toggleClass('hidden');
		if ($("#contact-icon button").html() == '<i class="fas fa-chevron-left"></i>') {
			$(this).html('<i class="fas fa-chevron-right"></i>');
		}else{
			$(this).html('<i class="fas fa-chevron-left"></i>');
		};
	});
	$("#toggle-menu").click(function(event) {
		console.log("oke");
		$("#mobile-menu").toggleClass('mobile-menu-active');
	});
});