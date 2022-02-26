// this game is designed by Adexterity

var score, activePlayer, currentScore, dice1, dice2, gamePlaying;
// dice1=Math.floor(Math.random() * 6) + 1;
// dice2=Math.floor(Math.random() * 6) + 1;
var diceDom1= document.getElementById("dice1");
var diceDom2= document.getElementById("dice2");
init();
var prev;

//the roll button
document.querySelector(".roll").addEventListener('click', function(){
    
    if(gamePlaying){
            //display the dice
        diceDom1.style.display="block";
        diceDom2.style.display="block";
        dice1=Math.floor(Math.random() * 6) + 1;
        dice2=Math.floor(Math.random() * 6) + 1;
        diceDom1.src= "dice-" + dice1 + ".png";
        diceDom2.src= "dice-" + dice2 + ".png";

        if( dice1 !== 1 && dice2 !== 1 ){
            currentScore += dice1 + dice2;
            document.querySelector(".current--" + activePlayer).textContent=currentScore;
        }else{
            nextPlayer();
        }
        
    }
    
})

//setup the hold button
document.querySelector(".hold").addEventListener('click', function(){
    if(gamePlaying){
        //add currentscore to total score
        score [activePlayer] += currentScore;
        document.querySelector(".score--" + activePlayer).textContent = score[activePlayer];
        //check for winner
        var input= document.querySelector("#win-score").value;
        var winningScore;
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        }
        if( score[activePlayer] >= winningScore){
            document.querySelector(".player--" + activePlayer).textContent= "WINNER";
            //add winner class
            document.querySelector(".player" + activePlayer).classList.add('winner');
            //remove the active class
            document.querySelector(".player0").classList.remove("active");
            document.querySelector(".player1").classList.remove("active");
            gamePlaying=false;

        }else{

            //next player
            nextPlayer();
        } 
    }
    

})

document.querySelector(".reset").addEventListener('click', init);


function init(){
    score= [0,0];
    activePlayer= 0;
    currentScore=0;
    //reset all scores in the dom
    document.querySelector(".score--0").textContent=0;
    document.querySelector(".score--1").textContent=0;
    document.querySelector(".current--0").textContent=0;
    document.querySelector(".current--1").textContent=0;
    document.querySelector(".player0").classList.remove("active");
    document.querySelector(".player1").classList.remove("active");
    document.querySelector(".player0").classList.add("active");
    document.querySelector(".player0").classList.remove('winner');
    document.querySelector(".player1").classList.remove('winner');
    document.querySelector(".player--0").textContent= "player 1";
    document.querySelector(".player--1").textContent= "player 2";
    //hide the dice
    diceDom1.style.display="none";
    diceDom2.style.display="none";
    gamePlaying=true;

    alert("welcome to pig game");
}


function nextPlayer(){
     //next player
     diceDom1.style.display="none";
     diceDom2.style.display="none";
     activePlayer === 0? activePlayer = 1: activePlayer = 0;
     currentScore = 0;
     document.querySelector(".current--0").textContent=0;
     document.querySelector(".current--1").textContent=0;
     //change active class
     document.querySelector(".player0").classList.toggle("active");
     document.querySelector(".player1").classList.toggle("active");
}