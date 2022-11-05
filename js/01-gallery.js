import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`);

for (const item of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = "";

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", item.preview);
  img.dataset.source = item.original;
  img.alt = item.description;

  link.appendChild(img);
  galleryItem.appendChild(link);
  gallery.appendChild(galleryItem);
}

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const clickedElement = e.target;
  if (clickedElement.nodeName !== "IMG") return;

  const largeUrl = clickedElement.dataset.source;
  const alt = clickedElement.alt;

  const modal = instance.element();
  const modalImg = modal.querySelector("img");
  modalImg.src = largeUrl;
  modalImg.alt = alt;

  instance.show();
});
