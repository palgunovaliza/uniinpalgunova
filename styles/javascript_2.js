let tl = anime.timeline({
  autoplay: false
})

tl
  .add({
    targets: '.redyellow',
    top: ['27px','-115px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.bluered',
    top: ['-300px','-25px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)


let planetyellowClick =
document.querySelector('.redyellow')
planetyellowClick.onclick = tl.play

let blueredClick =
document.querySelector('.bluered')
blueredClick.onclick = tl.play
