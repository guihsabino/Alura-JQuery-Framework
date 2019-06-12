// Salva tempo inicial pra retornar pra ele depois, e salva campo digitado
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function () {
    atualizaTmanahoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();
});

// Atualiza tamanho da frase 
function atualizaTmanahoFrase() {
    var frase = $(".frase").text();
    var numeroPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numeroPalavras);
}

// Atualiza tempo inicial
function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $('#tempo-digitacao').text(tempo);
}

// Conta o numero de caracteres e palavras
function inicializaContadores() {
    campo.on("input", function () {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

// Decrescendo tempo
function inicializaCronometro() {
    campo.one("focus", function () {
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroId = setInterval(function () {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroId);
                finalizaJogo();
            }
        }, 1000);
    });
}

// O que fazer quando jogo finalziar
function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

// Observando o que o cara escreve
function inicializaMarcadores() {
    campo.on("input", function () {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.lenght);
        // Comparando o digitado com a frase
        if (digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

// Botão para reiniciar
function reiniciaJogo() {
    $("#botao-reiniciar").click(function () {
        campo.attr("disabled", false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo-digitacao").text(tempoInicial);
        inicializaCronometro();
        campo.toggleClass("campo-desativado");
        campo.removeClass("borda-verde");
        campo.removeClass("borda-vermelha");
    });
}