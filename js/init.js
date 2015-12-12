$(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#arrow').pushpin({ top: $('#arrow').offset().top });
    var divs = $('#arrow');
   //  $(window).scroll(function(){
   // var percent = $(document).scrollTop() / ($(document).height() - $(window).height());
   // divs.css('opacity', 1 - percent);
   //  });
var header = $('#arrow');
$(window).scroll(function() {
    header.addClass('lower-opacity');
    if($(this).scrollTop() === 0) {
        header.removeClass('lower-opacity');
    }
});

}); // end of document ready// end of jQuery name space