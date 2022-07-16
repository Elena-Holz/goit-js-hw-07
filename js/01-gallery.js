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
  e.preventDefoult();
  if (!event.target.classList.contains('.gallery_image')) {
    return
  } const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" width="800" height="600">
`).show()
  
  if (instance.visible) {  
        window.addEventListener("keydown", onCloseESC);
        window.addEventListener("click", mouseClick);
  };
        function onCloseESC(event) {
        if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onCloseESC);
        }
    }
        function mouseClick(event) {
        if(event.code === "mouseEnter") {
            instance.close();
    window.removeEventListener("click", mouseClick);
        }
    }
    }



//     window.addEventListener('keydown', (event) => {
//       console.log(event.code);
//     if (event.code === 'Escape') {
//       instance.close();
//       // window.removeEventListener('keydown', onCloseModal); 
//   };
// });
// };
  
//   document.addEventListener('keyup', onCloseModal);


// function onCloseModal(event) {
//   console.log(event.code);
//     if (event.code === 'Escape') {
//       instance.close();
//       window.removeEventListener('keydown', onCloseModal);
      
//   };
// };