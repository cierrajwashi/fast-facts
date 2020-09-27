import React, { useState } from "react";
import "./Episode.css";
import { Input, Button } from "@material-ui/core";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Episode() {
  const [episode, setEpisode] = useState({
    statement: "",
    answer: "",
  });

  const handleChange = (e) => {
    setEpisode({ ...episode, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/statement", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        statement: episode.statement,
        answer: episode.answer,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Home">
      <header className="Episode-header">
        <h3>Add Questions to Your Game:</h3>
        <form className="AnswerForm" onSubmit={handleSubmit}>
          <Input
            className="Question"
            type="text"
            placeholder="statement"
            onChange={handleChange}
            name="statement"
          />
          <Input
            className="Question"
            type="text"
            placeholder="answer (true/false)"
            onChange={handleChange}
            name="answer"
          />
          <Button className="SubmitButton" onClick={handleSubmit}>
            Submit
          </Button>
        </form>

        <Button className="ButtonLink" component={Link} to={"/game"}>
          Start Game
        </Button>
      </header>
    </div>
  );
}

export default Episode;
