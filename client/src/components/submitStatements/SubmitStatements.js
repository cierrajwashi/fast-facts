import React, { useEffect, useState } from "react";
import "./SubmitStatements.css";

function SubmitStatements() {
  const [statements, setStatements] = useState([]);
  const [randomStatement, setRandomStatement] = useState({});
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/statements")
      .then((res) => res.json())
      .then((data) => setStatements(data));
  }, []);

  const selectStatement = () => {
    var randomStatement = Math.floor(Math.random() * statements.length);
    console.log(statements[randomStatement]);
    setRandomStatement(statements[randomStatement]);
  };

  const compare = (myanswer) => {
    console.log(randomStatement.answer, "random answer");
    console.log(myanswer, "answer");
    if (myanswer === randomStatement.answer) {
      setAnswer("correct!");
    } else {
      setAnswer("incorrect");
    }
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
    compare(e.target.value);
  };

  return (
    <div className="Home">
      <header className="statement-header">
        <button onClick={selectStatement}>select random question</button>
        <h3>Submit a statement</h3>
        {randomStatement && <p>{randomStatement.statement}</p>}
        <form>
          <input
            name="bool"
            type="button"
            value={true}
            onClick={handleChange}
          />
          <input
            name="bool"
            type="button"
            value={false}
            onClick={handleChange}
          />
        </form>
        <h3>Answer</h3>
        {answer && <h2>{answer}</h2>}
      </header>
    </div>
  );
}

export default SubmitStatements;
