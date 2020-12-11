class Log extends BaseClass{
    constructor(x, y, height, angle) {

      //we did not pass width while creating the object in sketch.js, giving in default no. to super
      super(x, y, 20, height, angle);
      this.image = loadImage("sprites/wood2.png");
      
      //after creating body to manipulate properties
      Matter.Body.setAngle(this.body, angle);  
    }
    
  };
  