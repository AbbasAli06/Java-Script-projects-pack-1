        function updateClock() {
            const now = new Date();
            
            // Date components
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            const dayName = days[now.getDay()];
            const monthName = months[now.getMonth()];
            const date = now.getDate();
            const year = now.getFullYear();

            // Time components
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            // Convert to 12-hour format
            hours = hours % 12;
            hours = hours ? hours : 12;

            // Update display
            document.getElementById('date').textContent = `${dayName}, ${monthName} ${date}, ${year}`;
            document.getElementById('clock').innerHTML = `
                <div class="bg-black/20 px-4 py-2 rounded-lg glow">${hours}</div>
                <div class="text-4xl">:</div>
                <div class="bg-black/20 px-4 py-2 rounded-lg glow">${minutes}</div>
                <div class="text-4xl">:</div>
                <div class="bg-black/20 px-4 py-2 rounded-lg glow">${seconds}</div>
                <div class="text-pink-400 text-xl self-end mb-1 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">${ampm}</div>
            `;
        }

        // Update the clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);