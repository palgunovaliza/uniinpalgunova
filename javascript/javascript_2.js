let tl = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.redyellow',
    top: ['27px','-115px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipseyellow',
    top: ['202px','400px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.bluered',
    top: ['-300px','-25px'],
    easing:'easeInSine',
    opacity: 100,
    duration: 800,
  }, 0)
  .add({
    targets: '.bluered2',
    opacity: ['100', '0'],
    easing: 'linear',

    // top: ['-300px','-25px'],
    // display: 'none',
    // opacity: 0,
    duration: 10,
  }, 0)

let yellowredClick =
document.querySelector('.redyellow')
yellowredClick.onclick = tl.play


let tl2 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.ellipseblue',
    top: ['521px','760px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipseyellow2',
    top: ['780px','600px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)

let blueClick =
document.querySelector('.ellipseblue')
blueClick.onclick = tl2.play


let tl3 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.ellipsered',
    top: ['1025px','1170px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.blueyellow',
    top: ['1135px','925px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)

let redClick =
document.querySelector('.ellipsered')
redClick.onclick = tl3.play


let tl4 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.planetyellow',
    top: ['1190px','1500px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipsered2',
    top: ['1500px','1378px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)

let planetyellowClick =
document.querySelector('.planetyellow')
planetyellowClick.onclick = tl4.play
//
// let tl5 = anime.timeline({ autoplay: false })
//     .add({ targets: '.bluered', top: ['-5px','-300px'], easing:'easeInSine', duration: 800, }, 0)
//     .add({ targets: '.ellipsered3', top: ['-60px','39px'], easing:'easeInSine', duration: 800, }, 0)
//     // .add({ targets: '.ellipsered3', top: ['-20px','45px'], easing:'easeInSine', duration: 800, }, 0)
//
// let planetBlueRed = document.querySelector('.bluered')
//     planetBlueRed.onclick = tl5.play

let tl5 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.bluered',
    // top: ['-300px','-25px'],
    // display: 'none',
    easing: 'linear',
    opacity: 0,
    duration: 10,
  }, 0)
  .add({
    targets: '.bluered2',
    top: ['-25px','-300px'],
    easing:'linear',
    opacity: ['0', '100'],
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipsered3',
    top: ['-64px','45px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)


let bluered2Click =
document.querySelector('.bluered2')
bluered2Click.onclick = tl5.play
//
// let tl5 = anime.timeline({
//   autoplay: false
// })
//
//   .add({
//     targets: '.bluered2',
//     top:['-300px','-300px'],
//     easing:'easeInSine',
//     duration: 800,
//   }, 0)
//   .add({
//     targets: '.bluered',
//     display: none,
//   }, 0)
//   .add({
//     targets: '.ellipsered3',
//     top: ['-20px','45px'],
//     easing:'easeInSine',
//     duration: 800,
//   }, 0)
//
// let bluered2Click =
// document.querySelector('.bluered2')
// bluered2Click.onclick = tl5.play
