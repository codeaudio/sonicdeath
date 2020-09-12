

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let bg = new Image();
let  danger = new Image();
let ars = new Image();
let audio1 = new Audio();
let score = 0;
let punch = new Audio();
let score_audio = new Audio();
let imgs = ['img/gra.png',"img/vape.png"];
danger.src = imgs[Math.floor(Math.random()*imgs.length)];
bg.src = "img/vampire.jpg";
ars.src = "img/ars.png";

document.addEventListener("click",moveUp);
document.addEventListener("touchstart",touch);

audio1.src = 's.mp3';
score_audio.src = "score.mp3";
punch.src = "punch.mp3";
function  touch() {
    
    if(yPos >= 236 ){
        
        yPos -= 240;
    }else if(yPos <= 230){
        yPos -= 2.3;
    }
  
    
}
function moveUp() {
    
    if(yPos >= 236 ){
        
        yPos -= 240;
    }else if(yPos <= 230){
        yPos -= 21.95;
    }
  
    
}
let dangerous = [];
dangerous[0] ={
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
  
  for(let i = 0; i<dangerous.length; i++){
    dangerous[i].x -=1.04;
  ctx.drawImage(danger, dangerous[i].x, dangerous[i].y);
  if(dangerous[i].x >= -1.257){
  for(let i = 0; i<dangerous.length; i++){
    dangerous[i].x -=0.228;
    if(dangerous[i].x == -1.20){
        dangerous[i].x -=1.20;
    }
   }}
  if(dangerous[i].x <=100 && dangerous[i].x>= 97.79999999) {
    
    dangerous.push({
    x: Math.floor(Math.random() * danger.width + 650),
    y: Math.floor(Math.random() * danger.height +143),
   
    });
    if(dangerous[i]>10){
    for (dangerous in dangerous[i]){
        dangerous[i].pop();
    }}
    }
    
    if(xPos + 30 >= dangerous[i].x && xPos + 30<= dangerous[i].x +90  && yPos + 10 >= dangerous[i].y && yPos <= dangerous[i].y +68    ){
   
        
        
      
  
        
   location.reload();
  
       
  

    }
    if(dangerous[i].x <=5.901 &&dangerous[i].x >=4){
        score++;
        score_audio.play();
    }
  }
if(score <=0 ){
    punch.play();
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


