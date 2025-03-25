let currentCaptcha = '';

// Generate random captcha
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    currentCaptcha = '';
    for(let i = 0; i < 6; i++) {
        currentCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captcha').textContent = currentCaptcha;
}

generateCaptcha();

function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const toggle = field.nextElementSibling;
    if(field.type === 'password') {
        field.type = 'text';
        toggle.style.textDecoration = 'underline';
    } else {
        field.type = 'password';
        toggle.style.textDecoration = 'none';
    }
}

function validateForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const captchaInput = document.getElementById('captchaInput').value;
    
    const passwordError = document.getElementById('passwordError');
    const captchaError = document.getElementById('captchaError');
    const submitBtn = document.getElementById('submitBtn');

    if(password !== confirmPassword) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }

    if(captchaInput !== currentCaptcha) {
        captchaError.style.display = 'block';
    } else {
        captchaError.style.display = 'none';
    }

    submitBtn.disabled = !(
        email && 
        phone.match(/^\d{10}$/) && 
        password && 
        password === confirmPassword && 
        captchaInput === currentCaptcha
    );
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', validateForm);
});