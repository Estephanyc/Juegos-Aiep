
// traemos los datos de CSS y HTML con DOM del JS
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

// Creamos Variables
let result = 0
let hitPosition
let currentTime = 60
let timerId = null

// Creacion de una Funsion Random 
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

// contador de Click
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

// descontar tiempo
function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   let gameOver = document.getElementById('game-over');
   gameOver.style.display = 'block';
   //alert('GAME OVER! Tu resultado es: ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)

