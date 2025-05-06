import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  let URL = "https://6819f1cc1ac11556350720ac.mockapi.io/credentials";
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setEmp(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const Deleterecord = (id) => {
    console.log(id);
    if (window.confirm("r u sure u want delete")) {
      axios
        .delete(`https://6819f1cc1ac11556350720ac.mockapi.io/credentials/${id}`)
        .then((res) => {
          alert("Deleted Successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    }
  };

  const UpdateRecord = (id, username, password) => {
    console.log(id, username, password);
    localStorage.setItem("id", id);
    localStorage.setItem("uname", username);
    localStorage.setItem("pswd", password);
  };
  return (
    <>
      <h1>welcome to the read page</h1>

      <div className="container">
        <table className="table table-bordered bg-warning">
          <tr>
            <th>ID</th>
            <th>USERNAME</th>
            <th>PASSWORD</th>
            <th>OPERATION</th>
          </tr>
          {emp.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.uname}</td>
                  <td>{item.pswd}</td>
                  <td>
                    <button
                      className="btn bg-danger"
                      onClick={() => Deleterecord(item.id)}
                    >
                      Delete
                    </button>
                    <Link to="/update">
                      <button
                        className="btn bg-success"
                        onClick={() =>
                          UpdateRecord(item.id, item.uname, item.pswd)
                        }
                      >
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Read;
