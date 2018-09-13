const notification = document.querySelector('#btn-notification');
const noti = document.querySelector('#notification');


notification.addEventListener('click', () => {
    const count = Number(noti.getAttribute('data-count')) || 0;
    noti.setAttribute('data-count', count + 1);
    noti.classList.add('show-count');
    noti.classList.add('notify');
})

noti.addEventListener('animationend', () => {
    noti.classList.remove('notify');
})