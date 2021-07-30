class chain{
    constructer(a,b){
        var options= {
            bodyA:a,
            bodyB:b,
            length:10,
            stiffness:0.04
        }
        this.chains= Constraint.create(options)
        World.add(world, this.chains)
    }

    display(){

        strokeWeight(4)
       // stroke("green")
        line(this.chains.bodyA.position.x,this.chains.bodyA.position.y,this.chains.bodyB.position.x,this.chains.bodyB.position.y)
    }
}