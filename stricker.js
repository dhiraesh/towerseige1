class Stricker{
    constructor(x, y, radius) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius)
        this.radius = radius;
        this.block = loadImage('sprites/polygon.png');
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.block, this.body.position.x, this.body.position.y, 40);
        pop();
      }
}