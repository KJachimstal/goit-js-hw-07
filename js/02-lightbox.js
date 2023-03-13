import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("ul.gallery");

for (const image of galleryItems) {
  const galleryItem = document.createElement("a");
  galleryItem.classList.add("gallery__item");

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = image.preview;
  img.alt = image.description;
  img.setAttribute("data-source", image.original);

  galleryItem.insertAdjacentElement("afterbegin", img);
  gallery.insertAdjacentElement("afterbegin", galleryItem);
}

console.log(gallery);

gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
    }
  });
}

console.log(galleryItems);
