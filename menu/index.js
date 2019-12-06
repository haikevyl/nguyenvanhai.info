$(document).ready(function() {
	$(".menu li a").each(function(index) {
		$(this).append('<span class="shadow">'+ $(this).text() +'</span>');
		$(this).hover(function(event) {
			$(this).animate({
				top: "-50px"
			},200);
		}, function() {
			$(this).stop();
			$(this).animate({
				top: "0"
			},200);
		});
	});
});
