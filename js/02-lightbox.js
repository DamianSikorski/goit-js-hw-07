import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

for (const item of galleryItems) {
  const li = document.createElement("li");

  const link = document.createElement("a");
  link.classList.add("gallery__item");
  link.href = item.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.alt = item.description;

  li.appendChild(link);
  link.appendChild(img);
  galleryList.appendChild(li);
}

console.log(galleryItems);

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function (e) {});

console.log(SimpleLightbox);
