import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Store } from './store'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer'

import Home from './pages/home/Home'
import Creator from './pages/createPokemon/CreatePokemon'
import Profile from './pages/pokemonProfile/PokemonProfile'

import { toLower } from './utils/toLower'



function App() {
    const [character, setCharacter] = useState('')
    const [pokemonsList, setPokemonsList] = useState([
        {
            name: 'bulbasaur',
            img:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            id: uuidv4(),
            base_experience: '64',
            weight: '69',
            types: [
                {
                    slot: 1,
                    type: {
                        name: 'grass',
                    },
                },
                {
                    slot: 2,
                    type: {
                        name: 'poison',
                    },
                },
            ],
        },
    ])

    
    const handleChange = (event) => {
        setCharacter(toLower(event.target.value))
    }

    const handleClickSearch = () => {
        const pokemonAPIURL = `https://pokeapi.co/api/v2/pokemon/${character}`
        async function getPokemon() {
            try {
                const res = await fetch(pokemonAPIURL)
                const pokemonData = await res.json()
                const results = pokemonData

                if (
                    pokemonsList.some(
                        (pokemon) => pokemon.name === results.name
                    )
                ) {
                    alert('este pokemon ya existe my friend! 😘')
                } else {
                    setPokemonsList([
                        ...pokemonsList,
                        {
                            name: results.name,
                            img: results.sprites.front_default,
                            id: uuidv4(),
                            base_experience: results.base_experience,
                            weight: results.weight,
                            types: results.types,
                        },
                    ])
                }
            } catch (err) {
                alert('este pokemon no existe crack 😉')
            }
        }

        getPokemon()

        setCharacter('')
    }


    const handleClickRemove = (id) => {
        setPokemonsList(pokemonsList.filter((element) => id !== element.id))
    }


    function handleSubmitForm(values, cb) {
        if (pokemonsList.some((pokemon) => pokemon.name === values.name)) {
            alert('este pokemon ya existe my friend! 😘')
        } else {
            setPokemonsList(prevState => [
                ...pokemonsList,
                {
                    name: toLower(values.name),
                    img: values.img,
                    id: uuidv4(),
                    base_experience: values.base_experience,
                    weight: values.weight,
                    types: [
                        {
                            slot: 1,
                            type: {
                                name: values.typeOne,
                            },
                        },
                        values.typeTwo? {
                            slot: 2,
                            type: {
                                name: values.typeTwo,
                            },
                        }:null
                    ],
                },
            ])
            cb && cb()
            alert(`${values.name} ha sido creado!`)
        }
    }

    return (
        <div className='App'>
            <Header text='My reactive Pokedex' />
           
            <Store.Provider value={{character, pokemonsList, handleChange, handleClickRemove, handleClickSearch, handleSubmitForm}}>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/home'/>
                    </Route>

                    <Route exact path='/home'>
                        <Home />
                    </Route>
                    <Route exact path='/create'>
                        <Creator />
                    </Route>
                    <Route exact path='/profile/:pokemonName'>
                        <Profile />
                    </Route>
              
                </Switch>
            </Store.Provider>

            <Footer />
        </div>
    )
}

export default App
