score = [0,0];
roundScore = 0;
activePlayer = 0;

var btnroll = document.querySelector(".btn-roll");
var dicedom = document.querySelector('.dice');
dicedom.style.display = "none";
var current = document.querySelector(".player-current-score" );

btnroll.addEventListener('click', () =>
{
    var dice = Math.floor(Math.random() * 6)+1;
    // roundScore =+ dice;
    dicedom.src = "dice-" + dice + ".png";
    dicedom.style.display = "block";

    if(dice !== 1)
    {
      roundScore += dice;
      current.textContent = roundScore;
    }
    else
    {
      //current.textContent = 0;
      nextPlayer();
    }
});

function nextPlayer()
{
  activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}
