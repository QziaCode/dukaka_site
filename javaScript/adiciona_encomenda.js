var botaoAdd = document.querySelector("#botaoAdicionar");

botaoAdd.addEventListener("click", function (event) {
    event.preventDefault();

    //Captura o formulario:
    var form = document.querySelector("#frmEncomenda");

    //Captura a nova encomenda:
    var novaEncomenda = obtemEncomenda(form);

    //Captura a tabela de encomendas:
    var tabela = document.querySelector("#tabela-clientes");

    //Insere a nova Encomenda na tabela:
    tabela.appendChild(montaTR(novaEncomenda));

    //Limpa o formulario
    form.reset();
});

//Capturar os dados do formulario:
function obtemEncomenda(formulario) {
    var encomenda = {
        nome: formulario.name.value,
        produto: formulario.produto.value,
        sabores: formulario.sabor.value,
        qtde: formulario.quantidade.value,
        unitario: formulario.preco.value
    }
    return encomenda;
}

//funcao para criar nova linha
function montaTR(dadosNovaEncomenda) {
    var linha = document.createElement('tr');
    linha.appendChild(mondaTD(dadosNovaEncomenda.nome));
    linha.appendChild(mondaTD(dadosNovaEncomenda.produto));
    linha.appendChild(mondaTD(dadosNovaEncomenda.sabores));
    linha.appendChild(mondaTD(dadosNovaEncomenda.qtde));
    linha.appendChild(mondaTD(formataValor(dadosNovaEncomenda.unitario)));
    linha.appendChild(mondaTD(calculaTotal(dadosNovaEncomenda.qtde,dadosNovaEncomenda.unitario)));

    return linha;

}
//funcao para criar nova coluna
function mondaTD(dadoColuna) {
    var coluna = document.createElement('td');
    coluna.textContent = dadoColuna;
    return coluna;
}

//funcao pra fomatar BRL
function formataValor(valor) {
    return parseFloat(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}