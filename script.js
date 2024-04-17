const startButton = document.querySelector('#start');
const quizTimer = document.querySelector('#timer');
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const briefing = document.querySelector('#briefing');
const feedback = document.querySelector('#feedback');
const nextButton = document.querySelector('#nextButton');
const highScore = document.querySelector("#view-score");
const saveScore = document.querySelector('#save-score');
const nickName = document.getElementById('nickname');
const scoreBoard = document.getElementById('highscores');

 
let questionIndex = -1;
let answerIndex = -1;
let questions = ['What is the box called in CSS that wraps around every HTML element?', 
'What tag is used to render or transform text into an emphasized (italics) version?', 
'What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?'];
let choice1 = ['Wrap','it','caption'];
let choice2 = ['Float','hr','embed'];
let choice3 = ['Box-model','em','!DOCTYPE'];
const scoreList = {nickName};
let count = localStorage.getItem('clickCount') || 0;
JSON.parse(localStorage.getItem('initials'))









startButton.onclick = 







function startQuiz(){
console.log('quiz has started');
startTimer();
changeQuestion();
question.textContent = questions[questionIndex];
//question.innerText = 'What tag is used to render or transform text into an important (bold) version?';
briefing.style.display = 'none';
document.querySelector('#start').style.display = 'none';
answer1.style.display = 'block';
answer2.style.display = 'block';
answer3.style.display = 'block';

answer1.onclick = nextQuestionWrong;
answer2.onclick = nextQuestionWrong;
answer3.onclick = nextQuestionRight;



}
function startCount(){
  localStorage.setItem('clickCount', count);
  count++;
  console.log(`Current count: ${count}`);
}

function endTimer(){
  countdown = 0;
  quizTimer.innerText = 'Your all done!';
 
}
function startTimer(){
  let countdown = 60; 

let timer = setInterval(function() {
    console.log(countdown);
    countdown--;
    quizTimer.innerText = 'Time: ' + countdown;

    if (countdown < 0) {
        
        quizEnd();

    } else if(questionIndex == questions.length){
        endTimer();
    }
}, 1000); 
 
}
answer1.addEventListener('click', nextQuestionWrong);
answer2.addEventListener('click', nextQuestionWrong);
answer3.addEventListener('click', nextQuestionRight);
answer3.addEventListener('click', startCount);

function nextQuestionWrong(){
  feedback.style.display = 'block';
  feedback.innerText = 'Wrong!';
  feedback.innerText = 'Wrong!';
  nextButton.style.display = 'block';
 
}
function nextQuestionRight(){
  feedback.style.display = 'block';
  feedback.innerText = 'Correct!';
  nextButton.style.display = 'block';
}

nextButton.addEventListener('click', changeQuestion);

function changeQuestion(){
  questionIndex++;
  console.log(questions.length);
  if(questionIndex == questions.length){
    question.textContent = 'You Have Finished the quiz. Click Below to save your highscore.'
    answer1.style.display = 'none';
    answer2.style.display = 'none';
    answer3.style.display = 'none';
    quizEnd();
    endTimer();

  } else {
    question.textContent = questions[questionIndex];
  }
  
  console.log(questions[questionIndex]);
  nextButton.style.display = 'none';
  answerIndex++;
  answer1.textContent = choice1[answerIndex];
  answer2.textContent = choice2[answerIndex];
  answer3.textContent = choice3[answerIndex];
  


}




function quizEnd(){
    countdown = 0;
    endTimer();
    clearInterval(timer);
    console.log("Timer has ended!");
    quizTimer.innerText = 'You have run out of time!' ;
    question.textContent = 'All Done!';
    briefing.style.display = 'block';
    briefing.textContent = 'Enter your initials';
    saveScore.style.display = 'inline';
    nickName.style.display = 'inline';
}

saveScore.addEventListener('click', loadSavedScore);

function loadSavedScore(event){
  event.preventDefault();
  const scoreData = JSON.stringify(nickName.value);


  //localStorage.setItem('initials', JSON.stringify(scoreData));


  
  //JSON.parse(localStorage.getItem('initials'));
 
  
  //JSON.parse(localStorage.getItem('clickCount'))
 
  var initials = [];
  var score = [];
  console.log(initials);
  console.log(score);
  //console.log(`${initials[i]} - Correct answers: ${score[i]}`);
  function disHighScore(){
    const listItem = document.createElement('li');
    listItem.textContent = `${initials}: ${score}`;
    question.textContent = `HIGHSCORES`
    scoreBoard.appendChild(listItem);
  
   }
  
   function initialsFunc(){
    let userInput = JSON.parse(scoreData);
    initials.push(userInput);
    localStorage.setItem('initials', JSON.stringify(initials));
    let userScore =  JSON.parse(localStorage.getItem('clickCount'))
    score.push(userScore);
    localStorage.setItem('score', JSON.stringify(score));
   }
   initialsFunc();
   disHighScore();
  
}



