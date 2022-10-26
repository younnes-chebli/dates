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
const saintPetersburgTime = now.toLocaleString("fr-BE",{timeZone: "Europe/Moscow"});
saintPetersburg.innerText = saintPetersburgTime;

//////

const msToDays = (ms) => {
    return Math.floor(ms / (24*60*60*1000));
};

const nowInMs = now.getTime();
const birthdate = new Date(1993, 6, 20);
const birthdateInMs = birthdate.getTime();
const birthdateToNow = nowInMs - birthdateInMs;
const birthdateToNowInDays = msToDays(birthdateToNow);
const birthdateToNowDisplay = document.getElementById("birthdateToNow");
birthdateToNowDisplay.innerText = birthdateToNowInDays;