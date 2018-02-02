
$(document).ready(function() {

	$( ".myCard,.myText" ).mouseenter(function() { 
	  $( this ).fadeTo("fast" , .5 );
	});
	$( ".myCard,.myText" ).mouseleave(function() {
	  $( this ).fadeTo("fast" , 1 );
	});
	
	
	$( ".myCard").on('click', function(){
		$(this).css('transform', 'rotateY(180deg)');
	});


});