import './style.css';
import { getRandomWow, getWowByMovie, getWowByYear, getWowByCharacter, getWowByNumber } from './getWows';

const randomButton = document.getElementById("random-button");
const searchButton = document.getElementById("search-button");
const main = document.querySelector("main");
const container = document.createElement("div");

async function getWow(wowFunction, parameter) {
    try {
        const data = await wowFunction(parameter);
        displayWow(data);
    } catch(error) {
        alert("error");
    }
}

function displayWow(data) {
    container.innerHTML = "";

    const movie = document.createElement("h2");
    movie.textContent = `${data[0].movie} (${data[0].year})`;

    const director = document.createElement("h3");
    director.textContent = `Directed by ${data[0].director}`;

    const character = document.createElement("h3");
    character.textContent = `Playing: ${data[0].character}`;

    const line = document.createElement("p");
    line.textContent = `"${data[0].full_line}"`;

    const numberOfWows = document.createElement("p");
    numberOfWows.textContent = `Total wows: ${data[0].total_wows_in_movie}`;

    const video = document.createElement("video");
    video.controls = "controls";
    const source = document.createElement("source");
    source.src = data[0].video["1080p"];
    video.appendChild(source);
    container.append(movie, director, character, line, numberOfWows, video);
    main.appendChild(container);
}

randomButton.onclick = () => getWow(getRandomWow, "");

searchButton.onclick = () => {
    const categories = document.getElementById("categories");
    const input = document.getElementById("search");
    let category = categories.value;
    let searchValue = input.value;

    switch(category) {
        case "movie":
            getWow(getWowByMovie, searchValue);
            break;
        case "year":
            getWow(getWowByYear, searchValue);
            break;
        case "character":
            getWow(getWowByCharacter, searchValue);
            break;
        case "number": 
            getWow(getWowByNumber, searchValue);
            break;
    }
}

