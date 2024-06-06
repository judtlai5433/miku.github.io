jQuery(document).ready(function($) {
	
	$('.actions a').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop:  $('#header1').offset().top
		},
			1000);
	});

});

jQuery(document).ready(function($) {
	
	$('.postfeatured .hi').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop:  $('#he').offset().top
		},
			1000);
	});

});

jQuery(document).ready(function($) {
	
	$('.post1 .hi').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop:  $('#he').offset().top
		},
			1000);
	});

});
