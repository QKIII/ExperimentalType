$(document).ready(function(){

// same as
var $div = $( 'div' );
if ( $div.is( ':in-viewport' ) ) {
  $div.css( 'background-color', 'red' );
}
});