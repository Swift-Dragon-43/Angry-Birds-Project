
class Chain {

constructor(bird,log6){

var options = {

bodyA : bird ,
bodyB : log6 ,
'stiffness':0.05,
'length':5


}

this.sling = Matter.Constraint.create(options);
 World.add(world, this.sling);
}

display(){

    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.bodyB.position;
    push ();
    strokeWeight(4);
    stroke("blue");

    line (pointA.x, pointA.y, pointB.x, pointB.y);
    pop ();
}


}


