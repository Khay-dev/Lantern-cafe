import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
