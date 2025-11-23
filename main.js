const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupClose = document.querySelector(".popup-close");

function showPopup(message) {
  popupMessage.textContent = message;
  popup.classList.add("show");
}

function closePopup() {
  popup.classList.remove("show");
}

popupClose.addEventListener("click", closePopup);

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

const ctaButtons = document.querySelectorAll(".cta-button");
ctaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const message = button.getAttribute("data-message");
    showPopup(message);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
});
