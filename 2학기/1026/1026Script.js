let currentRow = 0;
let currentCol = 0;
let table = document.getElementById("table");

function insertRow(){
    let newRow =
        document.createElement("tr");
    table.appendChild(newRow);
    for(let i = 0; i < currentCol; i++){
        const cell =
            document.createElement("td");
        cell.innerText = `(${currentRow+1}, ${i+1})`;
        newRow.appendChild(cell);
    }
    console.log(currentRow);

    currentRow++;
}
function insertCol(){

    for(let i = 0; i < currentRow; i++){
        const cell = table.rows[i].insertCell(-1);
        cell.innerHTML=`(${i+1}, ${currentCol+1})`;
    }
    currentCol++;
}

function removeRow(){

    table.removeChild(table.rows[currentRow-1]);
    currentRow--;
}

function removeCol(){
    for(let i = 0; i < currentRow; i++){

        table.rows[currentCol-1].deleteCell(-1)
    }
    currentCol--;
}
