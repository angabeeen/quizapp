const quizData = [
    {
      question: "Which of the following is used to make decisions in Java?",
      a: "if else",
      b: "switch",
      c: "Both a and b",
      d: "Neither",
      correct: "c"
    },
    {
      question: "Which HTML tag is used to link a JavaScript file?",
      a: "<js>",
      b: "<script>",
      c: "<link>",
      d: "<javascript>",
      correct: "b"
    },
    {
      question: "Which of the following is NOT a programming language?",
      a: "Python",
      b: "HTML",
      c: "Java",
      d: "C++",
      correct: "b"
    },
    {
      question: "What does CSS stand for?",
      a: "Color Style Sheet",
      b: "Computer Styled Sections",
      c: "Cascading Style Sheets",
      d: "Creative Style System",
      correct: "c"
    },
    {
      question: "Which operator is used for strict equality in JavaScript?",
      a: "=",
      b: "==",
      c: "===",
      d: "!==",
      correct: "c"
    }
  ];
  

//connect to html//

const Q= document.getElementById ('question')

const a_text= document.getElementById ('a_text')

const b_text= document.getElementById ('b_text')

const c_text= document.getElementById ('c_text')

const d_text= document.getElementById ('d_text')
const submitBtn = document.getElementById('submit')

///loading quiz//
let currentQuiz = 0;
let score = 0;
function loadingQuiz(){
    deselectAnswers()
const currentQuestion=quizData[currentQuiz]
Q.innerText= currentQuestion.question
a_text.innerText= currentQuestion.a

b_text.innerText= currentQuestion.b

c_text.innerText= currentQuestion.c

d_text.innerText= currentQuestion.d

}

//
function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer = undefined;
  
    answers.forEach((ans) => {
      if (ans.checked) {
        answer = ans.id;
      }
    });
  
    return answer;
  }

  //
    function deselectAnswers() {
        const answers = document.querySelectorAll('input[name="answer"]');
        answers.forEach(ans => ans.checked = false);
      }
      //
      loadingQuiz(); // 👈 This starts the quiz on page load

  //
  submitBtn.addEventListener('click', () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++; // move to next question
  
      if (currentQuiz < quizData.length) {
        loadingQuiz(); // load next question
      } else {
        // show final result
        document.getElementById('quiz').innerHTML = `
          <h2>You scored ${score} out of ${quizData.length}</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  });
  
