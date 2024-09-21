import React, { useEffect, useState } from "react";
import "./MBTIQuestions.scss";

const MBTIQuestions = () => {
  const [questions, setQuestions] = useState([]); // State to store the fetched questions
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Track selected answers for each question
  const [functionScores, setFunctionScores] = useState({
    Ne: 0,
    Fi: 0,
    Ti: 0,
    Se: 0,
    Ni: 0,
    Fe: 0,
    Te: 0,
    Si: 0,
  }); // State to store the cumulative function scores

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/questions"); // Update with the correct API endpoint
        const data = await response.json();
        setQuestions(data); // Assuming data is an array of question objects
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []); // Fetch data only when the component mounts

  // Function to handle button clicks
  const handleAnswerClick = (questionId, func, value) => {
    // Update selected answer for the question
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));

    // Update the function score based on the question's function and selected value
    setFunctionScores((prevScores) => ({
      ...prevScores,
      [func]: prevScores[func] + value - (selectedAnswers[questionId] || 0), // Adjust the previous value if already selected
    }));
  };

  return (
    <div className="mbti-questions">
      <h1>MBTI Questions</h1>
      <ul>
        {questions.length > 0 ? (
          questions.map((question) => (
            <li key={question.id} className="question-item">
              <p>{question.text}</p>
              <div className="button-group">
                <button
                  className={`answer-button ${
                    selectedAnswers[question.id] === -2 ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleAnswerClick(question.id, question.function, -2)
                  }
                >
                  No
                </button>
                <button
                  className={`answer-button ${
                    selectedAnswers[question.id] === -1 ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleAnswerClick(question.id, question.function, -1)
                  }
                >
                  Not Really
                </button>
                <button
                  className={`answer-button ${
                    selectedAnswers[question.id] === 0 ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleAnswerClick(question.id, question.function, 0)
                  }
                >
                  Neutral
                </button>
                <button
                  className={`answer-button ${
                    selectedAnswers[question.id] === 1 ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleAnswerClick(question.id, question.function, 1)
                  }
                >
                  A Little Bit
                </button>
                <button
                  className={`answer-button ${
                    selectedAnswers[question.id] === 2 ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleAnswerClick(question.id, question.function, 2)
                  }
                >
                  Yes
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>Loading questions...</p>
        )}
      </ul>

      <div className="result">
        <h2>Function Scores</h2>
        <ul>
          {Object.keys(functionScores).map((func) => (
            <li key={func}>
              {func}: {functionScores[func]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MBTIQuestions;
