var screen = Object.create(Screen).init("can","#FFFFFF");
var RainDrop = [];
var Ndrops = 100;

for(var i=0;i<Ndrops;i++){
    RainDrop.push(Object.create(Rain).init(Math.random()*screen.width,Math.random()*screen.width*-10,0.01+Math.random()*1,5+Math.random()*20,5+Math.random()*9));
}

console.log(RainDrop);

setInterval(function(){
    screen.clear();

    for(var i=0;i<Ndrops;i++){
        RainDrop[i].draw(screen.contex);
        RainDrop[i].fall();
        if(RainDrop[i].y>screen.height+10){
            RainDrop[i].y=-30;
            RainDrop[i].x = Math.random()*screen.width;
        }
    }


},1000/60);
