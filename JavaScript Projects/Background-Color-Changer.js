const colorPicker = document.getElementById('colorPicker');
const colorText = document.getElementById('colorText');

colorPicker.addEventListener('input', (e) => {
    const selectedColor = e.target.value;
    document.body.style.backgroundColor = selectedColor;
    colorText.textContent = `Selected Color: ${selectedColor}`;
});

document.body.style.backgroundColor = colorPicker.value;