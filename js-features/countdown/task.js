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
        window.location.assign('https://downloader.disk.yandex.ru/disk/c4e79abe536ee4507579525f4d43e53e806a30af7378eebcb139231a8078bcd2/65b682a8/UWAODN3gR1tPDZiKwZzOk8tbn8Kc_Bn_Ja5CIBldxBN0C6uKltFTqn57Sy36qPxJLC4A_uVm4COkzSpwcxJpSQ%3D%3D?uid=0&filename=Screenshot_20210307-191628_YouTube.jpg&disposition=attachment&hash=qAGQz9NNaPHvBzSE5Xg7aAqHnCvl10VJa/cstZLNIZAgKR5tzS7DLg4kZ6CAodXfq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&content_type=image%2Fjpeg&owner_uid=287769574&fsize=554574&hid=26c0e2c772df632055790edbd4ed56c9&media_type=image&tknv=v2')
    }
}, 1000);