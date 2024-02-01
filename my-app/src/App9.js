import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        
        <Navbar />
      </BrowserRouter>
    </div>
  );
};
export default App;
