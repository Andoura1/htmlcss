$(document).ready(function() {
    
    
    /*for the sticky navigation----------------------------------*/
    
    
    $('.js--section-features').waypoint(function(direction) { if (direction === 'down') { $('nav').addClass('sticky');  } 
    else {  $('nav').removeClass('sticky');   } 
                                                             
    }, {   offset: '60px';   }); 
    
    
   /* Scroll on buttons---------------------------------------- */
    
    $('.js--scroll-to-plans').click(function() {  $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);    });
    
    $('.js--scroll-to-start').click(function() {  $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);   });
    
    
     /* Navigation scroll --------------------------------------*/
    
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /*Anmation on scroll-------------------------------------*/
    
    $('.js--wp-1').waypoint(function(direction) {   $('.js--wp-1').addClass('animate__animated animate__fadeIn');   },    { offset: '50%'     });
    
    
    $('.js--wp-2').waypoint(function(direction) {  $('.js--wp-2').addClass('animate__animated animate__zoomInUp');  },    { offset: '50%'     });
    
    $('.js--wp-3').waypoint(function(direction) {  $('.js--wp-3').addClass('animate__animated animate__heartBeat');  },   { offset: '50%'     });
    
    $('.js--wp-4').waypoint(function(direction) {  $('.js--wp-4').addClass('animate__animated animate__bounceInUp');  },    { offset: '50%'     });
    
    
    /*MOBILE NAV--------------------------------------------*/
    
    $('.js--nav-icon').click(function() {  var nav = $('.js--main-nav');   nav.slideToggle(200);       });
    
    
    
    /* Changes to add button for iphone*/
    
    
    










});
    
