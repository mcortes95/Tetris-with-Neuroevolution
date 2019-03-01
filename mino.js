class mino{
    constructor(color,pos){
        this.color=color;
        //console.log(pos);
        this.pos=pos;
    }
    


    show(){
        fill(this.color);
        rect(this.pos[0]*25+75,this.pos[1]*25-25,25,25);
    }
    showNext(){
        fill(this.color);
        rect(this.pos[0]*15-35,this.pos[1]*15+275,15,15);
    }
}
