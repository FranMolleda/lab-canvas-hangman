let hangman;

class Hangman {
  constructor() {
    this.words = ['fer', 'cala', 'for'];
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
    this.letters = []
    this.guessedLetter = 'R'
    this.errorsLeft = '10'
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
    let pressLetter = String.fromCharCode(i)
    if (this.secretWord.includes(pressLetter)) {
      this.guessedLetter += pressLetter
    }
    return this.guessedLetter

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
};

document.onkeydown = (e) => {

};