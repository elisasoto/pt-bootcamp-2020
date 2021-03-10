let houseToFilter = '';

const characters = [
  {
    name: 'Jon Snow',
    house: 'Stark',
    age: 24,
    picture:
      'https://cdn.vox-cdn.com/thumbor/l9l4iztkKVgnxD0vMmqYwknBZu4=/99x0:1179x810/1400x1400/filters:focal(99x0:1179x810):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg',
    shield:
      'https://storiesfromthemuseumfloor.files.wordpress.com/2016/12/house-stark-main-shield.png',
  },
  {
    name: 'Eddard Stark',
    house: 'Stark',
    age: 41,
    picture:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/1/13/Eddard_Stark_HBO.jpg/revision/latest?cb=20181021172732&path-prefix=es',
    shield:
      'https://storiesfromthemuseumfloor.files.wordpress.com/2016/12/house-stark-main-shield.png',
  },
  {
    name: 'Arya Stark',
    house: 'Stark',
    age: 11,
    picture:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/a/a9/AryaShipIronThrone.PNG.png/revision/latest?cb=20190909001444&path-prefix=es',
    shield:
      'https://storiesfromthemuseumfloor.files.wordpress.com/2016/12/house-stark-main-shield.png',
  },
  {
    name: 'Ramsay Bolton',
    house: 'Bolton',
    age: 20,
    picture:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ramsay_Bolton-_-Iwan_Rheon.jpg/220px-Ramsay_Bolton-_-Iwan_Rheon.jpg',
    shield:
      'https://upload.wikimedia.org/wikipedia/commons/b/b4/House-Bolton-Main-Shield.png',
  },
  {
    name: 'Theon Greyjoy',
    house: 'Greyjoy',
    age: 19,
    picture:
      'https://upload.wikimedia.org/wikipedia/en/5/51/Theon_Greyjoy-Alfie_Allen.jpg',
    shield:
      'https://awoiaf.westeros.org/images/thumb/5/5b/House_Greyjoy.svg/1200px-House_Greyjoy.svg.png',
  },
  {
    name: 'Davos Seaworth',
    house: 'Seaworth',
    age: 37,
    picture:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/0/00/DAVOSINFOBOXBELLS.PNG.png/revision/latest/top-crop/width/360/height/450?cb=20200518042045&path-prefix=es',
    shield:
      'https://awoiaf.westeros.org/images/thumb/6/61/House_Seaworth.svg/1200px-House_Seaworth.svg.png',
  },
  {
    name: 'Cersei Lannister',
    house: 'Lannister',
    age: 30,
    picture:
      'https://vignette.wikia.nocookie.net/juego-detronos-fanon/images/0/06/D83429bddc3666e1584276658ac7d215.png/revision/latest?cb=20190713200100&path-prefix=es',
    shield:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/8/85/Lannister_shield.png/revision/latest?cb=20200713093743',
  },
  {
    name: 'Tyrion Lannister',
    house: 'Lannister',
    age: 24,
    picture:
      'https://vignette.wikia.nocookie.net/juego-detronos-fanon/images/4/46/42tgru65.jpg/revision/latest?cb=20190715005327&path-prefix=es',
    shield:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/8/85/Lannister_shield.png/revision/latest?cb=20200713093743',
  },
  {
    name: 'Jaime Lannister',
    house: 'Lannister',
    age: 31,
    picture:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/1/1e/Jaime_Lannister.jpg/revision/latest?cb=20181025045714&path-prefix=es',
    shield:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/8/85/Lannister_shield.png/revision/latest?cb=20200713093743',
  },
];

/////CREANDO EL SELECT DESDE JAVASCRPT////////////////
// busco el contenedor de selectores

const selectorDiv = document.querySelector('#houseFilter');

//Recorro el Array de characters y obtengo uno nuevo con el nombre de las casas (todas)
const houses = []
characters.forEach((character, i) => {
  if (character.house !== " ") {
  houses.push(character.house)
  }
});

// como las casas se repiten, tengo que obtener un array de casas unicas, despues las ordeno alfabeticamente con sort

const uniqueHouses = Array.from(new Set(houses)).sort()

// ahora escribo en el html creando el select de las casas desduplicadas
let selectList = document.createElement("select");
selectList.setAttribute("id", "houseFilterSelect");
selectList.setAttribute("name", "houseFilter");
selectorDiv.appendChild(selectList);

// creo y escribo en el hml las options del select
for (let i = 0; i < uniqueHouses.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", uniqueHouses[i]);
    option.text = uniqueHouses[i];
    selectList.appendChild(option);
}

// agregar la opcion de "sin casa seleccionada" para comprobar el reset

let newOption = document.querySelector("#houseFilterSelect");
let addOption = document.createElement("option");
addOption.text = "Show all Characters";
addOption.setAttribute("value", "allCharacters");
addOption.setAttribute("selected", "true");
newOption.add(addOption);




