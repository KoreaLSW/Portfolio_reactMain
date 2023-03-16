import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Home from './component/home/Home';
import MenuBar from './component/menuBar/MenuBar';
import Project from './component/project/Project';

function App() {
    return (
        <div>
            <MenuBar />
            <Home />
            <About />
            <Project />
            <Contact />
        </div>
    );
}

export default App;
