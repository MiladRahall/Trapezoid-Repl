let abase = 0
let bbase = 0
let height = 0
let number = 0

document.getElementById('button').addEventListener('click', button)

function button () {
  abase = document.getElementById('abase').value
  abase = parseInt(abase)
  bbase = document.getElementById('bbase').value
  bbase = parseInt(bbase)
  height = document.getElementById('height').value
  height = parseInt(height)
  number = (abase + bbase) / 2 * height
  alert(number)
}