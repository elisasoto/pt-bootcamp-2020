import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { DebounceInput } from "react-debounce-input";
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState("");

  const [pokemonsList, setPokemonsList] = useState([]);

  const handleChange = (event) => {
    setPokemon(event.target.value);
  };

  useEffect(() => {
    async function getPokemon() {
      try {
        const pokemonAPIURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const res = await fetch(pokemonAPIURL);
        const pokemonData = await res.json();
        const results = pokemonData;

        if (pokemonsList.some((pokemon) => pokemon.name === results.name)) {
          alert("este pokemon ya existe my friend! 😘");
        } else {
          setPokemonsList([
            ...pokemonsList,
            {
              name: results.name,
              img: results.sprites.front_default,
              id: uuidv4(),
            },
          ]);
        }
      } catch (err) {
        alert("este pokemon no existe crack 😉");
      }
    }

    if (pokemon) {
      getPokemon();

      setPokemon("");
    }
  }, [pokemon]);


  console.log(pokemon, pokemonsList);

  return (
    <div className="App">
      <h1>PRUEBA EJERCICIO DEBOUNCE POKEMONS</h1>
      <DebounceInput
        minLength={3}
        debounceTimeout={1000}
        onChange={handleChange}
        placeholder="type a pokemon name"
      />

      <p>
        List of Pokemons:{" "}
        {pokemonsList.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              {pokemon.name}, {pokemon.img}
            </li>
          );
        })}
      </p>
    </div>
  );
}

export default App;
