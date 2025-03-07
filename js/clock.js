function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours + minutes / 60) * 30;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.querySelector('.hour').style.transform = `rotate(${hourDeg}deg) translateX(-50%)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteDeg}deg) translateX(-50%)`;
    document.querySelector('.second').style.transform = `rotate(${secondDeg}deg) translateX(-50%)`;
}

setInterval(updateClock, 1000);
updateClock();