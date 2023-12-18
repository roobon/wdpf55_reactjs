import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import AdminHome from './pages/AdminHome';
import AllProducts from './pages/AllProducts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<AdminHome/>} />
            <Route path='/products' element={<AllProducts/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
