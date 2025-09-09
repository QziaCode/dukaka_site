var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var clientes = document.querySelectorAll(".cliente");

    //verifica se tem informacao para busca
    if (this.value.length > 0) {
        //ha filtro de busca
        for (var cli = 0; cli < clientes.length; cli++) {
            var cliente = clientes[cli];
            var nome = cliente.querySelector(".nome").textContent;
            var expressao = new RegExp(this.value, "i");

            //verifica se o nome digitado e igual ao do contador
            if (!expressao.test(nome)) {

                //Torna invisivel
                cliente.classList.add("invisivel");

            } else {

                //Deixa visivel
                cliente.classList.remove("invisivel");

            }
        }
    } else {

        //nao ha filtro de busca, exibe lista completa
        
        for (var cli = 0; cli < clientes.length; cli++) {
            clientes[cli].classList.remove("invisivel");
        }

    }
})