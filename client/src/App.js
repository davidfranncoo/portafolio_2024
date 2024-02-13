import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./component/Home/home";
import "./App.scss";

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;

