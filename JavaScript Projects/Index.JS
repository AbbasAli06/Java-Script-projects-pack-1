document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('userName').textContent = name;
    document.getElementById('displayArea').classList.remove('hidden');
});

// Color Change Button
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['text-red-500', 'text-green-500', 'text-blue-500', 'text-purple-500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('userName').className = randomColor;
});

// Counter Functionality
let count = 0;
const counterElement = document.getElementById('counter');

document.getElementById('incrementBtn').addEventListener('click', function() {
    count++;
    counterElement.textContent = count;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    count = 0;
    counterElement.textContent = count;
});