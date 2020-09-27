import React, { useEffect, useState } from "react";
import { Input, Button } from "@material-ui/core";
import "./SubmitAnswers.css";

function SubmitAnswers() {
  const [statements, setStatements] = useState([]);
  const [randomStatement, setRandomStatement] = useState({});
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/statements")
      .then((res) => res.json())
      .then((data) => setStatements(data));
  }, []);

  const selectStatement = () => {
    var randomStatement = Math.floor(Math.random() * statements.length);
    setRandomStatement(statements[randomStatement]);
  };

  const compare = (myanswer) => {
    if (myanswer === randomStatement.answer) {
      setAnswer("Correct!");
      setScore((score) => score + 5);
    } else {
      setAnswer("Incorrect");
    }
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
    compare(e.target.value);
  };

  return (
    <div className="Answers">
      <header className="Answers-header">
        <Button className="Button" onClick={selectStatement}>
          Shuffle Trivia Questions
        </Button>
      </header>
      <div className="Answer">
        {randomStatement && <h2>{randomStatement.statement}</h2>}
        <h3 className="Titles">Guess:</h3>
        <form className="Form">
          <Input
            className="True"
            name="bool"
            type="button"
            value={true}
            onClick={handleChange}
          />
          <Input
            className="False"
            name="bool"
            type="button"
            value={false}
            onClick={handleChange}
          />
        </form>
        {answer && <h2>{answer}</h2>}
        <h3 className="Titles">Score:</h3>
        <span>
          <h2>{score}</h2>
        </span>
      </div>
    </div>
  );
}

export default SubmitAnswers;
