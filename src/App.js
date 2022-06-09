import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App"> 
      <Router>
          <Header />
          <Routes>
            <Route path='/dchiangportfolio' element={<Home />} />
            <Route path='/dchiangportfolio/projects' element={<Projects />} />
            <Route path='/dchiangportfolio/experience' element={<Experience />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
