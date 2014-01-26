
$('body').append('<div id="chrome_pin_ext_panel">Pinterest!!!</div>').append('<a href="javascript:void(0);" class="chrome_pin_ext_slider show"><img src="http://passets-ak.pinterest.com/webapp/style/app/desktop/images/logo_trans_144x144.4d67817d.png" height="20px" width="20px" /></a>');

$(function(){
	$('.chrome_pin_ext_slider').hover(function(){
        if($(this).hasClass('show')){
	    $( ".chrome_pin_ext_slider, #chrome_pin_ext_panel" ).animate({
          right: "+=120"
		  }, 700, function() {
            // Animation complete.
          });
		  $(this).removeClass('show').addClass('hide');
        }
    });
    $('.chrome_pin_ext_slider').click(function(){
        if($(this).hasClass('hide')){	
	    $( ".chrome_pin_ext_slider, #chrome_pin_ext_panel" ).animate({
          right: "-=120"
		  }, 700, function() {
            // Animation complete.
          });
		  $(this).removeClass('hide').addClass('show');    
        }
    });

});

var theurl =  "https://api.pinterest.com/v3/search/pins/?join=via_pinner,board,pinner&page_size=10&query=Red&access_token=MTQzNTc3NDo0NTA1NzEyNzUxMjgwMTkxMjE6MnwxMzkwNjgwMDYxOjAtLWQ3YzI5NzNiMDJlMGU1YzYxZmY5NjMxNWFmOGZhOGNkY2E2NDU3ZmU=";

$.get( theurl, function( data ) {
      $( "#chrome_pin_ext_panel" )
      .append( "Status: " + data.status )
      .append( "Data: " + data.data );
      }, "json" );
