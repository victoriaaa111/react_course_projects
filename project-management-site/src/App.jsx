import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import DashBoard from "./components/DashBoard.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/dashboard" element={<DashBoard/>} />
        </Routes>
    </Router>
  )
}

export default App
