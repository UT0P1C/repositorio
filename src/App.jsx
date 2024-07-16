// src/App.jsx
import{ useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

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
