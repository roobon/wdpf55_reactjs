
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Booking from './components/Booking';


function App() {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <Carousel/>
    <Booking/>
     
    </>
  );
}

export default App;


 {/* <Router>
        <TopBar/>
        <Header/>
        <Routes>
          <Route path='' element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router> */}
