$(window).on('load', function(event) {
	$('#loadding').delay(1000).fadeOut('fast');
});
$(document).ready(function() {
	var slide = $(".slide");
	var slideContent = $(".slide-content");
	var slideItems = $(".slide-item");
	var slideWidth = slide.width();
	var slideHeight = slide.height();
	var dots = $("#dot-slide-control");
	var prevBtn = $("#prev");
	var nextBtn = $("#next");
	slideContent.each(function(index) {
		$(this).css({
			width: slideWidth * slideItems.length,
			height: slideHeight,
			marginLeft: - slideWidth,
		});	
	});
	slideItems.each(function(index) {
		$(this).css({
			width: slideWidth,
			height: slideHeight
		});
	});

	$( window ).resize(function() {
		var slideWidth = slide.width();
		var slideHeight = slide.height();
		slideContent.each(function(index) {
			$(this).css({
				width: slideWidth * slideItems.length,
				height: slideHeight,
				marginLeft: - slideWidth,
			});	
		});
		slideItems.each(function(index) {
			$(this).css({
				width: slideWidth,
				height: slideHeight
			});
		});
	});
	$(".slide-item:last-child").prependTo('.slide-content');
	function moveLeft() {
		slideContent.animate({
			left: + slideWidth
		}, 600, function () {
			$(".slide-item:last-child").prependTo('.slide-content');
			slideContent.css('left', '');
		});
	};
	function moveRight() {
		slideContent.animate({
			left: - slideWidth
		}, 600, function () {
			$(".slide-item:last-child").prependTo('.slide-content');
			slideContent.css('left', '');
		});
	};
	var navDots= [];
	for(var i = 0; i < slideItems.length; i++)
	{
		navDots[i]='<span class="dot" currentSlide="'+i+'"></span>';
		dots.append(navDots[i]);
	}
	var count = 0;
	slideCountforindicators = slideItems.length - 1;
	prevBtn.click(function () {
		moveLeft();

		$(".dot").eq(count).removeClass("dot-active");
		count--;
		if(count<0)
		{
			count=slideCountforindicators;
		}

		$(".dot").eq(count).addClass('dot-active');
	});
	nextBtn.click(function () {
		moveRight();

		$(".dot").eq(count).removeClass("dot-active");
		count++;
		if(count>slideCountforindicators)
		{
			count=0;

		}

		$(".dot").eq(count).addClass('dot-active');
	});
	setInterval(function () {
		if(slide.is(':hover')) {
		}else{
			moveRight();
			$(".dot").eq(count).removeClass("dot-active");
			count++;
			if(count>slideCountforindicators)
			{
				count=0;

			}
			$(".dot").eq(count).addClass('dot-active');
		}
	}, 3000);

	$("#main-menu-toggle-btn").click(function() {
		$("#nav-menu").addClass('nav-active');
	});

	$("#close-main-menu-btn").click(function() {
		$("#nav-menu").removeClass('nav-active');
	});
});
