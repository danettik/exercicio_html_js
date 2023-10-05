const form = document.getElementById('form-rifa');

function validaNome(nomeCompleto) { // Corrected function name
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

function palpiteRifa(primeiroPalpite, segundoPalpite){
    return primeiroPalpite < segundoPalpite;
}

form.addEventListener('submit', function(e) { //"e" é de evento
    e.preventDefault(); //Impede que o formulário seja carregado antes da hora

        let validarForm = (primeiroPalpite.valueAsNumber, segundoPalpite.valueAsNumber);
        if(validarForm){
            alert("Palpite enviado. Boa sorte!")
        } else {
            alert("O número do primeiro palpite não pode ser maior que o segundo")
        }

    const seuNome = document.getElementById('seu-nome'); // Recupera informação
    const primeiroPalpite = document.getElementById('primeiro-palpite');
    const segundoPalpite = document.getElementById('segundo-palpite');
    const mensagemSucesso = 'Palpite enviado com sucesso!';
    const erro = document.getElementById('erro');

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
