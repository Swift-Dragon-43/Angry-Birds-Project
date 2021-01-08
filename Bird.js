class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/strangeDots.png");
    this.visibility = 255;
                      
    //this.trajectory = [ i =0 [x0,y0], i= 1[x1, y1], i=2[x2, y2]..........]
    this.trajectory = [];
  }


  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  //1 collecting position of bird in array
   let pos = [this.body.position.x, this.body.position.y];

  if(this.body.position.x > 220 && this.body.speed > 10){
  //2 pushing it to trajectory array 
    this.trajectory.push(pos);
  }
    push ();
  //3 to loop over the items of trajectory array
   for(var i=0; i<this.trajectory.length; i++){
    this.visibility = this.visibility - 0.5;
    tint (255, this.visibility);
    image(this.smokeImg, this.trajectory[i][0], this.trajectory[i][1] );
   }
   pop ();
  }
}