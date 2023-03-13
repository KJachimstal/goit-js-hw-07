import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("div.gallery");

for (const image of galleryItems) {
  const newGalleryItem = document.createElement("div");
  newGalleryItem.classList.add("gallery__item");

  const newGalleryLink = document.createElement("a");
  newGalleryLink.classList.add("gallery__link");
  newGalleryLink.href = image.original;

  const newImg = document.createElement("img");
  newImg.classList.add("gallery__image");
  newImg.src = image.preview;
  newImg.alt = image.description;
  newImg.setAttribute("data-source", image.original);

  newGalleryLink.insertAdjacentElement("afterbegin", newImg);
  newGalleryItem.insertAdjacentElement("afterbegin", newGalleryLink);
  gallery.insertAdjacentElement("afterbegin", newGalleryItem);
}

gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
  <img width="800" height="600" src="${event.target.dataset.source}">
  `);
  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
