import "./App.scss";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Header from "./components/Header/Header";
import MBTIPage from "./pages/MBTIPage/MBTIPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import ResultPage from "./pages/ResultPage/ResultPage";
function App() {
  return (
    <>
      <Router>
        <CustomCursor />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mbti/:id" element={<MBTIPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
