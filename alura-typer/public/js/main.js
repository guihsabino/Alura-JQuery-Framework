var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;

// Atualiza o número de palavras
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numeroPalavras);

// Conta o numero de caracteres e palavras
var campo = $(".campo-digitacao");
campo.on("input", function () {
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
});