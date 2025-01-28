import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Location from "./pages/Location";

function App() {
  return (
    <Router> {/* Move the Router to wrap the entire App */}
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
