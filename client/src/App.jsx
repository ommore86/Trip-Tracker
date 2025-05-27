import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TripsPage from "./pages/TripsPage";
import HomePage from "./pages/HomePage"; // assuming it's there

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trips" element={<TripsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
