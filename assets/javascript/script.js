/*jshint esversion: 6 */
//variabels to access the id in the html file.
let showQuiz = document.getElementById('quiz-form');
let showPlay = document.getElementById('play-btn');
let showFlex = document.getElementById('flex-container-1');
let nextButton = document.getElementById('next-area-btn');
let previousButton = document.getElementById('previous-area-btn');
let firstArea = document.getElementById('next-area-1');
let secondArea = document.getElementById('next-area-2');
let thirdArea = document.getElementById('next-area-3');
let submitButton = document.getElementById('submit-btn');
let radioBackground = document.getElementsByClassName('radio-container');
let currentSection = firstArea;
let userName = document.getElementById('answer-score');
let showAllAnswers = document.getElementById('show-all-answers-btn');
let restartButton = document.getElementById('restart-btn');
let currentScore = 0;
//Array for holding the answer values
const answerArray = ['Barack Obama', '15', 'Russia', 'Caspian Sea', '1914', 'Elon Musk', '1945', '29', 'China'];
const wrongArray = ['Donald Trump', '36', 'China', 'Baikal Lake', '1919', 'Jeff Bezos', '1943', '45', 'India'];
// Array for holding the diffrent div elements in html document
const allSection = [firstArea, secondArea, thirdArea];
//array for holding images
const imageArray = ['assets/images/gold-medal.jpg', 'assets/images/silver-medal.jpg', 'assets/images/sad-smiley.jpeg'];

/**
 * The next and previous button that shows diffrent section divs in the same html form
 */


nextButton.addEventListener('click', nextSection);
let errorMessage = document.getElementById('error-message');


function nextSection() {
    'use strict';
    if (currentSection === firstArea) {
        firstArea.style.display = 'none';
       
        secondArea.style.display = 'block';
        currentSection = secondArea;
    } else if (currentSection === secondArea) {
        secondArea.style.display = 'none';
        thirdArea.style.display = 'block';

        currentSection = thirdArea;
    } else if (currentSection === thirdArea) {
        errorMessage.style.display = "block";
        
        errorMessage.innerHTML = "If you are done please click Submit to finish the quiz";
    }

}

previousButton.addEventListener('click', previousBack);


function previousBack() {
    'use strict';
    let errorMessage = document.getElementById('error-message');


    if (currentSection === thirdArea) {
        thirdArea.style.display = "none";
        secondArea.style.display = "block";
        currentSection = secondArea;
    } else if (currentSection === secondArea) {
        secondArea.style.display = "none";
        firstArea.style.display = "block";
        currentSection = firstArea;
    } else {
        errorMessage.innerHTML = "Please click next to continue to the next page";
        errorMessage.style.display = "block";
    }

}
/**
 * Prevents the game from starting if the user leaves the input field empty.
 */
showPlay.addEventListener('click', showArea);

function showArea() {
    'use strict';
    let introRules = document.getElementById('intro-rules');
    let introHeading = document.getElementById('intro-heading');
    let wrongInput = document.getElementById('wrong-input-text');
    let noInputText = "Please write a username before clicking start";
    let emptyField = document.getElementById('input-name').value;
    if (emptyField === "") {
        wrongInput.innerHTML = noInputText;
        alert('Please write a username before clicking play');
        return false;
    } else if (emptyField) {

        showQuiz.style.display = "block";
        showFlex.style.display = "none";

    }
    introHeading.style.display = "none";
    introRules.style.display = "none";

}
/**
 * Puts the value from the field the user writes in and puts that value to a element in html affter clicking play button
 */
showPlay.addEventListener('click', receiveUserName);

function receiveUserName() {
    'use strict';
    let reciveInput = document.getElementById('input-name').value;
    userName.innerHTML = reciveInput;

}
/**
 *  Takes value from radiobutton in html and compares it to an array and increments score if the score is right.
 */


