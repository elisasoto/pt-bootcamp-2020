import { useContext } from 'react'
import { Store } from '../../store/index'
import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'

const pokemonTypes = [
    'normal',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dark',
    'dragon',
    'steel',
    'fairy',
]

export default function CreatePokemon() {
    const { handleSubmitForm } = useContext(Store)
    const { register, handleSubmit, errors, reset, watch } = useForm()
    const typeOne = watch('typeOne')
    const filteredTypeTwo = pokemonTypes.filter((e) => e !== typeOne)
    return (
        <>
            <h2>Create your own Pokemon</h2>
            <form
                onSubmit={handleSubmit((values) =>
                    handleSubmitForm(values, reset)
                )}>
                <label htmlFor='name'>Name of your Pokemon</label>
                <br />
                <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='bulbasaur'
                    ref={register({
                        required: true,
                        minLength: 2,
                    })}
                />
                {errors.name && errors.name.type === 'required' ? (
                    <p>This field is required</p>
                ) : null}
                <br />
                <label htmlFor='img'>Insert the URL of your new pokemon</label>
                <br />
                <input
                    id='img'
                    name='img'
                    type='text'
                    placeholder='placer the link of your image here'
                    ref={register({
                        required: true,
                        minLength: 10,
                    })}
                />
                {errors.img && errors.img.type === 'required' ? (
                    <p>This field is required</p>
                ) : null}
                <br />
                <label htmlFor='typeOne'>Choose the Type of your Pokemon</label>
                <br />
                <select name='typeOne' ref={register({ required: true })}>
                    <option value='' defaultValue>
                        Select an Option
                    </option>
                    {pokemonTypes.map((typeOne, i) => (
                        <option key={i} value={typeOne} placeholder='a'>
                            {typeOne}
                        </option>
                    ))}
                    ;
                </select>
                <br />

                {errors.typeOne && errors.typeOne.type === 'required' ? (
                    <p>This field is required</p>
                ) : null}
                <br />

                <label htmlFor='typeTwo'>
                    Choose an additional type for your pokemon
                </label>
                <br />

                <select name='typeTwo' ref={register}>
                    <option value='' defaultValue>
                        No thanks, one Type is fine
                    </option>
                    {filteredTypeTwo.map((typeTwo, i) => (
                        <option key={i} value={typeTwo}>
                            {typeTwo}
                        </option>
                    ))}
                    ;
                </select>

                <br />
                <br />
                <button type='submit' id='submitBtn'>
                    Add Pokemon 🐱‍🐉
                </button>

                <Link to={'/home'} id='pokemonProfileLink'>
                    <div id='backListButton'>Back to List</div>
                </Link>
            </form>
        </>
    )
}
