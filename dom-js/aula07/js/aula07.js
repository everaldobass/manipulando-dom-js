
//Manipulando o Dom - hasAttribute - pergunta se tem um atribuito
documento = document.getElementById('idQualquer').hasAttribute('class');
document.write(documento);

//Manipulando o Dom -  getAttribute  -perguntar se tem e traz o valor
let atributoDiv = document.getElementById('idQualquer');

// vai retonanr o valor que está dentro da classe
document.write(atributoDiv.getAttribute('class'));

//Manipulando o Dom - setAttribute - altera o atributo
let atributoDiv = document.getElementById('idQualquer');

// Aplicando um estilo
atributoDiv.setAttribute('style','background: blue');






