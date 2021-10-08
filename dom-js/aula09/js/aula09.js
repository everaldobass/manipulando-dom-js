
//Manipulando o Dom - createElement, appendChild, insertBefore e removeChild.

// Criar um elemento LI
let elemento = document.createElement('li');
// Criar um Texto
let texto = document.createTextNode('Item da lista adicionado');
elemento.appendChild(texto);


// Recuperando o elemento lista e anexar o elemento
let lista =  document.getElementsByTagName('ul')[0];
lista.appendChild(elemento);


// insertBefore
let listaB = document.getElementsByTagName('ul')[1];
let itens = listaB.getElementsByTagName('li');

// Criando Elemento na lista B
let elementoB = document.createElement('li');
elementoB.textContent = (" Outro Item 5");

// Inserindo o valor em posição especifica
listaB.insertBefore(elementoB, itens[5]);



//  removeChild
listaB.removeChild(itens[4]);



