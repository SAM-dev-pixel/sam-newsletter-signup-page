const rgxEmailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const emailInput = document.querySelector(".form-email input");
const modalSuccess = document.querySelector(".modal-success");

document.querySelector(".subscribe-btn").addEventListener("click", (e) => {
  const isValid = rgxEmailValidation.test(emailInput.value);
  if (isValid) {
    document.querySelector(".modal-success strong").textContent =
      emailInput.value;
    modalSuccess.showModal();
    e.preventDefault();
  } else {
    document.querySelector(".form-email").classList.add("error");
    e.preventDefault();
  }
});

document
  .querySelector(".dismiss-btn")
  .addEventListener("click", () => modalSuccess.close());
