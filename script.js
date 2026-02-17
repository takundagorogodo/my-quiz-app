const questions = [
  {
    qusetion: "Which is the largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    qusetion: "Which planet is known as the Red Planet",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false }
    ]
  },
  {
    qusetion: "Who invented the telephone",
    answers: [
      { text: "Alexander Graham Bell", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: false },
      { text: "Nikola Tesla", correct: false }
    ]
  },
  {
    qusetion: "Which is the smallest continent",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Europe", correct: false },
      { text: "Antarctica", correct: false }
    ]
  },
  {
    qusetion: "What is the capital of France",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false }
    ]
  },
  {
    qusetion: "Which gas do plants absorb from the atmosphere",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    qusetion: "Who is known as the Father of Computers",
    answers: [
      { text: "Charles Babbage", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Alan Turing", correct: false },
      { text: "Steve Jobs", correct: false }
    ]
  },
  {
    qusetion: "Which ocean is the largest",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    qusetion: "How many continents are there",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false }
    ]
  },
  {
    qusetion: "Which is the fastest land animal",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Tiger", correct: false },
      { text: "Leopard", correct: false }
    ]
  },
  {
    qusetion: "What is the boiling point of water",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "80°C", correct: false },
      { text: "70°C", correct: false }
    ]
  },
  {
    qusetion: "Which country is famous for the Great Wall",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "Japan", correct: false },
      { text: "Korea", correct: false }
    ]
  },
  {
    qusetion: "Which organ pumps blood in the human body",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Brain", correct: false },
      { text: "Heart", correct: true },
      { text: "Liver", correct: false }
    ]
  },
  {
    qusetion: "Which is the longest river in the world",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false }
    ]
  },
  {
    qusetion: "Which language is used for web apps",
    answers: [
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     showQuestion(); 
}

function showQuestion(){
      resetState()
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo +". " + currentQuestion.qusetion;

      currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button);
            if(answer.correct){
                  button.dataset.correct = answer.correct;
            }
            button.addEventListener("click",selectAnswer);
      });
}

function resetState(){
      nextButton.style.display = "none";
      while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
      }
}
function selectAnswer(e){
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
      }else{
            selectedBtn.classList.add("incorrect");
      }
      Array.from(answerButton.children).forEach(button=>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");     
            }
            button.disabled = true;
      });
      nextButton.style.display = "block";
}

function showScore(){
      resetState();
      questionElement.innerHTML = `You scored  ${score} out of ${questions.length}`;
      nextButton.innerHTML = "play again";
      nextButton.style.display = "block";
}

function handleNextBuuton(){
      currentQuestionIndex ++;
      if(currentQuestionIndex < questions.length){
            showQuestion();
      }else{
            showScore();
      }
}

nextButton.addEventListener("click",()=>{
      if(currentQuestionIndex < questions.length){
           handleNextBuuton();
      }else{
            startQuiz();
      }
});

startQuiz();