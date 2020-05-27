function planet(speed, factor, src, x, y, canvasArea) {

    this.type = 'image';
    this.image = new Image();
    this.image.src = src;
    this.width = 30;
    this.height = 30;
    this.speed = speed;
    this.angle = 0;
    this.moveAngle = speed / factor;
    this.x = x;
    this.y = y;    
    this.update = function() {
       let ctx = canvasArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, this.width / -2, this.height / -2, this.width, this.height);    
        ctx.restore();    
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}

export default planet;