let navLinks = document.querySelector('.navLinks');
let toggleMenu = document.querySelector('.toggleNav');
let closeMenu = document.querySelector('.closeNav');
const darkMode = document.querySelector('.darkMode');
const projectImages = document.querySelectorAll('.project-img-link');

toggleMenu.addEventListener('click', () => {
    navLinks.classList.add('active');
})

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
})

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-colors');
    darkMode.querySelector('i:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('i:nth-child(2)').classList.toggle('active');
    for (let projectImage of projectImages){
        projectImage.querySelector('img:nth-child(1)').classList.toggle('active');
        projectImage.querySelector('img:nth-child(2)').classList.toggle('active');
    }
});

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersColorScheme.matches) {
    document.body.classList.toggle('dark-theme-colors');
    darkMode.querySelector('i:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('i:nth-child(2)').classList.toggle('active');
    for (let projectImage of projectImages){
        projectImage.querySelector('img:nth-child(1)').classList.toggle('active');
        projectImage.querySelector('img:nth-child(2)').classList.toggle('active');
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbz3L6ciV-NyRKihtai1ILPoHmhoYmRf0YsFoZOmeIfSFKF1os5WSbie0Acz0eZnRF_ZMg/exec'
const form = document.forms['submit-to-google-sheet']
const sendername = document.getElementById("name")
const mail = document.getElementById("mail")
const message = document.getElementById("message")

form.addEventListener('submit', e => {
    e.preventDefault()
    alert("Do you want to submit your message?")
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Message sent sucessfully")
            setTimeout(function () {
                sendername.innerHTML = ""
                mail.innerHTML = ""
                message.innerHTML = ""
            }, 1000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})