import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/menu" exact Component={Menu} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
