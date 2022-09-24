const userChoiceDisplay = document.getElementById('userChoiceDisplay');
const compChoiceDisplay = document.getElementById('computeres-choice');
const resultDisplay= document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let compChoice;
let result;


const choices = ['Rock', 'Papper', 'Scissors']


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', function(e) {
    userChoice = e.target.id;
  
  userChoiceDisplay.innerHTML = userChoice;
  getComputerchoice();

 getResult();
  
}))
  

function getComputerchoice(){
    compChoice = choices[Math.floor(Math.random() * choices.length)];
    compChoiceDisplay.innerHTML = compChoice;

}

function getResult(){
 if (userChoice === compChoice){
     result = "It's a Draw!"
 }
 if(userChoice === 'Rock' && compChoice === 'Scissors'|| userChoice=== 'Papper' && compChoice === 'Rock' || userChoice === 'Scissors' && compChoice === 'Papper'){
     result = "You Win!"
 }
 if(userChoice === 'Scissors' && compChoice === 'Rock'|| userChoice === 'Rock' && compChoice === 'Papper' || userChoice === 'Papper' && compChoice === 'Scissors' ) {
    result = "You Lose!"
}

 resultDisplay.innerHTML = result;
}