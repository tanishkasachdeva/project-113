function preload(){

}

function setup(){
   canvas=createCanvas(640,480);
   canvas.position(110,250);
   video=createCapture(VIDEO);
   video.hide(); 
}

function draw(){
   image(video,0,0,640,480);
   
   fill(255,0,0);
   circle(30,50,50);
   fill(255,128,0);
   rect(5,80,50,50,20);
   fill(255,255,0);
   circle(30,160,50);
   fill(128,255,0);
   rect(5,190,50,50,20);
   fill(0,255,255);
   circle(30,270,50);
   fill(0,0,255);
   rect(5,300,50,50,20);
   fill(127,0,255);
   circle(30,380,50);
   fill(255,0,255);
   rect(5,410,50,50,20);

   fill(255,255,255);
   stroke(255,255,255);
   ellipse(320,30,495,50);

   fill(255,0,0);
   circle(610,50,50);
   fill(255,128,0);
   rect(585,80,50,50,20);
   fill(255,255,0);
   circle(610,160,50);
   fill(128,255,0);
   rect(585,190,50,50,20);
   fill(0,255,255);
   circle(610,270,50);
   fill(0,0,255);
   rect(585,300,50,50,20);
   fill(127,0,255);
   circle(610,380,50);
   fill(255,0,255);
   rect(585,410,50,50,20);
   fill(255,255,255);
   stroke(255,255,255);
   ellipse(320,450,495,50);
}