let game = document.getElementById('game');
let playerOne = document.getElementById('player-1-name');
let playerTwo = document.getElementById('player-2-name');
let turn = document.getElementById('turn');
let gameBody = document.getElementById('game-body')

let playerOneName = null;
let playerTwoName = null;

document.addEventListener("DOMContentLoaded", function () {
    game.hidden = true
    playerTwo.hidden = true
    // turn.hidden = true
    playerOne.focus();
    let nextBtn = document.getElementById('next');

    playerOne.addEventListener('keypress', e => {
        if (e.code == 'Enter') {
            playerOneName = playerOne.value.toUpperCase();
            playerOne.hidden = true;
            playerTwo.hidden = false;
            playerTwo.focus();
        }
    })

    nextBtn.addEventListener('click', e => {
        playerOneName = playerOne.value.toUpperCase();
        playerOne.hidden = true;
        playerTwo.hidden = false;
        playerTwo.focus();
    })

    playerTwo.addEventListener('keypress', e => {
        if (e.code == 'Enter') {
            playerTwoName = playerTwo.value.toUpperCase();
            playerTwo.hidden = true;
            game.hidden = false;
            turn.hidden = false;
            turn.id = 'p1'
            turn.innerHTML = playerOneName + "'S TURN (❌)"
        }
        nextBtn.addEventListener('click', e => {
            playerTwoName = playerTwo.value.toUpperCase();
            playerTwo.hidden = true;
            game.hidden = false;
            turn.hidden = false;
            turn.id = 'p1'
            turn.innerHTML = playerOneName + "'S TURN (❌)"
            nextBtn.hidden = true;
        })
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

let gameOver = 0;

one.addEventListener('click', e => {
    if (turn.id == 'p1') {
        one.innerText = '❌'
        one.classList = 'p-4 text-primary';
        turn.id = 'p2'
        turn.innerHTML = playerTwoName + "'S TURN (🟢)"

    } else {
        one.innerText = '🟢'
        one.classList = 'p-4 text-info';
        turn.id = 'p1'
        turn.innerHTML = playerOneName + "'S TURN (❌)"
    }
    if ((one.innerText == two.innerText) && (one.innerText == three.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((one.innerText == four.innerText) && (one.innerText == seven.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((one.innerText == five.innerText) && (one.innerText == nine.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    gameOver += 1
    if (gameOver == 9) {
        turn.innerHTML = "Game over, It's A TIE"
    }
})
two.addEventListener('click', e => {
    if (turn.id == 'p1') {
        two.innerText = '❌'
        two.classList = 'p-4 text-primary';
        turn.id = 'p2'
        turn.innerHTML = playerTwoName + "'S TURN (🟢)"
    } else {
        two.innerText = '🟢'
        two.classList = 'p-4 text-info';
        turn.id = 'p1'
        turn.innerHTML = playerOneName + "'S TURN (❌)"
    }
    if ((two.innerText == five.innerText) && (two.innerText == eight.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((two.innerText == one.innerText) && (two.innerText == three.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    gameOver += 1
    if (gameOver == 9) {
        turn.innerHTML = "Game over, It's A TIE"
    }
})
three.addEventListener('click', e => {
    if (turn.id == 'p1') {
        three.innerText = '❌'
        three.classList = 'p-4 text-primary';
        turn.id = 'p2'
        turn.innerHTML = playerTwoName + "'S TURN (🟢)"
    } else {
        three.innerText = '🟢'
        three.classList = 'p-4 text-info';
        turn.id = 'p1'
        turn.innerHTML = playerOneName + "'S TURN (❌)"
    }
    if ((three.innerText == two.innerText) && (three.innerText == one.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((three.innerText == six.innerText) && (three.innerText == nine.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((three.innerText == five.innerText) && (three.innerText == seven.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    gameOver += 1
    if (gameOver == 9) {
        turn.innerHTML = "Game over, It's A TIE"
    }
})
four.addEventListener('click', e => {
    if (turn.id == 'p1') {
        four.innerText = '❌'
        four.classList = 'p-4 text-primary';
        turn.id = 'p2'
        turn.innerHTML = playerTwoName + "'S TURN (🟢)"
    } else {
        four.innerText = '🟢'
        four.classList = 'p-4 text-info';
        turn.id = 'p1'
        turn.innerHTML = playerOneName + "'S TURN (❌)"
    }
    if ((four.innerText == one.innerText) && (four.innerText == seven.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((four.innerText == five.innerText) && (four.innerText == six.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    gameOver += 1
    if (gameOver == 9) {
        turn.innerHTML = "Game over, It's A TIE"
    }
})
five.addEventListener('click', e => {
    if (turn.id == 'p1') {
        five.innerText = '❌'
        five.classList = 'p-4 text-primary';
        turn.id = 'p2'
        turn.innerHTML = playerTwoName + "'S TURN (🟢)"
    } else {
        five.innerText = '🟢'
        five.classList = 'p-4 text-info';
        turn.id = 'p1'
        turn.innerHTML = playerOneName + "'S TURN (❌)"
    }
    if ((five.innerText == one.innerText) && (five.innerText == nine.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((five.innerText == three.innerText) && (five.innerText == seven.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((five.innerText == two.innerText) && (five.innerText == eight.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((five.innerText == four.innerText) && (five.innerText == six.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    gameOver += 1
    if (gameOver == 9) {
        turn.innerHTML = "Game over, It's A TIE"
    }
})
six.addEventListener('click', e => {
    if (turn.id == 'p1') {
        six.innerText = '❌'
        six.classList = 'p-4 text-primary';
        turn.id = 'p2'
        turn.innerHTML = playerTwoName + "'S TURN (🟢)"
    } else {
        six.innerText = '🟢'
        six.classList = 'p-4 text-info';
        turn.id = 'p1'
        turn.innerHTML = playerOneName + "'S TURN (❌)"
    }
    if ((six.innerText == three.innerText) && (six.innerText == nine.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((six.innerText == four.innerText) && (six.innerText == five.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    gameOver += 1
    if (gameOver == 9) {
        turn.innerHTML = "Game over, It's A TIE"
    }
})
seven.addEventListener('click', e => {
    if (turn.id == 'p1') {
        seven.innerText = '❌'
        seven.classList = 'p-4 text-primary';
        turn.id = 'p2'
        turn.innerHTML = playerTwoName + "'S TURN (🟢)"
    } else {
        seven.innerText = '🟢'
        seven.classList = 'p-4 text-info';
        turn.id = 'p1'
        turn.innerHTML = playerOneName + "'S TURN (❌)"
    }
    if ((seven.innerText == four.innerText) && (seven.innerText == one.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((seven.innerText == five.innerText) && (seven.innerText == three.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((seven.innerText == eight.innerText) && (seven.innerText == nine.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    gameOver += 1
    if (gameOver == 9) {
        turn.innerHTML = "Game over, It's A TIE"
    }
})
eight.addEventListener('click', e => {
    if (turn.id == 'p1') {
        eight.innerText = '❌'
        eight.classList = 'p-4 text-primary';
        turn.id = 'p2'
        turn.innerHTML = playerTwoName + "'S TURN (🟢)"
    } else {
        eight.innerText = '🟢'
        eight.classList = 'p-4 text-info';
        turn.id = 'p1'
        turn.innerHTML = playerOneName + "'S TURN (❌)"
    }
    if ((eight.innerText == seven.innerText) && (eight.innerText == nine.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((eight.innerText == two.innerText) && (eight.innerText == five.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    gameOver += 1
    if (gameOver == 9) {
        turn.innerHTML = "Game over, It's A TIE"
    }
})
nine.addEventListener('click', e => {
    if (turn.id == 'p1') {
        nine.innerText = '❌'
        nine.classList = 'p-4 text-primary';
        turn.id = 'p2'
        turn.innerHTML = playerTwoName + "'S TURN (🟢)"
    } else {
        nine.innerText = '🟢'
        nine.classList = 'p-4 text-info';
        turn.id = 'p1'
        turn.innerHTML = playerOneName + "'S TURN (❌)"
    }
    if ((nine.innerText == one.innerText) && (nine.innerText == five.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((nine.innerText == three.innerText) && (nine.innerText == six.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    if ((nine.innerText == seven.innerText) && (nine.innerText == eight.innerText)) {
        if (turn.id == 'p1') {
            turn.innerHTML = playerTwoName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        } else {
            turn.innerHTML = playerOneName + ' WON 💥💥'
            gameBody.classList = 'card-body game-body'
        }
        gameOver -= 1
    }
    gameOver += 1
    if (gameOver == 9) {
        turn.innerHTML = "Game over, It's A TIE"
    }
})

