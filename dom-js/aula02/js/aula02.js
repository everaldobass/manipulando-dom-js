
//Pegar o Document Element By Id.
document.getElementById("idCostumizada").innerHTML = "<b> ID do paragráfo </br>";


// innerText Insere apenas Textos
document.getElementById("idCostumizadaDois").innerText = "Insere apenas Texto";


// Manipulando com uma função
setTimeout(function(){

    document.getElementById("idCostumizadaTres").innerHTML = "<h2> Alterando o conteucom uma uma função. </h2>";

}, 3000);
 
