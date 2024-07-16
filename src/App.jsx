// src/App.jsx
import { useState } from "react";
import "./App.css";
import AboutEn from "./Components/About/AboutEn.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";

function App() {
  const [activeComponent, setActiveComponent] = useState(<AboutEn />);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="app-container">
      <NavBar onComponentChange={handleComponentChange} />
      {activeComponent}
      <footer>made by Vinicius Gomes</footer>
    </div>
  );
}

export default App;
