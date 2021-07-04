import { LOGIN_API_URL } from "../../serverAPI/url.js";
import { requestOption } from "../../serverAPI/requestOption.js";
import { LocalStorageKeyword } from "../../serverAPI/keyword.js";

const idForm = document.getElementById("form-id");
const passwordForm = document.getElementById("form-password");
const errorText = document.getElementById("error-text");

export async function onClickLoginButton() {
  console.log(
    "requested " +
      LOGIN_API_URL +
      " with " +
      idForm.value +
      " and " +
      passwordForm.value
  );

  const result = await fetch(
    LOGIN_API_URL,
    requestOption.post({
      userId: idForm.value,
      password: passwordForm.value,
    })
  );

  console.log(result);

  response = await result.json();
  if (result.ok) {
    localStorage.setItem(LocalStorageKeyword.token, response["token"]);
    localStorage.setItem(LocalStorageKeyword.id, response["userId"]);
    localStorage.setItem(LocalStorageKeyword.name, response["username"]);
    alert("moved to main.html!");
    //location.href = "/main.html";
  } else {
    errorText.innerText = `${response["error"]}: ${response["message"]}`;
  }
}
