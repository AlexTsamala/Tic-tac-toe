const restartButton = document.getElementById('restartButton');
const restartOutPut = document.getElementById('restart-order');
const cancelButton = document.getElementById('cancelButton');
const restartButtonClick = document.getElementById('restartButtonClick');
let clickBox = document.getElementsByClassName("click-zone");
let scoreOfX = document.getElementById("xPlayer");
let scoreOfO = document.getElementById("tie");
let scoreOfTie = document.getElementById("oPlayer");
let xImage = document.getElementById('xImage');
let oImage = document.getElementById('oImage');
let indexOfX =[];
let indexOfO = [];
let checkX = false;
let checkO = false;
let winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] ;
n = -1;

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
                console.log(checkX);
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
                console.log(checkO);
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