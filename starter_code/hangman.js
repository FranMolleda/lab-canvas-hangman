let hangman;

class Hangman {
  constructor() {
    this.words = ['PEOPLE', 'LEARNING', 'IRONHACK'];
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
    this.letters = []
    this.guessedLetter = ""
    this.errorsLeft = 10
  }

  getWord(words) {
    return toString(this.secretWord)
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      this.letters.push(String.fromCharCode(keyCode))
      return true
    }
    return false


  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      this.letters.pop()
      return false
    }
    return true
  }

  addCorrectLetter(e) {

    if (this.secretWord.includes(this.letters[this.letters.length - 1])) this.guessedLetter += this.letters[this.letters.length - 1].toUpperCase()
    this.guessedLetter += this.secretWord[e].toUpperCase()
  }

  addWrongLetter(letter) {
    return this.errorsLeft--
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true
    } else if (this.errorsLeft > 0) {
      return false
    }
  }

  checkWinner() {
    console.log('win!')
    if (this.secretWord.length <= this.guessedLetter.length) {
      return true
    }
    return false

  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanGame = new HangmanCanvas();
  hangmanGame.createBoard()
  hangmanGame.drawHangman()
  hangmanGame.drawLines()
};

document.onkeydown = (e) => {
  hangman.checkIfLetter(e.keyCode)
  hangman.checkClickedLetters(e)
  hangman.addCorrectLetter()
  console.log(String.fromCharCode(e.keyCode) + " --> " + e.keyCode)
};