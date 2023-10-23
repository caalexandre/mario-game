const mario = document.querySelector('.mario') // Pega a imgam do Mário
const tubo = document.querySelector('.tubo') // Pega a imgam do tubo

document.addEventListener('keydown', pulo) // Adiciona um evento toda vez que qualquer tecla for pressionada

function pulo() {
    mario.classList.add('pulo') // Adiciona a classe 'pulo' a imagem do Mário
    
    setTimeout(() => {
        mario.classList.remove('pulo')
    }, 500) // Define um tempo de 500ms pra resetar/remover a animação de pulo para que ele continue correndo 
}

const loop = setInterval(() => {

    const posicaoTubo = tubo.offsetLeft // Variaavel que recebe a posição esquerda do objeto constantemente 
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', ''); // Recebe a posição do objeto, remove o 'px' da string e converte em Number 
    
    console.log(posicaoMario)
    if (posicaoTubo <= 120 &&  posicaoTubo > 0 && posicaoMario < 80) {

        tubo.style.animation = 'none' // Remove a animação
        tubo.style.left = `${posicaoTubo}px` // Faz com que quando perder, permaneçam na mesma posição 

        mario.style.animation = 'none'
        mario.style.bottom = `${posicaoMario}px`

        mario.src = './images/game-over.png' // Troca a imagem do mario quando ele perder 
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInvertval(loop) // Encerra o loop, quando o mario perder, para não continuar executando a verificação 

    } 
}, 10) // cria um loop com uma condição que verifica se as posições do mario e do tubo não estão em colapso para executar (ou não) o game-over.
