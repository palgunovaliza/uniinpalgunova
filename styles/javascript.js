
let restangle = anime({
  targets: '.restangle1',
  height: 110,
  autoplay: false,
  duration: 200,
  easing:'easeInSine'
})

let restangle1Click =
document.querySelector('.restangle1')

restangle1Click.onclick = restangle.play
