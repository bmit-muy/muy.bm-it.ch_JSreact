import './App.css';
import Home from './pages/home';
import About_me from './pages/about_me';
import Know_how from './pages/know_how';
import Projects from './pages/projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about_me' element={<About_me />} />
          <Route path='/know_how' element={<Know_how />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
