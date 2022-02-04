let lang = document.querySelector('#lang')
if (window.localStorage.hasOwnProperty('lang')) {
    if (window.localStorage.lang === 'Arabic') {
        ArabicFun()
    } else {
        EnglishFun()
    }
} else {
    EnglishFun()
}
function EnglishFun() {
    window.localStorage.setItem('lang', 'English')
    document.querySelector('.nav').classList.remove('Arabic')
    document.querySelector('.nav').classList.add('English')
    document.querySelector('.nav').dir = 'ltr'
    document.querySelector('.content').classList.remove('Arabic')
    document.querySelector('.content').classList.add('English')
    document.querySelector('.content').dir = 'ltr'
}
function ArabicFun() {
    window.localStorage.setItem('lang', 'Arabic')
    document.querySelector('.nav').classList.add('Arabic')
    document.querySelector('.nav').classList.remove('English')
    document.querySelector('.nav').dir = 'rtl'
    document.querySelector('.content').classList.add('Arabic')
    document.querySelector('.content').classList.remove('English')
    document.querySelector('.content').dir = 'rtl'
}
lang.onclick = function () {
    if (window.localStorage.lang === 'Arabic') {
        EnglishFun()
    } else {
        ArabicFun()
    }
}

let Mood = document.querySelector('#Mood')
if (window.localStorage.hasOwnProperty('Mood')) {
    if (window.localStorage.lang === 'light') {
        lightMood()
    } else {
        darkMood()
    }
} else {
    lightMood()
}
function lightMood() {
    window.localStorage.setItem('Mood', 'light')
    document.querySelector('.nav').classList.remove('dark')
    document.querySelector('.nav').classList.add('light')
    document.querySelector('.content').classList.remove('dark')
    document.querySelector('.content').classList.add('light')
}
function darkMood() {
    window.localStorage.setItem('Mood', 'dark')
    document.querySelector('.nav').classList.add('dark')
    document.querySelector('.nav').classList.remove('light')
    document.querySelector('.content').classList.add('dark')
    document.querySelector('.content').classList.remove('light')
}
Mood.onclick = function () {
    if (window.localStorage.Mood === 'light') {
        darkMood()
    } else {
        lightMood()
    }
}

let navItems = document.querySelectorAll('.nav ul li a')
navItems.forEach((ele, ind) => {
    ele.onclick = () => {
        navItems.forEach((ele) => {
            ele.classList.remove('active')
        })
        ele.classList.add('active')
        document.querySelector('#indicator').classList = `active${ind}`
    }
})