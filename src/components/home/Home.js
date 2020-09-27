import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <p className="Title">Welcome to Fast Facts!</p>
      <Button className="ButtonLink" component={Link} to={"/episode"}>
        Create your own game!
      </Button>
    </div>
  );
}

export default Home;
