const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

function validaCampos(campos) {
    if (campoB.value > campoA.value) {
    return true;
    }
    else {
    return false;
    }
}
form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const msgDeSucesso = 'O valor de campo B é maior que campo A :)';

    formEValido = validaCampos()
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.msgSucesso');
        containerMensagemSucesso.innerHTML = msgDeSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        document.querySelector('.msgNSucesso').style.display = 'block';
    }
})