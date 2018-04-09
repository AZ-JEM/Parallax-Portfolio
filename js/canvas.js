// --------------------------------------------------/
// make sure document is loaded...
// --------------------------------------------------/
window.onload = function() {

  // --------------------------------------------------/
  //  Global declarations
  // --------------------------------------------------/
  // get the canvas handle
  var canvas = document.getElementById('canvas');
  // set drawing context
  var ctx = canvas.getContext('2d');
  // current angle of rotation
  var a = 0;
  // desired dimensions of centered rectangle
  var w = 350;
  var h = w;
  // focal point = center of canvas
  var cx = canvas.width/2;
  var cy = canvas.height/2;
  // calc deltas
  var dx = h/2;
  var dy = w/2;
  // animation request id
  var req;
  var run = true;
  var parking = false;
  // animation toggle control
  ctl = document.getElementById('toggle-animation');
  // ctl = document.getElementById('topic');
  span = document.getElementById('toggle-animation-span');
  // prime up the canvas
  setup();
  draw();

  // --------------------------------------------------/
  //  one time configuration
  // --------------------------------------------------/
  function setup () {
    ctx.shadowColor = "#555";
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 30;
    ctx.shadowOffsetY = 30;
    // toggle frame animations
    ctl.addEventListener('click', function() {
      if (!parking) {
        run = !run;
        if (run) {
          // span.textContent = "pause";
          span.classList.remove('glyphicon-play');
          span.classList.add('glyphicon-pause');
          // console.log("Play to pause : Running....");
          draw();
        } else {
          // span.textContent = "Parking...";
          span.classList.remove('glyphicon-pause');
          span.classList.add('glyphicon-hourglass');
          span.classList.add('glyphicon-time');
          span.classList.add('glyphicon-refresh');
          // console.log("pause to Hourglass : Parking....");
          parking = true;
        }
      }
    });
  }  // end setup

  // --------------------------------------------------/
  //  draw a single frame
  // --------------------------------------------------/
  function draw () {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // calculate new angle of rotation
    a = a < 360 ? a + 0.25 : 0;
    // draw ellipses
    drawEllipses();
    // perform rotation
    ctx.translate(cx, cy);
    ctx.rotate(a * (Math.PI/180));
    // draw center rectangle
    centerRect();
    // reset current transformation matrix to the identity matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // make frame request
    if (run) {
      req = window.requestAnimationFrame(draw);
    } else {
      if (a % 45 != 0.0)
        req = window.requestAnimationFrame(draw);
      else {
        window.cancelAnimationFrame(req);
        parking = false;
        // span.textContent = "Run";
        span.classList.remove('glyphicon-hourglass');
        span.classList.add('glyphicon-play');
        // console.log("Hourglass to Play: Parked....");
      }
    }

    // if (a == 0.0) console.log("zero found" + a);
  }

  // --------------------------------------------------/
  //  draw all ellipses
  // --------------------------------------------------/
  function drawEllipses () {
    // locals
    var hyp  = 0;
    var newX = 0;
    var newY = 0;
    var newA = 0;
    var hue  = 0;
    // draw properties
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 3;
    ctx.fillStyle = 'hsl(' + a.toString() + ', 50%, 50%, 0.5)';
    // calculate distance to centers
    hyp = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    // one ellipse per quadrant
    for (var i=0; i<4; i++) {
      // calculations
      newA = a + 45 + (i*90);
      newX = cx + (hyp) * Math.cos(newA * Math.PI/180);
      newY = cy + (hyp) * Math.sin(newA * Math.PI/180);
      // start path
      ctx.beginPath();
      // opposing corners spin in opposing directions
      if ((i % 2) === 0)
        ctx.ellipse(newX, newY, 30, 90, ( 3 * newA * Math.PI/180), 0, 2 * Math.PI);
      else
        ctx.ellipse(newX, newY, 30, 90, (-1 * newA * Math.PI/180), 0, 2 * Math.PI);
      // end path
      ctx.closePath();
      // draw ellipse
      ctx.stroke();
      ctx.fill();
    }  // end for
  } // end drawEllipses

  // --------------------------------------------------/
  //  draw the center rotating rectangle
  // --------------------------------------------------/
  function centerRect() {
    // draw centered rectangle
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 0, 127, 0.5)';
    ctx.rect(-dx, -dy, dx*2, dy*2);
    ctx.closePath();
    ctx.fill();
    // bisect rectangle
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 127, 0, 0.5)';
    ctx.moveTo(-dx, -dy);
    ctx.lineTo( dx,  dy);
    ctx.lineTo(-dx,  dy);
    ctx.lineTo(-dx, -dy);
    ctx.closePath();
    ctx.fill();
  }
};
