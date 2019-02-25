class mino{
    constructor(color,x,y){
        this.color=color;
        this.x=x;
        this.y=y;
    }
    


    show(){
        fill(this.color);
        rect(this.x*25+75,y*25,25,25);
    }
