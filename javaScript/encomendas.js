//document.querySelector(".total").textContent =document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent

//Captura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

//Passa por tds encomendas e calcula o valor total
for (var count = 0; count < clientes.length; count++) {

    //quantidade da encomenda
    var tab_qtde = clientes[count].querySelector(".qtde").textContent; 

    //valor unitario da encomenda
    var tab_unitario = clientes[count].querySelector(".unitario").textContent;

    //calcula e exibe o total (chamando a function "calculaTotal")
    clientes[count].querySelector(".total").textContent = calculaTotal(tab_qtde,tab_unitario);
}

//função de cálculo do valor total (outra alternativa)
function calculaTotal(qtde,unitario) {
 var total=0;
 
 total = qtde * unitario;

 return total;
}