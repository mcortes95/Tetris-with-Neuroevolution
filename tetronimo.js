
    
class Tetronimo{
    constructor(type){
        this.blocks=[];
        this.type=type; 
        this.p=2; 
        //T
        if(type===0){
            this.color=color(148,0,211);
            this.poss=[[[5,1],[5,2],[6,1],[4,1]],
                        [[5,1],[4,1],[5,2],[5,0]],
                        [[5,1],[5,0],[4,1],[6,1]],
                        [[5,1],[6,1],[5,0],[5,2]]];
            this.blocks=this.poss[this.p]; 
        }
        //|
        if(type===1){
            this.color=color(0,255,255);
            this.poss=[
                [[4,1],[5,1],[6,1],[7,1]],
                [[5,-1],[5,0],[5,1],[5,2]],
                [[4,0],[5,0],[6,0],[7,0]],
                [[6,-1],[6,0],[6,1],[6,2]]];
            this.blocks=this.poss[this.p]; 
        }
        //O
        if(type===2){
            this.color=color(255,255,0);
            this.poss=[
                [[5,0],[6,0],[5,1],[6,1]],
                [[5,0],[6,0],[5,1],[6,1]],
                [[5,0],[6,0],[5,1],[6,1]],
                [[5,0],[6,0],[5,1],[6,1]]];
            this.blocks=this.poss[this.p]; 
        }
        //J
        if(type===3){
            this.color=color(0,0,255);
            this.poss=[
                [[5,1],[6,2],[6,1],[4,1]],
                [[5,1],[4,2],[5,2],[5,0]],
                [[5,1],[4,0],[4,1],[6,1]],
                [[5,1],[6,0],[5,0],[5,2]]];
            this.blocks=this.poss[this.p]; 
        }
        //L
        if(type===4){
            this.color=color(255,165,0);
            this.poss=[
                [[5,1],[4,2],[4,1],[6,1]],
                [[5,1],[4,0],[5,0],[5,2]],
                [[5,1],[6,0],[6,1],[4,1]],
                [[5,1],[6,2],[5,2],[5,0]]];
            this.blocks=this.poss[this.p]; 
        }
        //S
        if(type===5){
            this.color=color(0,255,0);
            this.poss=[
                [[5,2],[4,2],[6,1],[5,1]],
                [[4,1],[4,0],[5,2],[5,1]],
                [[5,0],[6,0],[4,1],[5,1]],
                [[6,1],[6,2],[5,0],[5,1]]
            ];
            this.blocks=this.poss[this.p];
        }
        //Z
        if(type===6){
            this.color=color(255,0,0);
            this.poss=[
                [[5,1],[4,1],[5,2],[6,2]],
                [[5,1],[5,0],[4,1],[4,2]],
                [[5,1],[6,1],[5,0],[4,0]],
                [[5,1],[5,2],[6,1],[6,0]]];
            this.blocks=this.poss[this.p]; 

        }
    
    }


    show(){
        fill(this.color);
        
        for(let block of this.blocks){
            let x=block[0]*25+50;
            let y=block[1]*25;
            rect(x,y,25,25);
        }
    }
    fall(){
        for(let pos of this.poss){
            //block[0]++;
            for(let p  of pos){
                p[1]++;
            }
        }
    }
    moveLeft(){
        for(let pos of this.poss){
            for(let p of pos){
                p[0]--;
            }
        }
    }

    moveRight(){
        for(let pos of this.poss){
            for(let p of pos){
                p[0]++;
            }
        }
    }
    rotateLeft(){
        console.log('TODO: rotate left');
        if(this.p===0){
            this.p=3;
        }
        else{
            this.p--;
        }
        this.blocks=this.poss[this.p];
    }

    rotateRight(){
        if(this.p===3){
            this.p=0;
        }
        else{
            this.p++;
        }
        this.blocks=this.poss[this.p];
    }


    
}
