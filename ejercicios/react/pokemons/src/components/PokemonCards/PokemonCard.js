import './styles.css'

import { Link } from 'react-router-dom'

export default function PokemonCard({ pokemon, onClick }) {


    return (
        <div key={pokemon.id} className='pokemon-card'>
            <div className='deletebtn' onClick={onClick}>
                x
            </div>
            <h4 id='pokemonName'>{pokemon.name}</h4>
            <img src={pokemon.img} alt={pokemon.name}></img>
            <Link to={`/profile/${pokemon.name}`} id='pokemonProfileLink'>
                <div id='profileLink'>+ Info</div>
            </Link>
        </div>
    )
}
