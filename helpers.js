let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}


let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY *diffY));
}

function getDistanceHint(distance) {
    if (distance < 30) {
        return "Hirviendo";
    } else if (distance < 50) {
        return "Caliente, Caliente";
    } else if (distance < 100) {
        return "Caliente";
    } else if (distance < 200) {
        return "Tibio";
    } else if (distance < 300) {
        return "Frio";
    } else if (distance < 450) {
        return "Frio, Frio";
    } else {
        return "¡Congelado!";
    }
}