const btn = document.querySelector('.button');
const icon1 = document.querySelector('.icon-1');
const icon2 = document.querySelector('.icon-2');

btn.addEventListener('click', () => {
    icon1.classList.toggle('active');
    icon2.classList.toggle('active');
});
