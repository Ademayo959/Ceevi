const userPassword = document.querySelector('.input-password');
const eyeBtn = document.querySelector('.eye');
const eyeImg = document.querySelector('.eye-img');

eyeBtn.addEventListener('click', () => {
    if (userPassword.type === 'password' && eyeImg.getAttribute('src', 'img/eye.png') ){
        userPassword.type = 'text'
        eyeImg.setAttribute('src', 'img/eye-off.png')
    } else {
        userPassword.type = 'password'
        eyeImg.setAttribute('src', 'img/eye.png')
    };
});