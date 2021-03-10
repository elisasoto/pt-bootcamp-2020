function Header (){
    const date = new Date() 
    let weekday = new Intl.DateTimeFormat('es-ES', {weekday: 'long'}).format(date)
    let month = new Intl.DateTimeFormat('es-ES', {month: 'long'}).format(date)

    return (
        <div className="head">
                <div className="headerobjectswrapper">
                <div className="weatherforcastbox">
                    <span style={{fontStyle: "italic"}}>Weatherforcast for the next 24 hours: Plenty of Sunshine</span>
                    <br></br>
                    <span>Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</span>
                </div>
                <header>Fakenews Today</header>
                 </div>
                 <div className="subhead">Madrid, ES - {weekday},{date.getDay()} de {month} de {date.getUTCFullYear()} </div>
        </div>
    )
}

export default Header