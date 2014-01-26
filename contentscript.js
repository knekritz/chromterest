

$('body').append('<div id="chrome_pin_ext_panel"></div>').append('<a href="javascript:void(0);" class="chrome_pin_ext_slider chrome_pin_ext_show"><img src="'+ chrome.extension.getURL('p.png') + '" height="50px" width="50px" /></a>');




$(function(){
	$('.chrome_pin_ext_slider').hover(function(){
        if($(this).hasClass('chrome_pin_ext_show')){
	    $( ".chrome_pin_ext_slider, #chrome_pin_ext_panel" ).stop().animate({
          right: "+=160"
		  }, 700, function() {
                    $("#chrome_pin_ext_panel").mouseleave(function(){
                              $("#chrome_pin_ext_panel").stop().fadeTo(600,.3);
                                  });
                     $("#chrome_pin_ext_panel").mouseenter(function(){
                               $("#chrome_pin_ext_panel").stop().fadeTo(50,1);
                            });
            // Animation complete.
          });
		  $(this).removeClass('chrome_pin_ext_show').addClass('chrome_pin_ext_hide');
        }
    });
    $('.chrome_pin_ext_slider').click(function(){
        if($(this).hasClass('chrome_pin_ext_hide')){
                                      $("#chrome_pin_ext_panel").unbind('mouseleave');
                                      $("#chrome_pin_ext_panel").unbind('mouseenter');
	    $( ".chrome_pin_ext_slider, #chrome_pin_ext_panel" ).stop().animate({
          right: "-=160"
		  }, 700, function() {
            // Animation complete.
            $(this).removeClass('chrome_pin_ext_hide').addClass('chrome_pin_ext_show');
                                                                            $("#chrome_pin_ext_panel").css({'opacity':1});
          });
        }
    });

});
function func(){
    var query;
    var found = 0;
    if ($('input[name=q]').length && $('input[name=q]').val().length) {
        query = $('input[name=q]').val();
    }
    else if ($('input[name=field-keywords]').length && $('input[name=field-keywords]').val().length) {
        query = $('input[name=field-keywords]').val();
    }
    else if ($('input[name=query]').length && $('input[name=query]').val().length) {
        query = $('input[name=query]').val();
    }
    else if ($('input[name=term]').length && $('input[name=term]').val().length) {
        query = $('input[name=term]').val();
    }
    else if ($('h1').length && $('h1').text().length > 9) {
        query = $('h1').text();
    }
    else {
        query = $('title').text();
    }
    
    

var theurl =  "https://api.pinterest.com/v3/search/pins/?page_size=100&query=" + query+"&access_token=MTQzNTc3NDo0NTA1NzEyNzUxMjgwMTkxMjE6MnwxMzkwNjgwMDYxOjAtLWQ3YzI5NzNiMDJlMGU1YzYxZmY5NjMxNWFmOGZhOGNkY2E2NDU3ZmU=";
    var found = 0;

$.get( theurl, function( data ) {
      $( "#chrome_pin_ext_panel" ).empty();
       for (i=0;i<data.data.length;i++) {
      found = 1;
            $( "#chrome_pin_ext_panel" )
            .append( "\n")
            .append('<a href="http://www.pinterest.com/pin/'+data.data[i].id+'"><img Title="'+data.data[i].description+'" class="chrome_pin_ext_pinimage" src="' + data.data[i].image_medium_url +'"/></a>');
      }
      }, "json" );
    
    if (!found){
        var foundword = 0;
        var list = query.split(/\s+/);
        for (i=0; i<list.length;i++) {
            if (list[i].length > 3) {
                foundword = 1;
                query = list[i];
                
                break;
            }
            
        }
        if (!foundword) {
            
            query = "you suck";
        }
        
        theurl =  "https://api.pinterest.com/v3/search/pins/?page_size=50&query=" + query+"&access_token=MTQzNTc3NDo0NTA1NzEyNzUxMjgwMTkxMjE6MnwxMzkwNjgwMDYxOjAtLWQ3YzI5NzNiMDJlMGU1YzYxZmY5NjMxNWFmOGZhOGNkY2E2NDU3ZmU=";
    $.get( theurl, function( data ) {
          $( "#chrome_pin_ext_panel" ).empty();
          for (i=0;i<data.data.length;i++) {
          $( "#chrome_pin_ext_panel" )
          .append( "\n")
          .append('<a href="http://www.pinterest.com/pin/'+data.data[i].id+'"><img Title="'+data.data[i].description+'" class="chrome_pin_ext_pinimage" src="' + data.data[i].image_medium_url +'"/></a>');
          }
          }, "json" );
    }
    
    
}
func();
$(window).on('change',function(){
             func();
             });