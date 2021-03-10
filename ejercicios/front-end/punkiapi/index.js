let beers = {}

let currentPage = ''
let totalBeers = 325
let page = 1
let per_page = 30
let totalPages = Math.ceil(totalBeers/per_page)
const containerDiv = document.querySelector('.container')

const getBeers = async () => { 
    const beersURl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`

    const response = await fetch(beersURl)
    const data = await response.json()
    const results = data
    
    const filterdBeerInfo = results.map(beer => {

        return {
            id: beer.id,
            name: beer.name,
            tagline: beer.tagline,
            firstBrewed: beer.first_brewed,
            description: beer.description,
            volumeValue: beer.volume.value,
            volumeUnit: beer.volume.unit,
            image: beer.image_url

        };

    });

    return filterdBeerInfo;
}


const run = async () => {
    beers = await getBeers()
    
    const paintCards = (beers) => {

        beers.forEach((beer) => {
          const beersDiv = document.createElement('div');
    
          beersDiv.className = 'flip-card';
          beersDiv.id = `${beer.id}`;
    
          beersDiv.innerHTML = `

          <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${beer.image}" alt="${beer.name}" width="50" height="200" onerror="this.src='https://pngimg.com/uploads/bottle/bottle_PNG2099.png'">
                <h3 class="beer-name">${beer.name}</h3>
                <div class="id">
                    <span class="id-title">ID</span>
                    <span class="id-number">${beer.id}</span>
                </div>
            </div>

            <div class="flip-card-back">
                <div class="description">
                    <h2 class="beer-name">${beer.name}</h2>
                    <p class="tagline">${beer.tagline}</p>
                    <span class="first-brewed">First brewed on ${beer.firstBrewed}</span>

                    <h5 class="volume-units">Produced Volume => ${beer.volumeValue}${beer.volumeUnit}</h5>

                    <a href="beer.html?id=${beer.id}" class="link">More Info</a>
                </div>
            </div>
        </div>

        `
        
    
          containerDiv.append(beersDiv);


    
        });
    
      }
    
      paintCards(beers)
      const id = new URLSearchParams(window.location.search).get('id')
      if (id !== null) {
          document.getElementById(`${id}`).scrollIntoView()
      }
    
    }
run()

// CREACION DE BOTONES NEXT & PREVIOUS

// 1. Create the button
const buttonNext = document.createElement("button");
buttonNext.setAttribute("id", "next-button");
buttonNext.innerHTML = "Ver siguientes";

const buttonPrev= document.createElement("button");
buttonPrev.setAttribute("id", "prev-button");
buttonPrev.innerHTML = "Ver anteriores";

// 2. Append in HTML
const body = document.getElementsByTagName("body")[0];
body.appendChild(buttonPrev);
body.appendChild(buttonNext);


// 3. funcionalidad de los botones

function handleClickNextPageButton() {
    containerDiv.innerHTML = '';
    page += 1
    run()
}

const nextPageButton = document.querySelector('#next-button');
nextPageButton.addEventListener('click', handleClickNextPageButton);

function handleClickPrevPageButton() {
    containerDiv.innerHTML = '';
    page -= 1
    run()
}

const prevPageButton = document.querySelector('#prev-button');
prevPageButton.addEventListener('click', handleClickPrevPageButton);