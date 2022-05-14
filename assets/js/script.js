var testValue
var quizQuestions = [
    "What symbol do you need at the end of a function?",
    "What symbol do you use to creat an array?",
    "What method do you use to return an element by id from your html?",
    "Where in your index file should you link to your javascript file?",
    "What syntax is used to wrap a group of flex boxes?"
]

var quizAnswers = [
    { qa: "( )", qb: "{ }", qc: "< >", qd: "[ ]", answer: "qa" },
    { qa: "( )", qb: "{ }", qc: "< >", qd: "[ ]", answer: "qd" },
    { qa: "getElementByClassName", qb: "createElement", qc: "getElementById", qd: "createElement", answer: "qc" },
    { qa: "Before </body>", qb: "Inside <head>", qc: "After </html>", qd: "Inside <header>", answer: "qa" },
    { qa: "flex: wrap", qb: "flex-wrap: wrap", qc: "flex-wrap: true", qd: "flexwrap: true", answer: "qb" }
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


function genQuestions() {
    textEl.textContent = quizQuestions[quizIndex];
    textEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    if (quizQuestions.length > quizIndex) {
        li1.textContent = quizAnswers[quizIndex].qa;
        li2.textContent = quizAnswers[quizIndex].qb;
        li3.textContent = quizAnswers[quizIndex].qc;
        li4.textContent = quizAnswers[quizIndex].qd;
    }
    quizIndex++
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
    console.log(quizIndex)
    console.log(quizQuestions.length)
    genQuestions()
    if (quizQuestions.length < quizIndex) {
        textEl.textContent = "Finished!"
        nextEl.style.display = "none";
        li1.style.display = "none";
        li2.style.display = "none";
        li3.style.display = "none";
        li4.style.display = "none";

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
        timerEl.textContent = timeClock + " seconds remaining!";
        timeClock -= 1;
        
    }, 1000);
}






// document.getElementById("next").addEventListener(click, function(){
//     console.log("it worked")
// })



// document.getElementById("startButton").addEventListener("click", quizLoop())
//     document.getElementById("mainText").innerHTML = quizLoop
//     console.log(quizLoop)

// getElementById("mainText").innerHTML = quizQuestions[0]

//     })