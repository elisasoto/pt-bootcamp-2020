

const getGeometry = async () => {
    const items = ['Madrid', 'Londres', 'Japan', 'Mexico', 'Chicago', 'Munich']
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
            console.log('coordinates => ', coordinates)
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
                    .setContent("Brewed for first time on =>" + e.latlng.toString())
                    .openOn(mymap);
            }

            mymap.on('click', onMapClick);

        })
}

run()






/* marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon."); */

/* const popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap); */

/* function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick); */

/* const popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick); */