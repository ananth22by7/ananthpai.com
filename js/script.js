$(document).ready(function(){

  $(window).scroll(function(){
    var offset = 400
    var duration = 200

    if ($(this).scrollTop() > offset) {
      $('#back-top').fadeIn(duration);
    }
    else {
      $('#back-top').fadeOut(duration);
    }
  });

  $('#back-top').click(function(){
    $('html, body').animate({scrollTop: 0}, 800, 'easeOutQuint');
    return false;
  });
});