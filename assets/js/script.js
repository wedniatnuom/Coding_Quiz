var testValue
var quizQuestions = [
    "What symbol do you need at the end of a function?",
    "What symbol do you use to creat an array?",
    "What method do you use to return an element by id from your html?",
    "Where in your index file should you link to your javascript file?",
    "What syntax is used to wrap a group of flex boxes?"
]

var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("mainText");
var textEl = document.body.children[2].children[0].children[0];
var textEl2 = document.body.children[2].children[0].children[1];
var buttons = document.getElementById("buttons");
var nextEl = document.getElementById("nextButton");
var openButtonEl = document.getElementsByClassName("openButton");
var formQ1 = document.getElementById("radioButtonsQ1");
var formQ2 = document.getElementById("radioButtonsQ2");
var formQ3 = document.getElementById("radioButtonsQ3");
var formQ4 = document.getElementById("radioButtonsQ4");
var formQ5 = document.getElementById("radioButtonsQ5");
var scoreEl = document.getElementById("score");
var timeClock = 30;
var points = 0;
var quizIndex = 0;
var clickCounter = 1;

function genQuestions() {
    textEl.textContent = quizQuestions[quizIndex];
    if (quizQuestions.length > quizIndex) {
        console.log(points + " points variable")
        quizIndex++
        scoreEl.textContent = "Current Score: " + points;
        console.log(clickCounter + " clickCounter");
        console.log(quizIndex + " quizIndex");
    }
    if (quizIndex === 1) {
        formQ1.style.display = "block";
        formQ2.style.display = "none";
        formQ3.style.display = "none";
        formQ4.style.display = "none";
        formQ5.style.display = "none";

        formQ1.addEventListener("click", function () {
            formQ1.style.display = "none"
            if (document.getElementById("answer1Q1").checked) {
                points++
            } else {
                timeClock -= 10;
            }
        })
    } else if (quizIndex === 2) {
        formQ1.style.display = "none";
        formQ2.style.display = "block";
        formQ3.style.display = "none";
        formQ4.style.display = "none";
        formQ5.style.display = "none";

        formQ2.addEventListener("click", function () {
            formQ2.style.display = "none";
            if (document.getElementById("answer4Q2").checked) {
                points++
            } else {
                timeClock -= 10;
            }
        })
    } else if (quizIndex === 3) {
        formQ1.style.display = "none";
        formQ2.style.display = "none";
        formQ3.style.display = "block";
        formQ4.style.display = "none";
        formQ5.style.display = "none";

        formQ3.addEventListener("click", function () {
            formQ3.style.display = "none";
            if (document.getElementById("answer3Q3").checked) {
                points++
            } else {
                timeClock -= 10;
            }
        })
    } else if (quizIndex === 4) {
        formQ1.style.display = "none";
        formQ2.style.display = "none";
        formQ3.style.display = "none";
        formQ4.style.display = "block";
        formQ5.style.display = "none";

        formQ4.addEventListener("click", function () {
            formQ4.style.display = "none";
            if (document.getElementById("answer1Q4").checked) {
                points++
            } else {
                timeClock -= 10;
            }
        })
    } else if (quizIndex === 5) {
        formQ1.style.display = "none";
        formQ2.style.display = "none";
        formQ3.style.display = "none";
        formQ4.style.display = "none";
        formQ5.style.display = "block";
       
        formQ5.addEventListener("click", function () {
            formQ5.style.display = "none";
            if (document.getElementById("answer2Q5").checked) {
                points++
            } else {
                timeClock -= 10;
            }
        
        })
}
}

document.getElementById("startButton").addEventListener("click", function () {
    textEl2.textContent = "";
    for (i = 0; i < openButtonEl.length; i++) {
        openButtonEl[i].style.display = "none"
    }
    nextEl.style.display = "block";

    genQuestions();
    countdownTimer();
})

nextEl.addEventListener("click", function () {
    genQuestions();
    nextEl.onclick = clickCounter++
    if (quizQuestions.length < clickCounter) {
        scoreEl.textContent = "New Score: " + points + "!";
        textEl.textContent = "Finished!"

        nextEl.style.display = "none";
        formQ1.style.display = "none";
        formQ5.style.display = "none";
    }
})

function countdownTimer() {
    var countDown = setInterval(function () {
        timerEl.style.color = "rgb(5, 5, 112)";
        timerEl.style.fontSize = "x-large";
        timerEl.style.alignItems = "center";
        if (timeClock <= 0) {
            clearInterval(countDown);
        }
        if (textEl.textContent === "Finished!") {
            clearInterval(countDown);
            timerEl.style.display = "none";
        }
        timerEl.textContent = timeClock + " seconds remaining!";
        timeClock -= 1;

    }, 1000);
}
