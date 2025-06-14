import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import MobileMenu from './components/MobileMenu';
import PlanetList from "./components/PlanetList";
import PlanetDetails from "./components/PlanetDetails";
import './App.css';

function App() {

    return (
        <Router basename='/planet-facts-bilingual'>
            <Navbar />
            <MobileMenu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/planets" element={<PlanetList />} />
                <Route path="/planet/:nameKey" element={<PlanetDetails />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;