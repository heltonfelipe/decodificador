
function criptografar() {

    let texto = document.getElementById('input-texto').value;
    let imagem_texto = document.querySelector('.imagem-texto');
    let textoAuxiliar = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'e') {
            textoAuxiliar += 'enter';
        } else if (texto[i] == 'i') {
            textoAuxiliar += 'imes';

        } else if (texto[i] == 'a') {
            textoAuxiliar += 'ai';

        } else if (texto[i] == 'o') {
            textoAuxiliar += 'ober';
        } else if (texto[i] == 'u') {
            textoAuxiliar += 'ufat';
        } else {
            textoAuxiliar += texto[i];
        }
    }
    imagem_texto.innerHTML = `<textarea cols="70" rows="5" id="mensagem">${textoAuxiliar}</textarea>` +
        `<input type="button" value="Copiar" onclick="copiar()">`;
}

function descriptografar() {
    let texto = document.getElementById('input-texto').value;
    let imagem_texto = document.querySelector('.imagem-texto');
    let textoAuxiliar = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'e' && texto[i + 1] == 'n' && texto[i + 2] == 't' && texto[i + 3] == 'e' && texto[i + 4] == 'r') {
            textoAuxiliar += 'e';
            i += 4;

        } else if (texto[i] == 'i' && texto[i + 1] == 'm' && texto[i + 2] == 'e' && texto[i + 3] == 's') {
            textoAuxiliar += 'i';
            i += 3;
        } else if (texto[i] == 'a' && texto[i + 1] == 'i') {
            textoAuxiliar += 'a';
            i += 1;
        } else if (texto[i] == 'o' && texto[i + 1] == 'b' && texto[i + 2] == 'e' && texto[i + 3] == 'r') {
            textoAuxiliar += 'o';
            i += 3;
        } else if (texto[i] == 'u' && texto[i + 1] == 'f' && texto[i + 2] == 'a' && texto[i + 3] == 't') {
            textoAuxiliar += 'u';
            i += 3;
        } else {
            textoAuxiliar += texto[i];
        }
    }
    imagem_texto.innerHTML = `<textarea cols="70" rows="5" id="mensagem">${textoAuxiliar}</textarea>` +
        `<input type="button" value="Copiar" onclick="copiar()" id="btn-copiar">`;

}

function copiar() {
    let output_texto = document.getElementById('mensagem');
    navigator.clipboard.writeText(output_texto.value).then();
    document.getElementById('input-texto').value = '';
    document.getElementById('input-texto').focus();
}

var cripta = document.getElementById('criptografar');
var descripta = document.getElementById('descriptografar');

cripta.addEventListener('click', criptografar);
descripta.onclick = descriptografar;


