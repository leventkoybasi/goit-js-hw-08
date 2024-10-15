import images from "./imgData.js";

const imgContainer = document.querySelector(".gallery");

images.forEach((image) => {
  const imgElement = `<li class="gallery-item" style="cursor: url('../assets/curserImg/cursor.png'), auto !important">
  <a class="gallery-link" href=${image.original}>
    <img
      class="gallery-image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
</li>`;
  imgContainer.innerHTML += imgElement;
});

imgContainer.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedImg = e.target;

  if (selectedImg.classList.contains("gallery-image")) {
    const largeImageURL = selectedImg.dataset.source;
    const lightbox = basicLightbox.create(`
      <img src="${largeImageURL}" alt="${selectedImg.alt}" style="border: 9px solid black">
    `);

    lightbox.show();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lightbox.close();
      }
    });
  }
});
