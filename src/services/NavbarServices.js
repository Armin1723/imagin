const setActive = (e) =>{
    console.log(e)
    e.preventDefault(); 
    let icons = document.querySelectorAll('.icon')
    Object.values(icons).map((icon) =>{
        icon.style.color = 'black'
    })
    e.target.style.color = 'purple'
}
export default setActive;