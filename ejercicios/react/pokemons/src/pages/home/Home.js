import { useContext } from 'react'
import { Store } from '../../store'
import InputContainer from '../../components/PokemonCards/InputContainer'
import PokemonContainer from '../../components/PokemonCards/PokemonContainer'

export default function Home() {
    const {
        character,
        pokemonsList,
        handleChange,
        handleClickRemove,
        handleClickSearch,
    } = useContext(Store)

    return (
        <>
            <InputContainer
                className='input-container'
                value={character}
                onChange={handleChange}
                type='text'
                placeholder='search your pokemon'
                onClick={handleClickSearch}
                disabled={!character}
            />
            <PokemonContainer
                pokemonlist={pokemonsList}
                onClick={handleClickRemove}
            />
        </>
    )
}
