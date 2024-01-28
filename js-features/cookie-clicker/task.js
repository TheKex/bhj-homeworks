const clickerCounter = document.getElementById('clicker__counter');
let clickerValue = Number(clickerCounter.textContent);

const cookie = document.getElementById('cookie');
cookie.onclick = () => {
    clickerValue++;
    clickerCounter.textContent = String(clickerValue);

};
