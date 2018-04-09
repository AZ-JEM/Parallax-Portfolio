// --------------------------------------------------/
// Exercise 2.9
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
    "title": "Angular.js Portfolio",
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
    var partial = "<div class='col col-lg-3 col-sm-6'>";
    // thumbnail
    partial += "<div class='thumbnail'>";
    // title
    partial += "<h4>...</h4>";
    // image
    partial += "<img src='" + data[idx].path + "'>";
    // end thumbnail
    partial += "</div>";
    // end column
    partial += "</div>";
    // append partial as child...
    $('#the-row').append(partial);
  }

  // set titles and borders
  var images = $('#the-row .thumbnail');
  var titles = $('#the-row h4');

  for (idx = 0; idx < lmt; idx++) {
    // set project title
    $(titles[idx]).text((idx + 1).toString() + ": " + data[idx].title);
    // alternate outline colors
    if((idx % 2) === 0) {
      $(images[idx]).css("border", "3px solid DodgerBlue");
    } else {
      $(images[idx]).css("border", "3px solid salmon");
    }
  }
}, 1000);
