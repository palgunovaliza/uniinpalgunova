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

let restangleClick3 =
document.querySelector('.restangle3')

restangleClick3.onclick = restangleRed.play

let restangleBlue = anime({
  targets: '.restangle4',
  height: 100,
  autoplay: false,
  duration: 200,
  top: 1640,
  easing:'easeInSine'
})


let restangleClick4 =
document.querySelector('.restangle4')

restangleClick4.onclick = restangleBlue.play


let restangleBlack = anime({
  targets: '.restangle2',
  transparency: '0',

})

let restangleClick2 =
document.querySelector('.restangle2')

restangleClick2.onclick = restangleBlack.play
