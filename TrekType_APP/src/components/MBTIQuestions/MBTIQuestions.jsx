import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MBTIQuestions.scss";

const MBTIQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
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
  const [allAnswered, setAllAnswered] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/questions");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []);

  // Check if all questions are answered
  useEffect(() => {
    setAllAnswered(
      questions.length > 0 &&
        Object.keys(selectedAnswers).length === questions.length
    );
  }, [selectedAnswers, questions]);

  const handleAnswerClick = (questionId, func, value) => {
    // Update selected answers and function scores
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));

    setFunctionScores((prevScores) => ({
      ...prevScores,
      [func]: prevScores[func] + value - (selectedAnswers[questionId] || 0),
    }));

    // Target the button group and apply gray-out effect
    const buttonGroup = document.querySelectorAll(
      `.button-group[data-question-id="${questionId}"] .answer-button`
    );

    buttonGroup.forEach((button) => {
      // Gray out all unselected buttons
      if (parseInt(button.dataset.value) !== value) {
        button.classList.add("gray-out"); // Add gray-out class to unselected
      } else {
        button.classList.remove("gray-out"); // Keep selected button's original color
      }
    });
  };

  const handleSubmit = () => {
    if (!allAnswered) {
      setError("Please answer all questions before submitting.");
      return;
    }
    setError("");
    navigate("/result", { state: { functionScores } });
  };

  return (
    <div className="mbti-questions">
      <h1>MBTI Questions</h1>
      <ul>
        {questions.length > 0 ? (
          questions.map((question) => (
            <li
              key={question.id}
              className={`question-item ${
                selectedAnswers[question.id] !== undefined ? "answered" : ""
              }`}
            >
              <p className="question-text">
                🚀{question.id} . {question.text}
              </p>
              <div className="button-group" data-question-id={question.id}>
                <button
                  className={`answer-button ${
                    selectedAnswers[question.id] === -2 ? "selected" : ""
                  }`}
                  data-value="-2"
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
                  data-value="-1"
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
                  data-value="0"
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
                  data-value="1"
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
                  data-value="2"
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
      {error && <p className="error-message">{error}</p>}

      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!allAnswered}
      >
        Submit
      </button>
    </div>
  );
};

export default MBTIQuestions;
