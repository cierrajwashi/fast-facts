import React, { useState } from "react";
import "./Episode.css";
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
    console.log(episode);
  };

  return (
    <div className="Home">
      <header className="episode">
        <p>Welcome to Fast Facts!</p>
        <h3>Create your own game!</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter statement"
            onChange={handleChange}
            name="statement"
          />
          <input
            type="text"
            placeholder="enter answer"
            onChange={handleChange}
            name="answer"
          />
          <button>Submit</button>
        </form>

        <Link to="/game">Proceed to game</Link>
      </header>
    </div>
  );
}

export default Episode;
