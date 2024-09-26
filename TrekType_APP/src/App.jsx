import "./App.scss";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import WarpBackground from "./components/WarpBackground/WarpBackground";
import Header from "./components/Header/Header";
import MBTIPage from "./pages/MBTIPage/MBTIPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import ResultPage from "./pages/ResultPage/ResultPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
function App() {
  return (
    <>
      <WarpBackground />
      <div className="content-wrapper">
        <Router>
          <CustomCursor />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mbti/:id" element={<MBTIPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="*" element={<NotFoundPage />} />{" "}
            {/* Catch-all for 404 */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
