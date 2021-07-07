const question = document.getElementById("question");
const selections = Array.from(document.getElementsByClassName("answer"));
const myScore = document.getElementById("currentScore");
const myTime = document.getElementById("timeLeft");

let myquestion = {};
let boolAnswer = false;
let score = 0;
let time = 100;
let questionCounter = 0;
let randomQuestion = [];

let questions = [ //questions set to an object so they can be easily used printing and comparing
    {
        question: "How would you declare a variable name and set it equal to the string bob?",
        answer1: "var name = bob;",
        answer2: "variable name = bob;",
        answer3: "name === bob;",
        answer4: "var bob = name",
        answer: 1,
    },
    {
        question:
            "What data type holds true false information",
        answer1: "string",
        answer2: "integer",
        answer3: "boolean",
        answer4: "variable",
        answer: 3,
    },
    {
        question: "What HTML element is used to link a JavaScript tag",
        answer1: "link",
        answer2: "source",
        answer3: "a",
        answer4: "script",
        answer: 4,
    },
    {
        question: "What character means not equal to?",
        answer1: "#",
        answer2: "!",
        answer3: "<",
        answer4: "*",
        answer: 2,
    },
    {
        question: "Which of the following is an array?",
        answer1: "[0,1]",
        answer2: "(0,1)",
        answer3: "{0,1}",
        answer4: "<0,1>",
        answer: 1,
    },
    {
        question: "How do you write hello world in an alert box?",
        answer1: "alert(\"Hello World\"",
        answer2: "alertbox(\"Hello World\"",
        answer3: "message(\"Hello World\"",
        answer4: "console.Log(\"Hello World\"",
        answer: 1,
    },
    {
        question: "Which bracket type is used to declare an object?",
        answer1: "{}",
        answer2: "[]",
        answer3: "()",
        answer4: "<>",
        answer: 1,
    },
    {
        question: "What does API stand for?",
        answer1: "Andvanced programing interface",
        answer2: "Application programing integer",
        answer3: "Application programing interface",
        answer4: "Advanced Auto Parts",
        answer: 3,
    },
    {
        question: "What does API stand for?",
        answer1: "Andvanced programing interface",
        answer2: "Application programing integer",
        answer3: "Application programing interface",
        answer4: "Advanced Auto Parts",
        answer: 3,
    },
    {
        question: "Which of the following is not a loop statement?",
        answer1: "if",
        answer2: "then",
        answer3: "do...while",
        answer4: "while",
        answer: 2,
    },
    {
        question: "What does the concat method do?",
        answer1: "add two arrays",
        answer2: "subtract two arrays",
        answer3: "merge two arrays",
        answer4: "shuffle an array",
        answer: 3,
    }
];

const answerCorrect = 10; //the amount of points earned per question right
const questionAmount = 11; //how many questions to loop through

quizStart = () => {
    questionCounter = 0;
    score = 0;
    randomQuestion = [...questions]; 
    generateNextQuestion();//quiz generates a question
};

generateNextQuestion = () => {
    if (randomQuestion.length === 0 || questionCounter >= questionAmount) {
        
        return window.location.assign("save.html"); //ends quiz once all questions answered
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * randomQuestion.length);
    myquestion = randomQuestion[questionIndex];
    question.innerText = myquestion.question;

    selections.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = myquestion["answer" + number];
    });

    randomQuestion.splice(questionIndex, 1);
    boolAnswer = true;
};



scoreChange = num => {
    score += num;
    myScore.innerText = score;
    localStorage.setItem("mostRecentScore", score); //updates score each time the score is changed
}

function timer(){
    myTime.innerText = time;
    let timer = setInterval(function(){
        counter = 0;
        counter ++;
        if (time > 0){ //time counts down once per second on quiz start
            time = time - counter;
            myTime.innerText = time;
        }
        else{ //if time bellow zero, quiz end
           return window.location.assign("save.html");;
        }        
    }, 1000);
    selections.forEach((choice) => {
        choice.addEventListener("click", (e) => {
            if (!boolAnswer) return;
    
            boolAnswer = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];
    
            
            if (selectedAnswer == myquestion.answer){ //if you answer correct, 10 points added
                scoreChange(answerCorrect);
            }else{
                time = time -15; //lose 15 seconds when question answered wrong
            }
         
            generateNextQuestion();
        });
    });
}

quizStart();
timer(); //time begins on launch
