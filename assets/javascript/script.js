//variabels to acess the id in the html file.
let showQuiz=document.getElementById('quiz-form');
let showPlay=document.getElementById('play-btn');
let showFlex=document.getElementById('flex-container-1');


// display the id when clicking the variabe and hideing the div
showPlay.addEventListener('click', function showArea() {

showQuiz.style.display="block";
showFlex.style.display="none"

})

