// Create html elements for our quiz
// Grab html elements and bring to the javascript

var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");


var questionboxtext = document.querySelector(".questiontext");
var questioncontainer = document.querySelector(".questioncontainer");



var startingMinutes =  5;
let time = startingMinutes * 60;

var countdownEl = document.getElementById('Timeleft');



setInterval(updateTimeleft, 1000);


function updateTimeleft() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 5 ? "0" + seconds: seconds;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}












// function updateTimeleft() {
//     var minutes = Math.floor(time / 60);
//     var seconds = time % 60;

//     time--;

//     seconds = seconds < 5 ? "0" + seconds: seconds;
//     countdownEl.innerHTML = `${minutes}: ${seconds}`;


// }






// for the last part where time has run out, and the user fails to win
// var Timer = document.getElementById("TimeGone").setTimeout(function, 1000);


// Update html elements with answers the user outputs

// Make an array of objects where in each object has the question text, and the answer for any answer I want to put in the page.
// Setup dummy info don't make question content yet
var i = 0;
var questionarray = [
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
}

generatequestion();


var btnholder = document.querySelector(".buttonwrapper").addEventListener("click",myFunction);
function myFunction () {
    i++;
    generatequestion();
}


// var btnholder = document.querySelector(".buttonwrapper").addEventListener("click","");
// btnholder.on("click", "button", function(){
//     i++;
//     generatequestion();
// })







// Give elements CSS properties