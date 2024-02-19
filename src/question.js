class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    this.choices.forEach((currentIndex) => {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      let temp = this.choices[currentIndex];
      this.choices[currentIndex] = this.choices[randomIndex];
      this.choices[randomIndex] = temp;
    });
  }
}
