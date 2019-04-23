$(document).ready(function() {
    
var comp;
var hexagon;
var diamond;
var octagon;
var square;
var choice;
var choicen;
var sum=0;
var win=0;
var loss=0;


function start () {
    sum=0
  $("#score").text(sum); 
   comp= Math.floor(Math.random()*(120-19))+19;
   console.log(comp);
   $("#comp").text(comp);
   hexagon=Math.floor(Math.random()*(12-1))+1;
   console.log(hexagon);
   $(".hexagon").attr("data-value", hexagon);
   diamond=Math.floor(Math.random()*(12-1))+1;
   console.log(diamond);
   $(".diamond").attr("data-value", diamond);
   octagon=Math.floor(Math.random()*(12-1))+1;
   console.log(octagon);
   $(".octagon").attr("data-value", octagon);
   square=Math.floor(Math.random()*(12-1))+1;
   console.log(square);
   $(".square").attr("data-value", square);
}


$("#buttons").on("click", ".btn", function(){
  choice = $(this).attr("data-value");
  choicen=parseInt(choice);
  add();
});

function add() {
sum+=choicen;
    console.log(sum);
    $("#score").text(sum);
    f1();
}

function f1() {
if(sum==comp)
{console.log("You win");
win++;
console.log(win);
$(".res").text("You win");
$("#win").text(win);
start();
}
else if(sum>comp) {
  console.log("You lost"); 
loss++;
console.log(loss);
$(".res").text("You lost");
$("#lost").text(loss);
start();
}
}



start () ;
});