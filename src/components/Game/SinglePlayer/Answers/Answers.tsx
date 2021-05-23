import React from "react";
import "./answers.css";

export default function Answers({
  questions,
  accentSecondary,
  setViewAnswer,
  gameType
}: any) {
  console.log(questions);
  return (
    <div className="answers">
      <h1 className="answers-heading">Answers</h1>
      <section className="answer-section">
        {questions.map((question) => (
          <div className="answer-details">
            {gameType === "question" ? (
              <h2>
                Q{question.questionNum}:{question.question}
              </h2>
            ) : (
              <h2>Q{question.questionNum}</h2>
            )}
            <div className="options">
              {question.options.map((option) => (
                <button
                  className="answer-button"
                  style={{ background: option.isCorrect ? "green" : "tomato" }}
                >
                  {option.value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
      <button
        onClick={() => setViewAnswer(false)}
        style={{ background: accentSecondary }}
      >
        close
      </button>
    </div>
  );
}
