$(document).ready(function() {
	$(".menu li a").each(function(index) {
		$(this).append('<span class="shadow">'+ $(this).text() +'</span>');
		$(this).hover(function(event) {
			event.stopPropagation();
			$(this).animate({
				top: "-50px"
			},200);
		}, function() {
			$(this).animate({
				top: "0"
			},200);
		});
	});
});
