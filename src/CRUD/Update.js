import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setUsername(localStorage.getItem("uname"));
    setPassword(localStorage.getItem("pswd"));
  }, []);

  const UpdateRecord = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios
      .put(`https://6819f1cc1ac11556350720ac.mockapi.io/credentials/${id}`, {
        uname: username,
        pswd: password,
      })
      .then((res) => {
        alert("Updated Successfully");
        navigate("/read");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div className="container">
        <form className="w-50 mx-auto" onSubmit={UpdateRecord}>
          <label htmlFor="">ID</label>
          <input
            type="text"
            className="form-control"
            value={id}
            disabled
            readOnly
          />

          <label htmlFor="">UserName</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Password</label>
          <input
            type="text"
            className="form-control"
            value={password}
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

export default Update;
