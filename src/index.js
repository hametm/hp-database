import './style.css';
import { getRandomWow, getWowByMovie, getWowByYear, getWowByDirector, getWowByOccurrence } from './getWows';
import Owen from "./images/owen-flipped.png";

const randomButton = document.getElementById("random-button");
const searchButton = document.getElementById("search-button");
const wowContainer = document.getElementById("wow-container")
const container = document.createElement("div");
container.classList.add("container");

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
    container.classList.add("container");

    const movie = document.createElement("h2");
    movie.textContent = `${data[0].movie} (${data[0].year})`;

    const director = document.createElement("h3");
    director.textContent = `Directed by ${data[0].director}`;

    const character = document.createElement("h3");
    character.textContent = `Character: ${data[0].character}`;

    const line = document.createElement("p");
    line.textContent = `Full quote: "${data[0].full_line}"`;

    const occurrence = document.createElement("p");
    occurrence.textContent = `Wow ${data[0].current_wow_in_movie} of ${data[0].total_wows_in_movie}`;

    const audio = document.createElement("audio");
    const source = document.createElement("source");
    // audio.controls = "controls";
    audio.autoplay = "autoplay";
    audio.src = data[0].audio;

    const owenImage = document.createElement("img");
    owenImage.src = Owen;
    owenImage.alt = "";

    // const video = document.createElement("video");
    // video.controls = "controls";
    // const source = document.createElement("source");
    // source.src = data[0].video["1080p"];
    
    // video.appendChild(source);
    audio.appendChild(source);
    container.append(movie, director, character, line, occurrence, audio);
    wowContainer.append(container, owenImage);
}

randomButton.onclick = () => getWow(getRandomWow, "");

searchButton.onclick = () => {
    const categories = document.getElementById("categories");
    const input = document.getElementById("search-bar");
    let category = categories.value;
    let searchValue = input.value;

    switch(category) {
        case "movie":
            getWow(getWowByMovie, searchValue);
            break;
        case "year":
            getWow(getWowByYear, searchValue);
            break;
        case "director":
            getWow(getWowByDirector, searchValue);
            break;
        case "occurrence": 
            getWow(getWowByOccurrence, searchValue);
            break;
    }
}

const input = document.getElementById("search-bar");
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") searchButton.click();
})

