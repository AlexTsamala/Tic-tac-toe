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
const xImage = document.getElementById('xImage');
const oImage = document.getElementById('oImage');
const xPlayersNumber = document.getElementById('xPlayersNumber');
const oPlayersNumber= document.getElementById('oPlayersNumber');
const tieGame = document.getElementById('tie');
const newGameContainer = document.getElementById('newGameContainer');
const multiplayerContainer = document.getElementById('multiplayerContainer');
const chooseXPlayer = document.getElementById('chooseXPlayer');
const chooseOPlayer = document.getElementById('chooseOPlayer');
const xPlayer = document.getElementById('xPlayer');
const oPlayer = document.getElementById('oPlayer');
const playerButton = document.getElementById('playerButton');
let indexOfX =[];
let indexOfO = [];
let checkX = false;
let checkO = false;
let winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let winCombination;
n = -1;
x=0;
o=0;
tie=0;


function winner(){
    if(checkX){
        winnersLogo.src="./assets/icon-x.svg";
        takesRoundText.style.color="#31C3BD";
        playerWonOutPut.style.display = 'block';
        x++;
        xPlayersNumber.textContent=x;
        if(xPlayer.textContent==="X (P2)"){
            winnersNumber.innerHTML = "PLAYER 2 WINS!"
        }
    }
    if(checkO){
      winnersLogo.src="./assets/icon-o.svg";
      takesRoundText.style.color="#F2B137";
      playerWonOutPut.style.display = 'block';
      o++;
      oPlayersNumber.textContent=o;
      if(oPlayer.textContent==="O (P1)"){
        winnersNumber.innerHTML = "PLAYER 1 WINS!"
    }

    if(oPlayer.textContent==="O (P2)"){
        winnersNumber.innerHTML = "PLAYER 2 WINS!"
    }
    
    }
    if(n===8&&!checkO&&!checkX){
        tiedRound.style.display = 'block';
        tie++;
        tieGame.textContent=tie;
    }
 }

 function removeOutLine(event){
    event.target.removeChild(event.target.firstChild)
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
                checkX = combination.every((number)=> indexOfX.includes(number));
                if(checkX){
                    combination.map((winnerCombination)=>{
                        clickBox[winnerCombination].style.backgroundColor = '#31C3BD';
                        clickBox[winnerCombination].firstChild.src ="./assets/icon-of-winner-x.svg";
                    })
                }
            } 
        })
        winCombination=indexOfX;
    } else {
        const character = document.createElement("img");
        character.src = "./assets/icon-o.svg";
        event.target.appendChild(character);
        xImage.style.display = "block";
        oImage.style.display = "none";
        indexOfO.push(Number(event.target.getAttribute('index')));
        winCondition.map((combination)=>{
            if(!checkO){
                checkO = combination.every((number)=>indexOfO.includes(number));
                if(checkO){
                combination.map((winnerCombination)=>{
                    clickBox[winnerCombination].style.backgroundColor = '#F2B137';
                    clickBox[winnerCombination].firstChild.src ="./assets/icon-of-winner-o.svg";
                })
            }
            } 
        })
    }
        
    event.target.removeEventListener('click', addCharacter);
    event.target.removeEventListener('mouseover',removeOutLine);
    winner();
}

for (var i = 0; i<clickBox.length; i++){
    clickBox[i].addEventListener("click",addCharacter);
        
        clickBox[i].addEventListener("mouseover",(event)=>{
            const outLine = document.createElement("img");
            outLine.src = "./assets/icon-x-outline.svg";
            event.target.appendChild(outLine);
        })
        clickBox[i].addEventListener( 'mouseout',(removeOutLine))
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
        clickBox[i].addEventListener("click",addCharacter);
        clickBox[i].style.backgroundColor = "#1F3641";
    }
    restartOutPut.style.display = 'none';
    n = -1;
    xImage.style.display ="block";
    oImage.style.display ="none"; 
    indexOfX.splice(0,5);
    indexOfO.splice(0,5);
    xPlayersNumber.textContent=0;
    oPlayersNumber.textContent=0;
    tieGame.textContent=0;
    x=0;
    o=0;
    tie=0;
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
            clickBox[i].addEventListener("click",addCharacter);
            clickBox[i].style.backgroundColor = "#1F3641";
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

for(let i = 0; i<quitButton.length; i++){
    quitButton[i].addEventListener('click',(event)=>{
        newGameContainer.style.display = 'flex';
        multiplayerContainer.style.display = 'none';
        playerWonOutPut.style.display = 'none';
        tiedRound.style.display = 'none';
        n = -1;
        indexOfX.splice(0,5);
        indexOfO.splice(0,5);
        checkX = false;
        checkO = false;
        xPlayersNumber.textContent=0;
        oPlayersNumber.textContent=0;
        tieGame.textContent=0;
        x=0;
        o=0;
        tie=0;
        for (var i = 0; i < clickBox.length; i++){
            if(clickBox[i].hasChildNodes()){
            clickBox[i].removeChild(clickBox[i].firstChild)
            }
        }
        for (var i = 0; i<clickBox.length; i++){
            clickBox[i].addEventListener("click",addCharacter);
            clickBox[i].style.backgroundColor = "#1F3641";
        }
    })
}

chooseXPlayer.addEventListener('click',(event)=>{
    xPlayer.innerHTML = 'X (P1)';
    oPlayer.innerHTML = 'O (P2)';
    if(checkX){
        winnersNumber.innerHTML = "PLAYER 1 WINS!"
    }
    if(checkO){
        winnersNumber.innerHTML = "PLAYER 2 WINS!"
    }
    playerButton.addEventListener('click',(event)=>{
        newGameContainer.style.display = 'none';
        multiplayerContainer.style.display = 'block';
    })
    
})

chooseOPlayer.addEventListener('click',(event)=>{
    xPlayer.innerHTML = 'X (P2)';
    oPlayer.innerHTML = 'O (P1)';
    if(checkX){
        winnersNumber.innerHTML = "PLAYER 2 WINS!"
    }
    if(checkO){
        winnersNumber.innerHTML = "PLAYER 1 WINS!"
    }
    playerButton.addEventListener('click',(event)=>{
        newGameContainer.style.display = 'none';
        multiplayerContainer.style.display = 'block';
    })
})

