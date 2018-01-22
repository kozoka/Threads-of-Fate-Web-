$( ".myCard,.myText" ).mouseenter(function() { 
  $( this ).fadeTo("slow" , .5 );
});
$( ".myCard,.myText" ).mouseleave(function() {
  $( this ).fadeTo("slow" , 1 );
});