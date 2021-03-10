const filmsURL = 'https://swapi.dev/api/films/'
const formattedYear = (dateString) => new Date(dateString).getFullYear();
const filmsSelector = '#films-chart'
const lineOpts = {
    showPoint: true, 
    lineSmooth: true, 
    axisX: {
        showGrid: false, 
        showLabel: true, 
    },
    axisY: {
        showGrid: false,
        scaleMinSpace: 40, 
        offset: 30, 
    }
}
const getFilms = async () => {
    const response = await fetch(filmsURL)
    const data = await response.json()
    const filmsData = data
    const graphData = filmsData.results.map((data) => {
        return {
            title: data.title,
            date: formattedYear(data.release_date)
        }
    });
    const films = graphData.map((film) => film.title)
    const dates = graphData.map((date) => date.date)
    const lineChartData = {
        labels: films,
        series: [dates],
    };

    new Chartist.Line(filmsSelector, lineChartData, lineOpts);

}
getFilms()
