import "./App.css";
import Area from "./Pages/Area of Triangle";
import Hypotenuse from "./Pages/Hypotenuse";
import IsTriangle from "./Pages/Is Triangle";
import Quiz from "./Pages/Quiz";
//import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Area />} />

          <Route path="/Is Triangle" element={<IsTriangle />} />

          <Route path="/Hypotenuse" element={<Hypotenuse />} />

          <Route path="/Quiz" element={<Quiz />} />

          <Route path="*" element={<h1>Error page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
