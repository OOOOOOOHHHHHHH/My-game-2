class Enemies {
    constructor(x,y,width,height){
     
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
      rectMode(CENTER);
      var e = random(150,255); 
      fill(255,e,200);
      rect(pos.x, pos.y, this.width, this.height);
    }

    enemyMovement(){
        this.body.speed = 3;
        console.log(this.body.velocity.x);
    }
}