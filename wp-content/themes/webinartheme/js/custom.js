jQuery(function($)
{
$(document).ready(function() {

//smooth scroll to anchor "#"
  $('.sign_up_button a').click(function(e) {
    e.preventDefault();

    /*var elementClick = '#sign_up';*/
        var destination = $('#sign_up').offset().top;
        
            $('html, body').animate({ 
            	'scrollTop': destination }, 500);
         

      

    /*var target = '#sign_up',
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function() {
      window.location.hash = target;
    });*/
  });







});

});