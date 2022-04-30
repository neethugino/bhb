var pig, pigImg
var sea, seaImg
var g,gg


function preload(){
pigImg = loadImage("silzous.webp")
seaImg = loadImage("sea.png")
knifeImg = loadImage("knife.webp")
}

function setup() {
createCanvas(1535,700)

sea = createSprite(width/2,height/2)
sea.addImage(seaImg)
sea.scale = 0.45

pig = createSprite(width-75,height/2) 
pig.addImage(pigImg)
pig.scale = 0.75

g = createSprite(width/2,height/1.65,1535,5)
g.visible = false

gg = createSprite(width/2,0,1535,5)
gg.visible = false



}

function draw() {
background(0)

sea.velocityX = 1.5
if(sea.x > 900){
sea.x = 600
}

pig.collide(g)
pig.bounceOff(gg)

if(keyDown("space")){
    pig.velocityY = -10
    
}
if(frameCount % 250 === 0){
    var knife,knifeImg

    knifeImg = loadImage("knife.webp")
    knife = createSprite(width/2,height/2)
    knife.addImage(knifeImg)
    knife.velocityX = 1.5 
    knife.scale = 0.5  


if(pig.isTouching(knife)){
    pig.remove()
    sea.remove()
    knife.remove() 
}

}

drawSprites() 
}

