document.addEventListener('DOMContentLoaded', () => {
    const trainForm = document.getElementById('train-form');
    const resetButton = document.getElementById('reset-board');

    const defaultBoardState = {
        platform: '-',
        provider: '--',
        trainType: '--',
        trainNumber: '----',
        destination: '--------',
        time: '--:--',
        stops: 'Vietato oltrepassare i binari'
    };

    const updateBoard = (data) => {
        // Update platform
        document.querySelector('.platform-number').textContent = data.platform;

        // Update provider and train info
        document.querySelector('.provider').textContent = data.provider;
        document.querySelector('.train-type').textContent = data.trainType;
        document.querySelector('.train-number').textContent = data.trainNumber;

        // Update destination and time
        document.querySelector('.destination-bar').textContent = data.destination;
        document.querySelector('.time-bar').textContent = data.time;

        // Update stops with conditional prefix
        document.querySelector('.stops-bar span').textContent = 
            data.stops === 'Vietato oltrepassare i binari' 
                ? data.stops 
                : `Ferma a: ${data.stops}`;
    };

    trainForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            platform: document.getElementById('platform').value || '-',
            provider: document.getElementById('provider').value || '--',
            trainType: document.getElementById('train-type').value || '--',
            trainNumber: document.getElementById('train-number').value || '----',
            destination: document.getElementById('destination').value || '--------',
            time: document.getElementById('time').value || '--:--',
            stops: document.getElementById('stops').value || 'Vietato oltrepassare i binari'
        };

        updateBoard(formData);
    });

    resetButton.addEventListener('click', () => {
        trainForm.reset();
        updateBoard(defaultBoardState);
    });
});

// Clock functionality for the analog clock only
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours + minutes / 60) * 30;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.querySelector('.hour').style.transform = 
        `rotate(${hourDeg}deg) translateX(-50%)`;
    document.querySelector('.minute').style.transform = 
        `rotate(${minuteDeg}deg) translateX(-50%)`;
    document.querySelector('.second').style.transform = 
        `rotate(${secondDeg}deg) translateX(-50%)`;
}

setInterval(updateClock, 1000);
updateClock();