const scrollToTop = () =>{
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth'
    })
}

export default scrollToTop


// const showHide =() =>{
//     const scrolled = document.documentElement.scrollTop; 
//     if (scrolled > 300){ 
//       document.querySelector('.scrollToTopButton').style.transform = 'scale(1)'
//     }
//     else if (scrolled <= 300){ 
//       document.querySelector('.scrollToTopButton').style.transform = 'scale(0)'
//     }
//   }
//   window.addEventListener('scroll', showHide)