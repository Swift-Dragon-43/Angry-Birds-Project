
class SlingShot {

constructor(bird, point){

var options = {

bodyA : bird ,
pointB : point ,
'stiffness': 0.05,
'length': 5

}

 this.sling = Matter.Constraint.create(options);
 World.add(world, this.sling);
}

fly(){
    //detaching bird from the sling
    //null(0) is a JS datatyp
    this.sling.bodyA = null;
}

display(){
    //display should access bird body's position only when it is attached to the sling
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        push ();
        strokeWeight(4);
        stroke("blue");

        line (pointA.x, pointA.y, pointB.x, pointB.y);
        pop ();
    }   
    
}

}


