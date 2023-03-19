import './App.css';
import About from './component/about/About';
import Comment from './component/comment/Comment';
import Contact from './component/contact/Contact';
import Home from './component/home/Home';
import MenuBar from './component/menuBar/MenuBar';
import Project from './component/project/Project';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <MenuBar />
                <Home />
                <About />
                <Project />
                <Comment />
                <Contact />
            </div>
        </QueryClientProvider>
    );
}

export default App;
