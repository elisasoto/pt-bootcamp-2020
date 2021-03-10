export default function RickyMortyCard({name, status, image, location, species}){
    return (
        <div data-testid="character-card">
            <div>
                <h3>{name}</h3>
                <span>{status}</span>
            </div>

            <div>
                <img src={image} alt={`character-${name}`}/>
            </div>
           
            <div>
                <label>{location.name}</label>
                <label>{species}</label>
            </div>

        </div>
    )
}