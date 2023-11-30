// let fbr = document.querySelectorAll('img')
// fbr.forEach((el) => {
     
// })



let a = document.querySelectorAll('div')
a.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        e.target.remove()
    })
})