"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelectorAll(".show-modal");

//Function to display the content of the modal
function displayModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

//Function to hide the content of the modal
function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener("click", displayModal);

//Close our modal using the close button
closeModal.addEventListener("click", hideModal);

//Close our modal by clicking on the Overlay
overlay.addEventListener("click", hideModal);

//Close our modal by clicking on the escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hideModal();
  }
});
