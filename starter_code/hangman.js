let hangman;

class Hangman {
  constructor() {
    this.words = ['People', 'Learning', 'Ironhack'];
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
      return true
    }
    return false


  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      return false
    }
    this.letters = this.letters.push(key)
    return true
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase()

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
    if (this.secretWord.length === this.guessedLetter.length) {
      return true
    }
    return false

  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanGame = new HangmanCanvas();
  hangmanGame.createBoard()
 };

document.onkeydown = (e) => {
  console.log(String.fromCharCode(e.keyCode)+" --> "+e.keyCode)
};