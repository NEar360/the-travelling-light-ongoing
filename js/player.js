class Player{
    constructor(x,y,width,height,angle){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.trajectary =[];

        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var position = this.body.position;
        push();
        fill(colorcheck);
        strokeWeight(0)
        translate(position.x,position.y);
        rotate(angle);
        ellipse(0,0,this.width,this.height);
        pop();

        if(this.body.velocity.x > 1 ){
            var positionArray = [this.body.position.x, this.body.position.y];
            this.trajectory.push(positionArray);
        }
        var trajectaryLengths = this.trajectary.length;
        var trajectaryPos =[];
        for (let i = trajectaryLengths-5; i = trajectaryLengths; i++) {
            //this.trajectary.pop(0);
            trajectaryPos.push(this.trajectary[i])
        }
    }
}