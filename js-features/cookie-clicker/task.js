const clickerCounter = document.getElementById('clicker__counter');
let clickerValue = Number(clickerCounter.textContent);

const clickerSpeed = document.getElementById('clicker__speed');
let lastClicked = new Date();
let currentClicked = new Date();
currentClicked = Date.now();

const cookie = document.getElementById('cookie');

let cookieSizeModifier = 20;
cookie.onclick = () => {
    clickerValue++;
    clickerCounter.textContent = String(clickerValue);

    [lastClicked, currentClicked] = [currentClicked, Date.now()];
    clickerSpeed.textContent = (1 / ((currentClicked - lastClicked) / 1000)).toFixed(2);

    cookie.width += cookieSizeModifier;
    cookie.height += cookieSizeModifier;
    cookieSizeModifier = -cookieSizeModifier;

};
