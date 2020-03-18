// let restangleYellow = anime({
//   targets: '.restangle1',
//   height: 100,
//   autoplay: false,
//   duration: 200,
//   easing:'easeInSine'
//
// })
//
//
// let restangleClick =
// document.querySelector('.restangle1')
//
// restangleClick.onclick = restangleYellow.play
//
// let restangleRed = anime({
//   targets: '.restangle3',
//   height: 100,
//   autoplay: false,
//   duration: 200,
//   top: 1539,
//   easing:'easeInSine'
// })
//
// let restangleClick3 =
// document.querySelector('.restangle3')
//
// restangleClick3.onclick = restangleRed.play
//
// let restangleBlue = anime({
//   targets: '.restangle4',
//   height: 100,
//   autoplay: false,
//   duration: 200,
//   top: 1640,
//   easing:'easeInSine'
// })
//
//
// let restangleClick4 =
// document.querySelector('.restangle4')
//
// restangleClick4.onclick = restangleBlue.play
//
//
// let restangleBlack = anime({
//   targets: '.restangle2',
//   transparency: '0',
//
// })
//
// let restangleClick2 =
// document.querySelector('.restangle2')
//
// restangleClick2.onclick = restangleBlack.play

let tl = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.restangle1',
    height: 100,
    easing:'easeInSine',
    duration: 200,
  }, 0)
  .add({
    targets: '.restangle3',
    top: 1539,
    easing:'easeInSine',
    duration: 400,
  }, 0)
  .add({
    targets: '.restangle4',
    top: 1640,
    easing:'easeInSine',
    duration: 400,
  }, 0)
  // .add({
  //   targets: '.restangle2',
  //   display: none;
  // }, 0)


let restangle1Click =
document.querySelector('.restangle1')
restangle1Click.onclick = tl.play
