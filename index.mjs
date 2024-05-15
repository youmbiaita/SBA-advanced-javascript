// File: app.mjs

import { fetchData, postData } from './apiCall.mjs';
import { renderGallery, renderError } from './other.mjs';

//const API_KEY = "live_wyM7IRDoOf36EVWhNv3v371zpc0H1osTq5P5XGEX2GmnoJEayuYwQfwhhCgqnyOY";
const API_KEY = "live_siklOA1eZTT1V7XSk3Ud2pumwWl0tZNI71VX3SMBdvXZMNcqTxNm0YqwRlnqjUjA";
const API_URL = " https://api.thecatapi.com/v1";

async function searchCats(query, page = 1, limit = 10, hasBreeds = 0) {
    const url = `${API_URL}/images/search?limit=${limit}&page=${page}&q=${query}&has_breeds=${hasBreeds}&api_key=${API_KEY}`;
    console.log(url)
    try {
        const data = await fetchData(url);
        renderGallery(data);
    } catch (error) {
        renderError(error);
    }
}

async function vote(imageId, voteType) {
    try {
        await postData(`${API_URL}/votes`, { image_id: imageId, value: voteType }, API_KEY);
    } catch (error) {
        renderError(error);
    }
}

// Event listeners
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
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

// Initial load
searchCats("dogs");
