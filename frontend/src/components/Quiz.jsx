import { useState } from "react";
import { questions } from "../assets/data";
import "./quiz.css";

export default function Quiz() {
  const [selectedOption, setSelectedOption] = useState(null);
  const currentQuestion = questions[0]; // Hardcodded for now
  return (
    <div className="quiz-container">
      <h1>Temp</h1>
      <hr />
      <h2>{currentQuestion.text}</h2>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <div 
            key={index}
            className={`option ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => setSelectedOption(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <button className="next-btn">Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
}