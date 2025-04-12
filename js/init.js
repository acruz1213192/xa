(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    // Initiate the wowjs
    new WOW().init();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// Or with jQuery

$(document).ready(function(){
  
  $('#carousel-video').carousel({
    numVisible: 3,
    shift: 200
  });

  /*$('#carousel-comentarios').carousel({
    numVisible: 1,
    fullWidth: true,
    indicators: true
  });*/


  var windowWidth = $(window).width();

  if (windowWidth < 768) {
    $('.slider').slider({full_width: true, height: 1400});
  } else if (windowWidth >= 768 && windowWidth < 992) {
    $('.slider').slider({full_width: true, height: 800});
  } else {
    $('.slider').slider({full_width: true, height: 500});
  }

    


  

    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.remove('navbar-transparent');
        nav.classList.add('navbar-primary');
      } else {
        nav.classList.remove('navbar-primary');
        nav.classList.add('navbar-transparent');
      }
    });

});

