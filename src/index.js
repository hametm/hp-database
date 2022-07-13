import './style.css';
import { getRandomWow } from './getWows';

const randomButton = document.getElementById("random-wow");
const main = document.querySelector("main");
const container = document.createElement("div");

async function loadRandomWow() {
    try {
        const data = await getRandomWow();
        displayRandomWow(data);
    } catch(error) {
        alert("error");
    }
}

function displayRandomWow(data) {
    container.innerHTML = "";
    const movie = document.createElement("h2");
    movie.textContent = `${data[0].movie} (${data[0].year})`;
    const director = document.createElement("h3");
    director.textContent = `Directed by ${data[0].director}`;
    const character = document.createElement("h3");
    character.textContent = `Playing: ${data[0].character}`;
    const video = document.createElement("video");
    video.controls = "controls";
    const source = document.createElement("source");
    source.src = data[0].video["1080p"];
    video.appendChild(source);
    container.append(movie, director, character, video);
    main.appendChild(container);
}

randomButton.onclick = loadRandomWow;