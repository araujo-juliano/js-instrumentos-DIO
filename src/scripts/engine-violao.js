const violaoKeys = document.querySelectorAll('.violao-keys .key')
const volumeSlider = document.querySelector('.volume-slider input')
const keysCheck = document.querySelector('.keys-check input')

let mapedKeys = []

let audio = new Audio('src/tunes/violao/a.wav')

const playTune = key => {
  audio.src = `src/tunes/violao/${key}.wav`
  audio.play()

  const clickedKey = document.querySelector(`[data-key="${key}"]`)
  clickedKey.classList.add('active')
  setTimeout(() => {
    clickedKey.classList.remove('active')
  }, 150)
}

violaoKeys.forEach(key => {
  key.addEventListener('click', () => playTune(key.dataset.key))
  mapedKeys.push(key.dataset.key)
})

document.addEventListener('keydown', event => {
  if (mapedKeys.includes(event.key)) {
    playTune(event.key)
  }
})

const handleVolume = event => {
  audio.volume = event.target.value
}

const showHideKeys = () => {
  violaoKeys.forEach(key => key.classList.toggle('hide'))
}

volumeSlider.addEventListener('input', handleVolume)

keysCheck.addEventListener('click', showHideKeys)
