import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
