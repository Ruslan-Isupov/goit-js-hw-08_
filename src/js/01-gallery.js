import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery")
const galleryItemsElements = galleryItems.map(({preview, original, description}) => { return `
<div class="gallery__item">
<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
} ).join("")

gallery.insertAdjacentHTML("beforeend",galleryItemsElements)
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay : 250});

console.log(galleryItems);
