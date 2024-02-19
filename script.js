let menu = document.getElementById('menu');
menu.addEventListener('click', function(){
    let nav = document.getElementById('nav');
    this.classList.toggle('active')
    nav.classList.toggle('active');
})