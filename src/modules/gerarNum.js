const converterDB = document.querySelector('.converter-type');
const numDigitado = document.querySelector('#num-input');
const resultado = document.querySelector('.resultado');
const converter = document.querySelector('.converter')

function validarNum() {
    if (numDigitado.value === '') return

    converterNum(numDigitado.value);
}

function converterNum(num) {

    if (!converterDB.checked) {

        for (let i in num) {
            if (num[i] < 0 || num[i] > 1) return gerarResultado('Valor inválido');
        }

        const numDecimal = parseInt(num, 2);
        gerarResultado(`O valor decimal de ${num} é: ${numDecimal}`);
    }
}

function gerarResultado(msg) {
    resultado.innerHTML = msg;
}

converter.addEventListener('click', e => {
    e.preventDefault();
    validarNum();

})
