var btn_menu = document.querySelector('#btn-menu');
var sidebar = document.querySelector('#sidebar');
var container = document.querySelector('.my-container')

btn_menu.addEventListener("click",()=>{
    sidebar.classList.toggle("active-nav")
    container.classList.toggle("active-cont")
})