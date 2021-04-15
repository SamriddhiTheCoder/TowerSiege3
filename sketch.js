const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var shooter;
var score = 0;
var color1 = "";

function preload(){
    shooter = loadImage('shooter.png');
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

    //flying box
    polygon = Bodies.circle(150, 150, 30, {'restitution':0.8,'friction':1.0,'density':1.0});
    World.add(world, polygon);

    //chain
    rope = new SlingShot(polygon, {x:150, y:150});

    //ground
	ground = new Ground(600, 285, 200, 10);
    ground1 = new Ground(500, 390, 1000, 20);

    block1 = new Block(600, 260, 30, 40); 
    block2 = new Block(570, 260, 30, 40); 
    block3 = new Block(540, 260, 30, 40); 
    block4 = new Block(630, 260, 30, 40); 
    block5 = new Block(660, 260, 30, 40);

    block6 = new Block(585, 220, 30, 40); 
    block7 = new Block(555, 220, 30, 40); 
    block8 = new Block(615, 220, 30, 40); 
    block9 = new Block(645, 220, 30, 40); 

    block10 = new Block(600, 170, 30, 40); 
    block11 = new Block(570, 180, 30, 40); 
    block12 = new Block(630, 180, 30, 40);

    block13 = new Block(600, 140, 30, 40);

	Engine.run(engine);
}


function draw() {
    getBackground();
    console.log(color1);
    if(color1){
    background(color1);
    Engine.update(engine);

    rectMode(CENTER);
    imageMode(CENTER);

    //score display
    fill("white");
    text("SCORE: " + score, 800, 40)

    //polygon image
    image(shooter, polygon.position.x, polygon.position.y, 70, 70);

    //display for ground
    ground.display();
    ground1.display();

    rope.display();

    push();
    //diplay for the blocks
    fill("orange"); 
    block1.display(); 
    block2.display(); 
    block3.display(); 
    block4.display(); 
    block5.display(); 

    fill("lightpink"); 
    block6.display(); 
    block7.display(); 
    block8.display(); 
    block9.display(); 

    fill("lightgreen"); 
    block10.display(); 
    block11.display(); 
    block12.display(); 

    fill("lightblue"); 
    block13.display();
    pop();

    //calling the scores
    block1.score(); 
    block2.score(); 
    block3.score(); 
    block4.score(); 
    block5.score(); 

    block6.score(); 
    block7.score(); 
    block8.score(); 
    block9.score();
    
    block10.score(); 
    block11.score(); 
    block12.score();
    
    block13.score(); 
    }
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rope.attach(polygon);
    }
}

async function getBackground(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    console.log(hour);
    console.log(responseJSON);
    
    if(hour>=06 && hour<=18){
        color1 = "cyan";
    }
    else{
        color1 = "blue";
    }
}

