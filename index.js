const Modalbutton = document.querySelector("#openModal");
const modal = document.querySelector(".modal");
const cancleButton = document.querySelector("#cancle");
const background = document.querySelector(".modal__overlay");
const openModal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

Modalbutton.addEventListener("click", openModal);
cancleButton.addEventListener("click", closeModal);
background.addEventListener("click", closeModal);
