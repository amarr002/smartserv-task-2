import { useState } from "react";
import "./App.css";
import Home from "./Components/Home.jsx";
import ShowList from "./Components/ShowList.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show_list" element={<ShowList />} />
      </Routes>
    </>
  );
}

export default App;
