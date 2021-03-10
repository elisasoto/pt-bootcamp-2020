import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { Store } from '../../store'

import './styles.css'

const petArray = [
    'Dogs',
    'Cats',
    'Hamsters',
    'Ants',
    'Horses',
    'Fleas',
    'Dragons',
]

const handleErrors = {
    required: 'This field is required',
    min: 'You must be over 18',
    pattern: 'Value must be a number',
}

export default function Form() {
    const { register, handleSubmit, errors, reset, watch } = useForm()
    const { userList, handleSubmitForm } = useContext(Store)

    console.log('my USer List => ', userList)

    return (
        <section id='formPage'>
            <h3>REGISTER</h3>
            <form
                id='form'
                onSubmit={handleSubmit((data) =>
                    handleSubmitForm(data, reset)
                )}>
                <label htmlFor='name'>Please write your name</label>
                <input
                    id='name'
                    name='name'
                    placeholder='Your name in here'
                    type='text'
                    ref={register({ required: true, minLength: 2 })}></input>
                <p>{errors.name && handleErrors[errors?.name.type]}</p>
                <label htmlFor='nickname'>Pick a nickname</label>
                <input
                    id='nickname'
                    name='nickname'
                    placeholder='ie "molpe"'
                    type='text'
                    ref={register({ required: true, minLength: 2 })}></input>
                <p>{errors.nickname && handleErrors[errors?.nickname.type]}</p>

                <label htmlFor='age'>What is your Age?</label>
                <input
                    id='age'
                    name='age'
                    placeholder='Please write your age'
                    type='text'
                    ref={register({
                        min: 18,
                        required: true,
                        pattern: /\d+/,
                    })}></input>
                <p>{errors.age && handleErrors[errors?.age.type]}</p>
                <label htmlFor='pet'>Choose your favourite pet</label>
                <select name='pet' ref={register({ required: true })}>
                    <option value='' defaultValue>
                        Select an Option
                    </option>
                    {petArray.map((pet, i) => (
                        <option key={i} value={pet}>
                            {pet}
                        </option>
                    ))}
                    ;
                </select>
                <p>{errors.pet && handleErrors[errors?.pet.type]}</p>
                <input className='submitBtn' type='submit' />
            </form>
        </section>
    )
}
