import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Nav from './Nav';

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;