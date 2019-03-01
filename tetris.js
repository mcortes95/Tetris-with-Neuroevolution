
let c;
const GenSize=20;
//let alive=[];
//let next;
//let dead=[];
//let counter=1;
//let fall=true;
let generation=0;
let pause=false;
let slider;
let bestScore=0;
//let bag=[0,1,2,3,4,5,6];
this.games=[];
this.completedGames=[];

function setup(){
    createCanvas(400,600);
    slider=createSlider(1,1000,1);
    c=color(192,192,192);
    for(let i=0;i<GenSize;i++){
        this.games[i]=new Game();
    }
    console.log(this.games);
}
function draw(){
    for(let speedup=0;speedup<slider.value();speedup++){ 
        background(0); 
        fill(c); 
        rect(0,0,75,600); 
        rect(325,0,75,600);
        rect(75,500,250,100);
        stroke(255,255,255);
        fill(0,0,0);
        textSize(24);
        text('NEXT',7,335);
        text('SCORE: ',100,530);
        text('BESTSCORE: ',100,590);
        text(bestScore,270,590);
        text('GENERATION:',100,560);
        text(generation,270,560);

        for(let x=0;x<=500;x+=25){
            line(75,x,325,x);
        }
        for(let i=100;i<=300;i+=25){
            line(i,0,i,500);
        }
        console.log(this.games.length);
        //console.log("fds");
        this.games[0].think();
        this.games[0].update();
        this.games[0].show();
        if(this.games[0].score>bestScore){
            bestScore=this.games[0].score;
        }
        if(this.games[0].gameOver){
            console.log("Game Over.");
            this.completedGames.push(this.games.splice(0,1)[0]);
            //this.game.push(new Game());
        }
        if(this.games.length===0){
            console.log('you lose');
            generation++;
            nextGen();
        }
    }
}

function nextGen(){
    console.log(this.completedGames);
    calculateFitness();
    for(let i=0;i<GenSize;i++){
        console.log('Shit');
        this.games.push(pick());
    }
    this.completedGames=[];
    console.log(this.games);
}

function calculateFitness(){
    let sum=0;
    let dsum=0;
    for(let game of this.completedGames){
        sum+=game.score;
        dsum+=game.duration;
    }
    for(let game of this.completedGames){
        game.fitness=(game.score/sum)+(game.duration/dsum);
    }
}

function pick(){
    var index=0;
    var r=random(1);
    while(r>0){
        r=r-this.completedGames[index].fitness;
        index++;
    }
    index--;
    let game=this.completedGames[index];
    let gchild=new Game(game.nn);
    gchild.mutate();
    return gchild;
}



function keyPressed(){
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
/*
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

*/


