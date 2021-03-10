const charactersURL = 'https://swapi.dev/api/people/'
const characterSelector = '#character-chart'
const barCharOpts = {
    axisX: {
        showLabel: true,
        showGrid: false,
    },
    axisY: {
        onlyInteger: true,
        showGrid: false,
    },

}

const getCharacters = async () => {
    const response = await fetch(charactersURL)
    const data = await response.json()
    const filmsData = data
    const graphData = filmsData.results.map((data) => {
        return {
            name: data.name,
            films: data.films
        }
    });
    const character = graphData.map((character) => character.name)
    const numberOfFilms = graphData.map((films) => films.films.length).sort()
    const barCharData = {
        labels: character,
        series: [numberOfFilms],
    };
    new Chartist.Bar(characterSelector, barCharData, barCharOpts);
}

getCharacters()