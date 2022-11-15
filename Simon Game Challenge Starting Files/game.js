var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStart = false;
var level = 0;
var wrongAudio = new Audio("sounds/wrong.mp3");

// detect keypress to start
$(document).keypress(function() {
  if (!gameStart) {
    nextSequence();
    gameStart = true;
    // set level to 0
    $("#level-title").text("Level " + level);
  }
});

// detect user button press
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  // style
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

// generate random sequence with sound
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  level++;
  $("#level-title").text("Level " + level);
}

// play sound when button pressed
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// animation for button press
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  // setTimeout (function, time)
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// check user pattern and game pattern
// called every user click
// compares (recent user click === gamepattern[index])
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    // if whole pattern complete, next level & sequence
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }
  } else {
    console.log("wrong");
    wrongAudio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }

}

// restart after losing
function startOver() {
  level = 0;
  gameStart = false;
  gamePattern = [];
  userClickedPattern = [];
}
