class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions; //array
    this.timeLimit = timeLimit; //number
    this.timeRemaining = timeRemaining; // number
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
    // this.questions.forEach((currentQuestion) => {
    //   let randomIndex = Math.floor(Math.random() * currentQuestion);
    //   let temp = this.questions[currentQuestion];
    //   this.questions[currentQuestion] = this.questions[currentQuestion];
    //   this.questions[randomIndex] = temp;
    // });
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
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

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 && difficulty <= 3) {
      const tempQuestionsArray = this.questions.filter(
        (currentQuestion) => currentQuestion.difficulty === difficulty
      );

      this.questions = tempQuestionsArray;
      //this.questions.splice(0, this.questions.length, ...tempQuestionsArray);
    }
  }

  averageDifficulty() {
    let sumOfDifficulty = this.questions.reduce(
      (acc, currentQuestion) => acc + currentQuestion.difficulty,
      0
    );

    return Math.round(sumOfDifficulty / this.questions.length);
  }
}
