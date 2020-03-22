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
    display: 'none',
    opacity: 0,
    duration: 10,
  }, 0)
  .add({
    targets: '.restangle2',
    height: 100,
    top: 1442,
    easing:'easeInSine',
    duration: 300,
  }, 0)
  .add({
    targets: '.restangle3',
    height: 100,
    top: 1541,
    easing:'easeInSine',
    duration: 300,
  }, 0)
  .add({
    targets: '.restangle4',
    height: 100,
    top: 1640,
    easing:'easeInSine',
    duration: 300,
  }, 0)


let restangle1Click =
document.querySelector('.restangle1')
restangle1Click.onclick = tl.play

let tl2 = anime.timeline({
  autoplay: false
})
  .add({
    targets: '.restangle1',
    height: 100,
    easing:'easeInSine',
    duration: 350,
  }, 0)
  .add({
    targets: '.restangle2',
    display: 'none',
    opacity: 0,
    duration: 10,
  }, 0)
  .add({
    targets: '.restangle3',
    height: 100,
    top: 1541,
    easing:'easeInSine',
    duration: 300,
  }, 0)
  .add({
    targets: '.restangle4',
    height: 100,
    top: 1640,
    easing:'easeInSine',
    duration: 300,
  }, 0)


let restangle2Click =
document.querySelector('.restangle2')
restangle2Click.onclick = tl2.play

let tl3 = anime.timeline({
  autoplay: false
})
  .add({
    targets: '.restangle1',
    height: 100,
    easing:'easeInSine',
    duration: 350,
  }, 0)
  .add({
    targets: '.restangle2',
    height: 100,
    top: 100,
    easing:'easeInSine',
    duration: 350,
  }, 0)
  .add({
    targets: '.restangle3',
    display: 'none',
    opacity: 0,
    duration: 10,
  }, 0)
  .add({
    targets: '.restangle4',
    height: 100,
    top: 1640,
    easing:'easeInSine',

    duration: 300,
  }, 0)


let restangle3Click =
document.querySelector('.restangle3')
restangle3Click.onclick = tl3.play


let tl4 = anime.timeline({
  autoplay: false
})
  .add({
    targets: '.restangle1',
    height: 100,
    easing:'easeInSine',
    duration: 300,
  }, 0)
  .add({
    targets: '.restangle2',
    height: 100,
    top: 100,
    easing:'easeInSine',
    duration: 300,
  }, 0)
  .add({
    targets: '.restangle3',
    height: 100,
    top: 200,
    easing:'easeInSine',
    duration: 300,
  }, 0)
  .add({
    targets: '.restangle4',
    display: 'none',
    opacity: 0,
    duration: 10,
  }, 0)


let restangle4Click =
document.querySelector('.restangle4')
restangle4Click.onclick = tl4.play
