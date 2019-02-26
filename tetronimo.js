//Wall kick data for the Super Rotation System (SRS).
//Kick data for J, L, Z, S, and T tetrominoes.
let wallKick_0=[
    [[0,0],[-1,0],[-1,-1],[0,2],[-1,2]],    //0>1
    [[0,0],[1,0],[1,1],[0,-2],[1,-2]],      //1>0
    [[0,0],[1,0],[1,1],[0,-2],[1,-2]],      //1>2
    [[0,0],[-1,0],[-1,-1],[0,2],[-1,2]],    //2>1
    [[0,0],[1,0],[1,-1],[0,2],[1,2]],       //2>3
    [[0,0],[-1,0],[-1,1],[0,-2],[-1,-2]],   //3>2
    [[0,0],[-1,0],[-1,1],[0,-2],[-1,-2]],   //3>0
    [[0,0],[1,0],[1,-1],[0,2],[1,2]]        //0>3
];
//Kick data for | tetromino.
let wallKick_1=[
    [[0,0],[-2,0],[1,0],[-2,1],[1,-2]],     //0>1
    [[0,0],[2,0],[-1,0],[2,-1],[-1,2]],     //1>0
    [[0,0],[-1,0],[2,0],[-1,-2],[2,1]],     //1>2
    [[0,0],[1,0],[-2,0],[1,2],[-2,-1]],     //2>1
    [[0,0],[2,0],[-1,0],[2,-1],[-1,2]],     //2>3
    [[0,0],[-2,0],[1,0],[-2,1],[1,-2]],     //3>2
    [[0,0],[1,0],[-2,0],[1,2],[-2,-1]],     //3>0
    [[0,0],[-1,0],[2,0],[-1,-2],[2,1]]      //0>3
];
//O has no kick behavior. 

class Tetronimo{
    constructor(type){
        this.blocks=[];
        this.type=type; 
        this.p=0; 

        if(type===9){
            this.color=color(69,69,69);
            this.poss=[
                [[4,1],[4,0],[3,1],[5,1]],
                [[4,1],[5,1],[4,0],[4,2]],
                [[4,1],[4,2],[5,1],[3,1]],
                [[4,1],[3,1],[4,2],[4,0]]
            ];
            for(let ss of this.poss[0]){
                //console.log(ss);
                this.blocks.push(new mino(this.color,ss));
            }
            this.behavior=wallKick_0;
        }

        //T
        if(type===0){
            this.color=color(148,0,211);
            this.poss=[
                [[4,1],[4,0],[3,1],[5,1]],
                [[4,1],[5,1],[4,0],[4,2]],
                [[4,1],[4,2],[5,1],[3,1]],
                [[4,1],[3,1],[4,2],[4,0]]
            ];
            //this.blocks=this.poss[this.p]; 
            for(let ss of this.poss[0]){
                //console.log(ss);
                this.blocks.push(new mino(this.color,ss));
            }
            this.behavior=wallKick_0;
        }
        //|
        if(type===1){
            this.color=color(0,255,255);
            this.poss=[
                [[3,0],[4,0],[5,0],[6,0]],
                [[5,-1],[5,0],[5,1],[5,2]],
                [[3,1],[4,1],[5,1],[6,1]],
                [[4,-1],[4,0],[4,1],[4,2]]
            ];
            //this.blocks=this.poss[this.p]; 
            for(let ss of this.poss[0]){
                //console.log(ss);
                this.blocks.push(new mino(this.color,ss));
            }
            this.behavior=wallKick_1;
        }
        //O
        if(type===2){
            this.color=color(255,255,0);
            this.poss=[
                [[4,0],[5,0],[4,1],[5,1]],
                [[4,0],[5,0],[4,1],[5,1]],
                [[4,0],[5,0],[4,1],[5,1]],
                [[4,0],[5,0],[4,1],[5,1]]
            ];
            for(let ss of this.poss[0]){
                //console.log(ss);
                this.blocks.push(new mino(this.color,ss));
            }
        }
        //J
        if(type===3){
            this.color=color(0,0,255);
            this.poss=[
                [[4,1],[3,0],[3,1],[5,1]],
                [[4,1],[5,0],[4,0],[4,2]],
                [[4,1],[5,2],[5,1],[3,1]],
                [[4,1],[3,2],[4,2],[4,0]]
            ];
            //this.blocks=this.poss[this.p]; 
            for(let ss of this.poss[0]){
                //console.log(ss);
                this.blocks.push(new mino(this.color,ss));
            }
            this.behavior=wallKick_0;
        }
        //L
        if(type===4){
            this.color=color(255,165,0);
            this.poss=[
                [[4,1],[5,0],[5,1],[3,1]],
                [[4,1],[5,2],[4,2],[4,0]],
                [[4,1],[3,2],[3,1],[5,1]],
                [[4,1],[3,0],[4,0],[4,2]]
            ];
            //this.blocks=this.poss[this.p]; 
            for(let ss of this.poss[0]){
                //console.log(ss);
                this.blocks.push(new mino(this.color,ss));
            }
            this.behavior=wallKick_0;
        }
        //S
        if(type===5){
            this.color=color(0,255,0);
            this.poss=[
                [[4,0],[5,0],[3,1],[4,1]],
                [[5,1],[5,2],[4,0],[4,1]],
                [[4,2],[3,2],[5,1],[4,1]],
                [[3,1],[3,0],[4,2],[4,1]]
            ];
            //this.blocks=this.poss[this.p]; 
            for(let ss of this.poss[0]){
                //console.log(ss);
                this.blocks.push(new mino(this.color,ss));
            }
            this.behavior=wallKick_0;
        }
        //Z
        if(type===6){
            this.color=color(255,0,0);
            this.poss=[
                [[4,1],[5,1],[4,0],[3,0]],
                [[4,1],[4,2],[5,1],[5,0]],
                [[4,1],[3,1],[4,2],[5,2]],
                [[4,1],[4,0],[3,1],[3,2]]
            ];
            //this.blocks=this.poss[this.p]; 
            for(let ss of this.poss[0]){
                //console.log(ss);
                this.blocks.push(new mino(this.color,ss));
            }
            this.behavior=wallKick_0;

        }
    
    }


