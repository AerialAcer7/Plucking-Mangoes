class Chain{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length:50
      }
      this.sling = Matter.Constraint.create(options);
      World.add(world, this.sling);
  }
  attach(body){
      this.sling.bodyA = body;
  }
  
  fly(){
      this.sling.bodyA = null;
  }

  display(){
    if(this.sling.bodyA !== null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
  }  
  
}