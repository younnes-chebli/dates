////// 1

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

////// 2

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

////// 3

const dateAndTimeDisplay = document.getElementById("date-after-display-container");
let numberDisplay = document.getElementById("number-display");
let dateDisplay = document.getElementById("date-after-display");
const numberInput = document.getElementById("number-input");

const displayDateAndTime = (h, date) => {
    numberDisplay.innerText = h;
    dateDisplay.innerText = date;
    dateAndTimeDisplay.removeAttribute("hidden");
};

const hToMs = (h) => {
    return Math.floor(h * (60*60*1000));
};

const numberHandling = (e) => {
    let hValue;
    if(e.target.value == "") {
        hValue = 0;
    } else {
        hValue = e.target.value;
    }
    const msValue = hToMs(hValue);
    const msfuture = now.getTime() + msValue;
    let dateFuture = new Date(msfuture);
    dateFuture = dateFuture.toLocaleString();
    displayDateAndTime(hValue, dateFuture);
};

const init = () => {
    dateAndTimeDisplay.setAttribute("hidden", "");
}

numberInput.addEventListener("input", numberHandling);
numberInput.addEventListener("focusout", init);

