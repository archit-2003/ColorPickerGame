var red, green, blue;
var colorlist = document.querySelectorAll(".color");
var numberOfColors = 3;
changeColors()

function eventHandler(){
  this.classList.add("selected");
  if (this.classList.contains("correct")){
    correct(this);
  }
  else{
    this.style.opacity = 0;
    document.querySelector(".status").innerHTML = "Try Again";
  }
}

function changeColors(){
  document.querySelector(".status").innerHTML = "";
  document.querySelector(".new").innerHTML = "NEW GAME";
  red = Math.floor(Math.random() * 256)
  green = Math.floor(Math.random() * 256)
  blue = Math.floor(Math.random() * 256)
  document.querySelector(".header").style.backgroundColor = "#FFC300";
  document.querySelector(".rand-color").innerHTML = "rgb("+ red +", "+ green +", "+ blue +")";
  boxNum = Math.floor(Math.random() * numberOfColors) + 1
  document.querySelector(".color1").style.backgroundColor = "rgb("+(red-50)+","+green+","+(blue+50)+")" ;
  document.querySelector(".color2").style.backgroundColor = "rgb("+(red+50)+","+(green-50)+","+blue+")" ;
  document.querySelector(".color3").style.backgroundColor = "rgb("+red+","+(green+50)+","+(blue-50)+")" ;
  document.querySelector(".color4").style.backgroundColor = "rgb("+(red-80)+","+green+","+(blue+80)+")" ;
  document.querySelector(".color5").style.backgroundColor = "rgb("+(red+80)+","+(green-80)+","+blue+")" ;
  document.querySelector(".color6").style.backgroundColor = "rgb("+red+","+(green+80)+","+(blue-80)+")" ;
  document.querySelector(".color"+boxNum).style.backgroundColor = "rgb("+red+","+green+","+blue+")" ;
  document.querySelector(".color"+boxNum).classList.add("correct");

  for (var i=0; i < colorlist.length; i++){
    colorlist[i].addEventListener("click", eventHandler)
    colorlist[i].style.opacity = 1;
  }
}

function correct(){
  for (var i=0; i<6; i++){
    colorlist[i].style.backgroundColor = "rgb("+red+","+green+","+blue+")" ;
    colorlist[i].classList.remove("correct") ;
    colorlist[i].classList.remove("selected") ;
    colorlist[i].removeEventListener("click", eventHandler)
  }

  document.querySelector(".status").innerHTML = "Correct!!";
  document.querySelector(".header").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
  document.querySelector(".new").innerHTML = "PLAY AGAIN";
  document.querySelector(".new").setAttribute("onclick", "hard()");
}

function easy(){
  numberOfColors = 3
  for (var i=3; i < colorlist.length; i++){
    colorlist[i].style.display = "none";
  }
  changeColors()
}

function hard(){
  console.log("hi")
  numberOfColors = 6
  for (var i=0; i < colorlist.length; i++){
    colorlist[i].style.display = "inline-block";
  }
  changeColors()
}
