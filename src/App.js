import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import './App.css';
import Blogs from './component/Blogs';
import Footer from './component/Footer';
import Hearder from './component/Hearder';
import Home from './component/Home';
import Project from './component/Project';
import './component/style.css'

function App() {
  return (
    <>
        <Hearder />

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/project' element={<Project/>} />
            <Route path='/blogs' element={<Blogs/>} />

          </Routes>
          <Footer/>
    </>
  );
}

export default App;
