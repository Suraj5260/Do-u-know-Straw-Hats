var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("Hello there, what is your name ? ");

console.log("so " + userName + ", lets start DO YOU KNOW Straw Hats.");


function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer ){
    console.log("Correct answer.");
    score++;
  }
  else{
    console.log("Wrong answer.");
  }

  console.log("your current score is: "+ score);
  console.log("--------------x-------------")
}

var questions = [{
  que:"Who is the chief of Staw hats ? ",
  ans:"Sanji"
},{
  que:"Who is the captain of Staw hats ? ",
  ans:"Lufi"
},{
  que:"Who is the navigator of Staw hats ? ",
  ans:"Nami"
},{
  que:"Who is the swordsman of Staw hats (my favourate charater XD) ? ",
  ans:"Zoro"
},]

for(var i = 0; i < questions.length; i++){
  play(questions[i].que, questions[i].ans);
}

console.log("Thank you for playing the game. Lets meet in the allblue ! ")
