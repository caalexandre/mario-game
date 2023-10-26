const mario = document.querySelector('.mario') // Pega o valor da imgam do Mário
const tubo = document.querySelector('.tubo') // Pega o valor da imgam do tubo
const contador = document.querySelector('.contador') // Pega o elemento/tag com a classe 'contador'
let perdeu = false
let valor = 0; // Valor inicial da contagem

document.addEventListener('keydown', pulo) // Adiciona um evento toda vez que qualquer tecla for pressionada

function pulo() {
    if (!perdeu) {
        mario.classList.add('pulo') // Adiciona a classe 'pulo' a imagem do Mário
        setTimeout(() => {
            mario.classList.remove('pulo') // Remove a classe 'pulo' do mario, ou seja, remove a animação de pulo

        }, 500) // Define um tempo de 500ms pra resetar/remover a animação de pulo para que ele continue 

        valor++ // Incrementa + 1 ao valor da contagem
    } // Esse IF verifica, caso a condição de perdeu for falso, ele permite continuar o pulo
}

const loop = setInterval(() => {

    const posicaoTubo = tubo.offsetLeft // Variaavel que recebe a posição esquerda do objeto constantemente 
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', ''); // Recebe a posição do objeto, remove o 'px' da string e converte em Number 

    contador.textContent = `Pulos:${valor}`

    console.log(posicaoMario)
    if (posicaoTubo <= 120 && posicaoTubo > 0 && posicaoMario < 80) {

        tubo.style.animation = 'none' // Remove a animação
        tubo.style.left = `${posicaoTubo}px` // Faz com que quando perder, permaneçam na mesma posição 

        mario.style.animation = 'none'
        mario.style.bottom = `${posicaoMario}px`

        mario.src = './images/game-over.png' // Troca a imagem do mario quando ele perder 
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        perdeu = true // Muda o valor da variavel perdeu (false -> true)

        clearInvertval(loop) // Encerra o loop, quando o mario perder, para não continuar executando a verificação 
    }
}, 10) // cria um loop com uma condição que verifica se as posições do mario e do tubo não estão em colapso para executar (ou não) o game-over.
