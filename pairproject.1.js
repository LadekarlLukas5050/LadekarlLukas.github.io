let x;
let y;
let xvel;
let yvel;
let circlesSize = 4;
let player;
let timer = 0;
let circles = [];
let color1;
let color2;
let color3;

function setup() {
  createCanvas(1000, 800);
  color1 = 255;
  color2 = 255;
  color3 = 255;
  for (let n = 0; n < 50; n++) {
    circles[n] = {
      x: random(0, width),
      y: random(0, height),
      xvel: random(-6, 6),
      yvel: random(-4, 4)

    }

  }
}


function draw() {
  background("black");
      player = circle(mouseX, mouseY, 8);
  for (let n = 0; n < 50; n++) {
      circle(circles[n].x, circles[n].y, circlesSize);
      fill(color1, color2, color3);
      circles[n].x = circles[n].x + circles[n].xvel;
      circles[n].y = circles[n].y + circles[n].yvel;
      if(circles[n].x + 4 >= 1000)
      {
        circles[n].xvel = -circles[n].xvel;
      }
      if(circles[n].x - 4 <= 0)
      {
        circles[n].xvel = -circles[n].xvel;
      }
      if(circles[n].y - 4 <= 0)
      {
        circles[n].yvel = -circles[n].yvel;
      }
      if(circles[n].y + 4 >= 800)
      {
        circles[n].yvel = -circles[n].yvel;
      }
        if (frameCount % 60 == 1) {
    timer++;
        }
if(dist(mouseX, mouseY, circles[n].x, circles[n].y) < 9){
  textSize(100);
  textAlign(CENTER, CENTER);
  text("Score:", width/2, height/3);
  text(timer, width/2, height/2);
  noLoop();



   }

  }
}



