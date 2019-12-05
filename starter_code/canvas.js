let hangmanGame

class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d');
    this.hangman = new Hangman()
    this.secretWord = this.hangman.secretWord;
    this.guessedLetter = this.hangman.guessedLetter
    this.errorsLeft = this.hangman.errorsLeft
    this.letters = this.hangman.letters
    console.log(this.letters)
    this.errorsLeft = this.hangman.errorsLeft
    console.log(this.secretWord)
    this.posX = 0;
    this.posY = 0;
    this.width = 1200;
    this.height = 800;
    this.lineLetter = this.secretWord.length
    this.past = 0;
    this.delta = 0;
  }


  createBoard = (elapsed) => {
    this.ctx.clearRect(this.posX, this.posY, this.width, this.height);

    this.delta = elapsed - this.past;
    this.past = elapsed;
    let fps = 1000 / this.delta;
    this.ctx.lineWidth = 10;
    this.ctx.font = "20px Arial";
    this.ctx.fillText("FPS: " + Math.round(fps), 10, 20);
    window.requestAnimationFrame(this.createBoard);
    window.requestAnimationFrame(this.drawLines)
    window.requestAnimationFrame(this.drawHangman)
    window.requestAnimationFrame(this.writeCorrectLetter)
    window.requestAnimationFrame(this.writeWrongLetter)

  }

  drawLines = () => {
    this.lineWidth = 3;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(400 + (i * 100), 680);
      this.ctx.lineTo(450 + (i * 100), 680)
      this.ctx.stroke();
      this.ctx.closePath()
    }
  }

  writeCorrectLetter = (index) => {
        this.ctx.font = "30px Arial";
        this.ctx.fillText('Ejemplo', 410, 670)
        

  }

  writeWrongLetter = (letter, errorsLeft) => {

    // //for(let i = 0; i<this.secretWord.length; i++){
    //   if(this.secretWord.includes(this.guessedLetter)){
    //     this.ctx.font = "30px Arial";
    //     this.ctx.fillText(this.letters, 500, 370)
    //     console.log(this.letters)
    //   }
    // //}
  }

  drawHangman = () => {
    if (this.errorsLeft <= 9) {
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
    }
    if (this.errorsLeft <= 8) {
      //Línea vertical izquierda
      this.ctx.beginPath();
      this.ctx.moveTo(175, 630);
      this.ctx.lineTo(175, 50);
      this.ctx.stroke();
      this.ctx.closePath();

    }
    if (this.errorsLeft <= 7) {
      //Línea superior horizontal
      this.ctx.beginPath();
      this.ctx.moveTo(171, 50);
      this.ctx.lineTo(450, 50)
      this.ctx.stroke();
      this.ctx.closePath();
    }
    //Línea corta vertical
    if (this.errorsLeft <= 6) {
      this.ctx.beginPath();
      this.ctx.moveTo(447, 48);
      this.ctx.lineTo(447, 100)
      this.ctx.stroke();
      this.ctx.closePath();
    }

    //cabeza
    if (this.errorsLeft <= 5) {
      this.ctx.beginPath();
      this.ctx.arc(448, 148, 50, 0, (Math.PI / 180) * 360, true)
      this.ctx.stroke();
    }
    if (this.errorsLeft <= 4) {
      //cuerpo
      this.ctx.beginPath();
      this.ctx.moveTo(450, 200);
      this.ctx.lineTo(450, 400)
      this.ctx.stroke()
    }
    if (this.errorsLeft <= 3) {
      //Pierna Derecha
      this.ctx.beginPath();
      this.ctx.moveTo(450, 398);
      this.ctx.lineTo(525, 500)
      this.ctx.stroke()
    }
    if (this.errorsLeft <= 2) {
      //Pierna Izquierda
      this.ctx.beginPath();
      this.ctx.moveTo(450, 398);
      this.ctx.lineTo(375, 500)
      this.ctx.stroke()
    }
    if (this.errorsLeft <= 1) {
      //brazo Izquierdo
      this.ctx.beginPath();
      this.ctx.moveTo(449, 300);
      this.ctx.lineTo(375, 225)
      this.ctx.stroke()
    }
    if (this.errorsLeft === 0) {
      //Brazo Derecho
      this.ctx.beginPath();
      this.ctx.moveTo(449, 300);
      this.ctx.lineTo(525, 225)
      this.ctx.stroke()
    }
  
  }

  gameOver = () => {

  }

  winner = () => {

  }

}
//window.requestAnimationFrame(this.createBoard);

//document.onkeydown = (e) => {
//  console.log(String.fromCharCode(e.keyCode)+" --> "+e.keyCode)
//};