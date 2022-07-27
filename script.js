let clickBox = document.getElementsByClassName("click-zone");
let scoreOfX = document.getElementById("xPlayer");
let scoreOfO = document.getElementById("tie");
let scoreOfTie = document.getElementById("oPlayer");
n = -1;
let xImage = document.getElementById('xImage');
let oImage = document.getElementById('oImage');
const restartButton = document.getElementById('restartButton');
const restartOutPut = document.getElementById('restart-order');
const cancelButton = document.getElementById('cancelButton');
const restartButtonClick = document.getElementById('restartButtonClick');
let addCharacter = (event)=>{
    n++
    if(n % 2 === 0){
    const character = document.createElement("img");
    character.src="./assets/icon-x.svg";
    event.target.appendChild(character);
    xImage.style.display ="none";
    oImage.style.display = "block";
    }else{
        const character = document.createElement("img");
        character.src="./assets/icon-o.svg";
        event.target.appendChild(character);
        xImage.style.display ="block";
        oImage.style.display = "none";
    }
    event.target.removeEventListener('click',addCharacter);
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
})