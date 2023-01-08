

//button length per "for" loopin
var numberButtonclick = document.querySelectorAll(".btn1").length;

// Health bari with images
var healthBar1 = 4
var healthBar2 = 4;


//funksioni i nje butoni
for (var i = 0; i < numberButtonclick; i++){
  document.querySelectorAll(".btn1")[i].addEventListener("click", function() {

    var keypress = this.innerHTML
    btn(keypress);
  });

}


//keybolard press
document.addEventListener("keydown", function(event){
  btn(event.key);
});





//funksioni permbledhes i te gjith kodimit
function btn(){
  //music roll
  var sound = new Audio ("sounds/Dice-Sound.mp3")
  sound.play();

  //Player 1 random number
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomImg1 = "images/dice"+randomNumber1+".png";
  var img1 = document.querySelector("img.img1").setAttribute("src", randomImg1);

  //Player 2 random number
  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var randomImg2 = "images/dice"+randomNumber2+".png";
  var img2 = document.querySelector("img.img2").setAttribute("src", randomImg2);



  // h1 - Talk
  var h1 = document.querySelector("h1");

  if (randomNumber1 > randomNumber2){
    h1.innerHTML="Player 1 win";
  }else if(randomNumber1 < randomNumber2){
    h1.innerHTML="Player 2 win";
  }else{
    h1.innerHTML="Draw";
  }



  //refresh inside the page

  if (healthBar2 == 0){
    location.reload();
  }else if (healthBar1 == 0){
    location.reload();
  }

  //health images
  if (randomNumber1>randomNumber2){
    (healthBar2--)
  }else if (randomNumber1< randomNumber2){
    (healthBar1--)
  }

  //images of health bar player 1
  var playerHealth1 = "images/1-"+healthBar1+".png";
  var imgh1 = document.querySelector("img.img_1").setAttribute("src", playerHealth1);

  //images of health bar player 2
  var playerHealth2 = "images/1-"+healthBar2+".png";
  var imgh2 = document.querySelector("img.img_2").setAttribute("src", playerHealth2);

}


animation(function(){
  document.querySelector()
});
