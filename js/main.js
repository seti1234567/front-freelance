const btnDarMode = document.querySelector(".dark-mode-btn")

// проверка темной темы на уровне системных настроек
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    btnDarMode.classList.add('dark-mode-btn__active')
    document.body.classList.add('dark')
}

// проверка темной темы в локал сторадж
if(localStorage.getItem('darkMode') === 'dark'){
    btnDarMode.classList.add('dark-mode-btn__active')
    document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'dark') {
    btnDarMode.classList.remove('dark-mode-btn__active')
    document.body.classList.remove('dark')
}


//если меняются системные настройки, меняется тема
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newColorScheme = e.matches ? 'dark' : 'light'

    if(newColorScheme === 'dark'){
        btnDarMode.classList.add('dark-mode-btn__active')
        document.body.classList.add('dark')
        localStorage.setItem('darkMode', 'dark')
    } else {
        btnDarMode.classList.remove('dark-mode-btn__active')
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode', 'light')
    }
})



// Включение ночного режима по кнопке
btnDarMode.onclick = function() {
    btnDarMode.classList.toggle("dark-mode-btn__active")
    const isDark = document.body.classList.toggle('dark')

    if(isDark){
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }


}