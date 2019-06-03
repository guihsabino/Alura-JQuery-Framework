// Chamando o placar através do botão
$("#botao-placar").click(mostraPlacar);

// Coloca o placar na tabela
function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Guilherme";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
}

// Função de criação de linhas de pontuação
function novaLinha(usuario, numPalavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

// Função de remoção de linhas de pontuação
function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}

// Função de mostrar o placar
function mostraPlacar() {
    $(".placar").slideToggle(1200);
}