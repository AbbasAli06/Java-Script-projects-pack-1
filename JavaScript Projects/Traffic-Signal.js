let cycleInterval;
let currentColor = 'red';

function setLight(color) {
    // Deactivate all lights first
    document.querySelectorAll('.light').forEach(light => {
        light.classList.remove('active');
    });
    
    // Activate the specified color
    if (color !== 'black') {
        document.querySelector(`.${color}`).classList.add('active');
    }
}

function nextPhase() {
    switch(currentColor) {
        case 'red':
            setLight('green');
            currentColor = 'green';
            break;
        case 'green':
            setLight('yellow');
            currentColor = 'yellow';
            break;
        case 'yellow':
            setLight('red');
            currentColor = 'red';
            break;
    }
}

function startCycle() {
    stopCycle();
    setLight('red');
    cycleInterval = setInterval(() => {
        nextPhase();
    }, currentColor === 'yellow' ? 2000 : 5000); // Yellow lasts 2 seconds, others 5 seconds
}

function stopCycle() {
    clearInterval(cycleInterval);
    setLight('red');
    currentColor = 'red';
}

// Initialize with red light
setLight('red');