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
  var lightbox = new SimpleLightbox(".gallery a", {
    //   delay(500ms); captionsData,
  });
  window.addEventListener("keydown", onCloseModalByEsc);
  //   onCreateCardInModal();
};

// function onCreateCardInModal() {

// }

function onCloseModalByEsc(event) {
  if (event.code === "Escape") {
    // lightbox.close();
    window.removeEventListener("keydown", onCloseModalByEsc);
  }
}

galleryContainer.addEventListener("click", onOpenInModalCard);
