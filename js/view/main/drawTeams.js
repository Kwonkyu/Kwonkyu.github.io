export function drawTeam(rootDiv, team) {
  const template = `
    <div>
      <a href="/teams/view.html?id=${team["id"]}">Team ${team["id"]} - ${team["teamName"]}</a>
    </div>
  `;
  rootDiv.innerHTML += template;
}

export function drawTeams(rootDiv, jsonResult) {
  const teams = jsonResult["teams"];
  teams.forEach((team) => {
    drawTeam(rootDiv, team);
  });
}
