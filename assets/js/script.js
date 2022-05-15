var testValue
var quizQuestions = [
    "What symbol do you need at the end of a function?",
    "What symbol do you use to creat an array?",
    "What method do you use to return an element by id from your html?",
    "Where in your index file should you link to your javascript file?",
    "What syntax is used to wrap a group of flex boxes?"
]

var quizAnswers = [
    { q0: "( )", q1: "{ }", q2: "< >", q3: "[ ]", answer: "q0" },
    { q0: "( )", q1: "{ }", q2: "< >", q3: "[ ]", answer: "q3" },
    { q0: "getElementByClassName", q1: "createElement", q2: "getElementById", q3: "createElement", answer: "q2" },
    { q0: "Before </body>", q1: "Inside <head>", q2: "After </html>", q3: "Inside <header>", answer: "q0" },
    { q0: "flex: wrap", q1: "flex-wrap: wrap", q2: "flex-wrap: true", q3: "flexwrap: true", answer: "q1" }
]
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("mainText");
var textEl = document.body.children[2].children[0].children[0];
var textEl2 = document.body.children[2].children[0].children[1];
var buttons = document.getElementById("buttons");
var nextEl = document.getElementById("nextButton");
var openButtonEl = document.getElementsByClassName("openButton");
var formQ1 = document.getElementById("radioButtonsQ1");
var formQ2 = document.getElementById("radioButtonsQ2")
var formQ3 = document.getElementById("radioButtonsQ3")
var formQ4 = document.getElementById("radioButtonsQ4")
var formQ5 = document.getElementById("radioButtonsQ5")
var q0El = document.getElementById("Q0");
var q1El = document.getElementById("Q1");
var q2El = document.getElementById("Q2");
var q3El = document.getElementById("Q3");
var quizIndex = 0;
var clickCounter = 1;

function genQuestions() {
    textEl.textContent = quizQuestions[quizIndex];
    if (quizQuestions.length > quizIndex) {
         quizIndex++
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
            if (document.getElementById("answer1Q1").checked) {
                console.log("success!")
            }
            else {
                console.log("False!!!")
            }
        })
    } else if (quizIndex === 2) {
        formQ1.style.display = "none";
        formQ2.style.display = "block";
        formQ3.style.display = "none";
        formQ4.style.display = "none";
        formQ5.style.display = "none";
        formQ2.addEventListener("click", function () {
            if (document.getElementById("ans4").checked) {
                console.log("success!")
            }
            else {
                console.log("False!!!")
            }
        })
    } else if (quizIndex === 3) {
        formQ1.style.display = "none";
        formQ2.style.display = "none";
        formQ3.style.display = "block";
        formQ4.style.display = "none";
        formQ5.style.display = "none";
        formQ3.addEventListener("click", function () {
            if (document.getElementById("ans3").checked) {
                console.log("success!")
            }
            else {
                console.log("False!!!")
            }
        })
    } else if (quizIndex === 4) {
        formQ1.style.display = "none";
        formQ2.style.display = "none";
        formQ3.style.display = "none";
        formQ4.style.display = "block";
        formQ5.style.display = "none";
        formQ4.addEventListener("click", function () {
            if (document.getElementById("ans1").checked) {
                console.log("success!")
            }
            else {
                console.log("False!!!")
            }
        })
    } else if (quizIndex === 5) {
        formQ1.style.display = "none";
        formQ2.style.display = "none";
        formQ3.style.display = "none";
        formQ4.style.display = "none";
        formQ5.style.display = "block";
        formQ5.addEventListener("click", function () {
            if (document.getElementById("ans2").checked) {
                console.log("success!")
            }
            else {
                console.log("False!!!")
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
        textEl.textContent = "Finished!"
        nextEl.style.display = "none";
        formQ1.style.display = "none";
        formQ5.style.display = "none";
    }
})

function countdownTimer() {
    var timeClock = 30;
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

