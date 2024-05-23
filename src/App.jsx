import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import VideoPage from "./pages/VideoPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/video/:id" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
