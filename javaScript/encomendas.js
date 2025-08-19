//document.querySelector(".total").textContent =document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent

//Captura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

//Passa por tds encomendas e calcula o valor total
for (var count = 0; count < clientes.length; count++) {

    //quantidade da encomenda
    var tab_qtde = clientes[count].querySelector(".qtde").textContent;

    //valor unitario da encomenda
    var tab_unitario = clientes[count].querySelector(".unitario").textContent;

    if (tab_qtde < 1 || isNaN(tab_qtde)) {    //Verifica se a quantidade é válida

        //A quantidade eh menor que 1 ou nao eh numerica
        clientes[count].querySelector(".qtde").textContent = "Valor inválido!";

        //linha td fica vermelha:
        //clientes[count].style.backgroundColor = "red";

        //texto da quantidade em vermelho
        clientes[count].querySelector(".qtde").style.color = "red";

    } else if (tab_unitario < 1 || isNaN(tab_unitario)) {   //validando o valor unit.

        //o valor unitario eh menor que 1 ou nao eh numerico
        clientes[count].querySelector(".unitario").textContent = "Valor inválido!";

        //texto da quantidade em vermelho
        clientes[count].querySelector(".unitario").style.color = "red";

    } else {
        //calcula e exibe o total (chamando a function "calculaTotal")
        clientes[count].querySelector(".total").textContent = calculaTotal(tab_qtde, tab_unitario);

        //envia formatação para o valor unitario
        clientes[count].querySelector(".unitario").textContent=formataValor(parseFloat(tab_unitario));
    }
}

//função de cálculo do valor total (outra alternativa)
function calculaTotal(qtde, unitario) {
    var total = 0;

    total = qtde * unitario;

    return formataValor(total);
}

//Função que formata os valores em R$
function formataValor(valor){
    var valor_formatado = valor.toLocaleString('pt-BR', {style:'currency',currency:'BRL'});

    return valor_formatado;
}