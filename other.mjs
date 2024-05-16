

export function renderGallery(data) {
    const galleryElement = document.getElementById("gallery");
    galleryElement.innerHTML = "";
    data.forEach(dog => {
        const dogElement = document.createElement("div");
        dogElement.classList.add("dog-item");
        dogElement.innerHTML = `

            <img src="${dog.url}" alt="Dog">
            <div class="vote">
                <span class="material-symbols-outlined">thumb_up</span>
                <span class="material-symbols-outlined">thumb_down</span>                
            </div>
        `;
        galleryElement.appendChild(dogElement);
    });
}

export function renderError(error) {
    const errorElement = document.getElementById("error");
    errorElement.textContent = `Error: ${error.message}`;
}
