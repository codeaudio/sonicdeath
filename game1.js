

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let bg = new Image();
let  pipe = new Image();
let ars = new Image();
let audio1 = new Audio();
let score = 0;
pipe.src = "img/gra.png";
bg.src = "img/vampire.jpg";
ars.src = "img/ars.png";
document.addEventListener("click",moveUp);
document.addEventListener("touchstart",touch);

audio1.src = 's.mp3';
function  touch() {
    
    if(yPos >= 236 ){
        
        yPos -= 240;
    }else if(yPos <= 230){
        yPos -= 3.95;
    }
  
    
}
function moveUp() {
    
    if(yPos >= 236 ){
        
        yPos -= 240;
    }else if(yPos <= 230){
        yPos -= 19.95;
    }
  
    
}
let pips = [];
pips[0] ={
    x:480,
    y:220
}

let xPos = 5;
let yPos =185;
let grav= 1.69;
min = Math.ceil(300);
max = Math.floor(900);

function draw() {
    audio1.play();
    
  ctx.drawImage(bg,0,0);
  
  for(let i = 0; i<pips.length; i++){
    pips[i].x -=1.04;
  ctx.drawImage(pipe, pips[i].x, pips[i].y);
  if(pips[i].x >= -1.20){
  for(let i = 0; i<pips.length; i++){
    pips[i].x -=0.225;
    if(pips[i].x == -1.20){
        pips[i].x -=1.20;
    }
   }}
  if(pips[i].x <=100 && pips[i].x>= 97.79999999) {
    
    pips.push({
    x: Math.floor(Math.random() * pipe.width + 650),
    y: Math.floor(Math.random() * pipe.height +143),
   
    });
    if(pips[i]>2){
    for (pips in pips[i]){
        pips.pop();
    }}
    }
    if(xPos + 30 >= pips[i].x && xPos + 30<= pips[i].x +80  && (yPos-10 >= pips[i].y+90   ||  yPos >= pips[i].y   && yPos<= pips[i].y +20   )){
   
    
       
  
       
    location.reload();
        
     
   
  

    }
    if(pips[i].x <=5.6 &&pips[i].x >=5){
        score++;
    }
  }

  ctx.drawImage(ars, xPos, yPos);
  yPos += grav;
  if(yPos>236){
      yPos = 236;
  }
  
        ctx.strokeStyle = "#F00";
        ctx.font = "italic 30pt Arial";
      
        ctx.font = 'bold 30px sans-serif';
        ctx.strokeText("SONIC DEATH: "+ score , 20, 50);


  requestAnimationFrame(draw);
    
}

bg.onload = draw;
draw();


