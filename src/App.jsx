import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Todo from './pages/Todo';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <NavLink to="/">Home |</NavLink>

          <NavLink to="/about"> About |</NavLink>

          <NavLink to="/projects"> Projects |</NavLink>

          <NavLink to="/todo"> Todo |</NavLink>

          <NavLink to="/contact"> Contact </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/todo" element={<Todo />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;