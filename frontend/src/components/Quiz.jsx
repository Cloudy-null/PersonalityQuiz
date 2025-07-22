import { useState } from "react";
import { questions } from "../assets/data.js";
import "./quiz.css";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
    setSelectedIndex(optionIndex);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedIndex(answers[currentIndex + 1] ?? null);
    } else {
      //end of the quiz

    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedIndex(answers[currentIndex - 1] ?? null);
    }
  };

  return (
    <div className="quiz-container">
      <div className="question-index">
        Question {currentIndex + 1} of {questions.length}
      </div>

      <h1>{questions[currentIndex].text}</h1>
      <hr />
      <div className="options">
        {questions[currentIndex].options.map((option, optionIndex) => (
          <div
            key={optionIndex}
            className={`option ${selectedIndex === optionIndex ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(currentIndex, optionIndex)}
          >
            {option}
          </div>
        ))}
      </div>

      <div className="nav-buttons">
        {currentIndex > 0 && (
          <button className="prev-button" onClick={handlePrev}>
            ← Previous
          </button>
        )}
        <button
          className="next-button"
          onClick={handleNext}
          disabled={answers[currentIndex] === undefined}
        >
          {currentIndex === questions.length - 1 ? 'See Results →' : 'Next →'}
        </button>
      </div>
    </div>
  );
}