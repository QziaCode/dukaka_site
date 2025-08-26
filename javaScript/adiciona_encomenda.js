var botaoAdd = document.querySelector("#adicionar-encomenda");

botaoAdd.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Botão clicado");
    document.createElement("tr");
    var coluna = document.querySelector(tr);
    document.createElement(td);
    var linha = document.querySelector(td);
    coluna.appendChild(linha);
});