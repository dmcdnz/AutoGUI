import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Settings from './components/Settings';
import Plugins from './components/Plugins';
import Projects from './components/Projects';
import Updates from './components/Updates';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/plugins">Plugins</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/updates">Updates</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/plugins" element={<Plugins />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/updates" element={<Updates />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
