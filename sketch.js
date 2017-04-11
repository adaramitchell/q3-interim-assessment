var x = 0;
var speed =3;
var numbers = [15,22,48,37];
var habbits = ["hustle", "grit", "growth"] 
var j = 0;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(63, 107, 252);
    paint();
    
    stroke(255);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(255, 124, 218);
    }
    
    else{
        noFill();
    }
    
    ellipse(x,200,100,100);
    if(x>width || x<0){
        console.log("CIRCLE IS OFF THE SCREEN!!!")
        speed = speed * -1;
    }
    
    x = x + speed;
    console.log(x);
    
    for(var i = 0; i < 4; i++){
        ellipse((i+1)*100,300,numbers[i], numbers[i]);
    }
    
    fill(255);
    textSize(50);
    text(habbits[j], 230, 150);
    
 
  
}

function paint(){
      for(var x =0; x <= 600; x = x + 50){
        ellipse(x, 100, 20, 20);
    }
}

function mousePressed(){
    j++;
    if(j==habbits.length){
        j=0;
    }
}