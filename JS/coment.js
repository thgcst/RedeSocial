/************* Post 1 *************/


var input = document.getElementById("comentario");

var botaoAdicionar = document.querySelector("#comentario");

botaoAdicionar.addEventListener("keyup", function(event) {

    if(event.keyCode === 13){
        addRow();
    }
});


function addRow() {
    "use strict";
    
    var tableBody = document.getElementById("table1");
    var td1 = document.createElement("td");
    var row = document.createElement("tr");
    

    var foto = document.createElement("IMG");
    foto.setAttribute("src","https://vignette.wikia.nocookie.net/friends/images/c/cc/Square_Chandler.jpg/revision/latest/scale-to-width-down/200?cb=20111216200026");
    foto.setAttribute("class","fotoComentador");

    var nome = document.createElement("h7");
    var nomecomentario = document.createTextNode("Chandler Bing");
    nome.appendChild(nomecomentario);
    nome.setAttribute("class","nomeComentador");

    var x = document.getElementById("comentario").value;

    var Comentarious = document.createElement("h7");
    var coment = document.createTextNode(x);
    Comentarious.appendChild(coment);
    Comentarious.setAttribute("class","comentComentador");
    
    td1.appendChild(foto);
    td1.appendChild(nome);
    td1.appendChild(Comentarious);
    
    row.appendChild(td1);

    tableBody.appendChild(row);

    console.log(td1);
}


/************* Post 2 *************/

var input = document.getElementById("comentario2");

var botaoAdicionar = document.querySelector("#comentario2");

botaoAdicionar.addEventListener("keyup", function(event) {

    if(event.keyCode === 13){
        addRow2();
    }
    
    
});


function addRow2() {
    "use strict";
    
    var tableBody = document.getElementById("table2");
    var td1 = document.createElement("td");
    var row = document.createElement("tr");
    

    var foto = document.createElement("IMG");
    foto.setAttribute("src","https://vignette.wikia.nocookie.net/friends/images/c/cc/Square_Chandler.jpg/revision/latest/scale-to-width-down/200?cb=20111216200026");
    foto.setAttribute("class","fotoComentador");

    var nome = document.createElement("h7");
    var nomecomentario = document.createTextNode("Chandler Bing");
    nome.appendChild(nomecomentario);
    nome.setAttribute("class","nomeComentador");

    var x = document.getElementById("comentario2").value;

    var Comentarious = document.createElement("h7");
    var coment = document.createTextNode(x);
    Comentarious.appendChild(coment);
    Comentarious.setAttribute("class","comentComentador");
    
    td1.appendChild(foto);
    td1.appendChild(nome);
    td1.appendChild(Comentarious);
    
    row.appendChild(td1);

    tableBody.appendChild(row);

    console.log(td1);
}