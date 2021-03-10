import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from '../../store/index'

import './styles.css'

export default function PokemonProfile() {
    const { pokemonName } = useParams()
    const { pokemonsList = [] } = useContext(Store)

    const onePokemon = pokemonsList.find(
        (pokemon) => pokemon.name === pokemonName
    )
    const { img = '', name = '', types = [] } = onePokemon || {}

    return (
        <div className='pokemonProfile'>
            <h4>Hey I am {name} </h4>
            <div id='imgContainer'>
                <img src={img} alt={name}></img>
            </div>
            <br/>
            <label>These are my types!</label>
            <br/>
            <label>{types[0]?.type?.name} {types[1] ? "and " + types[1].type.name : null}</label>
            <Link to={'/home'} id='pokemonProfileLink'>
                <div id='backListButton'>Back to List</div>
            </Link>
        </div>
    )
}
