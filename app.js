class Player{

    constructor(key){
        this.key = key;
    }

    getKey = () =>{
        return this.key;
    }

    cleanValue = () =>{
        this.valuesOnBoard = [];
    }

    setValue = (val) =>{
        this.valuesOnBoard.push(val);
    }

    getValue = () =>{
        return this.valuesOnBoard;
    }
}

const WIN_CONDITIONS = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

const playerX = new Player("X");
const playerO = new Player("O");

let playerTurn;

function setup(){
    playerX.cleanValue();
    playerO.cleanValue();

    playerTurn = playerX;
    cards = document.querySelectorAll(".card");
    for(let card of cards){
        card.innerHTML = "";
    }
}

setup();

function play(element, value){
    if(element.innerHTML === ""){
        element.innerHTML = playerTurn.getKey();
        playerTurn.setValue(value);

        if(checkWinner(playerTurn.getValue())){
            alert(`${playerTurn.getKey()} has won`);
            setup();
        }else{
            changeTurn();
        }
    }
}

function changeTurn(){
    playerTurn = playerTurn === playerX ? playerO : playerX;
}

function checkWinner(arr){
    for(let i of WIN_CONDITIONS){
        if(i.every(v => arr.includes(v))){
            return true;
        }       
    }
    
}
