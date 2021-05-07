class Sand {
    constructor(x,y,r) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      };
      this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    };
    display(){
      var sandpos = this.body.position;
  
      push();
      translate(sandpos.x, sandpos.y);
      strokeWeight(4);
      stroke('black')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.r, this.r);
      pop();
    };
  };
  