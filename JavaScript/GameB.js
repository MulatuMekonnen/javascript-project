var blueCar = document.getElementById("Bluecar");
var redCar = document.getElementById("redcar");
var result = document.getElementById("result");
var score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;

bluecar.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random()*3))*130)
    blueCar.style.left = random+"px";
    counter++;
})

window.addEventListener("keydown", function(e){ 
    if(e.keyCode =="39"){ 
        var redCarleft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left")) 
        if(redCarleft<260) 
      { 
        redCar.style.left = (redCarleft+130)+"px"; 

      }
    };
    if(e.keyCode=="37"){
        var redcarleft = parseInt(window.getComputedstyle(redcar).getpropertyvalue("left"))
        if(redcarleft>0)
        {
            redcar.style.left =(redcarleft-130)+"px";
        }
    }
})

setInterval(function Gameover(){
    var blueCarTop= parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
    var blueCarTop= parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var redCarTop= parseInt(window.getComputedStyle(redcar).getPropertyValue("left"));
    if((blueCarleft === redCarLeft)&&(blueCarTop>250)&&(blueCarTop<450)){
        result.style.display ="block";
        game.style.display = "none";
        score.innerHTML = `Your score is ${counter}`;

        counter =0;
    }
},10)
