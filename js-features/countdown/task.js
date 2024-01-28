function secondsToString(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const timerSpan = document.getElementById('timer');
const time = timerSpan.textContent.split(':').map(item => Number(item));
let timerValue = time[0] * 3600 + time[1] * 60 + time[2];

const timerInterval = setInterval(() => {
    timerValue--;
    timerSpan.textContent = `${secondsToString(timerValue)}`;

    if (timerValue === 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}, 10);