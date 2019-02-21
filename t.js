let c;
let alive=[];
let dead=[];
let counter=1;
function setup(){
    createCanvas(400,600);
    slider=createSlider(1,100,1);
    c=color(192,192,192);
    //alive[0]=new Tetronimo(random([0,1,2,3,4,5,6]));
    alive[0]=new Tetronimo(6);
    //tets[1]=new Tetronimo(0);
    //tets[2]=new Tetronimo(2);
}
function draw(){

    background(0); 
    fill(c); 
    rect(0,0,75,600); 
    rect(325,0,75,600);
    rect(75,500,250,100);
    stroke(255,255,255);
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
    for(let d of dead){
        console.log(d);
        d.show();
    }


    if(counter%60===0){
        if(checkBelow()){
            alive[0].fall();
        }
        else{
            dead.push(alive.splice(0,1)[0]);
            alive.push(new Tetronimo(random([0,1,2,3,4,5,6])));
        }
    }
    counter++;
}

function keyPressed(){
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
        alive[0].rotateLeft();
    }
    if(key==='e'){
        alive[0].rotateRight();
    }
}

function checkLeft(){
    //TODO: make sure this checks blocks to the left
    for(let b of alive[0].blocks){
        //console.log(b);
        if(b[0]===1){
            console.log('hit left wall');
            return false;
        }
    }
    for(let block of dead){
        for(let piece of block.blocks){
            for(let aliveBlock of alive[0].blocks){
                if(aliveBlock[0]-1===piece[0] && aliveBlock[1]===piece[1]){
                    console.log('hit left block');
                    //console.log(alive[0].blocks[0][1],piece[1]);
                    return false;

                }
            }
        }
    }
    return true;
}

function checkRight(){
    //TODO: make sure this checks blocks to the right
    for(let b of alive[0].blocks){
        //console.log(b);
        if(b[0]===10){
            console.log('hit right wall.');
            return false;
        }
    }
    for(let block of dead){
        for(let piece of block.blocks){
            for(let aliveBlock of alive[0].blocks){
                if(aliveBlock[0]+1===piece[0] && aliveBlock[1]===piece[1]){
                    console.log('hit right block');
                    //console.log(alive[0].blocks[0][1],piece[1]);
                    return false;

                }
            }
        }
    }
    return true;
}
function checkBelow(){
    //console.log(alive[0].blocks); 
    for(let b of alive[0].blocks){
        //console.log(b);
        if(b[1]>=19){
            console.log('reached floor');
            return false;
        }
    }
    for(let block of dead){
        for(let piece of block.blocks){
            for(let aliveBlock of alive[0].blocks){
                if(aliveBlock[1]+1===piece[1] && aliveBlock[0]===piece[0]){
                    console.log('hit block');
                    console.log(alive[0].blocks[0][1],piece[1]);
                    return false;

                }
            }
        }
    }
    return true;
}
