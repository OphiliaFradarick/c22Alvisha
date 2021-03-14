const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box;

function setup(){
 
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world =  engine.world;

  var option ={
    isStatic : false
  }
  
  box = Bodies.rectangle(200,200,50,50, option);
  World.add(world, box);
  

}

function draw(){
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(200,200,50,50);

}