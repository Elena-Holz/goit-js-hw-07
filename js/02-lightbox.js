import { galleryItems } from './gallery-items.js';
// Change code below this line

const divContainer = document.querySelector('.gallery');
// const imgTeg = document.querySelector('.gallery__image');
const imgCard = getImgCart(galleryItems);

divContainer.insertAdjacentHTML('beforeend', imgCard);

function getImgCart(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </div>
    `
}).join("");
}


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
  });


console.log(galleryItems);


  