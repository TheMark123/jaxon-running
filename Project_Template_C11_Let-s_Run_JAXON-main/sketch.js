
function preload(){
pathi=loadImage("path.png")  
jaxi=loadAnimation("Runner-1.png","Runner-2.png")
poweri=loadImage("power.png")
bombi=loadImage("bomb.png")
coini=loadImage("coin.png")
energyi=loadImage("energyDrink.png")






  
}

function setup(){
  createCanvas(400,600);
  path=createSprite(200,200, 100, 100)
  jax=createSprite(200,500,100,100)
  bomb=createSprite(300,200,100,100)
  power=createSprite(100,200,100,100)
  coin=createSprite(100, 100, 100, 100)
  energy=createSprite(300S, 100, 100, 100)
  path.addImage(pathi)
  jax.addAnimation("run",jaxi)
  jax.scale=0.1
  coin.addImage(coini)
  coin.scale=0.2
  power.addImage(poweri)
  power.scale=0.1
  bomb.addImage(bombi)
  bomb.scale=0.1
  energy.addImage(energyi)
  energy.scale=0.1
}

function draw() {
  background(0);

 drawSprites()


}
