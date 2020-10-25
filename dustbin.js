class Dustbin{
    constructor(x, y, width, height) {
        var options = {
            
            isStatic:true,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);
        rect(600, 600, 170, 10);
        
        
      }
}