import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import About from './About';

export default function MyApp() {
    return (
<BrowserRouter>
    <Routes>
          <Route path='/' element={<Layout/>}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
          </Route>
    </Routes>
</BrowserRouter>
    );
}  