import { galleryItems } from './gallery-items.js';
// Change code below this line

const divContainer = document.querySelector('.gallery');
const imgTeg = document.querySelector('.gallery__image');
const imgCard = getImgCart(galleryItems);

divContainer.insertAdjacentHTML('beforeend', imgCard);

function getImgCart(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
}).join("");
}

divContainer.addEventListener('click', onDivContainerClick);

function onDivContainerClick(event) {
  // event.preventDefault();
  if (!event.target.classList.contains('.gallery_image')) {
    return
  } const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" width="800" height="600">
`)
  {
    onShow: () => window.addEventListener("keydown", onCloseESC);
    onclose: () => window.remove.EventListener("keydown", onCloseESC);
  }
  instance.show();

  function onCloseESC(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
