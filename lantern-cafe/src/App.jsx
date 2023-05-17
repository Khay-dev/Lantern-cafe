import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
