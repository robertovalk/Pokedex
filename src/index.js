/*quando clicar pokemon esconder cartão pokemon 
aberto e mostrar cartão que fora clicado

deve-se trabalhar com dois elementos:

1 - Listagem

2 - Cartão Pokémon

deve-se trabalhar com efeito clique

- remover a classe ''aberto'' só 
do cartão que está aberto

- ao clicar no pokemom da listagem
pegamos o ID desse pokemon para saber
qual cartão mostrar

-remover a classe ''ativo'' que marca
o pokemon selecionado

-adicionar a classe ativo no item da lista
selecionado

*/

alert("Oi, me contrata por favor!")

const listaSelecaoPokemon = document.querySelectorAll('.pokemon')

const pokemonCard = document.querySelectorAll('.cartao-pokemon')


//deve-se trabalhar com efeito clique
listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        
        //a partir do clique:   

        //tirou a classe ''aberto'' do pikachu.
        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto')
        
        //buscar o ID do bulbasauro e dos outros pokemon no html
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        //acrescentou a classe ''aberto'' no bulbasauro
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado);
        cartaoPokemonParaAbrir.classList.add ('aberto')

        //remover a classe ''ativo''

        const navPokemonSelecionado = document.querySelector('.ativo');
        navPokemonSelecionado.classList.remove('ativo');

       //adicionar o ''ativo no item selecionado
       const navPokemonSelecionadoNaLista = document.getElementById(idPokemonSelecionado);
       navPokemonSelecionadoNaLista.classList.add('ativo');
    })
})