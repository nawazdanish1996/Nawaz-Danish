import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar"
import ScrollToTop from "./component/ScrollToTop";
import Footer from "./component/Footer"
import Home  from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  )
}

export default App
