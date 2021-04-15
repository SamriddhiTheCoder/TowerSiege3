class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    
    World.add(world, this.body);
  }

  score(){
    if(this.visibility<0 && this.visibility>-105){
      score++;
    }
  }

  display(){
    if(this.body.speed<3){
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    } else {
    push();
    rectMode(CENTER);
    this.visibility = this.visibility-5;
    tint(255, this.visibility);
    World.remove(world, this.body);
    pop();
    }
  }
}
