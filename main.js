const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
    })
}

const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
        `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
).join('');


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth", block: "start"
        })
    })
}

const darkBnt = document.getElementById('dark-theme-btn')

const theme = localStorage.getItem('theme')
if (theme) {
    document.body.classList.add(theme)
}

darkBnt.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')

    const theme = localStorage.getItem('theme')

    if (theme === 'dark-theme') {
        localStorage.setItem('theme', '')
    } else {
        localStorage.setItem('theme', 'dark-theme')
    }
})