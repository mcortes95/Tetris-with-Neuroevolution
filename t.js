let c;
let alive=[];
let dead=[];
let counter=1;
function setup(){
    createCanvas(400,600);
    slider=createSlider(1,100,1);
    c=color(192,192,192);
    tets[0]=new Tetronimo(0);
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
    for(let p of tets){
        p.show();
    }










    if(counter%60===0){
        for(let piece of tets){
            piece.fall();
        }
    }
    counter++;
}

function keyPressed(){
    if(key==' '){
        console.log('rotate');
    }
    if(key=='a'){
        tets[0].moveLeft();
    }
    if(key=='d'){
        tets[0].moveRight();
    }
}
