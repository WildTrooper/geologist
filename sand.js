class Sand{
    constructor(x,y,radius){
    var options={
        density : 1,
        friction : 5,
        restitution : 0.3
    } 
    this.body= Bodies.circle(x,y,radius,options);
    this.radius =radius;
    World.add(world,this.body)
    }
    
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle)
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("black");
    fill("red");
    ellipse (0,0,this.radius,this.radius);
    pop();
    }
    }