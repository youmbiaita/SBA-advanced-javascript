

export function renderGallery(data) {
    const galleryElement = document.getElementById("gallery");
    galleryElement.innerHTML = "";
    data.forEach(dog => {
        const dogElement = document.createElement("div");
        dogElement.classList.add("dog-item");
        dogElement.innerHTML = `
            <img src="${dog.url}" alt="Dog">
            <div>
                <button class="vote-btn" data-image-id="${dog.id}" data-vote-type="up">Vote Up</button>
                <button class="vote-btn" data-image-id="${dog.id}" data-vote-type="down">Vote Down</button>
            </div>
        `;
        galleryElement.appendChild(dogElement);
    });
}

export function renderError(error) {
    const errorElement = document.getElementById("error");
    errorElement.textContent = `Error: ${error.message}`;
}
