/**
 * Created by Nathan on 4/12/2017.
 */

import './jquery.min.js';

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('landing-navbar').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('landing-navbar').removeClass('.navbar-slider').addClass('landing-navbar-up');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('landing-navbar').removeClass('landing-navbar-up').addClass('.navbar-slider');
    }
  }

  lastScrollTop = st;
}