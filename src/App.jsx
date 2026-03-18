import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
         <Route path="/" element={<Home name="santanu gope"/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
