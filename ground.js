class Ground 
{
  constructor(x, y, w, h) 
  {
    var ground_options = {
      isStatic:true
    };
    
    ground = Bodies.rectangle(x, y, w, h, ground_options);
    World.add(world, ground);
    
  }

  show() {
    var pos = ground.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y);
    pop();
  }
  
}


