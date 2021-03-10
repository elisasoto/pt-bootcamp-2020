// funcion que llama a la api de pokemons

const getPokemon =(id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then((pokeCharacter)=> {
      const pokemon = {
          name: pokeCharacter.name,
          sprite: pokeCharacter.sprites.other['official-artwork'].front_default,
          types: pokeCharacter.types.map((data)=>{
            return {
              type: data.type.name,
              url: data.type.url
            }        
          }),
          abilities: pokeCharacter.abilities.map((data)=>{
            return {
              name: data.ability.name, 
              url: data.ability.url
            }
          })
        }
    // creacion de elementos del dom en el HTML

          const body = document.getElementsByTagName("body")[0];

          const containerDiv = document.createElement("div");
          containerDiv.className = 'container';
          containerDiv.id = 'container';
          body.appendChild(containerDiv)

          containerDiv.innerHTML = `
          <div class="pokemons-card" id="pokemons-card"> 
              <h5 id="pokemon-name">${pokemon.name}</h5>
              <img src="${pokemon.sprite}" alt="${pokemon.name}" width="100px">
              <div class="abilities" id="abilities"> 
                  <p class="abilities-names">Abilities</p>
                  <ul>
                      <li>${pokemon.abilities[0].name}</li>
                      <li>${pokemon.abilities[1].name}</li>
                  </ul>    
              </div>
              <div class="types" id="types"> 
                  <p class="types-names">Types</p>
                  <ul>
                      <li>${pokemon.types[0].type}</li>
                      <li>${pokemon.types[1].type}</li>
                  </ul>    
              </div>
          </div>
          `   
      })
  
  }
  getPokemon(1)