function answerScore() {
    'use strict';
    let errorMessage = document.getElementById('error-message');
    let questionOne = document.quiz.question1.value;
    let questionTwo = document.quiz.question2.value;
    let questionThree = document.quiz.question3.value;
    let questionFour = document.quiz.question4.value;
    let questionFive = document.quiz.question5.value;
    let questionSix = document.quiz.question6.value;
    let questionSeven = document.quiz.question7.value;
    let questionEight = document.quiz.question8.value;
    let questionNine = document.quiz.question9.value;

    // if the answer is wrong the backgorund will turn red, if its correct the answer will turn green, if neither conditon is met then a error message will display and tell the user to contact support
    if (questionOne === answerArray[0]) {
        radioBackground[0].style.backgroundColor = "green";
        currentScore++;
    } else if (questionOne === wrongArray[0]) {
        radioBackground[1].style.backgroundColor = "red";
    } else {
        errorMessage.innerHTML = "Error message:Q1: please contact support at wiri@hotmail.se";
    }
    if (questionTwo === answerArray[1]) {
        radioBackground[2].style.backgroundColor = "green";
        currentScore++;
    } else if (questionTwo === wrongArray[1]) {
        radioBackground[3].style.backgroundColor = "red";
    } else {
        errorMessage.innerHTML = "Error message:Q2: please contact support at wiri@hotmail.se";
    }

    if (questionThree === answerArray[2]) {
        radioBackground[5].style.backgroundColor = "green";
        currentScore++;
    } else if (questionThree === wrongArray[2]) {
        radioBackground[4].style.backgroundColor = "red";
    } else {
        errorMessage.innerHTML = "Error message:Q3: please contact support at wiri@hotmail.se";
    }

    if (questionFour === answerArray[3]) {
        radioBackground[6].style.backgroundColor = "green";
        currentScore++;
    } else if (questionFour === wrongArray[3]) {
        radioBackground[7].style.backgroundColor = "red";
    } else {
        errorMessage.innerHTML = "Error message:Q4: please contact support at wiri@hotmail.se";
    }

    if (questionFive === answerArray[4]) {
        radioBackground[9].style.backgroundColor = "green";
        currentScore++;
    } else if (questionFive === wrongArray[4]) {
        radioBackground[8].style.backgroundColor = "red";
    } else {
        errorMessage.innerHTML = "Error message:Q5: please contact support at wiri@hotmail.se";
    }

    if (questionSix === answerArray[5]) {
        radioBackground[11].style.backgroundColor = "green";
        currentScore++;
    } else if (questionSix === wrongArray[5]) {
        radioBackground[10].style.backgroundColor = "red";
    } else {
        errorMessage.innerHTML = "Error message:Q6: please contact support at wiri@hotmail.se";
    }

    if (questionSeven === answerArray[6]) {
        radioBackground[12].style.backgroundColor = "green";
        currentScore++;
    } else if (questionSeven === wrongArray[6]) {
        radioBackground[13].style.backgroundColor = "red";
    } else {
        errorMessage.innerHTML = "Error message:Q7: please contact support at wiri@hotmail.se";
    }

    if (questionEight === answerArray[7]) {
        radioBackground[14].style.backgroundColor = "green";
        currentScore++;
    } else if (questionEight === wrongArray[7]) {
        radioBackground[15].style.backgroundColor = "red";
    } else {
        errorMessage.innerHTML = "Error message:Q8: please contact support at wiri@hotmail.se";
    }

    if (questionNine === answerArray[8]) {
        radioBackground[17].style.backgroundColor = "green";
        currentScore++;
    } else if (questionNine === wrongArray[8]) {
        radioBackground[16].style.backgroundColor = "red";
    } else {
        errorMessage.innerHTML = "Error message:Q9: please contact support at wiri@hotmail.se";
    }

}

/**
 *  After clicking submit button hides the button inside the quizform
 */
showAllAnswers.addEventListener('click', showEverything);

function showEverything() {
    'use strict';
    for (let i = 0; i < allSection.length; i++) {

        allSection[i].style.display = "block";
    }

    submitButton.style.display = "none";
    previousButton.style.display = "none";
    nextButton.style.display = "none";
    showQuiz.style.display = "block";

}
/**
 * After clicking submit button hideing header and intro rules and displaying a message with your name and score. Also displaying an image depanding on how many right answers you get.
 */
submitButton.addEventListener('click', showSubmitArea);

function showSubmitArea() {
    'use strict';
    alert('You have submitted the quiz')
    let introHeading = document.getElementById('intro-heading');
    let introRules = document.getElementById('intro-rules');
    let submitArea = document.getElementById('submit-area');
    introRules.style.display = "none";
    introHeading.style.display = "none";
    showQuiz.style.display = "none";
    submitArea.style.display = "block";

    let showallscore = `Quiz completed, ${userName.innerHTML} you answered right on ${currentScore}` +
        ` questions out of 9. You have deserved this award below, click show answers to view how you answered or restart to play again`;
    console.log(showallscore);
    document.getElementById('answer-score').innerHTML = showallscore;
    // if statements that displays images in array based on score from increment
    let imageScore = document.getElementById('image-score');
    if (currentScore <= 4) {
        imageScore.src = imageArray[2];
    } else if (currentScore === 5) {
        imageScore.src = imageArray[1];
    } else {
        imageScore.src = imageArray[0];
    }

}
/**
 * After clicking the reset button the quiz runs from the beginning
 */
restartButton.addEventListener('click', restartGame);

function restartGame() {
    'use strict';
    restartButton = location.reload();
}