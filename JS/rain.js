var Rain = {
    x:0,
    y:0,
    h:0,
    w:0,
    vel:0,
    init: function(x,y,h,w,vel){
        this.x   = x;
        this.y   = y;
        this.h   = h;
        this.w   = w;
        this.vel = vel;
        return this;
    },
    fall: function(){
        this.y+=this.vel;
    },
    draw: function(contex){
        contex.fillStyle = "#dd2ce0";
        contex.fillRect(this.x,this.y,this.h,this.w);
    }
};
