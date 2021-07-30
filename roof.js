class roof{
    constructor(){
        this.body=Bodies.rectangle(200,100,500,20,{isStatic:true})
        World.add(world,this.body)
     }
   display(){
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,500,20)
   }  
}