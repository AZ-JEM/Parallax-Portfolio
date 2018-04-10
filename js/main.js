// -------------------------------------------------- /
// Check for complete loading of DOM...
// -------------------------------------------------- /
$(document).ready( function() {
  console.log("index loaded...");
  // --------------------------------------------------/
  // load content fragments
  // --------------------------------------------------/
  $('#home').load('../content/home.html');
  $('#about').load('../content/about.html');
  $('#contact').load('../content/contact.html');
  $('#faq').load('../content/faq.html');
  $('#gallery').load('../content/gallery.html');
  $('#google-map').load('../content/map.html');
  // $('#video').load('../content/video.html');
  console.log("load calls completed...");
  // select "Home"
  location.hash ='home';

  // --------------------------------------------------/
  // track status of hamburger
  // --------------------------------------------------/
  var burgerStatus = false;
  $('button.navbar-toggle').click(function() {
    burgerStatus = !burgerStatus;
  });

  // --------------------------------------------------/
  // jQuery smooth scrolling & dropdown menu management
  // triggered by anchor click events
  // --------------------------------------------------/
  scrollToAnchor = function(what) {
    // animate scroll
    var href = $.attr(what, 'href');
    if (href != undefined && href != '#') {
      $root.animate( {
        scrollTop: $(href).offset().top
      }, 1000, function() {
        location.hash = href;
        console.log(location.hash);
      });
    }
    return false;
  };

  var $root = $('html, body');
  $('.navbar-nav a').on('click', function() {
    // close drop down menu if active...
    if (burgerStatus) {
      $('button.navbar-toggle').click();
    }
    scrollToAnchor(this);
  });

  window.setTimeout(function() {
    $('#scroll-me').click(function() {
      scrollToAnchor(this);
    });
  } ,1000);

  // --------------------------------------------------/
  // enable Bootstrap3 tooltips
  // --------------------------------------------------/
  $('[data-toggle="tooltip"]').tooltip();

  // --------------------------------------------------/
  // post year in footer
  // --------------------------------------------------/
  var d = new Date();
  $('#year').text(d.getFullYear());

});
