let burguer = document.querySelector('#burguer')
let menu = document.getElementsByTagName('menu')[0]

burguer.addEventListener('click', ()=>{

    setTimeout(()=>{
        if(menu.style.display == 'none'){
            menu.style.display = 'block'
        } else {
            menu.style.display = 'none'
        }
    }, 0)

})