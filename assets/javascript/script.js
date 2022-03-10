//variabels to acess the id in the html file.
let showQuiz=document.getElementById('quiz-form');
let showPlay=document.getElementById('play-btn');
let showFlex=document.getElementById('flex-container-1');


// display the id when clicking the variabe and hideing the div.
// if statment for when the field is empty 
showPlay.addEventListener('click', function showArea() {
    let emptyField=document.getElementById('input-name').value
    if(emptyField=="")
    {
        alert('Please write a username before clicking play')
        
        return false

    }
    else if(emptyField){
        showQuiz.style.display="block";
        showFlex.style.display="none";

    }
    
    



})
// when clicking the showplay variale the reciveInput variable takes value from the input-name and injects it into the user-name id with a click.
showPlay.addEventListener('click', function reciveUsername(){
    let reciveInput=document.getElementById('input-name').value
document.getElementById('user-name').innerHTML=reciveInput;

})



