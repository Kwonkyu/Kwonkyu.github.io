import { LocalStorageKeyword } from "../keyword.js";
import { MEMBER_API_URL } from "../url.js";
import { requestOption } from "../requestOption.js";

export async function getTeams() {
  const token = localStorage.getItem(LocalStorageKeyword.token);
  const id = localStorage.getItem(LocalStorageKeyword.id);
  const result = await fetch(
    `${MEMBER_API_URL}/${id}/teams`,
    requestOption.get(token)
  );

  const jsonResult = await result.json();
  if (result.ok) {
    return jsonResult;
  } else {
    alert(`${jsonResult["error"]}: ${jsonResult["message"]}`);
    return null;
  }
}
