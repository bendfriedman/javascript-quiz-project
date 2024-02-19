class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    this.questions.forEach((currentQuestion) => {
      let randomIndex = Math.floor(Math.random() * currentQuestion);
      let temp = this.questions[currentQuestion];
      this.questions[currentQuestion] = this.questions[currentQuestion];
      this.questions[randomIndex] = temp;
    });
  }

  checkAnswer(answer) {
    if (answer === this.getQuestion().answer) {
      this.correctAnswers++;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex === this.questions.length) {
      return true;
    } else {
      return false;
    }
  }
}
