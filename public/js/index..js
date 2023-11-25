const firstBackground = document.querySelector('.first-background');
const mainBody = document.querySelector('.main-page');

// Get start button:
const getStartBtn = document.querySelector('.fb-body .fb-body-left button');
getStartBtn.addEventListener('click', () => {
    firstBackground.classList.add('active');
    mainBody.classList.add('active');
})