$(document).ready(function() {
	
	// Scroll function
	$(document).scroll(function(event) {
		var bodyScroll = $("html,body").scrollTop();
		if (bodyScroll > 20) {
			$("#nav").addClass('nav-active');
		}else{
			$("#nav").removeClass('nav-active');
		}
	});

	$("#toggle-menu").click(function(event) {
		$(".main-menu").addClass('main-menu-active');
	});
	$("#close-menu").click(function(event) {
		$(".main-menu").removeClass('main-menu-active');
	});
});