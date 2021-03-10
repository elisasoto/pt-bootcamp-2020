
let filterdBeerInfo = {}

const getSpecificBeer = async () => {
    const id = new URLSearchParams(window.location.search).get('id')
    const beerUrl = `https://api.punkapi.com/v2/beers/${id}`


    const response = await fetch(beerUrl)
    const data = await response.json()
    const results = data

    filterdBeerInfo = results.map(beer => {

        return {
            id: beer.id,
            name: beer.name,
            tagline: beer.tagline,
            firstBrewed: beer.first_brewed,
            description: beer.description,
            volumeValue: beer.volume.value,
            volumeUnit: beer.volume.unit,
            image: beer.image_url,
            fermentationTemp: beer.method.fermentation.temp.value,
            fermentationUnit: beer.method.fermentation.temp.unit,
            foodPairing: beer.food_pairing.join(','),
            brewersTips: beer.brewers_tips,
            malt: beer.ingredients.malt,
            hops: beer.ingredients.hops
        };

    });

    return filterdBeerInfo;
}

getSpecificBeer()


const start = async () => {
    let specificBeer = await getSpecificBeer()

    const [oneBeer] = await getSpecificBeer()
    const { malt, hops } = oneBeer

    let allmalts = []
    let allhops = []

    const malts = malt
        .map(result => {
            allmalts.push(result.name)
        })
    const hop = hops
        .map(result => {
            allhops.push(result.name)
        })

    const maltnames = allmalts.join(',')
    const hopnames = allhops.join(',')



    const containerDiv = document.querySelector('.grid-container')
    const paintCards = (specificBeer) => {

        specificBeer.forEach((beer) => {
            const beersDiv = document.createElement('div');

            beersDiv.className = 'beer';

            beersDiv.innerHTML = `
                     
             
             <div class="img-litres">
             <img src="${beer.image}" alt="${beer.name}" width="50" height="150"
                 onerror="this.src='https://pngimg.com/uploads/bottle/bottle_PNG2099.png'">
             </div>
             <div class="name-first-tagline">
                 <h2 class="beer-name">${beer.name}</h2>
                 <span class="first-brewed">First brewed on ${beer.firstBrewed}</span>
                 <p class="tagline">${beer.tagline}</p>
                 <h5 class="volume-units">Produced Volume => ${beer.volumeValue}${beer.volumeUnit}</h5>
             </div>
             <div class="description">
                 <p class="description-text">
                 <h3 class='title-description'>What is it?</h3> <br> ${beer.description}</p>
             </div>
             <div class="food-pairing">
                 <p class="food-pairing">
                 <h3 class='foodpairing-description'>How to Enjoy?</h3> <br> ${beer.foodPairing}</p>
             </div>
             <div class="brewer-tips-ingredients-fermentation">
                 <p class="brewer"><h3 class='brewer-description'>Brewer Tips</h3> <br> ${beer.brewersTips}</p>
                 <div clas="ingredients">Ingredients:
                     <ul class="ingredients">
                         <li> Malts=> ${maltnames}</li>
                         <li> Hops=> ${hopnames}</li>
                     </ul>
                 </div>
                 <p class="fermentation">Fermentation: ${beer.fermentationTemp} ${beer.fermentationUnit}</p>
             </div>
             <a href="index.html?id=${beer.id}" class="link">Back to List</a>
    
            `
            document.title = `Beer: ${beer.name}`
            containerDiv.append(beersDiv);

        });

    }

    paintCards(specificBeer)

    const getGeometry = async () => {
        const items = ['Madrid', 'Londres', 'Okinawa', 'Mexico', 'Chicago', 'Munich']
        let item = items[Math.floor(Math.random() * items.length)];
        const dynamicPlace = `https://api.mapbox.com/geocoding/v5/mapbox.places/${item}.json?types=place&access_token=pk.eyJ1Ijoic29seiIsImEiOiJja2FpYWJobjIwbzVtMnNvNTdmNGF4NHJ2In0.HP3anVetw1Hw0MxhQJPagQ`
    
        const response = await fetch(dynamicPlace)
        const data = await response.json()
        const results = data
    
        const { coordinates } = results.features[0].geometry
    
        const features = { coordinates }
        return features
    }
    
    /* getGeometry () */
    
    const run = async () => {
    
        getGeometry()
            .then(({ coordinates }) => {
                    const mymap = L.map('mapid').setView([...coordinates].reverse(), 13)
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: 'pk.eyJ1IjoiZWxpc2Fzb3RvIiwiYSI6ImNraTBqbjczdjAwNDYycHFuNXB6enUwdWoifQ.Fr7VtpdTeZuoo1CqcJcJpw'
                }).addTo(mymap);
    
                const marker = L.marker([...coordinates].reverse()).addTo(mymap);
    
                const popup = L.popup();

                function onMapClick(e) {
                    popup
                        .setLatLng(e.latlng)
                        .setContent("Brewed for first time on => "+ `${specificBeer[0].firstBrewed}`)
                        .openOn(mymap);
                }
                
                mymap.on('click', onMapClick);
                
            })
    }
    
    run()
}

start()