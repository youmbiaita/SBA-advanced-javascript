// File: app.mjs

import { fetchData, postData } from './apiCall.mjs';
import { renderGallery, renderError } from './other.mjs';

//const API_KEY = "live_wyM7IRDoOf36EVWhNv3v371zpc0H1osTq5P5XGEX2GmnoJEayuYwQfwhhCgqnyOY";
const API_KEY = "live_XO5L5M0cPaKlt6cMAHpaaNI4hhrviNHQJrRTESVN9HteHJzii57FHKJwXwDnn79y";
const API_URL = "https://api.thecatapi.com/v1";

const petSelect = document.getElementById("petSelect");

async function initialLoad() {
    try {
        const response = await axios("https://api.thecatapi.com/v1/breeds");
        const pets = await response.data;
        pets.forEach(pet => {
            const option = document.createElement("option");
            option.value = pet.id;
            option.textContent = pet.name;

            petSelect.appendChild(option)
        });
    } catch (error) {
        console.error("Error loading search", error)
    }
}

initialLoad();

async function searchCats(query, page = 1, limit = 10, hasBreeds = 0) {
    //const url = `${API_URL}/images/search?limit=${limit}&page=${page}&q=${query}&has_breeds=${hasBreeds}&api_key=${API_KEY}`;
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${query}`;
    console.log(url)
    try {
        const data = await fetchData(url);
        renderGallery(data);
        // how to get POST works
        const classVote = document.getElementsByClassName("vote");
        const imageId = document.getElementById("picture-id").value;

        Array.from(classVote).forEach(v => {
            v.firstElementChild.addEventListener("click", evt => {
               vote(imageId, 1); 
                evt.target.style.color = "green";
                evt.target.parentElement.lastElementChild.style.color = "black";
            })
            v.lastElementChild.addEventListener("click", evt => {
                vote(imageId, -1);
                evt.target.style.color = "red";
                evt.target.parentElement.firstElementChild.style.color = "black";
            })
        });
    } catch (error) {
        renderError(error);
    }
}

async function vote(imageId, voteType) {
    try {
        await postData("https://api.thecatapi.com/v1/votes", {image_id: imageId, value: voteType}, API_KEY).then(d => {
             
        });
    } catch (error) {
        renderError(error);
    }
}

// Event listeners
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.getElementById('petSelect').value;
    const limit = parseInt(document.getElementById("limit").value);
    const page = parseInt(document.getElementById("page").value);
    const hasBreeds = document.getElementById("has-breeds").value === "on" ? 1 : 0;
    searchCats(query, page, limit, hasBreeds);
});

document.getElementById('gallery').addEventListener('click', function (event) {
    if (event.target.classList.contains('vote-btn')) {
        const imageId = event.target.dataset.imageId;
        const voteType = event.target.dataset.voteType;
        voteCat(imageId, voteType);
    }
});

const btnSearch = document.getElementById("btn-submit");
btnSearch.addEventListener("click", evt => {
    searchCats(petSelect.value);
})


