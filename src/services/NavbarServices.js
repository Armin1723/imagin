const setActive = (e) =>{
    console.log(e)
    e.preventDefault(); 
    let icons = document.querySelectorAll('.icon')
    Object.values(icons).map((icon) =>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
        }
    })
    e.target.classList.add('active'); 
}
export default setActive;