    show(){
        for(let mino of this.blocks){
            mino.show()
        }
    }

    showNext(){
        for(let mino of this.blocks){
            mino.showNext();
        }
    }

    show0(){
        
        fill(this.color);
        
        for(let block of this.blocks){
            let x=block[0]*25+75;
            let y=block[1]*25;
            rect(x,y,25,25);
        }
    }
    fall(){
        //console.log(this.poss);
        for(let pos of this.poss){
            //block[0]++;
            for(let p  of pos){
                p[1]++;
            }
        }
    }
    moveLeft(){
        /*
        for(let mino of this.blocks){
            mino.pos[0]--;
        }
        */
        for(let pos of this.poss){
            for(let p of pos){
                p[0]--;
            }
        }
        
    }

    moveRight(){
        /*
        for(let mino of this.blocks){
            mino.pos[0]++;
        }
        */
        for(let pos of this.poss){
            for(let p of pos){
                p[0]++;
            }
        }
    }

    getLeftMap(){
        //TODO: Mirror the getRightMap() function for left rotation
        if(this.p===0){
            return 3;
        }
        else{
            return this.p-1;
        }
    }
    rotateLeft(matrix){
        //TODO: Mirror the rotateRight() function for left rotation 
        let test;
        if(this.p===0){
            test=7;
        }
        else if(this.p===1){
            test=1;
        }
        else if(this.p===2){
            test=3;
        }
        else if(this.p===3){
            test=5;
        }
        for(let offset of this.behavior[test]){
            //console.log(tests);
            let checkOffset=false;
            let newOffsets=[];
            for(let sp of this.poss[this.getLeftMap()]){
                let point=[offset[0]+sp[0],offset[1]+sp[1]];
                newOffsets.push(point);
            }
            let validCount=0;
            for(let minoOffset of newOffsets){
                if(minoOffset[0]<10 && minoOffset[0]>=0 && minoOffset[1]<20){
                    if(!matrix[minoOffset[0]][minoOffset[1]]){
                        validCount++;
                    }
                }
            }
            if(validCount===4){
                this.p=this.getLeftMap();
                let c=0;
                for(let mino of this.blocks){
                    mino.pos=this.poss[this.p][c];
                    c++;
                }
                for(let pos of this.poss){
                    for(let p of pos){
                        p[0]+=offset[0];
                        p[1]+=offset[1];
                    }
                }
                return;
            }
        }
    }

    getRightMap(){
        if(this.p===3){
            return 0;
        }
        else{
            return this.p+1;
        }
    }

    rotateRight(matrix){
        //This returns the wall kick mapping
        let test;
        if(this.p===0){
            test=0;
        }
        else if(this.p===1){
            test=2;
        }
        else if(this.p===2){
            test=4;
        }
        else if(this.p===3){
            test=6;
        }
        for(let offset of this.behavior[test]){
            let checkOffset=false;
            //console.log(offset);
            let newOffsets=[];
            for(let sp of this.poss[this.getRightMap()]){
                let point=[offset[0]+sp[0],offset[1]+sp[1]];
                newOffsets.push(point);
            }
            //console.log(newOffsets);
            let validCount=0;
            for(let minoOffset of newOffsets){
                //console.log(minoOffset);
                if(minoOffset[0]<10 && minoOffset[0]>=0 && minoOffset[1]<20){
                    //console.log(matrix[minoOffset[0]][minoOffset[1]]);
                    if(!matrix[minoOffset[0]][minoOffset[1]]){
                        validCount++;
                    }
                }
            }
            //console.log(validCount);
            if(validCount===4){
                //console.log('valid');
                this.p=this.getRightMap();
                //this.blocks=this.poss[this.p];
                let c=0;
                for(let mino of this.blocks){
                    mino.pos=this.poss[this.p][c];
                    c++;
                }
                for(let pos of this.poss){
                    for(let p of pos){
                        p[0]+=offset[0];
                        p[1]+=offset[1];
                    }
                }
                return;
            }
        }
    }


    getLeft(){
        let left=[];
        //console.log(this.blocks);
        for(let mino of this.blocks){
            let x=mino.pos[0]-1;
            let y=mino.pos[1];
            //console.log(mino);
            left.push([x,y]);
        }
        return left;
    }
    getRight(){
        let right=[];
        //console.log(this.blocks);
        for(let mino of this.blocks){
            let x=mino.pos[0]+1;
            let y=mino.pos[1];
            //console.log(mino);
            right.push([x,y]);
        }
        return right;
    }

    
}
