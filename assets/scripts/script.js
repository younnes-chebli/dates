// https://nodatime.org/TimeZones

const brussels = document.getElementById("brussels");
const now = new Date();
brussels.innerText = now.toLocaleString();

const anchorage = document.getElementById("anchorage");
const anchorageTime = now.toLocaleString("fr-BE",{timeZone: "America/Anchorage"});
anchorage.innerText = anchorageTime;

const reykjavik = document.getElementById("reykjavik");
const reykjavikTime = now.toLocaleString("fr-BE", {timeZone: "Atlantic/Reykjavik"});
reykjavik.innerText = reykjavikTime;

const saintPetersburg = document.getElementById("saint-petersburg");
const saintPetersburgTime = now.toLocaleString({timeZone: "Asia/Astrakhan"});
saintPetersburg.innerText = saintPetersburgTime;