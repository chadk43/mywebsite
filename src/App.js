import "./App.css";
import MainHeader from "./Components/Navbar/MainHeader";
import React, { useState } from "react";


function App() {
  const [about] = React.useState(true);
  const [projects] = React.useState(false);
  const [contact] = React.useState(false);
 //want a bubble on the left that changes name based on render.
  return (
    <div>
      <MainHeader></MainHeader>
    </div>
  );
}

export default App;
