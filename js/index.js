console.log('Cards do Brasil')

let cards = document.querySelector('.cards')

fetch('jogadores-brasil.json')
.then(resposta => resposta.json())
.then(dados => dados.forEach( (jogador) => {

    console.log(jogador.nome)
    console.log(jogador.posicao)

    let card = document.createElement('div')
    
    card.classList.add('card')
    console.log(card)

    cards.appendChild(card)

    card.innerHTML = `
    <span class="posicaoP">${jogador.posicao}</span>
    <span class="posicaoG">${jogador.posicao}</span>
    <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt="" />
    <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="" />
    <h3 class="nomeJogador">${jogador.nome}</h3>
    <h4 class="numero">${jogador.numero}</h4>`

})
)