const questions = [
    {
        question: "What is the largest continent?",
        answers: [
            {option: "Africa",correct: false},
            {option: "Asia",correct: true},
            {option: "north America",correct: false},
            {option: "Europe",correct: false}
        ]
    },
    {
        question: "What is the most powerful country?",
        answers: [
            {option: "USA",correct: true},
            {option: "Russia",correct: false},
            {option: "Ghana",correct: false},
            {option: "Egypt",correct: false}
        ]
    },
    {
        question: "What is the most commom currency?",
        answers: [
            {option: "Cedi",correct: false},
            {option: "Ruble",correct: false},
            {option: "Dollar",correct: true},
            {option: "pesos",correct: false}
        ]
    }
]

const questionElement = document.getElementById("question")
const optionElement = document.getElementById("options")
const nextButton = document.getElementById("next-btn")

var currentQuestionIndex = 0;
var score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestions();
};

function clearPrevious(){
    while(optionElement.firstChild){
        optionElement.removeChild(optionElement.firstChild);
    }
};


function showQuestions(){
    clearPrevious();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex+1;
    questionElement.innerHTML = questionNumber+ "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("btn");
        optionElement.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
};

function selectAnswer(e){
    const selectedbutton = e.target;
    const isCorrect = selectedbutton.dataset.correct === "true"
    if(isCorrect){
        selectedbutton.classList.add("correct");
        score++;
    }
    else{
        selectedbutton.classList.add("incorrect");
    }
    Array.from(optionElement.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

};

function showScore(){
    clearPrevious();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} questions.`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();

