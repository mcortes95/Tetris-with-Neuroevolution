
//let c;
//let alive=[];
//let next;
//let dead=[];
//let matrix=[...Array(10)].map(e =>Array(20).fill(false));
//let counter=1;
//let fall=true;
let pause=false;
//let bag=[0,1,2,3,4,5,6];
this.game;


function setup(){
    createCanvas(400,600);
    slider=createSlider(1,100,1);
    c=color(192,192,192);
    this.game=new Game();
}
function draw(){

    this.game.think();
    this.game.update();
    //console.log("sdf");


    background(0); 
    fill(c); 
    rect(0,0,75,600); 
    rect(325,0,75,600);
    rect(75,500,250,100);
    stroke(255,255,255);
    fill(0,0,0);
    textSize(24);
    text('NEXT',7,335);
    text('SCORE: ',100,550);
    for(let x=0;x<=500;x+=25){
        line(75,x,325,x);
    }
    for(let i=100;i<=300;i+=25){
        line(i,0,i,500);
    }
    this.game.show();
}

function keyPressed(){
    /*
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
    */
    if(key=='p' && !pause){
        pause=true;
        noLoop();
    }
    else if(key=='p' && pause){
        pause=false;
        loop();
    }
    /*
    if(key==' '){
        console.log('rotate');
    }
    if(key=='a'){
        if(this.game.checkLeft()){
            this.game.alive[0].moveLeft();
        }
    }
    if(key=='d'){
        if(this.game.checkRight()){
            this.game.alive[0].moveRight();
        }
    }
    if(key==='s'){
        if(this.game.checkBelow()){
            this.game.alive[0].fall();
        }
    }

    if(key==='q' || key==='e'){
        this.game.rotate(key);
    }
    */
}

function checkLeft(){
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




