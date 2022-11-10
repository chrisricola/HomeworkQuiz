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
  getQuestions();
}

function getQuestions() {

  var currentQuestion = quizQuestions[questionNumber];

  var titleEl = document.getElementById("questionTitle") // = <div></div>
  titleEl.textContent = currentQuestion.question;

  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function(choice,i){
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    choiceNode.onclick = questionClick;

    choicesEl.appendChild(choiceNode);
  });
  }
  
function questionClick(){
  questionNumber++;

  if (questionNumber === quizQuestions.length) {
    endQuiz();
  } else {
    getQuestions();
  }
}

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



 