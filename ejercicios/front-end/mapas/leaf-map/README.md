# leaflet-map
Map that uses an input to fetch Mapbox api and displays through Leaflet libary

-------

In this repository you will find an example of the creation of a map using the Leaflet Library 🌿

All library documentation can be found in this  [link](https://leafletjs.com/index.html)

### BEFORE YOU START! 🛑
Before starting, make sure you first get a Mapbox API in this  [link](https://www.mapbox.com/)

# OBJECTIVE OF THE PROJECT

To display a beginner interactive map using Leaflet and fetches the users input to display the right coordinates. 

For that purpose, we will also use *`fetch`* as well as the *`async await`* functions. 

### 1. Setting global constants

We start by creating a couple of global constants that will make our code more legible and reusable in the future. 

````
const mapID = 'map'
const mockUpCoords = [19.4326, -99.1332]
const mapType = 13
const MY_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'
const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const MAPBOX_CALL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'

````

***Note***: There is a constant we called `mockUpCoords` that will help us just set our first coordinates. Later on, we will fetch those with MapBox API and dinamcally change them in our map. 

***Note 2***: Just as the Leaflet documentation says, be sure that before initializing the map you painted a div in your html and have connected the CSS and JS from both your project and their CDN's. IT should look something like this: 

```
<link rel="stylesheet" href="./styles.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin="" />
</head>

<body>
    
    <div id="map">
    </div>

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>
    <script src="./index.js"></script>

```

### 2. Setting up the map 🗺

The second step is to initialize the map with our `mockUpCoords`. 

```
// initializing my map
const mymap = L.map(mapID).setView(mockUpCoords, mapType);

```

Just by doing this you will observe a gray box in your div. 

### 3. Visualizing the map

With this library you will need to use some of the global variables we previously set up to visualize our map: 

```
// visualizing the map
L.tileLayer(MAPBOX_CALL, {
    attribution: ATTRIBUTION,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MY_ACCESS_TOKEN
}).addTo(mymap);
```

### 4. Adding markers & pop ups
To add a marker and a popup to know the place you marked with the coordinates use the following functions: 

````
// adding marker
const zocaloMarker = L.marker(mockUpCoords).addTo(mymap)
// adding a pop up 
L.marker(mockUpCoords).bindPopup("<b>Zócalo de la CDMX</b>").addTo(mymap)

`````

### 5. Fetching dynamic coordinates

By using async - await function we get either a random place given by an array of locations or using the users input to paint a map. 

Be sure to read the form of the JSON and beware thea the latitude and longitude of the `geometry` array is upside down, hence the reverse function in the code. 

````
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

`````

### 6. Running our fetch function
Finally, I created a button that runs our async function and takes us to the random places we created in the `searchLocation` array: 

`````
function handleGoToButton() {
    changeMapCenter()
}

const goToButton = document.querySelector('#gotoButton')
goToButton.addEventListener('click', handleGoToButton)

```````

### 7. Adding a "search place" functionality 

To type in the input, we created an input form in the HTML and passed that as a search location in a new fetch function that returns the place coordinates: 

```
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
`````

***NOTE 3*** Beware that with the fetch codes used before you need to create a couple of buttons in the html, call them in the JS and add the Event listeners. 

# ENJOY THE TRIP! ✈
