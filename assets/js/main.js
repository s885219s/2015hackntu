/*
	Directive by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

$(function() {
    $( "#tabs" ).tabs({
      event: "mouseover"
    });
  });

function hrefOnClick(hash, e){
	e.preventDefault();

	var target = hash,
		$target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 900, 'swing', function () {
		window.location.hash = target;
	});
}
(function($) {

	$(function () {
	  $(window).scroll(function () {
	    console.log('here');
		var $nav_bar = $( "#sub_main" );
		var num = $(this).scrollTop();
		if(  num >= 15 )
			$nav_bar.addClass('change_background');
		else
			$nav_bar.removeClass('change_background');
		console.log(num);
	  	});
	});

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$("#apply_button").click(function(){
		window.location.href = "http://www.accupass.com/go/2015hackntu";
	});

	$(function() {

		

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

	});

})(jQuery);