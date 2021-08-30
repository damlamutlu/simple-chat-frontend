import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./Landing.css";

const Landing = (props) => {
  const [username, setUsername] = useState("");
  const history = useHistory();

  const clickedHandler = () => {
    axios
      .get("http://localhost:8080/user/username/" + username)
      .then((response) => {
        if (response.data === "") {
          axios
            .post("http://localhost:8080/user/saveUser", {
              username: username,
            })
            .then((response) => {
              props.onPassUsername(response.data);
              history.push("/message");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          props.onPassUsername(response.data);
          history.push("/message");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputHandler = (event) => {
    setUsername(event.currentTarget.value);
  };

  return (
    <div className="landing-page">
      <div>
        <input className = "landing-page_input" type="text" placeholder="username" onChange={inputHandler} />
      </div>
      <div>
        <button className="button" onClick={clickedHandler}>
          <span
            className="fa fa-arrow-circle-right fa-2x"
            ></span>
        </button>
      </div>
    </div>
  );
}
export default Landing;
