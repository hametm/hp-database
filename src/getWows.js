async function getRandomWow() {
    const response = await fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random", {mode: "cors"});
    const data = await response.json();
    return data;
}

export { getRandomWow };