const restartButton = document.getElementById('restartButton');
const restartOutPut = document.getElementById('restart-order');
const cancelButton = document.getElementById('cancelButton');
const restartButtonClick = document.getElementById('restartButtonClick');
const playerWonOutPut = document.getElementById("won-result");
const winnersNumber = document.getElementById("which-player-won");
const winnersLogo = document.getElementById("players-logo");
const takesRoundText = document.getElementById("takesRoundText");
const quitButton = document.getElementsByClassName("quit-button");
const nextRoundButton = document.getElementsByClassName("next-round-button");
const tiedRound = document.getElementById('tiedRound');
const clickBox = document.getElementsByClassName("click-zone");
const scoreOfX = document.getElementById("xPlayer");
const scoreOfO = document.getElementById("tie");
const scoreOfTie = document.getElementById("oPlayer");
const xImage = document.getElementById('xImage');
const oImage = document.getElementById('oImage');
let indexOfX =[];
let indexOfO = [];
let checkX = false;
let checkO = false;
let winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] ;
n = -1;


function winner(){
    if(checkX){
        winnersNumber.innerHTML = "PLAYER 1 WINS!"
        winnersLogo.src="./assets/icon-x.svg";
        takesRoundText.style.color="#31C3BD";
        playerWonOutPut.style.display = 'block';
    }
    if(checkO){
      winnersNumber.innerHTML = "PLAYER 2 WINS!"
      winnersLogo.src="./assets/icon-o.svg";
      takesRoundText.style.color="#F2B137";
      playerWonOutPut.style.display = 'block';
    }
    if(n===8&&!checkO&&!checkX){
        tiedRound.style.display = 'block';
    }
 }
 function addCharacter(event) {
    n++;
    if (n % 2 === 0) {
        const character = document.createElement("img");
        character.src = "./assets/icon-x.svg";
        event.target.appendChild(character);
        xImage.style.display = "none";
        oImage.style.display = "block";
        indexOfX.push(Number(event.target.getAttribute('index')));
        winCondition.map((combination)=>{
            if(!checkX){
                checkX = combination.every((number)=>{
                return indexOfX.includes(number)
                })      
                
            } 
        })  
    } else {
        const character = document.createElement("img");
        character.src = "./assets/icon-o.svg";
        event.target.appendChild(character);
        xImage.style.display = "block";
        oImage.style.display = "none";
        indexOfO.push(Number(event.target.getAttribute('index')));
        winCondition.map((combination)=>{
            if(!checkO){
                checkO = combination.every((number)=>{
                return indexOfO.includes(number)
                })      
            } 
        })
    }
        
    event.target.removeEventListener('click', addCharacter);
    winner();
}


for (var i = 0; i<clickBox.length; i++){
    clickBox[i].addEventListener("click",addCharacter)
}

restartButton.addEventListener("click", (event)=>{
    restartOutPut.style.display = 'block';
})

cancelButton.addEventListener('click',(event)=>{
    restartOutPut.style.display = 'none';
})

restartButtonClick.addEventListener('click',(event)=>{
    for (var i = 0; i < clickBox.length; i++){
        if(clickBox[i].hasChildNodes()){
        clickBox[i].removeChild(clickBox[i].firstChild)
        }
    }
    for (var i = 0; i<clickBox.length; i++){
        clickBox[i].addEventListener("click",addCharacter)
    }
    restartOutPut.style.display = 'none';
    n = -1;
    xImage.style.display ="block";
    oImage.style.display ="none"; 
    indexOfX.splice(0,5);
    indexOfO.splice(0,5);
})

for(let i = 0; i<nextRoundButton.length; i++){
    nextRoundButton[i].addEventListener("click" ,(event)=>{
        playerWonOutPut.style.display = 'none';
        tiedRound.style.display = 'none';
        for (var i = 0; i < clickBox.length; i++){
            if(clickBox[i].hasChildNodes()){
            clickBox[i].removeChild(clickBox[i].firstChild)
            }
        }
        for (var i = 0; i<clickBox.length; i++){
            clickBox[i].addEventListener("click",addCharacter)
        }
        xImage.style.display ="block";
        oImage.style.display ="none"; 
        n = -1;
        indexOfX.splice(0,5);
        indexOfO.splice(0,5);
        checkX = false;
        checkO = false;
    })
}