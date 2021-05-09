class Boy{
  constructor(x,y,width,height){
    var options ={
      isStatic: true  
    }  

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.boy = loadImage("Plucking mangoes/boy.png");
    World.add(world,this.body);
  }  
  display(){
   var pos = this.body.position;

   imageMode(CENTER);
   image(this.boy,pos.x,pos.y,200,250);

  }
}