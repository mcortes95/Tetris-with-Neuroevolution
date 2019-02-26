let c;
let alive=[];
let next;
let dead=[];
let matrix=[...Array(10)].map(e =>Array(20).fill(false));
let counter=1;
let fall=true;
let pause=false;
let bag=[0,1,2,3,4,5,6];

function randomBag(){
    if(bag.length===0){
        bag=[0,1,2,3,4,5,6];
    }
    let t=random(bag);
    if(bag.length>0){
        let rem=0
        for(let x=0;x<bag.length;x++){
            if(bag[x]===t){
                rem=x;
                x=10;
            }
        }
        bag.splice(rem,1);
    return t;
    }
}

function setup(){
    createCanvas(400,600);
    slider=createSlider(1,100,1);
    c=color(192,192,192);
    alive[0]=new Tetronimo(randomBag());
    next=new Tetronimo(randomBag());
    //tets[1]=new Tetronimo(0);
    console.log(matrix);
    console.log(matrix[7][15]);
}
function draw(){

    background(0); 
    fill(c); 
    rect(0,0,75,600); 
    rect(325,0,75,600);
    rect(75,500,250,100);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(24);
    text('NEXT',90,570);
    for(let x=0;x<=500;x+=25){
        line(75,x,325,x);
    }
    for(let i=100;i<=300;i+=25){
        line(i,0,i,500);
    }
    for(let p of alive){
        //if(counter%60===0){
        //    console.log(p);
        //}
        p.show();
    }
    next.showNext();
    for(let d of matrix){
        for(let x of d){
            if(x){
                x.show();
            }
        }
    }
    /*
    for(let d of dead){
        //console.log(d);
        d.show();
    }
    */
    
    //console.log(counter);
    if(counter===60 && fall){
        if(checkBelow()){
            //console.log(alive);
            alive[0].fall();
        }
        else{
            //dead.push(alive.splice(0,1)[0]);
            let temp=alive.splice(0,1)[0];
            console.log(temp);
            //for(let mino of temp.blocks){
            //    dead.push(mino);
            //}
            //console.log(temp);
            let rowsToCheck=[]
            for(let mino of temp.blocks){
                dead.push(mino);
                let x=mino.pos[0];
                let y=mino.pos[1];
                if(!rowsToCheck.includes(y)){
                    rowsToCheck.push(y);
                }
                matrix[x][y]=mino;
                //console.log(matrix);
            }
            checkRows(rowsToCheck);
            //console.log(rowsToCheck);
            alive.push(next);
            next=new Tetronimo(randomBag());
        }
        //counter=0;
        //console.log(counter);
    }
    if(counter===60){
        counter=0;
    }
    else{
        counter++;
    }
}

function keyPressed(){
    if(key=='o'){
        if(fall){
            //console.log('false');
            fall=false;
        }
        else{
            //console.log('true');
            fall=true;
        }

    }
    if(key=='p' && !pause){
        pause=true;
        noLoop();
    }
    else if(key=='p' && pause){
        pause=false;
        loop();
    }
    if(key==' '){
        console.log('rotate');
    }
    if(key=='a'){
        if(checkLeft()){
            alive[0].moveLeft();
        }
    }
    if(key=='d'){
        if(checkRight()){
            alive[0].moveRight();
        }
    }
    if(key==='s'){
        if(checkBelow()){
            alive[0].fall();
        }
    }

    if(key==='q'){

        alive[0].rotateLeft(matrix);
    }

    if(key==='e'){
        alive[0].rotateRight(matrix);
    }
}

function checkLeft(){
    //TODO: make sure this checks blocks to the left
    for(let mino of alive[0].blocks){
        //console.log(b);
        if(mino.pos[0]===0){
            //console.log('hit left wall');
            return false;
        }
    }
    let leftPos=alive[0].getLeft();
    //console.log(leftPos);
    for(let minoPos of leftPos){
        //console.log(minoPos[0]);
        //console.log(matrix[minoPos[0]][minoPos[1]]);
        if(matrix[minoPos[0]][minoPos[1]]!=false){
            return false;
        }
    }
    return true;
}

function checkRight(){
    //TODO: make sure this checks blocks to the right
    for(let mino of alive[0].blocks){
        //console.log(b);
        if(mino.pos[0]===9){
            //console.log('hit right wall.');
            return false;
        }
    }
    
    let rightPos=alive[0].getRight();
    //console.log(matrix);
    for(let minoPos of rightPos){
        //console.log(minoPos[0]);
        //console.log(matrix[minoPos[0]][minoPos[1]]);
        if(matrix[minoPos[0]][minoPos[1]]!=false){
            return false;
        }
    }
    return true;
}

//TODO  implement this using Matrix instead
//      of checking every mino
function checkBelow(){
    for(let b of alive[0].blocks){
        //console.log(b);
        if(b.pos[1]>=19){
            //console.log('reached floor');
            return false;
        }
    }
    for(let block of alive[0].blocks){
        if(matrix[block.pos[0]][block.pos[1]+1]!=false){
            return false;
        }
    }
    return true;
}


function checkRows(checkingRows){

    //console.log(checkingRows);
    let rowsToDelete=[]
    for(let row of checkingRows){
        let deleteRow=0
        for(let i=0;i<10;i++){
            if(matrix[i][row]){
                deleteRow++;
            }
        }
        if(deleteRow===10){
            rowsToDelete.push(row)
        //console.log(deleteRow);
        }
    } 
    if(rowsToDelete.length>0){
        deleteRows(rowsToDelete);    
    }
}

function deleteRows(rowsToDelete){
    console.log(rowsToDelete);
    console.log(matrix[0]);
    /*
    for(let row of rowsToDelete){

        for(let x=0;x<10;x++){
            //console.log(matrix[x][row]);
            matrix[x][row]=false;
    
        }
    }
    */
    for(row of rowsToDelete){
        for(let y=row;y>0;y--){
            for(let x=0;x<10;x++){
                matrix[x][y]=matrix[x][y-1];
                console.log(matrix[x][y]);
                if(matrix[x][y]!=false){
                    console.log(x,y);
                    matrix[x][y].pos[1]++;
                }
            }
        }
    }
}








