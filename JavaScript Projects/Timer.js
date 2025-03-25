        let timeLeft;
        let timerId = null;
        let isRunning = false;
        const defaultTime = 5 * 60; // 5 minutes in seconds

        // Elements
        const timerDisplay = document.getElementById('timer');
        const startBtn = document.getElementById('startBtn');
        const minutesInput = document.getElementById('minutes');
        const secondsInput = document.getElementById('seconds');
        const alarm = document.getElementById('alarm');

        function updateDisplay(seconds) {
            const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
            const secs = (seconds % 60).toString().padStart(2, '0');
            timerDisplay.textContent = `${mins}:${secs}`;
        }

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                startBtn.textContent = 'Resume';
                
                timerId = setInterval(() => {
                    timeLeft--;
                    updateDisplay(timeLeft);
                    
                    if (timeLeft <= 0) {
                        clearInterval(timerId);
                        isRunning = false;
                        alarm.play();
                        alert('Time is up!');
                        resetTimer();
                    }
                }, 1000);
            }
        }

        function pauseTimer() {
            clearInterval(timerId);
            isRunning = false;
            startBtn.textContent = 'Resume';
        }

        function resetTimer() {
            clearInterval(timerId);
            isRunning = false;
            timeLeft = defaultTime;
            updateDisplay(timeLeft);
            startBtn.textContent = 'Start';
            minutesInput.value = '';
            secondsInput.value = '';
        }

        function setCustomTime() {
            const minutes = parseInt(minutesInput.value) || 0;
            const seconds = parseInt(secondsInput.value) || 0;
            timeLeft = (minutes * 60) + seconds;
            
            if (timeLeft <= 0) {
                alert('Please enter a valid time');
                return;
            }
            
            updateDisplay(timeLeft);
            pauseTimer();
            startBtn.textContent = 'Start';
        }

        // Initialize with default time
        resetTimer();