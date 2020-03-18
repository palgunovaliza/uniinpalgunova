// let redyellow = anime ({
// targets: '.redyellow',
// top: ['27px','-110px'],
// easing:'easeInSine',
// duration: 900,
// autoplay: false
// })
//
// let redyellowonclick =
// document.querySelector('.redyellow')
// redyellowonclick.onclick = redyellow.play
//
// let ellipseyellow = anime ({
// targets: '.ellipseyellow',
// top: ['214px','400px'],
// easing:'easeInSine',
// duration: 900,
// autoplay: false
// })
//
// let ellipseyellowonclick =
// document.querySelector('.ellipseyellow')
// ellipseyellowonclick.onclick = ellipseyellow.play
//
//
// let ellipseblue = anime ({
// targets: '.ellipseblue',
// top: ['520px','750px'],
// easing:'easeInSine',
// duration: 900,
// autoplay: false
// })
//
// let ellipseblueonclick =
// document.querySelector('.ellipseblue')
// ellipseblueonclick.onclick = ellipseblue.play
//
//
// let ellipsered = anime ({
// targets: '.ellipsered',
// top: ['1000px','1120px'],
// easing:'easeInSine',
// duration: 900,
// autoplay: false
// })
//
// let ellipseredonclick =
// document.querySelector('.ellipsered')
// ellipseredonclick.onclick = ellipsered.play
//
// let planetyellow = anime ({
// targets: '.planetyellow',
// top: ['1190px','1500px'],
// easing:'easeInSine',
// duration: 900,
// autoplay: false
// })
//
// let planetyellowonclick =
// document.querySelector('.planetyellow')
// planetyellowonclick.onclick = planetyellow.play


let tl = anime.timeline({
  autoplay: false
})

tl
  .add({
    targets: '.redyellow',
    top: ['27px','-115px'],
    easing:'easeInSine',
    duration: 800,

  })
  .add({
    targets: '.ellipseyellow',
    top: ['202px','400px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipseblue',
    top: ['521px','760px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipsered',
    top: ['1025px','1170px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.planetyellow',
    top: ['1190px','1500px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.bluered',
    top: ['-300px','-25px'],
    easing:'easeInSine',
    duration: 800,

  }, 0)

let redyellowClick =
document.querySelector('.redyellow')
redyellowClick.onclick = tl.play

let ellipseyellowClick =
document.querySelector('.ellipseyellow')
ellipseyellowClick.onclick = tl.play

let ellipseblueClick =
document.querySelector('.ellipseblue')
ellipseblueClick.onclick = tl.play

let ellipseredClick =
document.querySelector('.ellipsered')
ellipseredClick.onclick = tl.play

let planetyellowClick =
document.querySelector('.planetyellow')
planetyellowClick.onclick = tl.play

let blueredClick =
document.querySelector('.bluered')
blueredClick.onclick = tl.play


// let planets = anime ({
//   targets: '.redyellow',
//   top: ['27px','-110px'],
//   easing:'easeInSine',
//   duration: 900,
//   autoplay: false,
//   targets: '.ellipseyellow',
//   top: ['214px','400px'],
//   easing:'easeInSine',
//   duration: 900,
//   autoplay: false,
//   targets: '.ellipseblue',
//   top: ['520px','750px'],
//   easing:'easeInSine',
//   duration: 900,
//   autoplay: false,
//   targets: '.ellipsered',
//   top: ['1000px','1120px'],
//   easing:'easeInSine',
//   duration: 900,
//   autoplay: false,
//   targets: '.planetyellow',
//   top: ['1103px','1500px'],
//   easing:'easeInSine',
//   duration: 900,
//   autoplay: false,
//
// })
//
// let planetsClick =
// document.querySelector('.redyellow')
// planetsClick.onclick = planets.play
