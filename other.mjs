

export function renderGallery(data) {
    const galleryElement = document.getElementById("gallery");
    galleryElement.innerHTML = "";
    data.forEach(dog => {
        const dogElement = document.createElement("div");
        dogElement.classList.add("dog-item");
        dogElement.innerHTML = `
            <img src="${dog.url}" alt="Dog">
            <div>
                <button class="like-btn" data-image-id="${dog.id}" data-vote-type="up">like</button>
            </div>
        `;
        galleryElement.appendChild(dogElement);
    });
}

export function renderError(error) {
    const errorElement = document.getElementById("error");
    errorElement.textContent = `Error: ${error.message}`;
}
