
let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=> {
    let scrollTop = window.scrollY /*barra de rolagem vertical*/

    if(scrollTop > 0) {
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }

})