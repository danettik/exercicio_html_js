const form = document.getElementById('form-rifa');

function validaNome(nomeCompleto) { // Corrected function name
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const seuNome = document.getElementById('seu-nome');
    const primeiroPalpite = document.getElementById('primeiro-palpite');
    const segundoPalpite = document.getElementById('segundo-palpite');
    const mensagemSucesso = 'Palpite enviado com sucesso!';

    formEValido = validaNome(seuNome.value); // Corrected function name
    if (formEValido) {
        alert(mensagemSucesso);

        seuNome.value = "";
        primeiroPalpite.value = "";
        segundoPalpite.value = "";

    } else {
        alert("Por favor, insira o seu nome completo");
    }
})

console.log(form);
