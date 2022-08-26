import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import PopularProducts from "./components/PopularProducts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Products from "./containers/Products";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={ <PopularProducts/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
