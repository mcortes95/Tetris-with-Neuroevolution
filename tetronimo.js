class Tetronimo{
    constructor(type){
        this.blocks=[];
        //T
        if(type===0){
            this.color=color(148,0,211);
            this.blocks.push([5,1]);
            this.blocks.push([4,0]);
            this.blocks.push([5,0]);
            this.blocks.push([6,0]);
        }
        //|
        if(type===1){
            this.color=color(0,255,255);
            this.blocks.push([4,0]);
            this.blocks.push([5,0]);
            this.blocks.push([6,0]);
            this.blocks.push([7,0]);
        }
        //O
        if(type===2){
            this.color=color(255,255,0);
            this.blocks.push([5,0]);
            this.blocks.push([6,0]);
            this.blocks.push([5,1]);
            this.blocks.push([6,1]);
        }
        //J
        if(type===3){
            this.color=color(0,0,255);
            this.blocks.push([4,0]);
            this.blocks.push([5,0]);
            this.blocks.push([6,0]);
            this.blocks.push([6,1]);
        }
        //L
        if(type===4){
            this.color=color(255,165,0);
            this.blocks.push([4,0]);
            this.blocks.push([5,0]);
            this.blocks.push([6,0]);
            this.blocks.push([4,1]);
        }
        //S
        if(type===5){
            this.color=color(0,255,0);
            this.blocks.push([5,0]);
            this.blocks.push([6,0]);
            this.blocks.push([4,1]);
            this.blocks.push([5,1]);
        }
        //Z
        if(type===6){
            this.color=color(255,0,0);
            this.blocks.push([4,0]);
            this.blocks.push([5,0]);
            this.blocks.push([5,1]);
            this.blocks.push([6,1]);

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
        for(let block of this.blocks){
            //block[0]++;
            block[1]++;
        }
    }
    moveLeft(){
        for(let block of this.blocks){
            block[0]--;
        }
    }

    moveRight(){
        for(let block of this.blocks){
            block[0]++;
        }
    }
    rotateLeft(){
        console.log('TODO: rotate left');
    }

    rotateRight(){
        console.log('TODO: rotate right');
    }


    
}
