document.addEventListener('DOMContentLoaded', init)


function init(){
  document.addEventListener('keydown' || 'click', (e) => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(e.keyCode)

    if (!audio) return;
    // audio.currentTime = 0
    audio.play()

  })
}

function createBar(){
const bar = document.createElement('div')

}
