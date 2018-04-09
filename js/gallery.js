// --------------------------------------------------/
// Exercise 2.10
// --------------------------------------------------/

// gallery image paths & titles
var data = [
  {
    "title": "Parallax Portfolio",
    "path": "img/parallax.png"
  },
  {
    "title": "p5.js canvas",
    "path": "img/p5grid.png"
  },
  {
    "title": "HTML5 canvas",
    "path": "img/canvas.png"
  },
  {
    "title": "AngularJs Portfolio",
    "path": "img/ngPortfolio.png"
  }
];

// wait for fragments to load...
window.setTimeout(function() {

  // loop index
  var idx = 0;
  // loop limit
  var lmt = data.length;

  // append partials
  for (idx = 0; idx < lmt; idx++) {
    // column
    var partial = "<div class='col col-lg-6 col-sm-12'>";
    // anchor
    partial += "<a href='" + data[idx].path + "' class='work-img'>";
    // image
    partial += "<img class='img-resposnsive' src='" + data[idx].path + "'>";
    // title
    partial += "<span class='info'>[WORK TITLE]</span>";
    // end anchor
    partial += "<a>";
    // end column
    partial += "</div>";
    // append partial as child...
    $('#the-row').append(partial);
  }

  // set titles and borders
  var images = $('#the-row img');
  var titles = $('#the-row .info');

  for (idx = 0; idx < lmt; idx++) {
    // set project title
    $(titles[idx]).text(data[idx].title);
    // alternate outline colors
    if((idx % 2) === 0) {
      $(images[idx]).css("border", "3px solid DodgerBlue");
    } else {
      $(images[idx]).css("border", "3px solid salmon");
    }
  }

  // display info on mouse enter
  $(".work-img").mouseenter(function(){
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });

}, 1000);
// end setTimeout
