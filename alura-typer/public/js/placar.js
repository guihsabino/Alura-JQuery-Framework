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

// Função de sincronizar placar e jogar na url placar
function sincronizaPlacar() {
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function () {
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).ind("td:nth-child(2)").text();

        var score = {
            usuario: usuario,
            pontos: palavras
        };

        placar.push(score);
    });

    var dados = {
        placar: placar
    };

    $.post("http://localhost:3000/placar", dados, function () {
        console.log("Log salvo no servidor!");
    });
}

// Função que atualiza placar quando entra na página
function atualizaPlacar() {
    $.get("http://localhost:3000/placar", function (data) {
        $(data).each(function () {
            var linha = novaLinha(this.usuario, this.pontos);
            linha.find(".botao-remover").click(removeLinha);
            $("tbody").append(linha);
        });
    });
}