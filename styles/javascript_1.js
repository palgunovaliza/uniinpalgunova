let restangleYellow = anime({
  targets: '.restangle1',
  height: 100,
  autoplay: false,
  duration: 200,
  easing:'easeInSine'

})


let restangleClick =
document.querySelector('.restangle1')

restangleClick.onclick = restangleYellow.play

let restangleRed = anime({
  targets: '.restangle3',
  height: 100,
  autoplay: false,
  duration: 200,
  top: 1539,
  easing:'easeInSine'
})

let restangleClick2 =
document.querySelector('.restangle3')

restangleClick2.onclick = restangleRed.play

let restangleBlue = anime({
  targets: '.restangle4',
  height: 100,
  autoplay: false,
  duration: 200,
  top: 1638,
  easing:'easeInSine'
})


let restangleClick3 =
document.querySelector('.restangle4')

restangleClick3.onclick = restangleBlue.play
