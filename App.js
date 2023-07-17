import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Settings from './components/Settings';
import Plugins from './components/Plugins';
import Projects from './components/Projects';
import Updates from './components/Updates';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/plugins" component={Plugins} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/updates" component={Updates} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
