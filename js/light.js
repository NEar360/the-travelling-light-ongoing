class Lights{
    constructor(x,y,width,height,angle){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        var position = this.body.position;
        push();
        if(position.x<playerPosX){
            fill(colorcheck);
        }
        else{
            fill('black');
        }
        strokeWeight(0);
        translate(position.x,position.y);
        rotate(angle);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}