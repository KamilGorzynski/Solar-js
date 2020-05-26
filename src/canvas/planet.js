function planet(width, height, color, x, y, canvasArea) {

    // this.type = type;
    this.width = width;
    this.height = height;
    this.speed = 1;
    this.angle = 0;
    this.moveAngle = 1;
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