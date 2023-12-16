let isXTurn = true;
let remaining = 9;

const onClick = function(event) {
    const btn = event.target;
    if (btn.textContent === '') {
        btn.textContent = isXTurn ? 'X' : 'O';
        btn.disabled = true;
        isXTurn = !isXTurn;
        remaining -= 1;
        checkWinner();
        changeh2();
    }
};

// Attach event listeners to all buttons
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        const btn = document.getElementById(`btn${i}${j}`);
        btn.addEventListener('click', onClick);
    }
}

const checkWinner = function(){
    if ((btn11.textContent == 'X' || btn11.textContent == 'O') && btn11.textContent == btn12.textContent && btn11.textContent == btn13.textContent){
        alert(`${btn11.textContent} is the Winner`)
        returnDefault()
    }
    if ((btn21.textContent == 'X' || btn21.textContent == 'O') && btn21.textContent == btn22.textContent && btn21.textContent == btn23.textContent){
        alert(`${btn21.textContent} is the Winner`)
        returnDefault()
    }
    if ((btn31.textContent == 'X' || btn31.textContent == 'O') && btn31.textContent == btn32.textContent && btn31.textContent == btn33.textContent){
        alert(`${btn31.textContent} is the Winner`)
        returnDefault()
    }
    if ((btn11.textContent == 'X' || btn11.textContent =='O') && btn11.textContent == btn21.textContent && btn11.textContent == btn31.textContent){
        alert(`${btn11.textContent} is the Winner`)
        returnDefault()
    }
    if ((btn12.textContent == 'X' || btn12.textContent == 'O') && btn12.textContent == btn22.textContent && btn12.textContent == btn32.textContent){
        alert(`${btn12.textContent} is the Winner`)
        returnDefault()
    }
    if ((btn13.textContent == 'X' || btn13.textContent == 'O') && btn13.textContent == btn23.textContent && btn13.textContent == btn33.textContent){
        alert(`${btn13.textContent} is the Winner`)
        returnDefault()
    }
    if ((btn11.textContent == 'X' || btn11.textContent == 'O') && btn11.textContent == btn22.textContent && btn11.textContent == btn33.textContent){
        alert(`${btn11.textContent} is the Winner`)
        returnDefault()
    }
    if ((btn13.textContent == 'X' || btn13.textContent == 'O') && btn13.textContent == btn22.textContent && btn13.textContent == btn31.textContent){
        alert(`${btn13.textContent} is the Winner`)
        returnDefault()
    }
    if (remaining == 0){
        alert('It is a tie this time :)')
        returnDefault()
    }
}

const returnDefault = function() {
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            const btn = document.getElementById(`btn${i}${j}`);
            btn.textContent = '';
            btn.disabled = false;
        }
    }
    isXTurn = true;
    remaining = 9;
};

const changeh2 = function() {
    const turnElement = document.getElementById('turn');
    turnElement.textContent = `It is ${isXTurn ? 'X' : 'O'} Turn`;
};
