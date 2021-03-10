  const apiUrl =
    'https://api.currencyfreaks.com/latest?apikey=e4e6767e5e13430c8cd63326eb5e3fb3';
  
  
  
  const getCurrencies = async() => {
      const response = await fetch(apiUrl)
      
      const data = await response.json()
  
      const currencies = Object.keys(data.rates)

        // painting HTML File
        const body = document.getElementsByTagName("body")[0];

        const containerDiv = document.createElement("div");
        containerDiv.className='container';
        body.appendChild(containerDiv)

        containerDiv.innerHTML = `


        <label for="quantity">¿Cuanto dinero quieres cambiar?</label>
        <input type="number" id="quantity" name="quantity" min="1" max="100000000">

        <label for="ogCurrency">¿Qué moneda tienes?</label>
        <select name="ogCurrency" id="ogCurrency">
            
        </select>


        <label for="endCurrency">¿A qué moneda quieres cambiar?</label>

        <select name="endCurrency" id="endCurrency">
            
        </select>

        <button id="exchange-button">Convertir</button>

        <h2 class="message"></h2>
        `

        // selecciono los elementos del html que me van a servir

        const ogCurrencySelect = document.getElementById("ogCurrency");
        const endCurrencySelect = document.getElementById("endCurrency");
        const quantityInput = document.getElementById("quantity");
        const message = document.querySelector('.message');
        const exchangeButton = document.getElementById('exchange-button')

        // creo y escribo en el hml las options del select de og y de end
        for (let i = 0; i < currencies.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", currencies[i]);
            option.text = currencies[i];
            ogCurrencySelect.appendChild(option);
        }

        for (let i = 0; i < currencies.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", currencies[i]);
            option.text = currencies[i];
            endCurrencySelect.appendChild(option);
        }

        // elijo el valor del elemento para pintarlo en el html

        exchangeButton.addEventListener('click', ()=>{
            

            ogCurrencySelect.addEventListener('change', calculate);
            endCurrencySelect.addEventListener('change', calculate);
            quantityInput.addEventListener('change', calculate)


            function exchange (ogCurrency, endCurrency, amount){
                
            }

            function calculate() {
                const from_currency = ogCurrencySelect.value;
                const to_currency = endCurrencySelect.value;
                const amount = quantityInput.value; 

                
                
                const baseValue = data.rates[data.base];
                const ogCurrencyValue = data.rates[from_currency];
                const endCurrencyValue = data.rates[to_currency];
                const baseAmount = (amount * baseValue) / ogCurrencyValue;
                const endAmount = ((baseAmount * endCurrencyValue) / baseValue).toFixed(2);
                message.innerText = `Tu cambio de  ${amount} ${from_currency} son ${endAmount} ${to_currency}`
                    
            }
            calculate();
        })

}

getCurrencies()






