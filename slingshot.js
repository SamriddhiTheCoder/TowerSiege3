class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
            push();
            strokeWeight(4);
            stroke(84, 39, 15);
            if(this.sling.bodyA){
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB;
                line(pointA.x, pointA.y, pointB.x, pointB.y); 
            }
            pop();
    }
    
}