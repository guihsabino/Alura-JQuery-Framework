// Chamando o placar através do botão
$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);

// Coloca o placar na tabela
function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Guilherme";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

    $(".placar").slideDown(500);
    scrollPlacar();
}

// Função que desce a página até o placar 
function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("html, body").animate(
        {
            scrollTop: posicaoPlacar + "px"
        }, 1000);
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
    var linhaTab = $(this).parent().parent();
    linhaTab.fadeOut(1000);
    // Função para remover linha após 1 segundo, isso após esmaecer a linha
    setTimeout(function () {
        linhaTab.remove();
    }, 1000);
}

// Função de mostrar o placar
function mostraPlacar() {
    $(".placar").stop().slideToggle(1200);
}

function sincronizaPlacar() {
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function () {
        
    });
}