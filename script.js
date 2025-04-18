const questions = [
    {
        question: "What is the largest continent?",
        answers: [
            {option1: "Africa",correct: false},
            {option2: "Asia",correct: true},
            {option3: "north America",correct: false},
            {option4: "Europe",correct: false}
        ]
    },
    {
        question: "What is the most powerful country?",
        answers: [
            {option1: "USA",correct: true},
            {option2: "Russia",correct: false},
            {option3: "Ghana",correct: false},
            {option4: "Egypt",correct: false}
        ]
    },
    {
        question: "What is the most commom currency?",
        answers: [
            {option1: "Cedi",correct: false},
            {option2: "Ruble",correct: false},
            {option3: "Dollar",correct: true},
            {option4: "pesos",correct: false}
        ]
    }
]

const questionElement = document.getElementById("question")
const optionElement = document.getElementById("options")
const nextButton = document.getElementById("next-btn")