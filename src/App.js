import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import About from "./Component/Pages/About/About";
import ContactUs from "./Component/Pages/ContactUs/ContactUs";
import Reviews from "./Component/Pages/Reviews/Reviews";
import Header from "./Component/Shear/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
