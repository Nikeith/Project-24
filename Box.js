class Box {
    constructor(x, y) {

      this.x = x;
      this.y = y;
      this.boxWidth = 200;
      this.boxHeight = 213;
      this.thickness = 20;
      this.bottomBody = Bodies.rectangle(this.x,this.y,this.boxWidth,this.thickness,{isStatic:true})
      this.leftWall = Bodies.rectangle(this.x-this.boxWidth/2,this.y-this.boxHeight/2,this.thickness,this.boxHeight,{isStatic:true})
      this.rightWall = Bodies.rectangle(this.x+this.boxWidth/2,this.y-this.boxHeight/2,this.thickness,this.boxHeight,{isStatic:true})
      
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
    }
    display(){
        rectMode(CENTER)
      rect(0,0,this.thickness,this.boxHeight);
      rect(0,0,this.thickness,this.boxHeight);
      rect(0,0,this.boxWidth,this.boxThickness);
    }
  };
  