const subscribeBtn = document.getElementById('subscribeBtn');
const contactModel = document.getElementById('contactModal');
const closeBtn = document.getElementById('closeBtn');

subscribeBtn.addEventListener('click',() => {
    contactModel.classList.add('active');
});

closeBtn.addEventListener('click',() => {
    contactModel.classList.remove('active');
});

contactModel.addEventListener('click',(e) => {
    if (e.target === contactModel) {
        contactModel.classList.remove('active');
    }
});