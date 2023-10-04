function insertRow() {
    let tr = document.createElement("tr");
    
    tr.style = "background-color: cyan;";
    tr.innerText = "Hola";
    document.getElementsByClassName("myTable")[0].append(tr);    
}

function deleteRow() {    
    const tabla = document.getElementsByClassName("myTable")[0];
    const filas = tabla.rows.length;
    tabla.deleteRow(filas - 1);
}

// const algo = function() {
//     console.log('Hola Carla!');
// }

// function hola() {
//     console.log('Hola Carlita!');
// }
// const fulano = () => {
//     console.log('Hola Carla desde arrow!');
// }

// let otra = new algo();
// let otro = new hola();
// fulano();
// let mas = new fulano(); // no se hace new cuando es arrow function