import { Routes, Route, Link } from "react-router-dom";
import { Red } from "./components/Red.jsx";
import { Blue } from "./components/Blue.jsx";
import { Home } from "./components/Home.jsx";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">
          <h1>Home</h1>
        </Link>

        <Link to="/blue">
          <h1>Blue</h1>
        </Link>

        <Link to="/red">
          <h1>Red</h1>
        </Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/red" element={<Red />} />
          <Route path="/blue" element={<Blue />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
