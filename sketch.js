const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1, platform,slingshot;
var gameState = "onSling";
var score = 0;
var birds = [];
var bird, bird1, bird2, bird3;

function preload(){
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    //PI Radian= 180 degrees
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    //log6 = new Log(100,100,20,50);

    bird = new Bird(200,50);
    bird1 = new Bird(150,170);
    bird2 = new Bird(100,170);
    bird3 = new Bird(50,170);

    birds.push(bird3);
    birds.push(bird2);
    birds.push(bird1);
    birds.push(bird);

    //objectName = new className(arg1, arg2)-> () invoke/call constructor and copy the arguments inside the constructor of the class.
    slingshot = new SlingShot(birds[birds.length - 1].body, { x: 200, y: 50 });

}

function draw(){
 
    Engine.update(engine);

    console.log(box1.body.position.x);
    if (backgroundImg) {
    background(backgroundImg);
    }else{
       // background("white");
    }
    
    textSize(32);
    noStroke ();
    fill ("white");
    text("Score: " + score, 1000, 30);
 
    box1.display();
    box2.display();

    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    //log6.display();
    pig1.score();
    pig3.score();

    bird.display();
    bird1.display();
    bird2.display();
    bird3.display();

    platform.display();
    slingshot.display();

    getTime();

}

function mouseDragged() {
    if(gameState === "onSling")
    //birds[birds.length - 1] last item in the birds array
    Matter.Body.setPosition(birds[birds.length - 1].body, { x: mouseX, y: mouseY })
    Matter.Body.applyForce(birds[birds.length-1].body, birds[birds.length-1].body.position, {x:5 , y:5 });
    return false;
    //birds.length - 1 = 3(number)
    //birds[birds.length - 1] = bird3(object)
}

function mouseReleased() {
    slingshot.fly();
    birds.pop ();
    gameState = "launched";
    return false;
}

function keyPressed() {
    if(keyCode === 32 && gameState === "launched"){
       
      Matter.Body.setPosition(birds[birds.length - 1].body, { x: 200, y: 50 });
      gameState === "onSling";
      slingshot.attach(birds[birds.length - 1].body);
      
    }
}

// JS is synchronous language - executes line by line
// we need to wait for fetch()/API call to complete

async function getTime(){
    // steps to do task

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);

    //"datetime": "2020-12-30T20:39:01.336944+05:30"
    var dateTime = responseJSON.datetime;

    var hr = dateTime.slice(11, 13);  
    
    if(hr> 06 && hr< 17){
        bg = "sprites/bg.png"
    }else{
        bg = "sprites/bi.jpg"
    }

    backgroundImg = loadImage(bg);
}