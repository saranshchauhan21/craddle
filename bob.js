class Bob{
    constructor(){
        this.body=Bodies.circle(250,300,10)
        World.add(world,this.body)
     }
   display(){
ellipseMode(CENTER)
ellipse(this.body.position.x,this.body.position.y,20,20)
   }  
}