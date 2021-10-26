let menu = document.getElementById('menu')
let button = document.getElementById('button')
let main = document.getElementById('main')

button.addEventListener('click', () =>{
    menu.classList.toggle('ul-active')
    main.classList.toggle('main-next')
})