//////////////////////////////////////////////////
// CREANDO EL CONTENIDO DE LAS TARJETS EN EL HTML
// esta es la base de mi HTML
// <div class="characterCard">
//            <h3 class="name">Name: John Snow</h3>
//                <h4 class="age">Age: 24</h4>
//                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png" alt="" class="picture">
//                <img src="https://storiesfromthemuseumfloor.files.wordpress.com/2016/12/house-stark-main-shield.png" alt="" class="shield">
//                 <h4 class="house">House: Stark</h4>
//        </div>


// busco el contenedor de los personajes

const characterContainer = document.querySelector('#characters');

//Delete the HTML content of a an html element
characterContainer.innerHTML = '';

// recorro el array y creo el contenido en el HTML
function paintCharacters(characters) {
  
characters.forEach((character) => {
    // Creo un div para las tarjetas con document.createElement
  const characterDiv = document.createElement('div');
   // le añado la clase que le quiero dar de acuerdo a mi esquema 
  characterDiv.className = 'characterCard';
 // en el div creo el contenido dentro de la tarjeta con Inner HTML
  characterDiv.innerHTML = `
    <h3 class='name'>Name: ${character.name}</h3>
    <h4 class="age">Age: ${character.age}</h4>
    <img src="${character.picture}" alt="${character.name}" class="picture">
    <img src="${character.shield}" alt="${character.house}" class="shield">
    <h4 class="house">House of: <br>${character.house}</h4>
    `;

// Añado este nuevo <div> como hijo del contenedor
//The append() method inserts specified content at the end of the selected elements.
//Tip: To insert content at the beginning of the selected elements, use the prepend() method.
    characterContainer.append(characterDiv);
  });
}


// Crea ahora un botón que diga Convertir a caminantes y que tenga la id whitewalker. Añade un evento al botón para que repinte todos los personajes cambiando su imagen por la del líder de los Caminantes Blancos con url https://s2.r29static.com/bin/entry/8ce/x/1837616/image.png. Comprueba que todas las imágenes de los personajes son ahora la nueva imagen.

// CREAR EL BOTON DE TRANSFORM Y AÑADIRLE LA FUNCIONALIDAD DEL CAMBIO DE IMAGENES

// 1. Create the button
const buttonTransform = document.createElement("button");
buttonTransform.setAttribute("id", "white-walker");
buttonTransform.innerHTML = "Transform to Whitewalkers";

// 2. Append in HTML
const body = document.getElementsByTagName("body")[0];
body.appendChild(buttonTransform);

// 3. Add event handler

function handleClickWhiteWalkerButton() {
  characterContainer.innerHTML = ''; // primero hay que vaciar el html para que no se acumulen debajo las demas tarjetas
  const whiteWalkers = characters.map((character) => {
    return {
      ...character,
      picture: 'https://s2.r29static.com/bin/entry/8ce/x/1837616/image.png',
    };
  });
  paintCharacters(whiteWalkers);
}
const whiteWalkerButton = document.querySelector('#white-walker'); 
whiteWalkerButton.addEventListener('click', handleClickWhiteWalkerButton);

  //function handleClickWhiteWalkerButton () {
  // const leadImage = characters.map ((character)=>{
  //    if (character.picture !== ""){  // /// --_>>> VER CODIGO ARRIBA, NO ES NECESARIO HACER ESTE IF, CON EL RETURN BASTA
  //      character = {...character, picture: "https://s2.r29static.com/bin/entry/8ce/x/1837616/image.png"};
  //    }  /// TAMPOCO ES NECESARIO HACER ESTA DECLARACION, CON HACER RETURN DE ...CHARACTER ES SUFICIENTE PARA ESTE EJERCICIO
  //    paintCharacters(leadImage)
  //  });
 // }
 //const whiteWalkerButton = document.querySelector("#whiteWalker")
// whiteWalkerButton.addEventListener('click', handleClickWhiteWalkerButton)

// ESTE ES EL BOTON QUE REVIERTE A LOS CAMINANTES BLANCOS
// 1. Create the button
const buttonRevert = document.createElement("button");
buttonRevert.setAttribute("id", "revert");
buttonRevert.innerHTML = "Revert Transformation";

// 2. Append in HTML
body.appendChild(buttonRevert);

// 3. Add event handler

function revertWhiteWalkerButton (){
  characterContainer.innerHTML = ''; // primero hay que vaciar el html para que no se acumulen debajo las demas tarjetas
  paintCharacters(characters);
}
const revertButton = document.querySelector('#revert');
revertButton.addEventListener('click', revertWhiteWalkerButton);


////// FUNCIONALIDAD DEL SELECT

function handleChangeSelect (event){
  characterContainer.innerHTML = ''; // primero hay que vaciar el html para que no se acumulen debajo las demas tarjetas
  houseToFilter = event.target.value
    const selectedHouse = characters.filter((character) => {
    if(!houseToFilter) return true
    return character.house === houseToFilter
    });
    paintCharacters(selectedHouse);
   }
 
const mySelect = document.querySelector('#houseFilterSelect');
mySelect.addEventListener('change', handleChangeSelect)

// Invoco paintShoes para pintar los zapatos
paintCharacters(characters);

