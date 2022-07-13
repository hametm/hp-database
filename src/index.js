import './style.css';
import { getRandomWow, getWowByMovie, getWowByYear, getWowByDirector, getWowByOccurrence } from './getWows';

const randomButton = document.getElementById("random-button");
const searchButton = document.getElementById("search-button");
const wowContainer = document.getElementById("wow-container")
const container = document.createElement("div");
container.classList.add("container");
wowContainer.appendChild(container);

async function getWow(wowFunction, parameter) {
    try {
        const data = await wowFunction(parameter);
        displayWow(data);
    } catch(error) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Wow! We couldn't find any matches."
        container.appendChild(errorMessage);
    }
}

function displayWow(data) {
    container.innerHTML = "";

    const topRow = document.createElement("h2");
    topRow.classList.add("topRow");
    const bottomRow = document.createElement("p");
    bottomRow.classList.add("bottomRow");

    topRow.textContent = `${data[0].movie} (${data[0].year}) |
            Directed by ${data[0].director} |
            Role: ${data[0].character}`;

    bottomRow.textContent = `Full quote (wow ${data[0].current_wow_in_movie} of ${data[0].total_wows_in_movie}):
            "${data[0].full_line}"`;

    const audio = document.createElement("audio");
    const source = document.createElement("source");
    audio.controls = "controls";
    audio.autoplay = "autoplay";
    audio.src = data[0].audio;
    audio.appendChild(source);

    container.append(topRow, bottomRow, audio);
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

