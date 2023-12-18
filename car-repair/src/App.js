import About from "./components/About";
import Carousel from "./components/Carousel";
import Fact from "./components/Fact";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import ServiceEplore from "./components/ServiceEplore";
import Topbar from "./components/Topbar";




function App() {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Carousel/>
      <Service/>
      <About/>
      <Fact/>
      <ServiceEplore/>
    </>
  );
}

export default App;
