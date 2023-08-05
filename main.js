let navLinks = document.querySelector('.navLinks');
let toggleMenu = document.querySelector('.toggleNav');
let closeMenu = document.querySelector('.closeNav');
const submitAlert = document.querySelector('.submit');
const darkMode = document.querySelector('.darkMode');

toggleMenu.addEventListener('click', ()=> {
   navLinks.classList.add('active');
})

closeMenu.addEventListener('click', ()=> {
    navLinks.classList.remove('active');
})

submitAlert.addEventListener('click', ()=> {
    alert("Sorry, Can't send your message. 🙂")
})

darkMode.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme-colors');
    darkMode.querySelector('i:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('i:nth-child(2)').classList.toggle('active');
});