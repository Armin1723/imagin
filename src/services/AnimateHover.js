const animateHover = (dets) =>{
    let gif = document.querySelector('.overlayGif')
    // console.log(dets)
    gif.style.opacity = 1
    gif.style.scale = 0.75
    gif.style.top = (dets.clientY - 200 ) + 'px'
    gif.style.left = (dets.clientX - 300) + 'px'
}
export default animateHover