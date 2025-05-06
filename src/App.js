import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./CRUD/Home";
import Read from "./CRUD/Read";
import Update from "./CRUD/Update";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
