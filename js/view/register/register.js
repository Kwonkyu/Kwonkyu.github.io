import { onClickRegisterButton } from "./onClickRegisterButton.js";

function initRegisterButton() {
  document
    .getElementById("register-button")
    .addEventListener("click", onClickRegisterButton);
}

window.onload = () => {
  initRegisterButton();
};
