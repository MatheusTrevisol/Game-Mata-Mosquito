var largura = 0
var altura = 0
var vidas = 1
var tempo = 30

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    //1500ms
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    //1000ms
    criaMosquitoTempo = 1000
} else if (nivel === 'legend') {
    //500ms
    criaMosquitoTempo = 500
}

function ajustaTamanhoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}

ajustaTamanhoJogo()

//cronometro//
var cronometro = setInterval(function() {

    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
    
}, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior caso exista//
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3) { 
            //redirecionamento de página//
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('vida' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }        
    }
    

    var posicaoX = Math.floor(Math.random() * largura) -90
    var posicaoY = Math.floor(Math.random() * altura) -90

    if (posicaoX <= 0) {
        posicaoX += + 100
    } if (posicaoY <= 0) {
        posicaoY += + 100
    }
    
    console.log(posicaoX, posicaoY)
    
    //criando o elemento html// 
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
       //this refere ao proprio elemento//
       this.remove()
    }
    
    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquitoUm'

        case 1:
            return 'mosquitoDois'
        
        case 2:
            return 'mosquitoTres'
    }
}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)

    switch(lado) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
        
    }
}
