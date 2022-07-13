async function getRandomWow() {
    const response = await fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random", {mode: "cors"});
    const data = await response.json();
    return data;
}

async function getWowByMovie(movie) {
    const response = await fetch(`https://owen-wilson-wow-api.herokuapp.com/wows/random?movie=${movie}`, {mode: "cors"});
    const data = await response.json();
    return data;
}

async function getWowByYear(year) {
    const response = await fetch(`https://owen-wilson-wow-api.herokuapp.com/wows/random?year=${year}`, {mode: "cors"});
    const data = await response.json();
    return data;
}

// Doesn't work??
async function getWowByDirector(director) {
    const response = await fetch(`https://owen-wilson-wow-api.herokuapp.com/wows/random?director=${director}`, {mode: "cors"});
    const data = await response.json();
    return data;
}

async function getWowByOccurrence(number) {
    const response = await fetch(`https://owen-wilson-wow-api.herokuapp.com/wows/random?wow_in_movie=${number}`, {mode: "cors"});
    const data = await response.json();
    return data;
}

export { getRandomWow, getWowByMovie, getWowByYear, getWowByDirector, getWowByOccurrence};