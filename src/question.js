class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    // this.choices.forEach((currentIndex) => {
    //   let randomIndex = Math.floor(Math.random() * this.choices.length);
    //   let temp = this.choices[currentIndex];
    //   this.choices[currentIndex] = this.choices[randomIndex];
    //   this.choices[randomIndex] = temp;
    for (let i = this.choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]];
    }
  }
}
