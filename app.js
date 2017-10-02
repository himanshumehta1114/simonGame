$(document).ready(function(){

var compplays = [];
var userplays = [];
var buttons = ["green", "red", "blue", "yellow"];
var html = "";
var level = 0;
var play = "";
var alt = "";
var id = "";
var def = "";
var sound = "";
var i = 0;
var delay = 1000;
var strict = true;

for (i = 0; i < compplays.length; i++) {
  playbutton(compplays[i]);
}

function playbutton(color) {
  switch (color) {
    case "green":
      sound = "gs";
      id = "#green";
      alt = "#AEEA00";
      def = "green"
      break;
    case "red":
      sound = "rs";
      id = "#red";
      alt = "#EF9A9A";
      def = "#f00"
      break;
    case "blue":
      sound = "bs";
      id = "#blue";
      alt = "aqua";
      def = "blue"
      break;
    case "yellow":
      sound = "ys";
      id = "#yellow";
      alt = "#FFFF60";
      def = "yellow"
      break;
  }
  $(id).css("background-color", alt);
  document.getElementById(sound).play();
  setTimeout(state, 350);
}

function clear() {
  compplays = [];
  userplays = [];
  level = 0;
  $("#count").html("COUNT : <span>" + level + "</span>");
  complay();
}

function state() {
  $(id).css("background-color", def)
}

function check() {
  for (i = 0; i < userplays.length; i++) {
    if (userplays[i] != compplays[i]) {
      alert("Try Again!");
      if (strict == true){
        clear();
      } else if (strict == false){
        userplays.splice(-1, 1);
        console.log(userplays);
        i = 0;
        iterate(i);
      }
    }
  }

  if (userplays.length == compplays.length) {
    level++;
    $("#count").html("COUNT : <span>" + level + "</span>");
    complay();
  }

  if (userplays.length >= 20) {
    alert("You Win!");
    clear();
  }
}

function pick() {
  return Math.floor(Math.random() * 4);
}

function iterate(i) {
  setTimeout(function() {
    console.log(compplays[i]);
    playbutton(compplays[i]);
    i++;
    if (i < compplays.length) {
      iterate(i);
    } else userplays = [];
  }, 800);
}

function complay() {
  play = buttons[pick()];
  compplays.push(play);
  console.log(compplays);

  if (compplays.length > 0) {
    i = 0;
    iterate(i);
  }
}

$("#strict").on("click", function(){
  if (strict == true){
    strict = false;
    $("#strict").addClass("strict-btn-on");
    $("#strict").removeClass("strict-btn");
  } else if (strict == false){
    strict = true;
    $("#strict").removeClass("strict-btn-on");
    $("#strict").addClass("strict-btn");
  }
})

$("#reset").on("click", function(){ clear(); 
 });

$("#green").on("click", function() {
  userplays.push("green");
  html = userplays[userplays.length];
/*  $("#up").html(html);*/
  playbutton("green");
  check();
});
$("#red").on("click", function() {
  userplays.push("red");
  html = userplays[userplays.length];
/*  $("#up").html(html); **/
  playbutton("red");
  check();
});
$("#blue").on("click", function() {
  userplays.push("blue");
  html = userplays[userplays.length];
/*  $("#up").html(html); */
  playbutton("blue");
  check();
});
$("#yellow").on("click", function() {
  userplays.push("yellow");
  html = userplays[userplays.length];
/*  $("#up").html(html); */
  playbutton("yellow");
  check();
});

});