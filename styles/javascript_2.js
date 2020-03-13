let redyellow = anime ({
targets: '.redyellow',
top: ['27px','-110px'],
easing:'easeInSine',
duration: 900,
autoplay: false
})

let redyellowonclick =
document.querySelector('.redyellow')
redyellowonclick.onclick = redyellow.play

let ellipseyellow = anime ({
targets: '.ellipseyellow',
top: ['214px','400px'],
easing:'easeInSine',
duration: 900,
autoplay: false
})

let ellipseyellowonclick =
document.querySelector('.ellipseyellow')
ellipseyellowonclick.onclick = ellipseyellow.play


let ellipseblue = anime ({
targets: '.ellipseblue',
top: ['520px','750px'],
easing:'easeInSine',
duration: 900,
autoplay: false
})

let ellipseblueonclick =
document.querySelector('.ellipseblue')
ellipseblueonclick.onclick = ellipseblue.play


let ellipsered = anime ({
targets: '.ellipsered',
top: ['1000px','1120px'],
easing:'easeInSine',
duration: 900,
autoplay: false
})

let ellipseredonclick =
document.querySelector('.ellipsered')
ellipseredonclick.onclick = ellipsered.play

let planetyellow = anime ({
targets: '.planetyellow',
top: ['1103px','1500px'],
easing:'easeInSine',
duration: 900,
autoplay: false
})

let planetyellowonclick =
document.querySelector('.planetyellow')
planetyellowonclick.onclick = planetyellow.play
