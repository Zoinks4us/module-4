const startButton = document.querySelector('#start');
const quizTimer = document.querySelector('#timer');
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const briefing = document.querySelector('#briefing');
const feedback = document.querySelector('#feedback');
const nextButton = document.querySelector('#nextButton');
const questions = ['What tag is used to define an image – or add an image – to an HTML page?', 'What tag is used to render or transform text into an emphasized (italics) version?', 'What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?', 'What group of tags are used to define the text headers in the body of the HTML document?'];




startButton.onclick = 







function startQuiz(){
console.log('quiz has started');
startTimer();
question.innerText = 'What tag is used to render or transform text into an important (bold) version?';
briefing.style.display = 'none';
document.querySelector('#start').style.display = 'none';
answer1.style.display = 'block';
answer2.style.display = 'block';
answer3.style.display = 'block';

answer1.onclick = nextQuestionWrong;
answer2.onclick = nextQuestionWrong;
answer3.onclick = nextQuestionRight;

}
function startTimer(){
  let countdown = 60; 

let timer = setInterval(function() {
    console.log(countdown);
    countdown--;
    quizTimer.innerText = 'Time: ' + countdown;

    if (countdown < 0) {
        clearInterval(timer);
        console.log("Timer has ended!");
        quizTimer.innerText = 'You have run out of time!' ;
    }
}, 1000); 
  
}
function nextQuestionWrong(){
  feedback.style.display = 'block';
  answer1.onclick= feedback.innerText = 'Wrong!';
  answer2.onclick= feedback.innerText = 'Wrong!';
  nextButton.style.display = 'block';
 //if (answer1.onclick||answer2.onclick){
    //feedback.innerText = 'Wrong!';
 //} else {
  //feedback.innerText = 'Correct!';
 //}
 //question.innerText=
 //answer1.innerText=
// answer2.innerText=
// answer3.innerText=
}
function nextQuestionRight(){
  feedback.style.display = 'block';
  answer3.onclick= feedback.innerText = 'Correct!';
  nextButton.style.display = 'block';
}

function changeQuestion(){

}