let hangman;

class Hangman {
  constructor() {
    this.words = [];
    this.secretWord = toString(this.secretWord);
    this.letters=[]
    this.guessedLetter=[]
    this.errorsLeft = '10'
  }

  getWord() {
   if(this.words.length<=1){
     return toString(words)

   }
  }

  checkIfLetter(keyCode) {
    if (typeof(keyCode === 'number')) {
      return true
    }
    return false
  }

  checkClickedLetters(key) {
    if (typeof(key === 'string')) {
      return true
    } else if(typeof(key != 'string')){
      return false

    }
  }

  addCorrectLetter(i) {
    if(this.checkClickedLetters()=== true){
      this.guessedLetter.push()
    }
  }

  addWrongLetter(letter) {
    return this.errorsLeft --
  }

  checkGameOver() {
    if(this.errorsLeft === 0){
      return true
    } else if(this.errorsLeft >0){
      return false
    }
  }

  checkWinner() {
    if(this.secretWord===this.guessedLetter){
      return true
    }
    else false

  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};