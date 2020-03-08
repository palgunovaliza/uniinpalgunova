
let restangle = anime({
  targets: '.restangle1',
  height: 100,
  autoplay: false,
  duration: 200,
  easing:'easeInSine'

})

let restangle1Click =
document.querySelector('.restangle1')

restangle1Click.onclick = restangle.play

let restanglered = anime({
  targets: '.restangle3',
  height: 100,
  autoplay: false,
  duration: 200,
  top: 1444,
  easing:'easeInSine'
})

let restangle1Click2 =
document.querySelector('.restangle3')

restangle1Click2.onclick = restanglered.play

let restangleblue = anime({
  targets: '.restangle4',
  height: 100,
  autoplay: false,
  duration: 200,
  top: 1543,
  easing:'easeInSine'
})


let restangle1Click3 =
document.querySelector('.restangle4')

restangle1Click3.onclick = restangleblue.play
