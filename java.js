// Create html elements for our quiz
// Grab html elements and bring to the javascript
var btnholder = document.getElementById("buttonwrapper");
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");


var questionboxtext = document.querySelector(".questiontext");
var questioncontainer = document.querySelector(".questioncontainer");

var startbutt = document.getElementById("startbutton2");

//These are used for grabbing the correct inputs for local storage saving. CountdownEl is also used for the timer mechanic, and not just for the player input (uncontrolled variable by the player).
var playerinput = document.getElementById("initials");
var countdownEl = document.getElementById('Timeleft');


//It starts as an empty array until user actions start to fill them. 

var intials = [];
var score = [];

//These are used for the correct outputs/endpoints which will have local storage data distributed to the front end of the website.
var playerrecord = document.getElementById("playerrecord");
var finaltime = document.getElementById("finaltime");

//This is to combine the previous 6 variables, to say that the variables for local storage should equal the text of the input of the player and whatever time is in the timeleft element.
initials.textContent = playerinput;
score.textContent = countdownEl;




var startingMinutes =  5;
let time = startingMinutes * 60;




function gameover () {


    // for loop for setting initials to be pushed to DOM and appending LI (I DO NOT BELIEVE MY LINE 46-52 WORKS)
    localStorage.setItem("Timeleft", time);
    for (var score = 0; i < score.length; score++) {
        var scorelistItem = document.createElement("li");

        scorelistItem.textContent = score[i];

        countdownEl.appendChild(scorelistItem);
    }


    document.querySelector('.questioncontainer').style.display = "none";
    document.getElementById("myh2").style.display = "none";
    startbutt.style.display = "block";
    

    }



setInterval(updateTimeleft, 1000);

function displaymyTime() {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
    
        seconds = seconds < 10 ? "0" + seconds: seconds;
        countdownEl.innerHTML = `${minutes}: ${seconds}`;
     }
    

function updateTimeleft() {
    time--;
    if (time <= 0) {
        gameover();
    }
    displaymyTime();

var i = 0;
var questionarray =  [
    {
        questiontext: "question1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1"

    },
    {
        questiontext: "question2",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer2"

    },


    {
        questiontext: "question3",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer3"

    },


    {
        questiontext: "question4",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer4"

    }

]


function generatequestion ()
{
    questionboxtext.textContent = questionarray[i].questiontext;
    button1.textContent = questionarray[i].choices[0];
    button2.textContent = questionarray[i].choices[1];
    button3.textContent = questionarray[i].choices[2];
    button4.textContent = questionarray[i].choices[3];
    correct = questionarray[i].correct;

}





document.querySelector('.questioncontainer').style.display = "none";
document.getElementById('myh2').style.display = "none";

startbutt.addEventListener('click',event => {

    // for loop for setting initials to be pushed to DOM and appending LI ((I DO NOT BELIEVE MY LINEs 138-145 WORKS))
    localStorage.setItem("initials", initials);
    for (var initials = 0; i < initials.length; initials++) {
        var initialslistItem = document.createElement("li");

        initialslistItem.textContent = intials[i];

        playerinput.appendChild(initialslistItem);
    }

    document.querySelector('.questioncontainer').style.display = "";
    startbutt.style.display = "none";
    document.getElementById('myh2').style.display = "";
    time = startingMinutes * 60;
    displaymyTime();
    i = 0;
    generatequestion();
})











var correct = questionarray[i].correct;



btnholder.addEventListener('click', event => {
    if (event.target.className == 'answer-btn') {
        if (event.target.textContent === correct) {
            console.log(correct)
            i++;
            if (i >= questionarray.length ) {
                alert("You are finsihed!");
                gameover();
            } else { 
            generatequestion();
            

            }
        }

    }
});


    // function myFunction () {
    //     i++;
    //     generatequestion();
    // }











/* how to do event delegation on the four buttons

var btnholder = document.getElementById("buttonwrapper");

btnholder.addEventListener('click', event => {
    if (event.target.className === 'answer-btn') {
        console.log(event.target.innerHTML);
    }
});
*/