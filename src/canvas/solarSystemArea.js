const solarSystemArea = (updateFunction) => { 
    return {
        canvas : document.createElement("canvas"),
        start : function() {
            this.canvas.width = 680;
            this.canvas.height = 470;
            this.context = this.canvas.getContext("2d");
            document.querySelector('.canvas').append(this.canvas)
            this.frameNo = 0;
            this.interval = setInterval(updateFunction, 20);
        },
        stop : function() {
            clearInterval(this.interval);
        },    
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

export default solarSystemArea;
