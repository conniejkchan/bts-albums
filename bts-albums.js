const c1 = document.getElementById('c1');
const context = c1.getContext('2d'); 

let width;
let height;

//drawing 1
function setup1() {
    // fixed canvas size
    width = c1.width;
    height = c1.height;
  
    // set the CSS display size
    c1.style.width = width + 'px';
    c1.style.height = height + 'px';
    
    // set the number of of canvas pixels, scaled for screen resolution
    let scale = window.devicePixelRatio;
    c1.width = width * scale;
    c1.height = height * scale;
  
    // normalize the coordinate system
    context.scale(scale, scale);
}

function drawPlane() {
    context.beginPath();
    //context.moveTo(100, 75);
    //context.lineTo(150, 125);
    //context.lineTo(150, 275);
    context.moveTo(100, 250);
    context.lineTo(95, 225);
    context.lineTo(120, 225);
    context.lineTo(105, 125);
    context.lineTo(140, 125);
    context.lineTo(140, 125);
    context.lineTo(170, 225);
    context.lineTo(330, 200);
    //context.ellipse(200, 200, 50, 50, 0, 0, 2 * Math.PI, false);
    context.lineTo(370, 220);
    context.lineTo(330, 250);
    context.lineTo(250, 270);
    context.lineTo(260, 240);
    context.lineTo(240, 300);
    context.lineTo(210, 305);
    context.lineTo(220, 240);
    context.lineTo(215, 270);
    context.lineTo(105, 280);
    context.lineTo(100, 280);
    context.closePath();
    context.stroke();
    //context.fill();

    context.font = '44px Trebuchet MS';
    context.textBaseline = 'right';
    context.textAlign = 'bottom';
    context.strokeText('airplane', width/4, height/4);
    
}

setup1();
drawPlane();

const c2 = document.getElementById('c2');
const context2 = c2.getContext('2d'); 

let width2;
let height2;
let color2 = 0;

//drawing 2
function setup2() {
    // fixed canvas size
    width2 = c2.width;
    height2 = c2.height;
  
    // set the CSS display size
    c2.style.width2 = width2 + 'px';
    c2.style.height2 = height2 + 'px';
    
    // set the number of of canvas pixels, scaled for screen resolution
    let scale2 = window.devicePixelRatio;
    c2.width2 = width2 * scale2;
    c2.height2 = height2 * scale2;
  
    // normalize the coordinate system
    context2.scale(scale2, scale2);
}

function airBalloon(){
    context2.beginPath();
    context2.moveTo(100, 250);
    context2.lineTo(500, 225);
    context2.stroke();

    context2.font = '22px Trebuchet MS';
    context2.textBaseline = 'right';
    context2.textAlign = 'bottom';
    context2.strokeText('Hot air balloon', width2/4, height2/4);
}

setup2();
airBalloon();