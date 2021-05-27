texto = document.querySelector("textarea");
divConteudo = document.querySelector("div");
pResultado = document.querySelector("p");

function contar(){
    let resultadoPalavras = texto.value.split(" ");
    let resultadoLetras = texto.value.split("");

    resultadoLetras = resultadoLetras.length - (resultadoPalavras.length - 1)

    document.querySelector("p").innerHTML = `Palavras: ${resultadoPalavras.length} Letras: ${resultadoLetras}`

}