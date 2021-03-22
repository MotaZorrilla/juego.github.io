const WIDTH = 900;
const HEIGH = 500;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

console.log(target);

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
    clicks++;
    let distance = getDistance(e, target);
    console.log(distance);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    if (distance < 15) {
        alert(`¡Felicitaciones Encontraste El Tesoro En ${clicks} clicks!`);
        location.reload();
    }
    })