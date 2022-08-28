import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Typing from "./routes/Typing";
import Result from "./routes/Result";
import "./style.css";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Typing/>}></Route>
        <Route path="result" element={<Result/>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App

  
