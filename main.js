const btn11 = document.getElementById("btn11")
const btn12 = document.getElementById("btn12")
const btn13 = document.getElementById("btn13")
const btn21 = document.getElementById("btn21")
const btn22 = document.getElementById("btn22")
const btn23 = document.getElementById("btn23")
const btn31 = document.getElementById("btn31")
const btn32 = document.getElementById("btn32")
const btn33 = document.getElementById("btn33")
let isXTurn = true;
let remaining = 9

const onClick11 = function() {
    if (isXTurn){
        btn11.textContent = 'X'
    }else{
        btn11.textContent = 'O'
    }
    isXTurn = !isXTurn
    btn11.disabled = true
    remaining-=1
    checkWinner()
    changeh2()
}
const onClick12 = function() {
    if (isXTurn){
        btn12.textContent = 'X'
    }else{
        btn12.textContent = 'O'
    }
    isXTurn = !isXTurn
    btn12.disabled = true
    remaining-=1
    checkWinner()
    changeh2()
}
const onClick13 = function() {
    if (isXTurn){
        btn13.textContent = 'X'
    }else{
        btn13.textContent = 'O'
    }
    isXTurn = !isXTurn
    btn13.disabled = true
    remaining-=1
    checkWinner()
    changeh2()
}
const onClick21 = function() {
    if (isXTurn){
        btn21.textContent = 'X'
    }else{
        btn21.textContent = 'O'
    }
    isXTurn = !isXTurn
    btn21.disabled = true
    remaining-=1
    checkWinner()
    changeh2()
}
const onClick22 = function() {
    if (isXTurn){
        btn22.textContent = 'X'
    }else{
        btn22.textContent = 'O'
    }
    isXTurn = !isXTurn
    btn22.disabled = true
    remaining-=1
    checkWinner()
    changeh2()
}
const onClick23 = function() {
    if (isXTurn){
        btn23.textContent = 'X'
    }else{
        btn23.textContent = 'O'
    }
    isXTurn = !isXTurn
    btn23.disabled = true
    remaining-=1
    checkWinner()
    changeh2()
}
const onClick31 = function() {
    if (isXTurn){
        btn31.textContent = 'X'
    }else{
        btn31.textContent = 'O'
    }
    isXTurn = !isXTurn
    btn31.disabled = true
    remaining-=1
    checkWinner()
    changeh2()
}
const onClick32 = function() {
    if (isXTurn){
        btn32.textContent = 'X'
    }else{
        btn32.textContent = 'O'
    }
    isXTurn = !isXTurn
    btn32.disabled = true
    remaining-=1
    checkWinner()
    changeh2()
}
const onClick33 = function() {
    if (isXTurn){
        btn33.textContent = 'X'
    }else{
        btn33.textContent = 'O'
    }
    isXTurn = !isXTurn
    btn33.disabled = true
    remaining-=1
    checkWinner()
    changeh2()
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

const returnDefault = function(){
    btn11.textContent = ''
    btn11.disabled = false
    btn12.textContent = ''
    btn12.disabled = false
    btn13.textContent = ''
    btn13.disabled = false
    btn21.textContent = ''
    btn21.disabled = false
    btn22.textContent = ''
    btn22.disabled = false
    btn23.textContent = ''
    btn23.disabled = false
    btn31.textContent = ''
    btn31.disabled = false
    btn32.textContent = ''
    btn32.disabled = false
    btn33.textContent = ''
    btn33.disabled = false
    isXTurn = true
    remaining = 9
}
const changeh2 = function(){
    if (isXTurn){
    document.getElementById('turn').textContent = 'It is X Turn'
    } else
    document.getElementById('turn').textContent = 'It is O Turn'
}