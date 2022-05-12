var testValue
var quizQuestions = [
    "What symbol do you need at the end of a function?",
    "What symbol do you use to creat an array?",
    "What method do you use to return an element by id from your html?",
    "Where in your index file should you link to your javascript file?",
    "What syntax is used to wrap a group of flex boxes?"
]
var mainEl = document.getElementById("mainText")
var textEl = document.body.children[2].children[0].children[0];
var textEl2 = document.body.children[2].children[0].children[1];
var buttons = document.getElementById("buttons");
var submit = document.createElement("button")
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");



document.getElementById("startButton").addEventListener("click", function(){
    textEl.textContent = quizQuestions[0]
    textEl2.textContent = ""
    buttons.textContent = ""
    textEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);    
    li1.textContent = "{ }";
    li2.textContent = "( )";
    li3.textContent = "[ ]";
    li4.textContent = "< >";
    mainEl.appendChild(submit);
    mainEl.addEventListener("click", function(){
        console.log("event test")
    })
    submit.textContent = "Next";
})




// document.getElementById("next").addEventListener(click, function(){
//     console.log("it worked")
// })



// document.getElementById("startButton").addEventListener("click", quizLoop())
//     document.getElementById("mainText").innerHTML = quizLoop
//     console.log(quizLoop)

// getElementById("mainText").innerHTML = quizQuestions[0]

//     })