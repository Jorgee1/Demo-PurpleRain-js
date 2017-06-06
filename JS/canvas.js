var Screen = {
    canvas : undefined,
    contex : undefined,
    width  : 0,
    height : 0,
    color  : "#000000",
    init: function(id,color){
        this.canvas = document.getElementById(id);
        this.contex = this.canvas.getContext("2d");
        this.width  = this.canvas.width;
        this.height = this.canvas.height;
        this.color  = color;
        return this;
    },
    getContext: function(){
        return this.contex;
    },
    getHeight: function(){
        return this.height;
    },
    getWidth: function(){
        return this.width;
    },
    clear: function(){
        this.contex.fillStyle = this.color;
        this.contex.fillRect(0,0,this.width,this.height);
    },
    toString: function(){
        console.log(this);
    }
};
