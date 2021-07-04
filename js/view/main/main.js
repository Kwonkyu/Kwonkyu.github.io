import { LocalStorageKeyword } from "../../serverAPI/keyword.js";
import { getTeams } from "../../serverAPI/member/getTeams.js";
import { drawTeams } from "./drawTeams.js";

function readJWT() {
  const jwt = localStorage.getItem("JWT");
  return jwt == null ? "" : jwt;
}

window.onload = async () => {
  // load
  const jwt = readJWT();
  if (jwt.length == 0) {
    // redirect login page.
    location.href = "/login.html";
  } else {
    // load teams.
    const result = await getTeams();
    if (result == null) {
      location.href = "/login.html";
    }

    drawTeams(document.getElementById("my-teams"), result);
    const username = localStorage.getItem(LocalStorageKeyword.name);
    document.getElementById(
      "welcome-message"
    ).innerText = `Welcome, ${username}!`;
  }
};
