'use strict';

function init(){
    scores = [0, 0];
    rooundScore = 0;
    activePlayer =  0;
    
    document.querySelector('.dice').style.display= 'none';
    
    document.getElementById('score--0').textContent =  '0';
    document.getElementById('score--1').textContent =  '0';
    document.getElementById('current--0').textContent =  '0';
    document.getElementById('current--1').textContent =  '0';
    }
    


var scores, rooundScore, activePlayer;

init(); 



document.querySelector('#roll-dice').addEventListener('click', function(){ 
    // random number
    var dice =   Math.floor(Math.random()*6)+1;
    //display the result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //update the round score if the rolled number was not a 1
    if( dice !== 1){
        rooundScore += dice;
        document.querySelector('#current--'+ activePlayer).textContent = rooundScore;
        }else{
            nextPlayer();
        }
    document.querySelector('.btn--hold').addEventListener('click', function(){
    // add current score to global socore and hold it
    scores[activePlayer]  += rooundScore;
    document.querySelector('#score--'+ activePlayer).textContent = scores[activePlayer];
    console.log(scores[activePlayer]);
    //check id the paleyr won the game 
    if(scores[activePlayer] >= 20){

        document.querySelector('#name--'+ activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).add('winner');
        document.querySelector('.player--' + activePlayer).remove('winner');
        


    }else{
        nextPlayer();
    }

    //next player
    nextPlayer();
    });
    document.querySelector('#btn_new').addEventListener('click', init());
});


function nextPlayer(){
        //next palyer
        activePlayer === 0? activePlayer = 1 : activePlayer = 0;
        // this means if active player === 0  then active player  = 1 else activePlayer  should be 0;
        rooundScore = 0;   

        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display  = 'none';

        // document.querySelector('.player--0').classList.remove('player--active');++
        // document.querySelector('.player--1').classList.add('player--active');
}

