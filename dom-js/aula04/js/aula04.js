
//Manipulando o Document Elements By Class Name.
document.getElementsByClassName('minhaClasse')[0].innerHTML = "<b> Get  Elements By Class Name </b>";
document.getElementsByClassName('minhaClasse')[1].innerText = " Alterando o texto do H1, com o Get  Elements By Class Name ";

setTimeout(function(){
    document.getElementsByClassName('minhaClasse')[2].innerHTML = "<b>Alterando o texto da Div com Get  Elements By Class Name </b>";
})