let winPoints = 0;
let losePoints = 0;

const winPointsCounter = document.getElementById('dead');
const losePointsCounter = document.getElementById('lost');

const holes = document.querySelectorAll('div.hole');

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            winPoints++;
            winPointsCounter.textContent = String(winPoints);
        } else {
            losePoints++
            losePointsCounter.textContent = String(losePoints);
        }
        if (winPoints === 10) {
            alert('Вы победили!');
        }
        if (losePoints === 4) {
            alert('Поражение. Вам повезет в следующий раз!');
        }
        if (winPoints === 10 || losePoints === 4) {
            winPoints = 0;
            losePoints = 0;
            winPointsCounter.textContent = String(winPoints);
            losePointsCounter.textContent = String(losePoints);
        }
    });
});