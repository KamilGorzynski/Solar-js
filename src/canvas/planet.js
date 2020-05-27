function planet(factor, color, x, y, canvasArea) {

    // this.type = type;
    this.width = 30;
    this.height = 30;
    this.speed = factor;
    this.angle = 0;
    this.moveAngle = factor/2;
    this.x = x;
    this.y = y;    
    this.update = function() {
       let ctx = canvasArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);        
        ctx.restore();    
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}

export default planet;