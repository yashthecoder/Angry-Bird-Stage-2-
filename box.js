class Box extends BaseClass {
  constructor(x, y, width, height) {

    super (x,y,width, height);
      this.image = loadImage ("sprites/wood1.png");
    }
    }
    /*var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    var angle = this.body.angle ; 
    push ();

    translate (pos.x,pos.y);
    rotate (angle);

    rectMode(CENTER);
    strokeWeight(6);
    stroke("orange");
    fill("brown");
    rect(0,0,this.width, this.height);
    pop();
  }
};*/
