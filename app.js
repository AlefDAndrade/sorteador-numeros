let contador = 0 //para controle do botão reiniciar
let erro = document.querySelector('h2')


function sortear() { 
    let quantidades = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numeros;

    if (quantidades > ate - de) {
        erro.innerHTML = "Invalido, a quantidade não condiz com o intervalo dos números"
        if (contador == 0) {alterarReiniciar()}
        contador++
    } else {
        for (let i = 0; i < quantidades; i++ ) {
            numeros = gerarNUmerosAleatorios(de, ate)

            while (sorteados.includes(numeros)) {
                numeros = gerarNUmerosAleatorios(de, ate)
            }

            sorteados.push(numeros)

                
        }
        
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = (`  <label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`)
    if (contador == 0) {alterarReiniciar()}
    contador++
    }
}




function alterarReiniciar() {
    let newGame = document.getElementById('btn-reiniciar');

        if (newGame.classList.contains('container__botao-desabilitado')) {
            newGame.classList.remove('container__botao-desabilitado');
            newGame.classList.add('container__botao');
        } else {
            newGame.classList.remove('container__botao');
            newGame.classList.add('container__botao-desabilitado');
        }
    }

function gerarNUmerosAleatorios (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function reiniciar() {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value =''
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    if (contador != 0) {alterarReiniciar()}
    contador = 0
    erro.innerHTML = ""

}