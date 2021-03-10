// creation of the HTML elements
const body = document.getElementsByTagName("body")[0];

const containerDiv = document.createElement("div");
containerDiv.className='container';
body.appendChild(containerDiv)

containerDiv.innerHTML = `
  <div class="center-column">
  <div id="bulb" class="bulb bulb-off"></div>
  <div class="bulb-down"></div>
</div>

<div class="center">
  <label> OFF </label>
  <div id="toggle-container">
    <button id="toggle" class="toggle toggle-off"></button>
  </div>
  <label> ON </label>
</div>
`

//declaring the swap functionality
const swapClasses = (element, add, remove) => {
  element.classList.add(add);
  element.classList.remove(remove);
};

const lightOff = document.querySelector('#bulb')
const toggleOff = document.querySelector('#toggle')

// setting the intervals
const intervalBulb = setInterval(() => {
  bulb.classList.toggle("bulb-off");
  bulb.classList.toggle("bulb-on");
}, 3000)

const intervalToggle = setInterval(() => {
  toggle.classList.toggle("toggle-off");
  toggle.classList.toggle("toggle-on");
}, 5000)

// button functionality using swap function
function handleToggleButton (){
  clearInterval(intervalBulb);            clearInterval(intervalToggle);
  
  swapClasses(bulb, 'bulb-off', 'bulb-on');
  swapClasses(toggle, 'toggle-off', 'toggle-on');
}

const toggleOffBtn = document.querySelector('#toggle'); 
toggleOffBtn.addEventListener('click', handleToggleButton);

