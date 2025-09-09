var tabela = document.querySelector("table");

//escuta o duplo click na linha q sera excluida:
tabela.addEventListener("dblclick", function (event) {

    //adiciona o efeito na linha
    event.target.parentNode.classList.add("fadeOut");

    //atrasa a exclusao da linha
    setTimeout(function(){
        //exclui a linha clicada
        event.target.parentNode.remove();
    }, 600);

});