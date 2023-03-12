import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("div.gallery");
let lightBox;

for (const image of galleryItems) {
  const newGalleryItem = document.createElement("div");
  newGalleryItem.classList.add("gallery_item");

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

// document.querySelector("img.gallery__image").onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`
//     )
//     .show();
// };

console.log(galleryItems);
