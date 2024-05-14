// File: app.mjs

import { fetchData, postData } from './apiCall.mjs';
import { renderGallery, renderError } from './other.mjs';

const API_KEY = "live_wyM7IRDoOf36EVWhNv3v371zpc0H1osTq5P5XGEX2GmnoJEayuYwQfwhhCgqnyOY";
const API_URL = " https://api.thecatapi.com/v1";

async function searchCats(query, page = 1) {
    try {
        const data = await fetchData(`${API_URL}/images/search?limit=10&page=${page}&q=${query}&api_key=${API_KEY}`);
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
    searchCats(query);
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

