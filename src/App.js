import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./component/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Routes path="/*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
