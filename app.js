const table = [[,,],[,,],[,,]];
let actualValue ="X";
let playsLeft = 8;

const changeVal = () => {
    if(actualValue === "X"){
        actualValue = "O";
    }else{
        actualValue = "X";
    }
}

const allEqual = arr => arr.every(v => v === arr[0] && v != undefined);

const checkWinner = (...params) =>{
    for(let p of params){
        if(allEqual(p)){
           return true;
        }
    }
}

const updateGame = (row, column, element) => {
    if(table[row][column] === undefined){
        table[row][column] = actualValue;
        element.innerHTML = actualValue;
        playsLeft--;

        if(checkWinner([table[0][0],table[0][1],table[0][2]], [table[1][0],table[1][1],table[1][2]],[table[0][2],table[2][1],table[2][2]],[table[0][0],table[1][1],table[2][2]], [table[0][2],table[1][1],table[2][0]], [table[0][0],table[1][0],table[2][0]], [table[0][1],table[1][1],table[2][1]],[table[0][2],table[1][2],table[2][2]])){
            alert(`${actualValue} venceu`);
               refresh();
        }
    
        if(playsLeft <= 0){
            alert("Tie game");
            refresh();
        }
    
        changeVal();
    }    
}

const refresh = () =>{
    const cards = document.querySelectorAll(".card");
    for(let card of cards){
        card.innerHTML = "";
    }

    for(let i = 0; i < table.length; i++){
        for(let j = 0; j < table[i].length; j++){
            table[i][j] = undefined;
        }
    }

    playsLeft = 9;
    console.log(table, playsLeft);
}

