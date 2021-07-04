import { REGISTER_API_URL } from "../../../serverAPI/url";
import { requestOption } from "../../../serverAPI/requestOption";

const idForm = document.getElementById("form-id");
const nameForm = document.getElementById("form-name");
const passwordForm = document.getElementById("form-password");
const errorText = document.getElementById("error-text");

export async function onClickRegisterButton() {
  const result = await fetch(
    REGISTER_API_URL,
    requestOption.post({
      userId: idForm.value,
      username: nameForm.value,
      password: passwordForm.value,
    })
  );

  response = await result.json();
  if (result.ok) {
    alert(`Registered as ${result.userId}!`);
    location.href = "/login.html";
  } else {
    errorText.innerText = `${response["error"]}: ${response["message"]}`;
  }
}
