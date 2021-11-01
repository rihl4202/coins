var score = 0 
var count = 80

function preload(){
  coinImg = loadImage("coin.png")
}

function setup() {
  createCanvas(800,400);
  player = createSprite(50, 350, 30, 30);
  edges = createEdgeSprites()
  coinG = createGroup()
}

function draw() {
  background("blue"); 
  textSize(20)
  text("Score: "+score,40,40)
   coins()
// a = a+2  a+=2
    if(keyDown("up")){
  player.y -= 5
  }

  if(keyDown("down")){
    player.y += 5
    }

    if(keyDown("left")){
      player.x -= 5
      }

      if(keyDown("right")){
        player.x += 5
        }
   player.collide(edges)  
  for(var i = 0; i<coinG.length; i++){
  if(player.isTouching(coinG.get(i))){
    coinG.get(i).destroy()
    score += 1
    count -= 10
  }
}
  drawSprites();
}

function coins(){
  
  if(frameCount%count===0){
    coin = createSprite(random(50,750),random(50,350))
    coin.addImage(coinImg)
    coin.scale = 0.2
    coin.lifetime = 80
    coinG.add(coin)
  }
}