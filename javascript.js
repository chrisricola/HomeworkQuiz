// var questionDiv = document.getElementById("question");
// var startButton = document.getElementById("start");
// var question= [];
// var score= 0;
// var totalQuestions = quizQuestions.length;
// var timeEl = document.querySelector(".time");

var questionNumber = 0;
var time = quizQuestions.length * 15;
var timerId;

var questionsEl = document.getElementById("question");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start");

function startQuiz(){
  var startScreenEl = document.getElementById("startScreen");
  startScreenEl.setAttribute("class", "hide"); 
  questionsEl.removeAttribute("class");
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestions(0);
  // console.log("start")
}
// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + ": seconds";

//     if(secondsLeft === 0 || secondsLeft < 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }
//   }, 1000);
// }

// function sendMessage() {
//   // alert('Quiz Over')
//   timeEl.textContent = " ";
//   // var imgEl = document.createElement("img");
// }
// var results = [];
function getQuestions() {

  var currentQuestion = quizQuestions[questionNumber];

  var titleEl = document.getElementById("questionTitle") // = <div></div>
  titleEl.textContent = currentQuestion.question
  console.log("get questions",currentQuestion);

  // choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function(choice,i){
    var choiceNode = document.createElement("button");
    console.log('button');
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    choiceNode.onclick = questionClick;

    choicesEl.appendChild(choiceNode);
  });
  // var choices = document.getElementById("choices") 
  // choices.classList.remove("hide");

  // for( var i = 0; i < currentQuestion.choices.length; i++) {
    // console.log('test', currentQuestion.choices[i])
    // var para = document.createElement("p");
    // para.className = 'choice';
    // onlick handler for the p element, once clicked it would compare the value of the text of the P elmeent currentQuestion.answer
    // para.onclick = function(events){
    //   var isCorrect = events.target.innerText === currentQuestion.answer
    //   var isLast = quizQuestions.length - 1 === questionNumber;
    //   choices.innerHTML = '';
    //   results.push(isCorrect);
      // if this isn't the last question, call getQuestion on next question number
      // getQuestions(questionNumber + 1)

       // otherwise print out score and tell the user to send endQuiz()
    // }
    // var node = document.createTextNode(currentQuestion.choices[i]);
    // para.appendChild(node);
    // choices.appendChild(para);
  }
  // Create a function to match answers against chosen answer by user.

  // if it is correct add to score then iterate currentQuestionIndex, else subtract score then iterate currentQuestionIndex
  // call this function in the getQuestions function
    //console.log(currentQuestion.question);
    // var questions = currentQuestion.question
    // qEl.textContent = questions;// <div> our questions text goes in here </div>
  
function questionClick(){
  questionNumber++;
  console.log("checking");
}

//console.log(currentQuestion.choices);
//console.log(currentQuestion);
// }
function endQuiz() {

  clearInterval(timerId);

  var endScreenEl = document.getElementById("endScreen");
  endScreenEl.removeAttribute("classs");

  questionsEl.setAttribute("class", "hide");
//   var totalRight = 0;
//   for (var i = 0 ; i < results.length; i++) {
//     if (results[i]) {
//       totalRight++;
//     }
  }

  // var percentage = totalRight / results.length;
  // Delete everything in #question
  // Create a text node with the results
  // Append the text node to #question
// }


function clockTick (){
  time--;
  timerEl.textContent=time;
  if (time <= 0){
    endQuiz();
  }
}  
    

//console.log(currentQuestion.choices);
//console.log(currentQuestion);

// function startQuiz() {
//   var startScreenEl = document.getElementById("startScreen");
//   startScreenEl.setAttribute("class", "hide");
//   questionDiv.removeAttribute("class")
//   setTime();
//   getQuestions(0);
// }

startBtn.onclick = startQuiz;



 