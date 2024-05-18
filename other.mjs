

export function renderGallery(data) {
    const galleryElement = document.getElementById("gallery");
    galleryElement.innerHTML = "";
    data.forEach(cat => {
        const catElement = document.createElement("div");
        catElement.classList.add("cat-item");
        catElement.innerHTML = `

            <img src="${cat.url}" alt="Cat">
            <input type="hidden" id="picture-id" value="${cat.id}">
            <div class="vote">
                <span class="material-symbols-outlined">thumb_up</span>
                          
                <span class="material-symbols-outlined">thumb_down</span>                
            </div>
        `;
        galleryElement.appendChild(catElement);
    });
}

export function renderError(error) {
    const errorElement = document.getElementById("error");
    errorElement.textContent = `Error: ${error.message}`;
}
