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
async function getWowByCharacter(character) {
    const response = await fetch(`https://owen-wilson-wow-api.herokuapp.com/wows/random?character=${character}`, {mode: "cors"});
    const data = await response.json();
    return data;
}

// Also doesn't work
async function getWowByNumber(number) {
    const response = await fetch(`https://owen-wilson-wow-api.herokuapp.com/wows/random?wow_in_movie=${number}`, {mode: "cors"});
    const data = await response.json();
    return data;
}

export { getRandomWow, getWowByMovie, getWowByYear, getWowByCharacter, getWowByNumber};