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
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/project' element={<Project/>} />
            <Route exact path='/blogs' element={<Blogs/>} />

          </Routes>
          <Footer/>
    </>
  );
}

export default App;
