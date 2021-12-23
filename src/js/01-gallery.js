import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const refs = {
  galeryOne: document.querySelector('.gallery'),
};
const readyGal = createGalery(galleryItems);

refs.galeryOne.insertAdjacentHTML('afterbegin', readyGal);

// console.log(createGalery(galleryItems));
function createGalery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: '250ms',
  captionsData: 'alt',
});
lightbox.close();
