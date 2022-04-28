import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryItemsCard = galleryItems
  .map(({ preview, original, description }) => {
    galleryContainer.insertAdjacentHTML(
      "afterbegin",
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    );
  })
  .join("");

const onOpenInModalCard = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  onCreateCardInModal();
};

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

function onCreateCardInModal() {
  lightbox.on("show.SimpleLightbox");
}

galleryContainer.addEventListener("click", onOpenInModalCard);
