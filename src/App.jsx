import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Designs from "./pages/Designs";
import DesignDetails from "./pages/DesignDetails";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Gallery />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/designs" element={<Designs />} />
        <Route path="/designs/:id" element={<DesignDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
