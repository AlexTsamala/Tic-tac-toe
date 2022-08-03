'use strict'
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
const computerButton = document.getElementById('cpuButton');
const littleO = document.getElementById('littleO');
const littleX = document.getElementById('littleX');
let indexOfX =[];
let indexOfO = [];
let checkX = false;
let checkO = false;
let winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let n = -1;
let x=0;
let o=0;
let tie=0;
let clickedOnX = false;
let clickedOnO = false;
let clickOnSolo = false;
let clickOnComputer = false;
let clickedOnXSecond = false;
let clickedOnOSecond = false;
function playerGame(){
    newGameContainer.style.display = 'none';
    multiplayerContainer.style.display = 'block';
    clickOnSolo = true;
}

function computerGame(){
    newGameContainer.style.display = 'none';
    multiplayerContainer.style.display = 'block';
    if(clickedOnO){
        xPlayer.innerHTML = 'X (CPU)';
        oPlayer.innerHTML = 'O (YOU)';
    }
    if(clickedOnX){
        xPlayer.innerHTML = 'X (YOU)';
        oPlayer.innerHTML = 'O (CPU)';
    }
    clickOnComputer=true;
}

function winner(){
    if(checkX){
        winnersLogo.src="./assets/icon-x.svg";
        takesRoundText.style.color="#31C3BD";
        playerWonOutPut.style.display = 'block';
        setTimeout(()=>{
            playerWonOutPut.classList.add('transition-Div');
        },100) 
        x++;
        xPlayersNumber.textContent=x;
        if(clickOnSolo){
            clickOnSolo = false;
            if(xPlayer.textContent==="X (P2)"){
                winnersNumber.innerHTML = "PLAYER 2 WINS!"
            }
        }





        if(clickOnComputer){
            if(clickedOnX&checkX){
                clickedOnX = false;
                winnersNumber.innerHTML = "YOU WON!"
                }else{
                winnersNumber.innerHTML = "OH NO, YOU LOST…"
                }
        }




        for(let i = 0; i<clickBox.length; i++){
            clickBox[i].removeEventListener('click', addCharacter);
            clickBox[i].classList.remove("xOutline");
            clickBox[i].classList.remove("oOutline");
        }
    }
    if(checkO){
      winnersLogo.src="./assets/icon-o.svg";
      takesRoundText.style.color="#F2B137";
      playerWonOutPut.style.display = 'block';
      setTimeout(()=>{
        playerWonOutPut.classList.add('transition-Div');
    },100) 
      o++;
      oPlayersNumber.textContent=o;
      if(clickOnSolo){
        if(oPlayer.textContent==="O (P1)"){
            winnersNumber.innerHTML = "PLAYER 1 WINS!"
        }

        if(oPlayer.textContent==="O (P2)"){
            winnersNumber.innerHTML = "PLAYER 2 WINS!"
        }
    }




    if(clickOnComputer){
        if(clickedOnO&checkO){
            clickedOnO = false;
            winnersNumber.innerHTML = "YOU WON!"
            }else{
            winnersNumber.innerHTML = "OH NO, YOU LOST…"
            }
    }





    for(let i = 0; i<clickBox.length; i++){
        clickBox[i].removeEventListener('click', addCharacter);
        clickBox[i].classList.remove("xOutline");
        clickBox[i].classList.remove("oOutline");
    }
    
    }
    if(n===8&&!checkO&&!checkX){
        tiedRound.style.display = 'block';
        setTimeout(()=>{
            tiedRound.classList.add('transition-Div-Tied');
        },100) 
        tie++;
        tieGame.textContent=tie;
    }
 }
function giveOutline(){
    for(let i = 0; i<clickBox.length; i++){
        if(n % 2 ===0) {
            clickBox[i].classList.remove("xOutline");
            clickBox[i].classList.add("oOutline");
        }else{
            clickBox[i].classList.remove("oOutline");
            clickBox[i].classList.add("xOutline"); 
        }
    }
    indexOfX.map((removeOutline)=>{
        clickBox[Number(removeOutline)].classList.remove("oOutline");
        clickBox[Number(removeOutline)].classList.remove("xOutline");
    })
    indexOfO.map((removeOutline)=>{
        clickBox[Number(removeOutline)].classList.remove("oOutline");
        clickBox[Number(removeOutline)].classList.remove("xOutline");
    })
}

 function addCharacter(event) {
    n++;
    giveOutline();
    if (n % 2 === 0) {
        const character = document.createElement("img");
        character.src = "./assets/icon-x.svg";
        event.target.appendChild(character);
        xImage.style.display = "none";
        oImage.style.display = "block";
        event.target.classList.remove("oOutline");
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
    } else {
        const character = document.createElement("img");
        character.src = "./assets/icon-o.svg";
        event.target.appendChild(character);
        xImage.style.display = "block";
        oImage.style.display = "none";
        event.target.classList.remove("xOutline");
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
    winner();
}

for (var i = 0; i<clickBox.length; i++){
    clickBox[i].addEventListener("click",addCharacter);

}

restartButton.addEventListener("click", (event)=>{[]
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
    giveOutline();
    playerWonOutPut.classList.remove('transition-Div');
    tiedRound.classList.remove('transition-Div-Tied') ;
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
        giveOutline();
        playerWonOutPut.classList.remove('transition-Div');
        tiedRound.classList.remove('transition-Div-Tied') ;
        if(clickedOnXSecond){
            clickedOnX = true;
        }
        if(clickedOnOSecond){
            clickedOnO = true;
        }
    })
}

for(let i = 0; i<quitButton.length; i++){
    quitButton[i].addEventListener('click',(event)=>{
        newGameContainer.style.display = '';
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
        playerButton.removeEventListener('click', playerGame);
        computerButton.removeEventListener('click',computerGame);
        chooseXPlayer.style.backgroundColor ="";
        chooseOPlayer.style.backgroundColor ="";
        littleX.src="./assets/xGrey.svg";
        littleO.src="./assets/oGrey.svg";
        xImage.style.display ="block";
        oImage.style.display ="none";
        giveOutline();
        playerWonOutPut.classList.remove('transition-Div');
        tiedRound.classList.remove('transition-Div-Tied') ;
        clickedOnX = false;
        clickedOnO = false;
        clickedOnXSecond = false;
        clickedOnOSecond = false;
    })
}

chooseXPlayer.addEventListener('click',(event)=>{
    xPlayer.innerHTML = 'X (P1)';
    oPlayer.innerHTML = 'O (P2)';
    playerButton.addEventListener('click',playerGame);
    computerButton.addEventListener('click',computerGame);
    chooseXPlayer.style.backgroundColor ="#A8BFC9";
    chooseOPlayer.style.backgroundColor ="";
    littleX.src="./assets/xBlue.svg";
    littleO.src="./assets/oGrey.svg";
    clickedOnX = true;
    clickedOnXSecond = true;
})

chooseOPlayer.addEventListener('click',(event)=>{
    xPlayer.innerHTML = 'X (P2)';
    oPlayer.innerHTML = 'O (P1)';
    playerButton.addEventListener('click',playerGame);
    computerButton.addEventListener('click',computerGame);
    chooseOPlayer.style.backgroundColor ="#A8BFC9";
    chooseXPlayer.style.backgroundColor ="";
    littleO.src="./assets/oBlue.svg";
    littleX.src="./assets/xGrey.svg";
    clickedOnO = true;
    clickedOnOSecond = true;
})




