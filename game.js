var diceNumber;
var add =0;
var add2=0;
var index =1;
var index2=0;
var scoreOne=0;
var scoreTwo =0;

const diceButtonElement = document.getElementById('dice');
let imageOfDice = document.getElementById('image-of-dice');
let currentScoreOfPlayerOne = document.getElementById('current--0');
let currentScoreOfPlayerTwo = document.getElementById('current--1');
let PlayerOne = document.getElementById('player--1');
let PlayerTwo = document.getElementById('player--2')
const holdButtonElement = document.getElementById('hold');
let scoreOfPlayerOne =document.getElementById('score--0');
let scoreOfPlayerTwo = document.getElementById('score--1')
const newGameButton = document.getElementById('new--game');


diceButtonElement.addEventListener('click', rollDice);
holdButtonElement.addEventListener('click', holdScore);
newGameButton.addEventListener('click', newGame);


PlayerOne.classList.add('player--active');
function rollDice(){


diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

var images = ["../images/dice-1.png","../images/dice-2.png",
"../images/dice-3.png","../images/dice-4.png",
"../images/dice-5.png","../images/dice-6.png"];

if(diceNumber == 1)
{
    imageOfDice.src = images[0];
} else if (diceNumber == 2) {
    imageOfDice.src = images[1];
} else if (diceNumber== 3){
    imageOfDice.src = images[2];
}
else if (diceNumber== 4){
    imageOfDice.src = images[3];0
}
else if (diceNumber == 5){
    imageOfDice.src = images[4];
}
else{
    imageOfDice.src = images[5];
}

if(diceNumber == 1)
{
    index =index + 3;
    diceNumber =0;
    add = 0;
    add2 =0;
   
 }

if((index%2!=0) && (diceNumber!=1)){ //player one
    index2 =0;
    add = add + diceNumber;
 
    //console.log(add);
    currentScoreOfPlayerOne.textContent = add;
    currentScoreOfPlayerTwo.textContent = 0;

    
    PlayerTwo.classList.remove('player--active');
    PlayerOne.classList.add('player--active'); 
 
}

else if ((index%2==0) && (diceNumber!=1))
{ //player two
    index2 =1;

    PlayerTwo.classList.add('player--active');
    PlayerOne.classList.remove('player--active');
  
        add2 = add2 + diceNumber;
        currentScoreOfPlayerOne.textContent = 0;
        currentScoreOfPlayerTwo.textContent = add2; 
        
}
}

function holdScore(){

   index2 = index2 + 3;
  

   if (index2%2!=0)
   {//player one
  
    index = 0;

    scoreOne= scoreOne + add;
    scoreOfPlayerOne.textContent =scoreOne;
   
    currentScoreOfPlayerOne.textContent = add;
    
    PlayerTwo.classList.add('player--active');
    PlayerOne.classList.remove('player--active');

    currentScoreOfPlayerOne.textContent = 0; 
    add = 0;

}

else if(index2%2==0){//player two
    
    index = 1;

    scoreTwo =scoreTwo + add2;
    
    scoreOfPlayerTwo.textContent = scoreTwo;
    currentScoreOfPlayerTwo.textContent = add2; 
    
    PlayerTwo.classList.remove('player--active');
    PlayerOne.classList.add('player--active');

    currentScoreOfPlayerTwo.textContent = 0;
    add2 =0;
 
}

if (scoreOne >= 100) {

    PlayerOne.classList.add('player--winner');
   
    PlayerOne.style.display = '.player--winner .name';

} else if(scoreTwo >= 100) {
    PlayerTwo.classList.add('player--winner');
    PlayerTwo.style.display = '.player--winner .name';
}

}

function newGame(){

    imageOfDice.src = '';

    PlayerTwo.classList.remove('player--active');
    PlayerOne.classList.add('player--active');

    PlayerTwo.classList.remove('player--winner');
    PlayerOne.classList.remove('player--winner');
   
   
 add =0;
 add2=0;
 index =1;
 index2=0;
 scoreOne=0;
 scoreTwo =0;

    scoreOfPlayerOne.textContent =0;
    scoreOfPlayerTwo.textContent =0;
    currentScoreOfPlayerOne.textContent = 0;
    currentScoreOfPlayerTwo.textContent = 0;

}




