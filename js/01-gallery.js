import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryItemsCard = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML("afterbegin", galleryItemsCard);

const onOpenInModalCard = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  onCreateCardInModal(event.target.getAttribute("data-source"));
};

let instance = null;

function onCreateCardInModal(link) {
  instance = basicLightbox.create(`
    <img src="${link}" class="gallery__image">
`);
  instance.show();
  window.addEventListener("keydown", onCloseModalByEsc);
}

function onCloseModalByEsc(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onCloseModalByEsc);
  }
}

galleryContainer.addEventListener("click", onOpenInModalCard);
