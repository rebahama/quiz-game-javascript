//variabels to access the id in the html file.
let  showQuiz=document.getElementById('quiz-form');
let  showPlay=document.getElementById('play-btn');
let  showFlex=document.getElementById('flex-container-1');
let  nextButton=document.getElementById('next-area-btn');
let  previousButton=document.getElementById('previous-area-btn');
let  firstArea=document.getElementById('next-area-1');
let  secondArea=document.getElementById('next-area-2');
let  thirdArea=document.getElementById('next-area-3');


const allSection = [firstArea,secondArea,thirdArea]



nextButton.addEventListener('click', function nextSection(){
for (let i=0; i< allSection.length; i++){

if(allSection[0].style.display="block"){
    allSection[1].style.display="block"
    allSection[0].style.display="none"

    
}

allSection[2].style.display="block"
allSection[1].style.display="block"
allSection[2].style.display="none"







}

})



const  answerArray=["Barack Obama", "4","Nordic sea"] 
// display the id when clicking the variabe and hideing the div.
// if statment for when the field is empty 
showPlay.addEventListener('click', function showArea() {

   
    let  emptyField=document.getElementById('input-name').value
    if  (emptyField==""){
        alert('Please write a username before clicking play')
        return false}
    else if (emptyField){
        
        showQuiz.style.display="block";
        showFlex.style.display="none";
        
    }
  

})
// when clicking the showplay variable and reciveInput variable takes value from the input-name and injects it into the user-name id with a click.
showPlay.addEventListener('click', function reciveUsername() {


  let reciveInput=document.getElementById('input-name').value
  document.getElementById('user-name').innerHTML=reciveInput;

})

// function for recieving the values from html radio button and checking if the answers are correct with the array index. If it is correct then it will increment.
function answerScore(){


    let question1=document.quiz.question1.value;
    let question2=document.quiz.question2.value;
    let question4=document.quiz.question4.value;
    let currentScore=0

    if(question1===answerArray[0]){
        currentScore++;
    }
    if(question2===answerArray[1]){
        currentScore++;
    }
    if(question4===answerArray[2]){
        currentScore++;
    }

    console.log(currentScore)


}










