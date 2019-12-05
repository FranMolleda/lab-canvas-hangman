let hangmanGame

class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d');
    this.hangman = new Hangman()
    this.secretWord = this.hangman.secretWord;
    this.guessedLetter = this.hangman.guessedLetter
    console.log(this.secretWord)
    this.posX = 0;
    this.posY = 0;
    this.width = 1200;
    this.height = 800;
    this.lineLetter = this.secretWord.length
  }


  createBoard = () => {

    this.ctx.clearRect(this.posX, this.posY, this.width, this.height);
    this.ctx.lineWidth = 10;
    window.requestAnimationFrame(this.drawLines)
    window.requestAnimationFrame(this.drawHangman)
    window.requestAnimationFrame(this.writeCorrectLetter)

  }

  drawLines = () => {
    this.lineWidth=3;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      // Indicamos donde empezar a dibujar
      this.ctx.moveTo(400 + (i * 100), 680);
      // indicamos donde queremos que termine la línea
      this.ctx.lineTo(450 + (i * 100), 680)
      console.log(i)
      // Para ejecutar que se dibuje
      this.ctx.stroke();
      // Indicamos el fin de la linea
      this.ctx.closePath()
    }

    //this.ctx.fillRect(400 +i * 100, 600, 25, 1);
  }

  writeCorrectLetter = () => {
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.guessedLetter, 410, 670)
  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman = () => {
    //Base triangular
    this.ctx.save()
    this.ctx.fillStyle = "#6B8E23"
    this.ctx.beginPath();
    this.ctx.moveTo(100, 700);
    this.ctx.lineTo(250, 700);
    this.ctx.lineTo(175, 625);
    this.ctx.fill()
    this.ctx.closePath();
    this.ctx.restore()
    //Línea vertical izquierda
    this.ctx.beginPath();
    this.ctx.moveTo(175, 630);
    this.ctx.lineTo(175, 50);
    //Línea superior horizontal
    this.ctx.lineTo(450, 50)
    //Línea corta vertical
    this.ctx.lineTo(450, 100)
    this.ctx.stroke();
    //cabeza
    this.ctx.beginPath();
    this.ctx.arc(450, 148, 50, 0, (Math.PI / 180) * 360, true)
    this.ctx.stroke();
    //cuerpo
    this.ctx.beginPath();
    this.ctx.moveTo(450, 200);
    this.ctx.lineTo(450, 400)
    this.ctx.stroke()
    //Pierna Derecha
    this.ctx.beginPath();
    this.ctx.moveTo(450, 398);
    this.ctx.lineTo(525, 500)
    this.ctx.stroke()
    //Pierna Izquierda
    this.ctx.beginPath();
    this.ctx.moveTo(450, 398);
    this.ctx.lineTo(375, 500)
    this.ctx.stroke()
    //brazo Izquierdo
    this.ctx.beginPath();
    this.ctx.moveTo(449, 300);
    this.ctx.lineTo(375, 225)
    this.ctx.stroke()
    //Brazo Derecho
    this.ctx.beginPath();
    this.ctx.moveTo(449, 300);
    this.ctx.lineTo(525, 225)
    this.ctx.stroke()
  }

  gameOver() {

  }

  winner() {

  }

}