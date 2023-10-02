let game = document.getElementById('game');
let playerOne = document.getElementById('player-1-name');
let playerTwo = document.getElementById('player-2-name');
let turn = document.getElementById('turn');

let playerOneName = null;
let playerTwoName = null;

document.addEventListener("DOMContentLoaded", function () {
    game.hidden = true
    playerTwo.hidden = true
    turn.hidden = true
    playerOne.focus();

    playerOne.addEventListener('keypress', e => {
        if (e.code == 'Enter') {
            playerOneName = playerOne.value.toUpperCase();
            playerOne.hidden = true;
            playerTwo.hidden = false;
            playerTwo.focus();
        }
    })

    playerTwo.addEventListener('keypress', e => {
        if (e.code == 'Enter') {
            playerTwoName = playerTwo.value.toUpperCase();
            playerTwo.hidden = true;
            game.hidden = false;
            turn.hidden = false;
            turn.innerHTML = playerOneName + "'S TURN!!"
        }
    })
});

let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');

