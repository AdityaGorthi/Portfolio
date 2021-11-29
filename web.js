const scrollbutton =  document.getElementById('scroll')
const navlist = document.getElementById('nav-list')

function togglebutton(){
    navlist.classList.toggle('show')
}
scrollbutton.addEventListener('click',togglebutton)