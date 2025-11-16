( function( $ ) {
	'use strict';

	$(window).load( function() {
		setTimeout(hide_inv, 2000);
		setTimeout(show_asa, 2500);
		setTimeout(remove_loader, 4000);

	});

	function remove_loader() {
		$('.loader').css("display","none");
	}

	function hide_inv(){
		$('.check-inv').slideUp(500,'linear');
	}

	function show_asa(){
		$('.asa').css("opacity",1);
		$('.asa').slideDown(500,'linear');
	}

} )( jQuery );