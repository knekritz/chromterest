
$('body').append('<div class="chrome_pin_ext_panel">Pinterest!!!</div>').append('<a href="javascript:void(0);" class="chrome_pin_ext_slider show"><img src="http://passets-ak.pinterest.com/webapp/style/app/desktop/images/logo_trans_144x144.4d67817d.png" height="20px" width="20px" /></a>');

$(function(){
	$('.chrome_pin_ext_slider').hover(function(){
        if($(this).hasClass('show')){
	    $( ".slider-arrow, .panel" ).animate({
          right: "+=120"
		  }, 700, function() {
            // Animation complete.
          });
		  $(this).removeClass('show').addClass('hide');
        }
    });
    $('.chrome_pin_ext_slider').click(function(){
        if($(this).hasClass('hide')){	
	    $( ".slider-arrow, .panel" ).animate({
          right: "-=120"
		  }, 700, function() {
            // Animation complete.
          });
		  $(this).removeClass('hide').addClass('show');    
        }
    });

});
