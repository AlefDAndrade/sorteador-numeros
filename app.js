let contador = 0 //para controle do botão reiniciar
let erro = document.querySelector('h2') // Editor da mensagem de erro


function sortear() { 
    let quantidades = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numeros;

    // controle de possiveis erros.
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
    // isso controla a ocilação do botão ao precionar o "Sortear()"
    if (contador == 0) {alterarReiniciar()}

    // almento o contador para bloquear o "alternarReiniciar"
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
    // aqui mais uma vez tem o controle do "alternarReiniciar"
    if (contador != 0) {alterarReiniciar()}
    contador = 0
    erro.innerHTML = ""

}