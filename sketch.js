var pencil;
var database,position;
var pencilPosition;


function setup(){
    createCanvas(500,500);
    database=firebase.database();
    
    pencilPosition=database.ref('pencil/position');
    pencilPosition.on('value',readPosition,showError);

    pencil = createSprite(250,250,mouseX,mouseY);
    pencil.shapeColor = "red";


}

function draw(){
    background("white");
    
    function mouseDragged(){
       
            pencil.setPosition(pencil.body, {x: mouseX , y: mouseY});
            fill("black");
        
    }
    
    
    function mouseReleased(){
       fill("white");
    }
    
}
    drawSprites();



function readPosition(data){
    position=data.val();
    console.log(position);
    pencil.x=position.x;
    pencil.y=position.y;

}
function showError(){
    console.log('error in writing to database');
}