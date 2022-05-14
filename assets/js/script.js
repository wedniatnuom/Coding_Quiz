var testValue
var quizQuestions = [
    "What symbol do you need at the end of a function?",
    "What symbol do you use to creat an array?",
    "What method do you use to return an element by id from your html?",
    "Where in your index file should you link to your javascript file?",
    "What syntax is used to wrap a group of flex boxes?"
]

var quizAnswers = [
    { q0: "( )", q1: "{ }", q2: "< >", q3: "[ ]", answer: "q1" },
    { q0: "( )", q1: "{ }", q2: "< >", q3: "[ ]", answer: "q3" },
    { q0: "getElementByClassName", q1: "createElement", q2: "getElementById", q3: "createElement", answer: "q2" },
    { q0: "Before </body>", q1: "Inside <head>", q2: "After </html>", q3: "Inside <header>", answer: "q0" },
    { q0: "flex: wrap", q1: "flex-wrap: wrap", q2: "flex-wrap: true", q3: "flexwrap: true", answer: "q1" }
]
var timerEl = document.getElementById("timer")
var mainEl = document.getElementById("mainText")
var textEl = document.body.children[2].children[0].children[0];
var textEl2 = document.body.children[2].children[0].children[1];
var buttons = document.getElementById("buttons");
var nextEl = document.getElementById("nextButton")
var openButtonEl = document.getElementsByClassName("openButton")
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var quizIndex = 0
var clickCounter = 1



function genQuestions() {
    textEl.textContent = quizQuestions[quizIndex];
    

    if (quizQuestions.length > quizIndex) {
        var radioLoop = 4

        for (i = 0; i < radioLoop; i++) {

            var radiobox = document.createElement('input');
            radiobox.type = 'radio';
            radiobox.id = quizAnswers[clickCounter]['q' + i];
            radiobox.value = quizAnswers[clickCounter]['q' + i];
            radiobox.name = "radioAnswers";

            var label = document.createElement('label')
            label.htmlFor = quizAnswers[clickCounter]['q' + i];
            label.textContent = quizAnswers[clickCounter]['q' + i];

            var newline = document.createElement('br');

            var container = document.getElementById('container');
            textEl.appendChild(radiobox);
            textEl.appendChild(label);
            textEl.appendChild(newline);
        }
        quizIndex++
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
        clicks();
        console.log(clickCounter)
        if (quizQuestions.length < clickCounter) {
            textEl.textContent = "Finished!"
            nextEl.style.display = "none";
            li1.style.display = "none";
            li2.style.display = "none";
            li3.style.display = "none";
            li4.style.display = "none";
        }
    })

    function clicks() {
        nextEl.onclick = clickCounter++
    }


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

