// Setting up map global const
const mapID = 'map'
const mockUpCoords = [19.4326, -99.1332]
const mapType = 13
const MY_ACCESS_TOKEN = 'pk.eyJ1IjoiZWxpc2Fzb3RvIiwiYSI6ImNraTBqbjczdjAwNDYycHFuNXB6enUwdWoifQ.Fr7VtpdTeZuoo1CqcJcJpw'
const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const MAPBOX_CALL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'


// initializing my map
const mymap = L.map(mapID).setView(mockUpCoords, mapType);


// visualizing the map
L.tileLayer(MAPBOX_CALL, {
    attribution: ATTRIBUTION,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MY_ACCESS_TOKEN
}).addTo(mymap);

// adding marker
const zocaloMarker = L.marker(mockUpCoords).addTo(mymap)
// adding a pop up 
L.marker(mockUpCoords).bindPopup("<b>Zócalo de la CDMX</b>").addTo(mymap)


// using MAPBOXPLACES 

const MAPBOX_PLACES_API = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const REST_PLACES_URL = `.json?types=place&access_token=${MY_ACCESS_TOKEN}`;

// preparing headers of fetch type get

const FETCH_HEADERS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}


// fetch function to fly to another place with a button
const changeMapCenter = async () => {
    const searchLocation = ['Madrid', 'London', 'Tokyo', 'Mexico City', 'Chicago', 'Munich', 'Machu Pichu']
    let item = searchLocation[Math.floor(Math.random() * searchLocation.length)];
    const searchURL = `${MAPBOX_PLACES_API}${item}${REST_PLACES_URL}`
    const response = await fetch(searchURL)
    const data = await response.json()
    const result = data
    const { coordinates } = result.features[0].geometry
    const features = { coordinates }
    const latlong = [...coordinates].reverse()
    mymap.flyTo(latlong)
    L.marker(latlong).bindPopup(`hola estás en ${item}`).addTo(mymap)
}

function handleGoToButton() {
    changeMapCenter()
}

const goToButton = document.querySelector('#gotoButton')
goToButton.addEventListener('click', handleGoToButton)

// adding a search functionality

const goToInputPlace =async() => {
    const locationTxt = document.getElementById("location-txt").value;
    const userURL = `${MAPBOX_PLACES_API}${locationTxt}${REST_PLACES_URL}`
    const response = await fetch(userURL)
    const data = await response.json()
    const result = data
    const { coordinates } = result.features[0].geometry
    const features = { coordinates }
    const latlong = [...coordinates].reverse() 
    mymap.flyTo(latlong)
    L.marker(latlong).bindPopup(`hola estás en ${locationTxt}`).addTo(mymap)
    
}


function handleUserGoToButton() {
    goToInputPlace()
}

const userGoToButton = document.querySelector('#inputButton')
userGoToButton.addEventListener('click', handleUserGoToButton)




