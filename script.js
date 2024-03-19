const textInput = document.querySelector("#text");

function criptografar() {
    const texto = textInput.value;
    const resultCripto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    exibirResultado(resultCripto);
}

function descriptografar() {
    const texto = textInput.value;
    const resultDescripto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    exibirResultado(resultDescripto);
}

function exibirResultado(resultado) {
    const outputDiv = document.querySelector(".output");
    outputDiv.innerHTML = `
        ${resultado}`;
}

function copiar() {
    const textoCop = document.querySelector("#input-texto");

    textoCop.select();
    document.execCommand("copy");
    alert("Texto copiado.");
}