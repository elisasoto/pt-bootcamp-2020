import PokemonCard from './PokemonCard'
import './styles.css'

export default function PokemonContainer({pokemonlist, onClick}){
    return (
        <div className='pokemon-container'>
                {pokemonlist.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={() => onClick(pokemon.id)}/>
                ))}
            </div>
    )
}