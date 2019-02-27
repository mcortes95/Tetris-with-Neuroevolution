class Game{
    constructor(nn){
        this.c;
        this.alive=[];
        this.next;
        this.dead=[];
        this.matrix=[...Array(10)].map(e =>Array(20).fill(false));
        this.score=0;
        this.counter=1;
        this.gravity=60;
        this.fall=true;
        this.bag=[0,1,2,3,4,5,6];
        this.alive[0]=new Tetronimo(this.randomBag());
        this.next=new Tetronimo(this.randomBag());
        if(nn){
            this.nn=nn.copy();
        }
        else{
            this.nn=new NeuralNetwork(11,10,5);
        }
    }


    randomBag(){
        if(this.bag.length===0){
            this.bag=[0,1,2,3,4,5,6];
        }
        let t=random(this.bag);
        if(this.bag.length>0){
            let remove=0;
            for(let x=0;x<this.bag.length;x++){
                if(this.bag[x]===t){
                    remove=x;
                    x=10;
                }
            }
            this.bag.splice(remove,1);
        return t;
        }
    }

    show(){

        for(let p of this.alive){
            p.show();
        }
        this.next.showNext();
        text(this.score,200,550);
        for(let d of this.matrix){
            for(let x of d){
                if(x){
                    x.show();
                }
            }
        }
            

    }

    update(){
        //console.log(this.counter);
        if(this.counter===this.gravity && this.fall){
            console.log("poop");
            if(this.checkBelow()){
                this.alive[0].fall();
            }
            else{
                let temp=this.alive.splice(0,1)[0];

                let rowsToCheck=[];
                for(let mino of temp.blocks){
                    this.dead.push(mino);
                    let x=mino.pos[0];
                    let y=mino.pos[1];
                    if(!rowsToCheck.includes(y)){
                        rowsToCheck.push(y);
                    }
                    this.matrix[x][y]=mino;
                }
                this.checkRows(rowsToCheck);
                this.alive.push(this.next);
                this.next=new Tetronimo(this.randomBag());
            }
        }
        if(this.counter===this.gravity){
            this.counter=0;
        }
        else{
            this.counter++;
        }
    }

    think(){
        let inputNodes=[];
        inputNodes[0]=this.score;
        inputNodes[1]=this.next.type;
        inputNodes[2]=this.alive[0].p;
        console.log(this.alive[0].blocks[3]); 
        inputNodes[3]=this.alive[0].blocks[0].pos[0];
        inputNodes[4]=this.alive[0].blocks[0].pos[1];
        inputNodes[5]=this.alive[0].blocks[1].pos[0];
        inputNodes[6]=this.alive[0].blocks[1].pos[1];
        inputNodes[7]=this.alive[0].blocks[2].pos[0];
        inputNodes[8]=this.alive[0].blocks[2].pos[1];
        inputNodes[9]=this.alive[0].blocks[3].pos[0];
        inputNodes[10]=this.alive[0].blocks[3].pos[1];
        
        let outputNodes=this.nn.predict(inputNodes);
        console.log(outputNodes);
        let op=this.indOfMax(outputNodes);
        if(op===0){
            this.rotate('q');
        }
        else if(op===1){
            this.rotate('e');
        }
        else if(op===2){
            this.ffall();
        }
        else if(op===3){
            this.moveRight();
        }
        else if(op===4){
            this.moveLeft();
        }
    }

    indOfMax(array){
        let max=array[0];
        let maxIndex=0;
        for(let i=1;i<array.length;i++){
            if(array[i]>max){
                maxIndex=i;
                max=array[i];
            }
        }
        return maxIndex;
    } 
    rotate(direction){
        if(direction==='e'){
            this.alive[0].rotateRight(this.matrix);
        }
        else{
            this.alive[0].rotateLeft(this.matrix);
        }
    }
    moveLeft(){
        if(this.checkLeft){
            this.alive[0].moveLeft();
        }
    }
    checkLeft(){
        for(let mino of this.alive[0].blocks){
            if(mino.pos[0]<=0){
                return false;
            }
        }
        let leftPos=this.alive[0].getLeft();
        for(let minoPos of leftPos){
            if(this.matrix[minoPos[0]][minoPos[1]]!=false){
                return false;
            }
        }
        return true;
    }
    moveRight(){
        if(this.checkRight){
            this.alive[0].moveRight();
        }
    }
    checkRight(){
        for(let mino of this.alive[0].blocks){
            if(mino.pos[0]>=9){
                return false;
            }
        }
        let rightPos=this.alive[0].getRight();
        for(let minoPos of rightPos){
            if(this.matrix[minoPos[0]][minoPos[1]]!=false){
                return false;
            }
        }
        return true;
    }

    ffall(){
        if(this.checkBelow()){
            this.alive[0].fall();
        }
    }
    checkBelow(){
        console.log(this.alive);
        for(let mino of this.alive[0].blocks){
            if(mino.pos[1]>=19){
                return false;
            }
        }
        for(let mino of this.alive[0].blocks){
            if(this.matrix[mino.pos[0]][mino.pos[1]+1]!=false){
                return false;
            }
        }
        return true;
    }

    checkRows(checkingRows){
        let rowsToDelete=[];
        for(let row of checkingRows){
            let deleteRow=0;
            for(let i=0;i<10;i++){
                if(this.matrix[i][row]){
                    deleteRow++;
                }
            }
            if(deleteRow===10){
                rowsToDelete.push(row);
            }
        }
        if(rowsToDelete.length>0){
            this.deleteRows(rowsToDelete);
            this.updateScore(rowsToDelete.length);
        }
    }

    deleteRows(rowsToDelete){
        for(let row of rowsToDelete){
            for(let y=row;y>0;y--){
                for(let x=0;x<10;x++){
                    if(this.matrix[x][y-1]===false){
                        this.matrix[x][y]=this.matrix[x][y-1];
                    }
                    else if(this.matrix[x][y]==false){
                        let col=this.matrix[x][y-1].color;
                        let cor=this.matrix[x][y-1].pos;
                        this.matrix[x][y]=new mino(col,cor);
                        this.matrix[x][y].pos[1]++;
                    }
                    else{
                        console.log("shit");
                        this.matrix[x][y].pos=this.matrix[x][y-1].pos;
                        this.matrix[x][y].color=this.matrix[x][y-1].color;
                        this.matrix[x][y].pos[1]++;
                    }
                    /*
                    if(this.matrix[x][y]!=false){
                        this.matrix[x][y].pos[1]++;
                    }
                    */
                }
            }
        }
        console.log(this.matrix);
    }

    updateScore(rows){
        //40-100-300-1200
        if(rows===1){
            this.score+=40*(0+1);
        }
        else if(rows===2){
            this.score+=100*(0+1);
        }
        else if(rows===3){
            this.score+=300*(0+1);
        }
        else{
            this.score+=1200*(0+1);
        }
    }




    
}
