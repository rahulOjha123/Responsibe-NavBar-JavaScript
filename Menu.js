let harmbargar_menu=document.querySelector('.hambargar-menu')
let start_icons=document.querySelector('.start-icon')
let items=document.querySelector('.items')
let items_lists=document.querySelector('.items-lists')

harmbargar_menu.addEventListener('click',()=>{
    console.log("clicked hambargar menu")
    items.style.display='block'
    
    
})
start_icons.addEventListener('click',()=>{
    console.log("start-icons clicked")
    items.style.display='none'
    
})