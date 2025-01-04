import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import NavBar from "../NavBar";
import About from "../About";
import Gallery from "../Gallery";
import Contact from "../Contact";
import UseEffect from "../UseEffect";
import UseMemo from "../UseMemo";
import UseRef from "../UseRef";
import UseContext from "../UseContext";

const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/about"
          element={
            <About
              college="Kongu Engineering"
              clg1="Kongu Arts"
              clg2="Naturopathy"
            />
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-ref" element={<UseRef />}></Route>
        <Route path="/use-context" element={<UseContext />} />
        <Route path="/use-memo" element={<UseMemo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;