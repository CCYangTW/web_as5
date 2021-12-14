var winh = $(window).height();
$(window).scroll(function () {
	var scrolled = $(document).scrollTop();

	// scroll to change opacity
	$(".opa").each(function () {
		var opRange = $(this).parent().height() / 5;
		$(this).css({
			opacity: ($(this).data("seq") * opRange - scrolled) / opRange
		});
	});

	// splotlight on specific part of a large image
	$(".maploc").each(function () {
		var thispos = $(this).offset().top;
		var thish = $(this).height();
		if (scrolled >= thispos && scrolled < thispos + thish) {
			$("#bg-img").css({
				"background-position": $(this).data("bgpos")
			});
		}
	});
});


