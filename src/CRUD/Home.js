import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let URL = "https://6819f1cc1ac11556350720ac.mockapi.io/credentials";

  let navigate = useNavigate();
  const sendDatatoapi = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios
      .post(URL, {
        uname: username,
        pswd: password,
      })
      .then((srujan) => {
        alert("Successfully created");
        navigate("/read");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <h1 className="display-1">Welcome to home page</h1>

      <div className="container">
        <form className="w-50 mx-auto" onSubmit={sendDatatoapi}>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="btn btn-primary my-lg-2 mx-auto d-flex"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
