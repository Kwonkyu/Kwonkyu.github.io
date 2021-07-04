import { onClickLoginButton } from "./onClickLoginButton.js";

function initLoginRequestButton() {
  document
    .getElementById("button-login-request")
    .addEventListener("click", onClickLoginButton);
}

window.onload = () => {
  initLoginRequestButton();
};
